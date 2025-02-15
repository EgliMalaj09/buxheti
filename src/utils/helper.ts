export type valueof<T> = T[keyof T] & (string | number);


export const clean = (obj: Record<any, any>): Record<any, any> => {
    for (const propName in obj) {
      if (!obj[propName]) {
        delete obj[propName];
      }
    }
    return obj;
  };
