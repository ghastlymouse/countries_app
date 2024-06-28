export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  translations: {
    [key: string]: {
      official: string;
    };
  };
  flags: {
    svg: string;
  };
}
