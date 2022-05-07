import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png'

import { styles } from './styles';

interface Props {
    setFeedbackSent: (feedbackSent: boolean) => void
}

export function Success({ setFeedbackSent }: Props) {
    return (
        <View style={styles.container}>
            <Image source={successImg} />

            <Text
                style={styles.text}
            >Agradecemos o feedback!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setFeedbackSent(false)}
            >
                <Text
                    style={styles.buttonText}
                >Quero enviar outro</Text>
            </TouchableOpacity>

        </View>
    );
}