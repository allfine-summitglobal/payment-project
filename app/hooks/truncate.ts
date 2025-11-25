/**
 * Memotong teks menjadi panjang maksimal tertentu
 * @param text - Teks yang akan dipotong
 * @param maxLength - Panjang maksimal karakter
 * @param suffix - Suffix yang ditambahkan (default: '...')
 * @returns Teks yang sudah dipotong
 */
export function truncate(
  text: string,
  maxLength: number = 20,
  suffix: string = '...'
): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength - suffix.length).trim() + suffix;
}