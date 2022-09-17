import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Games } from '../screens/Games';
import { Home } from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator>
        <Screen 
            name='home'
            component={Home}
            options={{ headerShown:false}}
        />

        <Screen 
            name='game'
            component={Games}
            options={{ headerShown:false}}
        />
    </Navigator>
  )  
}