import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

const second = require('../Image/second.png');

class Page2 extends Component {
    //Aqui seta a imagem para o item do Drawer
    static navigationOptions = {
        drawerIcon:(
            <Image source={second}/>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> This is second page. </Text>
            </View>
        );
    }
}

export default Page2;