import { Screens } from "@/constants/screens";
import { NavigationContainerRefContext, NavigationContext } from "@react-navigation/native";
import React, { useContext } from "react";

export type valueof<T> = T[keyof T] & (string | number);


export const clean = (obj: Record<any, any>): Record<any, any> => {
  for (const propName in obj) {
    if (!obj[propName]) {
      delete obj[propName];
    }
  }
  return obj;
};

export const isNavigationAvailable = () => {
  const root = useContext(NavigationContainerRefContext);
  const navigation = useContext(NavigationContext);

  return navigation && root;
}

export const resetScreens = (navigation: any) => {
  navigation.reset({
    index: 0,
    routes: [{ name: Screens.MAIN_TAB }]
  })
}

export const getErrorMessage = (errorMessage: string, formik: any, name: string) => {
  if (typeof errorMessage === 'object') {
    if (Array.isArray(errorMessage)) {
      const errorKeys = Object.keys(formik?.initialValues?.[name]?.[0]);
      const errMessageKeys = Object.keys(errorMessage?.[0]);
      const errKey = errorKeys.find(key => errMessageKeys.includes(key));
      return errorMessage?.[0]?.[errKey as any] || '';
    } else {
      const firstErrorKey = Object.keys(formik?.initialValues?.[name])?.[0];
      return errorMessage[firstErrorKey] || '';
    }
  } else {
    return errorMessage;
  }
}

export const addPropsToReactElement = (element: any, props: any): any => {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }
  return element;
};


export const addPropsToChildren = (children: any, props: any): any => {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, typeof props === 'function' ? props(children) : props);
  }
  return children.map(childElement =>
    addPropsToReactElement(childElement, typeof props === 'function' ? props(childElement) : props),
  );
};

export const hexToRgbA = (hex: string, alpha: number): string => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }
  throw new Error('Bad Hex');
};