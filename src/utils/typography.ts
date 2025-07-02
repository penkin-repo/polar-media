import Typograf from 'typograf';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export function typografify(text: string) {
  if (!text) return '';
  return tp.execute(text);
}