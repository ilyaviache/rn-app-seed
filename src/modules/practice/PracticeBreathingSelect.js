import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Picker } from '@react-native-picker/picker'
import { Row, Spacer } from 'native-base'

const PracticeBreathingSelect = ({...props}) => {
  const selectedItem = 2
	const itemList = ['0', '1', '2', '3', '5']
  return (
    <Row
      justifyContent='center'
      alignItems='center'
      height='110px'
      width='100%'
      overflow='hidden'
      {...props}
    >
      <Picker style={{width: 60, height: 220, backgroundColor: 'transparent', color: 'red'}}
        selectedValue={selectedItem}
        itemStyle={{color:"white", fontSize: 24, fontFamily: 'FuturaPT-Light'}}
        onValueChange={(index) => {}}>
          {itemList.map((value, i) => (
            <Picker.Item label={value} value={i} key={"money"+value}/>
          ))}
      </Picker>
      <Picker style={{width: 60, height: 220, backgroundColor: 'transparent', color: 'red'}}
        selectedValue={selectedItem}
        itemStyle={{color:"white", fontSize: 24, fontFamily: 'FuturaPT-Light'}}
        onValueChange={(index) => {}}>
          {itemList.map((value, i) => (
            <Picker.Item label={value} value={i} key={"money"+value}/>
          ))}
      </Picker>
      <Picker style={{width: 60, height: 220, backgroundColor: 'transparent', color: 'red'}}
        selectedValue={selectedItem}
        itemStyle={{color:"white", fontSize: 24, fontFamily: 'FuturaPT-Light'}}
        onValueChange={(index) => {}}>
          {itemList.map((value, i) => (
            <Picker.Item label={value} value={i} key={"money"+value}/>
          ))}
      </Picker>
      <Picker style={{width: 60, height: 220, backgroundColor: 'transparent', color: 'red'}}
        selectedValue={selectedItem}
        itemStyle={{color:"white", fontSize: 24, fontFamily: 'FuturaPT-Light'}}
        onValueChange={(index) => {}}>
          {itemList.map((value, i) => (
            <Picker.Item label={value} value={i} key={"money"+value}/>
          ))}
      </Picker>
      <Spacer />
      <Picker style={{width: 60, height: 220, backgroundColor: 'transparent', color: 'red'}}
        selectedValue={selectedItem}
        itemStyle={{color:"white", fontSize: 24, fontFamily: 'FuturaPT-Light'}}
        onValueChange={(index) => {}}>
          {itemList.map((value, i) => (
            <Picker.Item label={value} value={i} key={"money"+value}/>
          ))}
      </Picker>
    </Row>
  )
}

PracticeBreathingSelect.propTypes = {

}

export default memo(PracticeBreathingSelect)
