import { roomType } from '@/types';

export interface benefitType {
    status: boolean,
    text: string,
}

export interface cardPricingType extends roomType {
    benefits: benefitType[]
}