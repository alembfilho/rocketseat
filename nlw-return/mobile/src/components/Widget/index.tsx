import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';
import { Copyright } from '../Copyright';

export type FeedbackTypes = keyof typeof feedbackTypes

function Widget() {

    const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)
    const [feedbackSent, setfeedbackSent] = useState(false)
    const bottomSheetRef = useRef<BottomSheet>(null)

    function handleOpen() {
        bottomSheetRef.current?.expand()
    }


    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={handleOpen}
            >
                <ChatTeardropDots
                    size={24}
                    weight='bold'
                    color={theme.colors.text_on_brand_color}
                />

            </TouchableOpacity>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {feedbackSent ?
                    <Success setFeedbackSent={setfeedbackSent} /> :
                    feedbackType ?
                        <Form
                            feedbackType={feedbackType}
                            setFeedbackType={setFeedbackType}
                            setFeedbackSent={setfeedbackSent}
                        /> :
                        <Options onPress={setFeedbackType} />
                }

                <Copyright />

            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget)