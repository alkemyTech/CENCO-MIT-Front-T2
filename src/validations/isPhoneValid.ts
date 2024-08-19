export function isPhoneValid(phone: string): boolean {
    const phoneNumber = Number(phone);
    if (isNaN(phoneNumber)) return false;
    return phoneNumber >= 1000000000 && phoneNumber <= 999999999999;
}
