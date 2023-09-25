import React, {useEffect, useRef, useState} from "react";
import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {clamp, snapPoint} from "react-native-redash";
import {scale} from "react-native-size-matters";

const SWITCH_CONTAINER_WIDTH = scale(50);
const SWITCH_CONTAINER_HEIGHT = scale(26);
const CIRCLE_WIDTH = scale(24);
const BORDER = scale(1);
const DEFAULT_MARGIN = scale(10);
const TRACK_CIRCLE_WIDTH = SWITCH_CONTAINER_WIDTH - CIRCLE_WIDTH - BORDER * 2;
const config = {
  overshootClamping: true,
};
const SwitchComponent = ({
  value,
  onChange,
  backgroundColor,
}) => {
  const [isToggled, setIsToggled] = useState(value);
  const translateX = useSharedValue(0);
  useEffect(() => {
    onChange(isToggled);
  }, [isToggled]);
  const onPress = ({
    nativeEvent: {state},
  }) => {
    if (state !== State.ACTIVE) return;
    setIsToggled((prevstate) => !prevstate);
    translateX.value = withSpring(isToggled ? 0 : TRACK_CIRCLE_WIDTH, config);
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
      width: interpolate(
        translateX.value,
        [0, TRACK_CIRCLE_WIDTH / 3, TRACK_CIRCLE_WIDTH],
        [CIRCLE_WIDTH, (CIRCLE_WIDTH / 2) * 2.5, CIRCLE_WIDTH]
      ),
    };
  });
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, TRACK_CIRCLE_WIDTH],
        ["white", backgroundColor]
      ),
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_e, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({translationX}, ctx) => {
      translateX.value = clamp(translationX + ctx.x, 0, TRACK_CIRCLE_WIDTH);
    },
    onEnd: ({velocityX}) => {
      const selectedSnapPoint = snapPoint(translateX.value, velocityX, [
        0,
        TRACK_CIRCLE_WIDTH,
      ]);
      translateX.value = withSpring(selectedSnapPoint, config);
      runOnJS(setIsToggled)(selectedSnapPoint !== 0);
    },
  });

  const panRef = useRef(null);

  return (
    <TapGestureHandler waitFor={panRef} onHandlerStateChange={onPress}>
      <Animated.View style={[animatedContainerStyle, styles.switchContainer]}>
        <PanGestureHandler ref={panRef} onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[animatedStyle, styles.circle, {borderColor: "black"}]}
          />
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};
export default SwitchComponent;

const styles = StyleSheet.create({
  switchContainer: {
    width: SWITCH_CONTAINER_WIDTH,
    height: SWITCH_CONTAINER_HEIGHT,
    borderRadius: 999,
    flexDirection: "row",
  },
  circle: {
    alignSelf: "center",
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: 999,
    borderWidth: BORDER,
    elevation: 18,
    backgroundColor: "white",
  },
});