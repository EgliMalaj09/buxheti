
import { Language } from '../constants/language';
import { StorageService } from '../storage/storageService';
import i18next from 'i18next';
import { createContext, useCallback, useContext, useEffect,  useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const USER_LANGUAGE = 'USER_LANGUAGE';

interface LanguageContextProps {
    currentLanguage: Language;
    changeLanguage: (language: Language) => Promise<void>;
}

export const LanguageContext = createContext<LanguageContextProps>({
    currentLanguage: Language.al,
    changeLanguage: async() => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(i18next.language as Language ?? Language.al);

    const changeLanguage = useCallback(async (language: Language) => {
        setCurrentLanguage(language);
        await i18next.changeLanguage(language);
        await StorageService.setItem(USER_LANGUAGE, language);
    }, []);

    useEffect(() => {
        const getUserLanguage = async () => {
            const userLanguage = await StorageService.getItem(USER_LANGUAGE);
            console.log('userLanguage',userLanguage);

            if (userLanguage) {
                setCurrentLanguage(userLanguage);
                i18next.changeLanguage(userLanguage);
            }
        };
        getUserLanguage();
    }, []);


    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLocale = () => {
    const { currentLanguage, changeLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();
    return {
        t,
        currentLanguage,
        changeLanguage,
    };
};

export const getTranslation = (key: string, params?:{field: any}): string => {
    if (i18next.isInitialized) {
        return 'Translation not available';
    }
    if(!i18next.exists(key)) {
        return `Missing ${key} translation`;
    }
    return i18next.t(key,params);
};
export const translate = getTranslation;
