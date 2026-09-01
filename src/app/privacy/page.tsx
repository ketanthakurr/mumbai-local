import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Prose, LegalHeading } from "@/components/legal/Prose";
import { LegalContact } from "@/components/legal/LegalContact";
import { img } from "@/lib/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Privacy");
  return { title: t("meta.title"), description: t("meta.description") };
}

export default async function PrivacyPage() {
  const t = await getTranslations("Privacy");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image={img.interior} accent="cyan" />

      <section className="pb-20 pt-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <Prose>
              <LegalHeading>What personal data we collect and why we collect it</LegalHeading>

              <h3 className="font-display text-2xl text-bone">Comments</h3>
              <p>
                When visitors leave comments on the site we collect the data shown in the
                comments form, and also the visitor&rsquo;s IP address and browser user agent
                string to help spam detection.
              </p>
              <p>
                An anonymized string created from your email address (also called a hash) may be
                provided to the Gravatar service to see if you are using it. The Gravatar service
                privacy policy is available here:{" "}
                <a href="https://automattic.com/privacy/" rel="noopener noreferrer" target="_blank">
                  https://automattic.com/privacy/
                </a>
                . After approval of your comment, your profile picture is visible to the public in
                the context of your comment.
              </p>

              <h3 className="font-display text-2xl text-bone">Media</h3>
              <p>
                If you upload images to the website, you should avoid uploading images with
                embedded location data (EXIF GPS) included. Visitors to the website can download
                and extract any location data from images on the website.
              </p>

              <h3 className="font-display text-2xl text-bone">Contact forms</h3>

              <h3 className="font-display text-2xl text-bone">Cookies</h3>
              <p>
                If you leave a comment on our site you may opt-in to saving your name, email
                address and website in cookies. These are for your convenience so that you do not
                have to fill in your details again when you leave another comment. These cookies
                will last for one year.
              </p>
              <p>
                If you visit our login page, we will set a temporary cookie to determine if your
                browser accepts cookies. This cookie contains no personal data and is discarded
                when you close your browser.
              </p>
              <p>
                When you log in, we will also set up several cookies to save your login
                information and your screen display choices. Login cookies last for two days, and
                screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;,
                your login will persist for two weeks. If you log out of your account, the login
                cookies will be removed.
              </p>
              <p>
                If you edit or publish an article, an additional cookie will be saved in your
                browser. This cookie includes no personal data and simply indicates the post ID of
                the article you just edited. It expires after 1 day.
              </p>

              <h3 className="font-display text-2xl text-bone">
                Embedded content from other websites
              </h3>
              <p>
                Articles on this site may include embedded content (e.g. videos, images, articles,
                etc.). Embedded content from other websites behaves in the exact same way as if
                the visitor has visited the other website.
              </p>
              <p>
                These websites may collect data about you, use cookies, embed additional
                third-party tracking, and monitor your interaction with that embedded content,
                including tracking your interaction with the embedded content if you have an
                account and are logged in to that website.
              </p>

              <h3 className="font-display text-2xl text-bone">Analytics</h3>

              <LegalHeading>Who we share your data with</LegalHeading>

              <LegalHeading>How long we retain your data</LegalHeading>
              <p>
                If you leave a comment, the comment and its metadata are retained indefinitely.
                This is so we can recognize and approve any follow-up comments automatically
                instead of holding them in a moderation queue.
              </p>
              <p>
                For users that register on our website (if any), we also store the personal
                information they provide in their user profile. All users can see, edit, or delete
                their personal information at any time (except they cannot change their username).
                Website administrators can also see and edit that information.
              </p>

              <LegalHeading>What rights you have over your data</LegalHeading>
              <p>
                If you have an account on this site, or have left comments, you can request to
                receive an exported file of the personal data we hold about you, including any
                data you have provided to us. You can also request that we erase any personal data
                we hold about you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>

              <LegalHeading>Where we send your data</LegalHeading>
              <p>Visitor comments may be checked through an automated spam detection service.</p>

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
