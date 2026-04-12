import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { InfoBox, WarningBox } from "@/components/InfoBox";

const FAQ = () => {
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
        "name": "FAQ",
        "item": "https://ulcinj-car-rental.com/faq"
      }
    ]
  };

  const faqSchema =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I Need an International Driving Permit in Ulcinj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need an International Driving Permit in Ulcinj if your national licence is printed in the Latin or Cyrillic alphabet and you stay within the standard 90-day tourist period allowed by Montenegrin rules. Montenegro applies this rule to visitors driving legally with a valid licence, while some rental companies still ask for an IDP for non-EU licences as an internal policy. "
        }
      },
      {
        "@type": "Question",
        "name": "Can I Cross Into Albania With a Rental Car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can cross from Ulcinj into Albania with a rental car if the agency issues written permission and the vehicle has a valid Green Card. At the Sukobin/Muriqan border, officers typically check the permission letter, the Green Card, and the rental contract before allowing exit toward Shkodër or the Albanian coast. The cross-border fee is usually charged separately, often around €20-€60 depending on the company and vehicle class, and the agency may also request a deposit preauthorisation on your card. For practical routing, the Ulcinj side connects via the E-851, while the journey toward Shkodër and Lake areas becomes easier if your car is fully covered with CDW or SCDW. "
        }
      },
      {
        "@type": "Question",
        "name": "Is Driving in Montenegro Safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Driving around Ulcinj is generally manageable on paved roads, but safety changes quickly once you leave the coast and use mountain shortcuts. Montenegro recorded 10.4 road fatalities per 100,000 inhabitants, while Ulcinj municipality had 43 traffic accidents in Q2 2025, compared with 165 in Bar and 118 in Budva according to MONSTAT. The safest route choices are the main signed roads, including the Adriatic Highway, Jadranska Magistrala, E-65, E-851, and R-17, rather than unnamed grey lines suggested by navigation apps. This matters most if you are driving toward Cetinje, Virpazar, Skadar Lake, or the Rumija mountain area, where road quality can change sharply. "
        }
      },
      {
        "@type": "Question",
        "name": "How Much Does Parking Cost in Ulcinj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parking in Ulcinj is inexpensive by Montenegrin coastal standards, with summer prices often set at €0.90 per hour in Zone I and €0.70 per hour in Zone II, plus daily tickets around €4-€10. Nearby Budva can charge up to €7 per hour in peak season, so Ulcinj’s municipal parking is usually the cheaper option for short city stops. Foreign drivers should know that SMS parking often requires a local SIM card, while card-based payment is usually easier through a kiosk or app. This is especially useful near **Korzo promenade**, **Mala Plaža**, and **Old Town Ulcinj**, where turnover is highest during the July-August season. "
        }
      },
      {
        "@type": "Question",
        "name": "Can I Rent a Car Without a Credit Card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can sometimes rent a car in Ulcinj without a credit card, but the choice is usually limited to local agencies and cash-friendly providers. Elezovic Rent is known for cash payments, MCommerce may arrange cash deposits, and some smaller operators such as Prego Rent a Car, Rent a Car 999, Tim Rent, MontenegroCar, Kalamper Petrol, and MTL Rent a Car may offer flexible pickup terms depending on the season and vehicle. International brands generally still require a credit card in the driver’s name for preauthorisation, because the deposit protects the excess/deductible or franchise on higher-risk bookings. If you want a simple city car, models such as the Hyundai i10, Hyundai i20, Opel Corsa, Peugeot 208, Škoda Fabia, or Citroën C3 are common economy choices; compact upgrades often include the Renault Megane, Peugeot 2008, or VW Passat. "
        }
      },
      {
        "@type": "Question",
        "name": "What Insurance Do I Really Need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must have Third-Party Liability insurance, also called TPL, because Montenegrin rental law includes it in the base price and it covers damage to other people’s property and vehicles. To protect the rental car itself, most travellers add CDW, and many compare SCDW, FDW, or zero excess packages when they want a lower excess/deductible or franchise. Typical prices in Ulcinj are around €10-€20 per day for CDW, with SCDW or full coverage costing more depending on the season, the car class, and whether the agency allows zero excess. Even with premium cover, exclusions often remain for tyres, windscreens, off-road use, alcohol-related incidents, and claims without a police report. "
        }
      },
      {
        "@type": "Question",
        "name": "Which Is the Best Airport for Ulcinj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Podgorica Airport TGD is usually the best airport for Ulcinj because it is about 79 km away and the drive normally takes around 1 hour and 20 minutes via the Sozina Tunnel. Tivat Airport TIV is roughly 85 km away and can work well outside the summer rush, but the drive along the Adriatic Highway and Jadranska Magistrala can take 3 to 4.5 hours when Budva traffic is heavy. If you are landing late or do not want to handle the airport exit drive immediately, compare a rental pickup with a transfer service from either airport. [Ulcinj airport transfer options](/airport-transfers) can be useful if you are travelling with luggage, children, or a late-night arrival. "
        }
      },
      {
        "@type": "Question",
        "name": "Are There Electric Vehicle Chargers in Ulcinj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Electric vehicle charging in Ulcinj remains limited, so an EV is practical only if you plan each leg carefully and charge outside the municipality when needed. The municipality currently has only two charging locations with six Type 2 connectors and no DC fast chargers, including one public point at Hotel Mediteran and one guest-only point at Hotel Montefila. For most day trips, a petrol or diesel car is simpler for routes to Ada Bojana, Velika Plaža, Valdanos Cove, and Stari Bar, while the nearest reliable fast charging is usually in Podgorica. If you need to cross toward Shkodër or the Sukobin/Muriqan border, an EV can still work, but only with a fixed charging plan. "
        }
      },
      {
        "@type": "Question",
        "name": "What Fuel Prices Should I Expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As of February 2026, Montenegro keeps fuel prices regulated, so the same litre price usually applies across the country at official stations. Expect around €1.64 per litre for Gasoline 95 and about €1.33 per litre for Diesel, with stations in Ulcinj commonly found on Teuta bb, the E-851, and Majke Tereze bb. The main practical advice is to refuel before heading south toward Velika Plaža, Ada Bojana, or the Bojana River area, because roadside coverage is thin there. If you are planning a longer loop toward Cetinje, Virpazar, or Skadar Lake, starting with a full tank is the safest option. "
        }
      },
      {
        "@type": "Question",
        "name": "Do I Need an SUV for Ulcinj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, most Ulcinj visitors do not need an SUV because the main coastal roads and city access routes are paved and suitable for economy cars. A compact car such as a Peugeot 2008, Renault Megane, VW Passat, or Citroën C3 is usually enough for city driving, hotel transfers, and the standard sightseeing loop. An SUV or 4x4 becomes useful only if you plan sand-track driving around Ada Bojana or rougher routes near the hills above the coast. For wider day trips, the paved roads to Sveti Stefan, Cetinje, and Skadar Lake still work well with a normal sedan. "
        }
      },
      {
        "@type": "Question",
        "name": "What Happens If My Car Breaks Down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your rental car breaks down, call the agency’s 24/7 emergency number first and then follow their roadside instructions exactly. In Montenegro, many agencies work with AMSCG, the national Auto-moto Association, and the standard roadside number is 19807. Some local providers, including Elezovic Rent and other Ulcinj operators, may offer a replacement car at the same class or a similar daily rate if the fault is mechanical and not caused by misuse. Keep your rental agreement, photos, and location pin ready, especially if the issue happens outside town near R-17, the Adriatic Highway, or the route toward Stari Bar. "
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Ulcinj Car Rental FAQ — Insurance, IDP & More"
        description="Renting a car in Ulcinj helps you reach the Adriatic coast, the Ulcinj Riviera, and day-trip stops such as Velika Plaža and Old Town Ulcinj without"
        canonical="https://ulcinj-car-rental.com/faq"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <HeroSection
        title="Ulcinj Car Rental: Your Essential Questions Answered"
        subtitle={<><p>Renting a car in Ulcinj helps you reach the <strong>Adriatic coast</strong>, the <strong>Ulcinj Riviera</strong>, and day-trip stops such as <strong>Velika Plaža</strong> and <strong>Old Town Ulcinj</strong> without relying on seasonal buses. This guide answers the most common rental, insurance, airport, and driving questions for Montenegro, using current local rules, road distances, and insurer-style exclusions so you can compare offers before booking.</p></>}
        image="/6.webp"
        imageAlt="Car rental in Ulcinj"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <section className="container max-w-4xl py-10">
      <FAQSection
        items={[
          { question: "Do I Need an International Driving Permit in Ulcinj?", answer: "You do not need an International Driving Permit in Ulcinj if your national licence is printed in the Latin or Cyrillic alphabet and you stay within the standard 90-day tourist period allowed by Montenegrin rules. Montenegro applies this rule to visitors driving legally with a valid licence, while some rental companies still ask for an IDP for non-EU licences as an internal policy." },
          { question: "Can I Cross Into Albania With a Rental Car?", answer: "Yes, you can cross from Ulcinj into Albania with a rental car if the agency issues written permission and the vehicle has a valid Green Card. At the Sukobin/Muriqan border, officers typically check the permission letter, the Green Card, and the rental contract before allowing exit toward Shkodër or the Albanian coast. The cross-border fee is usually charged separately, often around €20-€60 depending on the company and vehicle class, and the agency may also request a deposit preauthorisation on your card. For practical routing, the Ulcinj side connects via the E-851, while the journey toward Shkodër and Lake areas becomes easier if your car is fully covered with CDW or SCDW." },
          { question: "Is Driving in Montenegro Safe?", answer: "Driving around Ulcinj is generally manageable on paved roads, but safety changes quickly once you leave the coast and use mountain shortcuts. Montenegro recorded 10.4 road fatalities per 100,000 inhabitants, while Ulcinj municipality had 43 traffic accidents in Q2 2025, compared with 165 in Bar and 118 in Budva according to MONSTAT. The safest route choices are the main signed roads, including the Adriatic Highway, Jadranska Magistrala, E-65, E-851, and R-17, rather than unnamed grey lines suggested by navigation apps. This matters most if you are driving toward Cetinje, Virpazar, Skadar Lake, or the Rumija mountain area, where road quality can change sharply." },
          { question: "How Much Does Parking Cost in Ulcinj?", answer: "Parking in Ulcinj is inexpensive by Montenegrin coastal standards, with summer prices often set at €0.90 per hour in Zone I and €0.70 per hour in Zone II, plus daily tickets around €4-€10. Nearby Budva can charge up to €7 per hour in peak season, so Ulcinj’s municipal parking is usually the cheaper option for short city stops. Foreign drivers should know that SMS parking often requires a local SIM card, while card-based payment is usually easier through a kiosk or app. This is especially useful near <strong>Korzo promenade</strong>, <strong>Mala Plaža</strong>, and <strong>Old Town Ulcinj</strong>, where turnover is highest during the July-August season. For route planning around town, see our <a href=\"/driving-parking-guide\" className=\"text-primary hover:underline\">driving and parking guide</a>." },
          { question: "Can I Rent a Car Without a Credit Card?", answer: "Yes, you can sometimes rent a car in Ulcinj without a credit card, but the choice is usually limited to local agencies and cash-friendly providers. Elezovic Rent is known for cash payments, MCommerce may arrange cash deposits, and some smaller operators such as Prego Rent a Car, Rent a Car 999, Tim Rent, MontenegroCar, Kalamper Petrol, and MTL Rent a Car may offer flexible pickup terms depending on the season and vehicle. International brands generally still require a credit card in the driver’s name for preauthorisation, because the deposit protects the excess/deductible or franchise on higher-risk bookings. If you want a simple city car, models such as the Hyundai i10, Hyundai i20, Opel Corsa, Peugeot 208, Škoda Fabia, or Citroën C3 are common economy choices; compact upgrades often include the Renault Megane, Peugeot 2008, or VW Passat." },
          { question: "What Insurance Do I Really Need?", answer: "You must have Third-Party Liability insurance, also called TPL, because Montenegrin rental law includes it in the base price and it covers damage to other people’s property and vehicles. To protect the rental car itself, most travellers add CDW, and many compare SCDW, FDW, or zero excess packages when they want a lower excess/deductible or franchise. Typical prices in Ulcinj are around €10-€20 per day for CDW, with SCDW or full coverage costing more depending on the season, the car class, and whether the agency allows zero excess. Even with premium cover, exclusions often remain for tyres, windscreens, off-road use, alcohol-related incidents, and claims without a police report." },
          { question: "Which Is the Best Airport for Ulcinj?", answer: "Podgorica Airport TGD is usually the best airport for Ulcinj because it is about 79 km away and the drive normally takes around 1 hour and 20 minutes via the Sozina Tunnel. Tivat Airport TIV is roughly 85 km away and can work well outside the summer rush, but the drive along the Adriatic Highway and Jadranska Magistrala can take 3 to 4.5 hours when Budva traffic is heavy. If you are landing late or do not want to handle the airport exit drive immediately, compare a rental pickup with a transfer service from either airport. <a href=\"/airport-transfers\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-primary hover:underline\">Ulcinj airport transfer options</a> can be useful if you are travelling with luggage, children, or a late-night arrival." },
          { question: "Are There Electric Vehicle Chargers in Ulcinj?", answer: "Electric vehicle charging in Ulcinj remains limited, so an EV is practical only if you plan each leg carefully and charge outside the municipality when needed. The municipality currently has only two charging locations with six Type 2 connectors and no DC fast chargers, including one public point at Hotel Mediteran and one guest-only point at Hotel Montefila. For most day trips, a petrol or diesel car is simpler for routes to Ada Bojana, Velika Plaža, Valdanos Cove, and Stari Bar, while the nearest reliable fast charging is usually in Podgorica. If you need to cross toward Shkodër or the Sukobin/Muriqan border, an EV can still work, but only with a fixed charging plan." },
          { question: "What Fuel Prices Should I Expect?", answer: "As of February 2026, Montenegro keeps fuel prices regulated, so the same litre price usually applies across the country at official stations. Expect around €1.64 per litre for Gasoline 95 and about €1.33 per litre for Diesel, with stations in Ulcinj commonly found on Teuta bb, the E-851, and Majke Tereze bb. The main practical advice is to refuel before heading south toward Velika Plaža, Ada Bojana, or the Bojana River area, because roadside coverage is thin there. If you are planning a longer loop toward Cetinje, Virpazar, or Skadar Lake, starting with a full tank is the safest option." },
          { question: "Do I Need an SUV for Ulcinj?", answer: "No, most Ulcinj visitors do not need an SUV because the main coastal roads and city access routes are paved and suitable for economy cars. A compact car such as a Peugeot 2008, Renault Megane, VW Passat, or Citroën C3 is usually enough for city driving, hotel transfers, and the standard sightseeing loop. An SUV or 4x4 becomes useful only if you plan sand-track driving around Ada Bojana or rougher routes near the hills above the coast. For wider day trips, the paved roads to Sveti Stefan, Cetinje, and Skadar Lake still work well with a normal sedan." },
          { question: "What Happens If My Car Breaks Down?", answer: "If your rental car breaks down, call the agency’s 24/7 emergency number first and then follow their roadside instructions exactly. In Montenegro, many agencies work with AMSCG, the national Auto-moto Association, and the standard roadside number is 19807. Some local providers, including Elezovic Rent and other Ulcinj operators, may offer a replacement car at the same class or a similar daily rate if the fault is mechanical and not caused by misuse. Keep your rental agreement, photos, and location pin ready, especially if the issue happens outside town near R-17, the Adriatic Highway, or the route toward Stari Bar." },
          { question: "FAQ", answer: "Yes, most Ulcinj rental companies require a deposit preauthorisation on a credit card for the security hold. The amount often depends on the car class and can be linked to the excess/deductible or franchise stated in the contract. Cash-only agencies exist, but they may still ask for ID, a signed contract, or a separate cash deposit. <strong>Caveat:</strong> A card preauthorisation can stay blocked for several days after return, depending on your bank and the rental company’s release procedure. Yes, zero excess is usually the lower-risk option because it reduces what you pay after a covered claim. CDW often leaves an excess/deductible, while SCDW, FDW, or zero excess packages can lower that amount further; the exact daily price depends on the car and season. Some agencies still exclude tyres, glass, or underbody damage even when the excess is reduced. <strong>Caveat:</strong> Read the policy carefully, because “zero excess” does not always mean full coverage for every type of damage. Yes, you can drive from Ulcinj to the Bay of Kotor in one day if you leave early and avoid peak traffic. The route often follows the Adriatic Highway and can be slower than the map suggests in July and August, especially around Budva and Tivat. A full-day round trip is realistic, but it is tiring if you also plan stops at Sveti Stefan or Cetinje. <strong>Caveat:</strong> Heavy summer congestion and parking delays can make the return leg longer than expected. Commonly mentioned Ulcinj rental names include Prego Rent a Car, MCommerce, Elezovic Rent, Rent a Car 999, MontenegroCar, Tim Rent, Kalamper Petrol, and MTL Rent a Car. These operators are often discussed by travellers for local pickup flexibility, cash options, or short-term city rentals, while international brands usually rely more heavily on card-based deposits. Availability changes by date, so the best option depends on your exact pickup time and the car class you need. <strong>Caveat:</strong> Not every company offers the same insurance rules, and the final price can change with season, mileage limits, and cross-border permissions." }
        ]}
      />
      </section>

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

export default FAQ;
