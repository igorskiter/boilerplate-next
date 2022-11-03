import Head from 'next/head';
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles';
import Cards from '../components/cards';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import handleLocaleChange from '../utils/localeChange';

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
      <select onChange={(event)=>handleLocaleChange(event, router)} value={router.locale}>
        <option value="en">English</option>
        <option value="ptBR">Portugues</option>
      </select>
        <Title>
          {t("welcome")} <a href="https://nextjs.org">Next.js! </a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
