import React from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';
import { FeedbackTypes } from '../Widget';

import { styles } from './styles';

export function Options({ onPress }: { onPress: (feedbackTypes: FeedbackTypes) => void }) {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Deixe seu feedback</Text>

            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, { title, image }]) => (
                    <Option
                        key={key}
                        image={image}
                        title={title}
                        onPress={() => onPress(key as FeedbackTypes)}
                    />
                ))}
            </View>

        </View>
    );
}