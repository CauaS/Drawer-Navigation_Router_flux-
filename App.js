import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  YellowBox
} from 'react-native';

import App from './src/Drawer/DrawerOption.js';
import Routers from './src/Router.js';

class Home extends Component {  
  render() {    
    return(
      <View style={styles.container}>
        <Routers />  
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
