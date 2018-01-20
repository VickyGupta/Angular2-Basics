export interface IBUser {
    name: string;
    type ?: string;
    pin ?: number;
    mobile: number;
    mobileCountryCode ?: string;
    email ?: string;
    createdAt ?: string;
    updateAt ?: string;
}