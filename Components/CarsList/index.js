import React from 'react';
import { View ,Text,FlatList, Dimensions} from 'react-native';
import carStyle from './carStyle';
import CarItem from '../CarItem';
import Cars from './Cars';

const CarList=(props)=>{

    return(
        <View style={carStyle.container}>
           <FlatList 
           data={Cars}
           renderItem={({item})=><CarItem Car={item}/>}
           snapToAlignment={'start'}
           decelerationRate={'normal'}
           snapToInterval={Dimensions.get('window').height}
           showsVerticalScrollIndicator={false}
           />
        </View>
    )
}
export default CarList;