import React from 'react';
import {Text} from 'react-native';
import { GameController } from 'phosphor-react-native';
import { TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChannel: Boolean;
    weekDay: string[];
    yearsPlayer: number;
  }
  
  interface Props {
    data: DuoCardProps;
    onConnect: () => void;
  }

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
        <DuoInfo 
            label='Nome'
            value={data.name}
        />

        <DuoInfo 
            label='Tempo de Jogo'
            value={`${data.yearsPlayer} anos`}
        />

        <DuoInfo 
            label='Disponibilidade'
            value={`${data.weekDay.length} dias \u2022 `}
        />

        <DuoInfo 
            label='Chamada de áudio'
            value={data.useVoiceChannel ? 'Sim' : 'Não'}
            colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={onConnect}
        >
            <GameController 
                size={20}
                color={THEME.COLORS.TEXT}
            />

            <Text style={styles.buttonText}>
                Conectar
            </Text>

        </TouchableOpacity>
    </View>
  );
}