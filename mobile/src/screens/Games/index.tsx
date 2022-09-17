import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';

import {Entypo} from '@expo/vector-icons'
import logo from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { TouchableOpacity, View, Image } from 'react-native';
import { THEME } from '../../theme';

export function Games() {
  const routes = useRoute();
  const games = routes.params as GameParams
  return (
   <Background> 
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <Entypo 
                name="chevron-thin-left"
                size={20}
                color={THEME.COLORS.CAPTION_300}
            />
        </TouchableOpacity>
        
        <Image 
            source={logo}
            style={styles.image}
        />

        <View  style={styles.right}/>
      </View>

      
    </SafeAreaView>
   </Background> 
  );
}