import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Prose, LegalHeading } from "@/components/legal/Prose";
import { LegalContact } from "@/components/legal/LegalContact";
import { site, legal } from "@/lib/site";
import { img } from "@/lib/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Imprint");
  return { title: t("meta.title"), description: t("meta.description") };
}

export default async function ImprintPage() {
  const t = await getTranslations("Imprint");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image={img.ambience} accent="cyan" />

      <section className="pb-20 pt-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <Prose>
              <LegalHeading>Who we are</LegalHeading>
              {legal.venues.map((v) => (
                <p key={v.street}>
                  {v.name}
                  <br />
                  {v.street}
                  <br />
                  {v.city}
                </p>
              ))}
              <p>
                <a href={site.websiteHref}>{site.website}</a>
              </p>

              <p>
                Tel{" "}
                <a href={site.phoneHref}>{site.phone}</a>
              </p>

              <p>
                Email <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>

              <p>
                {legal.company}
                <br />
                {legal.companyAddress.street}
                <br />
                {legal.companyAddress.city}
              </p>

              <p>
                Regulatory office: {legal.regulatoryOffice.name}
                <br />
                {legal.regulatoryOffice.address}
              </p>

              <p>Geschäftsführer: {legal.managingDirector}</p>

              <div className="pt-4">
                <LegalContact />
              </div>
            </Prose>
          </Reveal>
        </div>
      </section>
    </>
  );
}
