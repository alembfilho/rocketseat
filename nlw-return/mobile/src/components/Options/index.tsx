import React from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

export function Options() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Deixe seu feedback</Text>

            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, { title, image }]) => (
                    <Option
                        key={key}
                        image={image}
                        title={title}
                    />
                ))}
            </View>

            <Copyright />
        </View>
    );
}