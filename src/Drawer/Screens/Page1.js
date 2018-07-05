import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const first = require('../Image/first.png');
const second = require('../Image/second.png');

class Page1 extends Component {

    static navigationOptions = {
        drawerIcon:(
            <Image source={first}/>
        )
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <Button 
                    title='...'
                    //onPress= {() => { this.props.navigation.openDrawer();}}
                    onPress={() => Actions.Page2()}
                />                
                <Text> This is de fisrt page. </Text>
            </View>
        );
    }
}

export default Page1;