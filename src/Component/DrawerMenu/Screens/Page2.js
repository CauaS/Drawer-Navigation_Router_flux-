import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class Page2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> This is second page. </Text>
            </View>
        );
    }
}

export default Page2;