import { ReactNode } from 'react';
export interface subMenu {
    name?: string | ReactNode,
    path?: string,
}

export interface Navigation {
    name: string | ReactNode,
    path: string,
    subMenu?: subMenu[] | undefined,
}