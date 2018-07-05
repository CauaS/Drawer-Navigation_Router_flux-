import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Page1 from './Screens/Page1.js';
import Page2 from './Screens/Page2.js';

//1 view da wrap em tudo.
// segunda view  faz wrap no header do drawer
// terceira view recebe os itens do drawer por spread.

//Body to Drawer
const HeadDrawer = props => (    
    <View>
        <View style={{ height: 200, backgroundColor: 'gray'}}>
            <Text> Olá </Text>
        </View>
        <View>
            <DrawerItems {...props} /> 
        </View>
    </View>
)

// Rotas
const App = createDrawerNavigator({
    Home: {
        screen: Page2 // primeira rota
    },
    Second: {
        screen: Page2 // segunda rota
    }
},{
    initialRouteName: 'Home', // Rota inicial do Drawer
    contentComponent: HeadDrawer // seta o content que contem o itens e tudo que tem no Drawer que é citado acima.
})

export default App;
