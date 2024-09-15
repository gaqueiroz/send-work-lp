/* eslint-disable no-plusplus */
export const unmask = (str: string): string =>
  str && str.replace(/[-)./(+ ]/g, '');

export const mask = (str: string, ...masks: string[]): string => {
  const auxMask =
    masks.find((it) => unmask(it).length >= unmask(str).length) ||
    masks.sort((a, b) => unmask(a).length - unmask(b).length).pop();

  if (!auxMask) return str;

  let auxStr = unmask(str);
  const maskLength = unmask(auxMask).length;
  if (auxStr.length > maskLength) {
    auxStr = str.substring(0, maskLength);
  }
  let maskedStr = '';
  let j = 0;
  for (let i = 0; i < auxStr.length; i++) {
    try {
      while (auxMask[j] && auxMask[j] !== '#') maskedStr += auxMask[j++];
      maskedStr += auxStr[i];
      j++;
    } catch {
      break;
    }
  }
  return maskedStr;
};

export const maskDigits = (value: string, digits: number): string => {
  let maskString = '';

  for (let index = 0; index < digits; index++) {
    maskString = `${maskString}#`;
  }

  return mask(value.replace(/\D/g, ''), maskString);
};

export const maskRg = (rg: string): string =>
  mask(rg.replace(/\D/g, ''), '##.###.###-#');

export const maskDate = (date: string): string =>
  mask(date.replace(/\D/g, ''), '##/##/####');

export const maskPrivateDocument = (document: string): string =>
  mask(document.replace(/\D/g, ''), '###.###.###-##');

export const maskLegalDocument = (document: string): string =>
  mask(document.replace(/\D/g, ''), '##.###.###/####-##');

export const maskDocument = (document: string): string =>
  mask(document.replace(/\D/g, ''), '###.###.###-##', '##.###.###/####-##');

export const maskPostalCode = (postalCode: string): string =>
  mask(postalCode.replace(/\D/g, ''), '##.###-###');

export const maskCellPhone = (phone: string): string =>
  mask(phone.replace(/\D/g, ''), '(##) # ####-####');

export const maskPhoneNumber = (phone: string): string =>
  mask(phone?.replace(/\D/g, ''), '(##) ####-####', '(##) # ####-####') || '';

export const maskVerificationCode = (code: string): string =>
  mask(code, '# # # # # #');

export const maskCardNumber = (cardNumber: string): string =>
  mask(cardNumber.replace(/\D/g, ''), '#### #### #### ####');

export const maskExpirationDate = (date: string): string =>
  mask(date.replace(/\D/g, ''), '##/##');
