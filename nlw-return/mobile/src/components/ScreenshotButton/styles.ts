import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.surface_secondary,
        borderRadius: 4,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        position: 'relative'
    },
    removeIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    image: {
        width: 40,
        height: 40
    }

});