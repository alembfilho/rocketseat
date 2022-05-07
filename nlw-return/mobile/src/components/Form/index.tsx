import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { FeedbackTypes } from '../Widget';

import { styles } from './styles';

interface Props {
    feedbackType: FeedbackTypes,
    setFeedbackType: (feedbackType: FeedbackTypes | null) => void
    screenshot: string | null,
    setScreenshot: (screenshot: string | null) => void
}

export function Form({ feedbackType, setFeedbackType, screenshot, setScreenshot }: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => setFeedbackType(null)}
                >
                    <ArrowLeft
                        size={24}
                        weight='bold'
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image
                        style={styles.image}
                        source={feedbackTypeInfo.image}
                    />
                    <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.textInput}
                placeholder={feedbackTypeInfo.placeholder}
                placeholderTextColor={theme.colors.text_secondary}
            />

            <View style={styles.buttons}>
                <ScreenshotButton
                    screenshot={screenshot}
                    onTakeShot={() => setScreenshot('a')}
                    onRemoveShot={() => setScreenshot(null)}
                />

                <Button isLoading={false} />
            </View>

        </View>

    );
}