import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { DishTicker } from "@/components/home/DishTicker";
import { SignatureScroller } from "@/components/home/SignatureScroller";
import { MenuBoard } from "@/components/home/MenuBoard";
import { Spotlight } from "@/components/home/Spotlight";
import { CTABand } from "@/components/site/CTABand";

export default async function HomePage() {
  const t = await getTranslations("Home");

  return (
    <>
      <Hero />
      <DishTicker label={t("ticker")} />
      <SignatureScroller />
      <MenuBoard />
      <Spotlight />
      <CTABand />
    </>
  );
}
