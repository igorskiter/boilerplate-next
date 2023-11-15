/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-unresolved
import 'server-only';

const dictionaries = {
  br: () => import('../../dictionaries/br.json').then((module) => module.default),
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
