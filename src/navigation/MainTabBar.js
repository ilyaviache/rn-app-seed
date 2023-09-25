import React from 'react'
import styled, { useTheme } from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

import { 
  SvgHome,
  SvgBreathing,
  SvgSleep,
  SvgMeditation,
  TouchableOpacity,
  TouchableHighlight
} from 'src/elements'

const TapBarIcon = (label, isFocused) => {
  const theme = useTheme()
  const color = isFocused ? theme.colors.icons1000 : theme.colors.icons400

  const Icons = {
    'Home': <SvgHome color={color} />,
    'Breathing': <SvgBreathing color={color} />,
    'Sleep': <SvgSleep color={color} />,
    'Meditation': <SvgMeditation color={color} />,
  }

  return Icons[label] || <SvgHome color={color} />
}

const MainTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Wrapper
      colors={['#000000', '#000000', '#000000', '#00000040']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <IconContainer>
              { TapBarIcon(label, isFocused) }
            </IconContainer>
          </TouchableOpacity>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  height: 75px;
  /* border-radius: 40px; */
`

const IconContainer = styled.View`
  position: relative;
  top: 18px;
`

export default MainTabBar
