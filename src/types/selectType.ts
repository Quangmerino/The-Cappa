import { ReactNode } from 'react';
export interface Option {
    value: string,
    label: string,
}

export interface SelectType {
    options: Option[],
    icon: ReactNode,
    className?: string,
    position?: string,
    value: string,
    setValue: any,
}