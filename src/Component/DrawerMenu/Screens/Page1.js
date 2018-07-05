import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Page1 extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>                              
                <Text> This is de fisrt page. </Text>
            </View>
        );
    }
}

export default Page1;