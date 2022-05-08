import { ArrowLeft } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { FeedbackTypes } from '../Widget';

import { styles } from './styles';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';

interface Props {
    feedbackType: FeedbackTypes,
    setFeedbackType: (feedbackType: FeedbackTypes | null) => void
    setFeedbackSent: (isSent: boolean) => void
}

export function Form({ feedbackType, setFeedbackType, setFeedbackSent }: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [isLoading, setLoading] = useState(false)
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState("")

    function handleScreenshot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8
        }).then(uri => setScreenshot(uri))
    }

    async function sendFeedback() {
        if (isLoading) return
        setLoading(true)

        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })

        try {
            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: screenshot && `data:image/png;base64,${screenshotBase64}`,
                comment
            })

            setFeedbackSent(true)
            setFeedbackType(null)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

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
                onChangeText={setComment}
                textAlignVertical={'top'}
            />

            <View style={styles.buttons}>
                <ScreenshotButton
                    screenshot={screenshot}
                    onTakeShot={handleScreenshot}
                    onRemoveShot={() => setScreenshot(null)}
                />

                <Button
                    isLoading={isLoading}
                    onPress={sendFeedback}
                />
            </View>

        </View>

    );
}