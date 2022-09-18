import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';

import {Entypo} from '@expo/vector-icons'
import logo from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { TouchableOpacity, View, Image, FlatList } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard,DuoCardProps } from '../../components/DuoCard';


export function Games() {
  const routes = useRoute();
  const games = routes.params as GameParams
  
  const navigator = useNavigation();

  const [duo, setDuo] = useState<DuoCardProps[]>([]);
  
  function handleGoBack(){
    navigator.goBack();
  }

  useEffect( () => {
    fetch(`http://192.168.1.107:3330/games/${games.id}/ads`)
    .then(response => response.json())
    .then(data => setDuo(data)
    )
  }, [])
  
  return (
    
   <Background> 
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <Entypo 
                name="chevron-thin-left"
                size={20}
                color={THEME.COLORS.CAPTION_300}
                onPress={handleGoBack}
            />
        </TouchableOpacity>
        
        <Image 
            source={logo}
            style={styles.image}
        />

        <View  style={styles.right}/>
      </View>

      <Image 
        source={{uri: games.bannerUrl}}
        style={styles.cover}
      />

      <Heading 
        title={games.title}
        subtitle="Conecte-se e comece a jogar!"
      />

      <FlatList 
        keyExtractor={item => item.id}
        data={duo}
        renderItem={ ({item}) => (
          <DuoCard 
            data={duo[0]}
          />
        )}
      />
    </SafeAreaView>
   </Background> 
  );
}