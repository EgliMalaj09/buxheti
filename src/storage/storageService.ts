import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
    setItem: async (key: string, value: string, handleError?:Function) => {
        try {
            
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('There was an error while saving the item: ', error);
            handleError?.(error);
        }
    },
    getItem: async (key: string, handleError?: Function) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('There was an error while retrieving the item: ', error);
            handleError?.(error);
        }
    },
};
