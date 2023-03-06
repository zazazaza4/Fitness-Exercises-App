export interface IFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit;
  mode?: RequestMode;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
}

export enum IBodyParts {
  BACK = "back",
  CARDIO = "cardio",
  CHEST = "chest",
  LOWER_ARMS = "lower arms",
  LOWER_LEGS = "lower legs",
  NECK = "neck",
  SHOULDERS = "shoulders",
  UPPER_ARMS = "upper arms",
  UPPER_LEGS = "upper legs",
  WAIST = "waist",
  ALL = "all",
}

export interface IExercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
