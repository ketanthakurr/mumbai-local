import { site, hours } from "@/lib/site";

/** Contact strip repeated at the foot of the legal pages. */
export function LegalContact() {
  return (
    <div className="glass rounded-2xl p-5 text-sm leading-relaxed text-bone/70 sm:p-6">
      <p>
        {site.name}, {site.address.street}
        <br />
        {site.address.city},{" "}
        <a href={`mailto:${site.email}`} className="text-cyan hover:text-bone">
          {site.email}
        </a>
        <br />
        <a href={site.phoneHref} className="text-cyan hover:text-bone">
          {site.phone}
        </a>
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-marigold">
        Timings: {hours[0].open}
      </p>
    </div>
  );
}
