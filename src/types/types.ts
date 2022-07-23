import { ReactElement } from 'react';

export type IResponse = {
  status: 'error' | 'success',
  data?: string,
  description: string,
};

export type CallArgs = {
  api: string,
  noStatus?: boolean,
  method?: string,
  body?: any,
  type?: 'json' | 'blob',
  token?: string,
  VerifyToken?: string,
  isUnAuthed?: boolean;
  noStringify?: boolean;
  noContentType?: boolean;
};

type ShowPopupKeys = {
  component?: ReactElement | false,
  exitOnBgClick?: boolean,
  action?: Function,
}
export type ShowPopup = {
  [key in keyof ShowPopupKeys]: ShowPopupKeys[key]
};
