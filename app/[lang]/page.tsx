// eslint-disable-next-line import/no-unresolved
import { getDictionary } from './dictionaries';

export default async function Page({ params: { lang } }) {
  console.log(lang, 'lang');
  const dict = await getDictionary(lang); // en

  return <h1 className="text-3xl font-bold underline">{dict.welcome}</h1>;
}
