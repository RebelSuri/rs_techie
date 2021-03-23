import React from 'react';
import { View,Text,Pressable } from 'react-native';
import Style from './style';

const StyleButton=(props)=>{
    const{type,content,onPress}=props;
    const backgroundColor=type=='primary'?'#171A20CC':'#A9A9A9';
    const textColor=type=='primary'?'#171A20CC':'#FFFFFFA6';
    
    
    return(
        <View style={Style.container}>
            <Pressable style={[Style.btn,{backgroundColor:backgroundColor}]}
             onPress={()=>onPress()}>
            <Text style={[Style.text,{Color:textColor}]}>{content}</Text>
            
            </Pressable>
        </View>
    )
}
export default StyleButton;