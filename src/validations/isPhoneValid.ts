export function isPhoneValid(phone: string): boolean {
    const phoneNumber = Number(phone);
    return phoneNumber >= 1000000000 && phoneNumber <= 999999999999;
}
