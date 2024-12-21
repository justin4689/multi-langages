import { LangProvider } from "../context/langContext";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = await params;
  return <LangProvider defaultLang={lang}>{children}</LangProvider>;
}
