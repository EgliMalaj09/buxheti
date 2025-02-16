import { Screens } from "@/constants/screens";
import { NavigationContainerRefContext, NavigationContext } from "@react-navigation/native";
import { useContext } from "react";

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