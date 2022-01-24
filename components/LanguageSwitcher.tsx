import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (lang: string) => {
    router.push("/", "/", { locale: lang }).then((_) => {});
  };
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4 font-bold"
      onClick={() => changeLanguage(locale === "en" ? "fr" : "en")}
    >
      {locale === "en" ? "Fr" : "En"}
    </button>
  );
}
