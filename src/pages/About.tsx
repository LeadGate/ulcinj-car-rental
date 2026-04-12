import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { WarningBox } from "@/components/InfoBox";
import { Car, HelpCircle } from "lucide-react";

const AboutContact = () => {
  const breadcrumbSchema =
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ulcinj-car-rental.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Contact",
        "item": "https://ulcinj-car-rental.com/about"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "About Ulcinj Car Rental",
    "description": "Welcome to Ulcinj's car rental comparison guide for Montenegro. Ulcinj Car Rental helps travelers compare local and international suppliers, vehicle",
    "url": "https://ulcinj-car-rental.com/about",
    "datePublished": "2026-04-12",
    "dateModified": "2026-04-12",
    "publisher": {
      "@type": "Organization",
      "name": "Ulcinj Car Rental",
      "url": "https://ulcinj-car-rental.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ulcinj-car-rental.com/favicon-512x512.png"
      }
    },
    "mainEntityOfPage": "https://ulcinj-car-rental.com/about",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="About Us — Ulcinj Car Rental Comparison Guide | Ulcinj Car Rental"
        description="Welcome to Ulcinj's car rental comparison guide for Montenegro. Ulcinj Car Rental helps travelers compare local and international suppliers, vehicle"
        canonical="https://ulcinj-car-rental.com/about"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "About Contact" }]} />

      <HeroSection
        title="About Ulcinj Car Rental"
        subtitle={<><p>Welcome to Ulcinj's car rental comparison guide for Montenegro. Ulcinj Car Rental helps travelers compare local and international suppliers, vehicle classes, and insurance terms for Ulcinj, the Adriatic coast, and the wider Montenegrin Riviera.</p></>}
        image="/7.webp"
        imageAlt="Car rental in Ulcinj"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Who We Are"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental is an independent affiliate platform that compares offers from <strong>Prego Rent a Car</strong>, <strong>MCommerce</strong>, <strong>Elezovic Rent</strong>, <strong>Rent a Car 999</strong>, <strong>MontenegroCar</strong>, <strong>Tim Rent</strong>, <strong>Kalamper Petrol</strong>, and <strong>MTL Rent a Car</strong> for pickup in Ulcinj, Podgorica Airport TGD, and Tivat Airport TIV.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental focuses on practical trip planning for routes to Velika Plaža, Ada Bojana, Valdanos Cove, Mala Plaža, Old Town Ulcinj, Stari Bar, Sveti Stefan, Virpazar, Shkodër, Rumija mountain, Korzo promenade, and Šasko Lake. A short city run often suits a <strong>Peugeot 208</strong> or <strong>Škoda Fabia</strong>, while a family itinerary may fit a <strong>Peugeot 2008</strong>, <strong>Hyundai i20</strong>, or <strong>Citroën C3</strong>.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental uses first-hand route checks from the arrivals hall at Podgorica Airport TGD to the beaches of the Ulcinj Riviera, and it also reviews the coastal drive via Sozina Tunnel and the Adriatic coast. For parking and local driving rules, see our <a href="/driving-parking-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">driving and parking guide</a>, which covers summer congestion, paid parking zones, and border timing.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Affiliate Disclosure:</strong> Ulcinj Car Rental may earn a commission when a booking is completed through an affiliate link, and the traveler pays no extra fee; this model helps fund price checks, insurance updates, and route research.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why Trust Our Recommendations"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental bases recommendations on dated, checkable sources: rental price checks from April 2026, parking rate verification with DOO Parking Servis Ulcinj from February 2024, and border-travel reports collected between 2024 and 2026.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental also compares insurance conditions against Montenegro’s <strong>Law on Compulsory Traffic Insurance (Official Gazette No 44/12)</strong> and standard rental contract terms such as CDW, SCDW, FDW, excess/deductible, franchise, zero excess, full coverage, third-party liability, TPL, and Green Card coverage for cross-border trips.</p>
          <DataTable headers={["Check", "Source", "What Ulcinj Car Rental Verifies"]} rows={[["Pricing", "Direct agency quotes", "Example daily rates, deposits, and seasonal changes"], ["Parking", "DOO Parking Servis Ulcinj", "Zone prices and enforcement timing"], ["Border rules", "2024-2026 traveler reports", "Opening hours, document checks, and wait times"], ["Insurance", "Official Gazette No 44/12", "Required liability cover and optional extras"], ["Roads", "Local driving tests", "Travel times on E-65, E-851, Sozina Tunnel, and Jadranska Magistrala"]]} />
          <WarningBox><p>💡 <strong>Tip:</strong> For inland and cross-border driving, ask whether the rental includes TPL and a Green Card; without them, a trip toward Shkodër or the Sukobin/Muriqan border can become a documentation problem even if the car itself is fully insured.  ⚠️ <strong>Warning:</strong> A zero excess package is not always the same as full coverage, because some contracts still exclude tires, glass, underbody, or key loss, so read the exclusions before paying for SCDW or FDW.</p></WarningBox>
      </Section>

      <ImageDivider src="/2.webp" alt="Ulcinj car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Get In Touch"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental answers pre-booking questions by email and through the contact form, and the usual response time is within 24 hours.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">[Your Contact Form Here]</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Email:</strong> info@ulcinj-car-rental.com</li>
            <li><strong>Response Time:</strong> Within 24 hours for most requests, including vehicle availability, border documents, and pickup instructions.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Ulcinj Car Rental can help with:</strong></p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Vehicle selection:</strong> Match an itinerary to a model such as <strong>Opel Corsa</strong>, <strong>Renault Megane</strong>, <strong>Hyundai i10</strong>, or <strong>Peugeot 208</strong>.</li>
            <li><strong>Insurance clarity:</strong> Compare CDW, SCDW, FDW, zero excess, excess/deductible, franchise, TPL, and full coverage in plain English.</li>
            <li><strong>Border paperwork:</strong> Confirm whether a rental includes a Green Card for routes to Albania via Sukobin/Muriqan border.</li>
            <li><strong>Parking guidance:</strong> Identify the most practical paid zones near Mala Plaža, Old Town Ulcinj, and Korzo promenade.</li>
          </ul>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Useful Local Contacts"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental recommends saving these numbers before collection, because roadside and airport support is easier to handle with local contacts already stored on your phone.</p>
          <DataTable headers={["Service", "Number", "Notes"]} rows={[["Police Emergency", "122", "National emergency line in Montenegro"], ["AMSCG Roadside Assistance", "19807", "24/7 help for breakdowns and roadside issues"], ["DOO Parking Servis Ulcinj", "+382 30 416 190", "Parking zone information and local enforcement"], ["Podgorica Airport TGD Information", "+382 20 444 244", "Terminal, arrivals, and pickup guidance"], ["Tivat Airport TIV Information", "+382 32 671 894", "Terminal, arrivals, and pickup guidance"], ["Sukobin/Muriqan Border Crossing", "24/7", "Main road link toward Shkod\u00ebr and northern Albania"]]} />
          <WarningBox><p>💡 <strong>Tip:</strong> If you plan a beach-to-border loop, start with Ulcinj in the morning, visit Velika Plaža or Ada Bojana, and return via the Adriatic Highway before evening traffic builds on the R-17 and Jadranska Magistrala.  ⚠️ <strong>Warning:</strong> Summer parking near Old Town Ulcinj, Stari Bar, and Sveti Stefan can fill quickly, and some municipal lots enforce hourly limits, so keep coins or a payment app ready.</p></WarningBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Ulcinj car rental" />

      <Section
        icon={<HelpCircle className="w-6 h-6" />}
        title="FAQ"
      >
          <h3 className="text-xl font-bold mt-6 mb-3">What insurance should I choose for Ulcinj car rental?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental usually recommends CDW plus SCDW or FDW for visitors who want lower out-of-pocket risk on Ulcinj trips. A typical economy rental may carry a €300–€700 excess/deductible, while a zero excess add-on can reduce the blocked preauthorisation to about €100–€200 depending on the supplier. Some policies still exclude glass, tires, or underbody damage, so confirm the exclusions before you pay for full coverage.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I drive from Ulcinj to Albania with a rental car?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental says you can usually cross into Albania if the supplier issues written permission and the car includes a Green Card. Border-ready rentals often require a passport, driving license, rental agreement, and an extra cross-border fee of about €20–€50, while processing at the Sukobin/Muriqan border can take 10–45 minutes outside peak season. Some agencies limit certain vehicle classes, so verify the rule before booking a car for Shkodër or the Bojana River area.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Which car is best for Ulcinj’s roads and beaches?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental typically suggests a compact model such as a Hyundai i10, Hyundai i20, Opel Corsa, Peugeot 208, or Škoda Fabia for city parking and short coastal drives. These cars often rent for about €22–€35 per day, while a larger model such as a Renault Megane, Peugeot 2008, or VW Passat may cost €40–€75 per day depending on season and transmission. Ground clearance and trunk space matter most if you plan to visit Ada Bojana, Valdanos Cove, or the beaches near Velika Plaža.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Which agencies do you compare in Ulcinj?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj Car Rental compares <strong>Prego Rent a Car</strong>, <strong>MCommerce</strong>, <strong>Elezovic Rent</strong>, <strong>Rent a Car 999</strong>, <strong>MontenegroCar</strong>, <strong>Tim Rent</strong>, <strong>Kalamper Petrol</strong>, and <strong>MTL Rent a Car</strong> for pickup in Ulcinj, Podgorica Airport TGD, and Tivat Airport TIV. The list is updated with price checks from April 2026 and focuses on local operators that regularly serve the Ulcinj Riviera, the Bay of Kotor route, and airport transfers. Availability can change by day, so a specific agency may not show every vehicle class at every pickup point.</p>
      </Section>

      <section className="container max-w-4xl py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Related guides</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li><a href="/airport-transfers" className="text-primary hover:underline">Airport</a></li>
          <li><a href="/beaches-day-trips" className="text-primary hover:underline">Day Trips</a></li>
          <li><a href="/driving-parking-guide" className="text-primary hover:underline">Driving Tips</a></li>
        </ul>
      </section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default AboutContact;
