import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.brand,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    text: {
        color: theme.colors.text_on_brand_color,
        fontFamily: theme.fonts.medium,
    }
});