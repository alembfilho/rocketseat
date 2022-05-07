import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_primary,
        fontSize: 20,
        marginBottom: 24,
        marginTop: 10
    },
    button: {
        backgroundColor: theme.colors.surface_secondary,
        height: 40,
        justifyContent: 'center',
        borderRadius: 4,
        paddingHorizontal: 24,

    },
    buttonText: {
        fontFamily: theme.fonts.regular,
        color: theme.colors.text_primary,
    }
});