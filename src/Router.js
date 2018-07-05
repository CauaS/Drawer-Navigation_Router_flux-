import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Image } from 'react-native';
//drawer
import Page1 from './Component/DrawerMenu/Screens/Page1.js';
import Page2 from './Component/DrawerMenu/Screens/Page2.js';
import DrawerMenu from './Component/DrawerMenu/DrawerMenu.js';

const Icon = () => {
    return(
        <Image source={ require('./Component/DrawerMenu/Image/first.png')}/>
    );
}

const Routers = () => {
    return(
        <Router>
            <Stack  key="root">

                <Scene key="Page1" component={Page1} />
                <Scene key="Page2" component={Page2} />             

                <Scene
                    initial
                    key="DrawerMenu"
                    drawer
                    contentComponent={DrawerMenu}
                    drawerIcon={Icon}
                    drawerWidth={250}
                    hideNavBar
                >
                    <Scene 
                        key="Page1"
                        component={Page1}
                        title="Está é a página 1"
                        hideNavBar
                    />
                    <Scene 
                        key="Page2"
                        component={Page2}
                        title="Page 2"
                    />
                </Scene>               
            </Stack>
        </Router>
    );
}

export default Routers;