import { validateCPF } from './validateCPF';
import { validateCNPJ } from './validateCNPJ';

export function validateDocument(document: string): boolean {
  const newDocument = document.replace(/[\s.-]*/gim, '');

  if (newDocument.length > 11) {
    return validateCNPJ(newDocument);
  }

  return validateCPF(newDocument);
}
