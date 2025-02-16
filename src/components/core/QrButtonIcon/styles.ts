import { theme } from "@/theme";
import { black } from "@/theme/colors";

export const createStyles = () => ({
    iconContainer: {
        borderRadius: 99,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
    },
    qrContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flex: 1,
    },
    icon: {
        flex: 1,
        backgroundColor: 'transparent',
        shadowColor: black,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 5,
    },
    extraButton: {
        position: 'absolute',
        borderRadius: theme?.spacing?.[12],
        width: theme?.spacing?.[12],
        height: theme?.spacing?.[12],
        justifyContent: 'center',
        alignItems: 'center',
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
    },
});
