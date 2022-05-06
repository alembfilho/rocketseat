import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    options: {
        flexDirection: 'row',
        marginBottom: 48,
    },
    text: {
        fontSize: 20,
        marginBottom: 32,
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_primary
    }
});