import React, { useEffect, useState } from 'react';
import { View , Image, FlatList} from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games';


export function Home() {
  useEffect( () => {
    fetch('http://192.168.1.107:3330/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  const [games, setGames] = useState<GameCardProps[]>([]);
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title='Encontre seu duo'
        subtitle='Selecione o game que deseja jogar'
      />

      <FlatList 
        data={games}
        keyExtractor={ item => item.id}
        renderItem={ ({item}) => (
          <GameCard 
            data={item}
          />
         )}
         horizontal
         showsHorizontalScrollIndicator
         contentContainerStyle={styles.contentList}
      />
     
    </View>
  );
}