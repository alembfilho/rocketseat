import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 12,
        color: theme.colors.text_secondary,
        fontFamily: theme.fonts.medium
    }
});