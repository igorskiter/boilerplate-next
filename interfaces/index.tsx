import { ReactElement } from 'react';

export type ChildrenElement<T = any> = {children: ReactElement<T>} | T;
