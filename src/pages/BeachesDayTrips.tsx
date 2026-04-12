import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, MapPin } from "lucide-react";

const DayTrips = () => {
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
        "name": "Day Trips",
        "item": "https://ulcinj-car-rental.com/beaches-day-trips"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Your Rental Car Guide to Ulcinj’s Best Beaches and Day Trips",
    "description": "Ulcinj, on Montenegro’s southern Adriatic coast, works best as a self-drive base because beaches, border crossings, and hill towns sit 10–120 minutes",
    "url": "https://ulcinj-car-rental.com/beaches-day-trips",
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
    "mainEntityOfPage": "https://ulcinj-car-rental.com/beaches-day-trips",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="Ulcinj Beaches & Day Trips by Car — Routes & Parking"
        description="Ulcinj, on Montenegro’s southern Adriatic coast, works best as a self-drive base because beaches, border crossings, and hill towns sit 10–120 minutes"
        canonical="https://ulcinj-car-rental.com/beaches-day-trips"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "Day Trips" }]} />

      <HeroSection
        title="Your Rental Car Guide to Ulcinj’s Best Beaches and Day Trips"
        subtitle={<><p>Ulcinj, on Montenegro’s southern Adriatic coast, works best as a self-drive base because beaches, border crossings, and hill towns sit 10–120 minutes apart by car. This guide covers the beaches near Ulcinj, day trips into Montenegro and Albania, and the rental terms that matter at pickup, including CDW, SCDW, FDW, excess/deductible, franchise, preauthorisation, zero excess, full coverage, Green Card, third-party liability, and TPL.</p></>}
        image="/4.webp"
        imageAlt="Car rental in Ulcinj"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Beaches Near Ulcinj by Car"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj’s main beach cluster is spread across the Adriatic coast, so a car helps with parking, club access, and day-use timing; in summer 2024, the busiest beach lots near Velika Plaža and Ada Bojana were often full by 11:00, while inland parking in town is more limited and usually paid.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Velika Plaža</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Velika Plaža:</strong> 5–15 km from the Old Town, 10–20 minutes by car, with long gravel parking areas near beach clubs and typical sunbed sets costing €10–€40 per day depending on location and season.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Velika Plaža is Ulcinj’s 12-kilometer sandy shoreline on the Montenegrin Riviera, and it suits drivers who want easy access, flat roads, and multiple entry points along the beach. <strong>Prego Rent a Car</strong>, <strong>MCommerce</strong>, and <strong>MontenegroCar</strong> often list economy cars such as the <strong>Hyundai i10</strong>, <strong>Hyundai i20</strong>, <strong>Opel Corsa</strong>, <strong>Peugeot 208</strong>, <strong>Škoda Fabia</strong>, and <strong>Citroën C3</strong> for beach days because these models are small enough for town parking and sandy road access.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Velika Plaža parking:</strong> Most beach clubs offer free or low-cost parking, while premium clubs may charge or require a minimum spend of about €10–€20 per person in peak season. If you want a shaded space near the sand, arrive before 10:30 in July and August.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> For Velika Plaža, ask the rental desk whether your policy includes CDW with low excess or a zero excess option, because a gravel lot can trigger stone-chip claims even when parking is free.</p></InfoBox>
          <h3 className="text-xl font-bold mt-6 mb-3">Ada Bojana</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Ada Bojana:</strong> 15 km from Ulcinj, 20–25 minutes by car, with the last stretch using the R-17 road and a narrow bridge over the Bojana River.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Ada Bojana is a triangular river island on the Ulcinj Riviera, known for kitesurfing, seafood restaurants, and beach access that works best with a compact car or small SUV. <strong>Elezovic Rent</strong>, <strong>Rent a Car 999</strong>, and <strong>Tim Rent</strong> commonly position their beach fleet around the <strong>Peugeot 2008</strong>, <strong>Renault Megane</strong>, <strong>VW Passat</strong>, and <strong>Peugeot 208</strong>, which gives more boot space for boards, coolers, and family gear than a city hatchback.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Ada Bojana access:</strong> The island fee is typically €3 per person, parking is often €2 per hour or €5–€10 per day, and some restaurants validate parking when you dine on site. The final road sections can become sandy, so drivers should stay on the paved approach unless the vehicle is a higher-clearance model.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Ada Bojana has no reliable fuel station at the island end, so refuel first at <strong>Kalamper Petrol</strong> near the main junction if your return route includes a late-night drive.</p></WarningBox>
          <h3 className="text-xl font-bold mt-6 mb-3">Valdanos Cove</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Valdanos Cove:</strong> 5–7 km from Ulcinj, 10–15 minutes by car, with a fully paved scenic road and free parking under olive trees.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Valdanos Cove sits north of Ulcinj and offers a quieter pebble bay with clear water and steady shade from ancient olive groves, making it useful for a half-day stop rather than a full beach-party plan. The cove’s access road is manageable in a standard sedan, so models like the <strong>Hyundai i10</strong> or <strong>Citroën C3</strong> are enough for most visitors.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Valdanos parking:</strong> The lot is usually free, and the main cost is the time you stay rather than the access fee. Because the cove is exposed in windy weather, it works best on calm summer afternoons.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Mala Plaža and the Old Town Beaches</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Mala Plaža:</strong> Ulcinj’s town beach is walkable from the center, and drivers usually avoid bringing a car because parking is limited and paid near the Old Town.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Mala Plaža and the smaller Old Town beaches are best used as foot-access beaches after you park once and leave the car. For city parking rules, read <a href="/driving-parking-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ulcinj driving and parking advice</a>, because the narrow streets around Korzo promenade and the historic core can make turnaround difficult in peak season.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Ulcinj Day Trips by Car"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj day trips by car work well because the main routes connect the Adriatic coast, inland wine country, and the Albanian border in under 2.5 hours one way; in 2024, the Sozina Tunnel remained the fastest fixed road link toward Podgorica and central Montenegro.</p>
          <DataTable headers={["Destination", "Distance from Ulcinj", "Drive Time", "Road / Route", "Cost Notes", "What to See"]} rows={[["**Stari Bar**", "27 km", "35\u201340 min", "Easy inland and coastal roads", "Entry to the archaeological site is typically \u20ac5", "Ruins, olive mills, local oil shops"], ["**Sveti Stefan**", "57 km", "1h 15m\u20131h 30m", "Scenic coastal road on the Adriatic Highway / Jadranska Magistrala", "Parking can be paid near the coast", "Aman island viewpoint, Queen\u2019s Beach"], ["**Shkod\u00ebr**", "42 km", "1h 15m\u20132h+", "Border road via Sukobin/Muriqan", "Green Card may cost \u20ac20\u2013\u20ac60 depending on the rental company", "Rozafa Castle, bazaar, city center"], ["**Virpazar**", "54 km", "1h 10m\u20131h 20m", "Good road, narrower sections near the lake", "Boat tours are extra", "Skadar Lake, birdwatching, wineries"], ["**Cetinje**", "93 km", "1h 50m\u20132h 15m", "Mountain road with switchbacks", "Museum and palace tickets are separate", "Royal capital, monasteries, history"], ["**Podgorica**", "79 km", "1h 35m", "Fast route via Sozina Tunnel", "Tunnel toll is about \u20ac2.50", "Capital city, bridges, caf\u00e9s"], ["**Budva**", "66 km", "1h 25m\u20131h 45m", "Coastal road on the E-65 / E-851 corridor", "Summer traffic adds 20\u201340 minutes", "Old Town, beaches, nightlife"]]} />
          <h3 className="text-xl font-bold mt-6 mb-3">Stari Bar</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Stari Bar:</strong> 27 km from Ulcinj, about 35–40 minutes by car, with easy roads and an entry fee of roughly €5 for the archaeological site.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Stari Bar is the strongest half-day cultural trip from Ulcinj because the ruins, olive press, and small museums are compact and easy to cover in 2–3 hours. <strong>MTL Rent a Car</strong> and <strong>Kalamper Petrol</strong> are commonly useful reference points for fuel and roadside orientation on the southbound route.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Sveti Stefan</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Sveti Stefan:</strong> 57 km from Ulcinj, about 1 hour 15 minutes to 1 hour 30 minutes by car, with no tunnel toll but slower summer traffic on the Adriatic Highway.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Sveti Stefan is a scenic coastal stop on the Montenegrin Riviera, best for photography and a short beach pause rather than a long museum visit. The public viewpoint is free, while nearby parking and beach access can be restricted in peak season.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Shkodër, Albania</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Shkodër:</strong> 42 km from Ulcinj, usually 1 hour 15 minutes to 2 hours plus border time, with the Sukobin/Muriqan border operating 24/7.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Shkodër is the most practical cross-border day trip from Ulcinj because the road is direct and the city has a compact historic center, Rozafa Castle, and a lively bazaar. Rentals with Albania coverage may require <strong>third-party liability (TPL)</strong> plus <strong>Green Card</strong> confirmation, and some firms add a preauthorisation on your card when the car leaves Montenegro.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If your policy only includes CDW with a high excess or franchise, border damage or a tire claim in Albania can cost more than the day trip itself, so ask for SCDW, FDW, or zero excess before departure.</p></WarningBox>
          <h3 className="text-xl font-bold mt-6 mb-3">Virpazar and Skadar Lake</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Virpazar:</strong> 54 km from Ulcinj, about 1 hour 10 minutes to 1 hour 20 minutes by car, with good roads and easy access to Skadar Lake boat tours.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Virpazar works well for travelers who want wildlife, wine, and calm water rather than a beach stop, and the village is a common launch point for boat trips on Skadar Lake. The area sits on the E-65 corridor farther inland, so a fuel-efficient hatchback such as the <strong>Ford</strong>-class rental equivalent is usually adequate, while local firms such as <strong>AMSCG</strong> can help drivers verify road and safety conditions.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Cetinje</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Cetinje:</strong> 93 km from Ulcinj, about 1 hour 50 minutes to 2 hours 15 minutes by car, with mountain roads that can slow progress after Budva.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Cetinje is Montenegro’s former royal capital and a strong cultural stop for visitors who want monasteries, museums, and a cooler mountain climate. The route climbs toward Rumija mountain scenery before turning inland, so daytime driving is safer than an evening return in low visibility.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Podgorica</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Podgorica:</strong> 79 km from Ulcinj, about 1 hour 35 minutes by car, with the Sozina Tunnel toll usually around €2.50 and a faster route than the mountain alternatives.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Podgorica is the easiest full-city day trip because the route is direct, the road quality is modern, and the tunnel shortens the transfer significantly. The city works well for business stops, shopping, and airport connections near Podgorica Airport TGD.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Budva</h3>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Budva:</strong> 66 km from Ulcinj, about 1 hour 25 minutes to 1 hour 45 minutes by car, with heavy summer traffic on the coastal road and the E-65/E-851 corridor.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Budva is a good add-on for travelers who want nightlife, a walkable Old Town, and beach cafés in one trip. The return journey often takes longer than the outbound drive, so leaving Ulcinj before 10:00 in summer reduces congestion on the Jadranska Magistrala.</p>
      </Section>

      <ImageDivider src="/2.webp" alt="Ulcinj car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Car Rental Insurance for Ulcinj Beach Trips and Border Drives"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Insurance choices matter in Ulcinj because a beach transfer, gravel parking lot, or border crossing can create different damage risks; in Montenegro, most rental quotes still separate CDW, SCDW, FDW, and third-party liability rather than bundling everything into one price.</p>
          <DataTable headers={["Policy term", "What it usually covers", "Common limitation", "Typical booking impact"]} rows={[["**CDW**", "Collision damage with an excess/deductible", "Driver still pays the franchise if damage occurs", "Lower daily rate"], ["**SCDW**", "Reduced excess on top of CDW", "May not cover tires, glass, or underbody", "Medium daily rate"], ["**FDW**", "Wider damage protection", "Often still excludes negligence or off-road use", "Higher daily rate"], ["**Zero excess**", "Removes the deductible/franchise in many cases", "May require preauthorisation and strict rules", "Highest daily rate"], ["**TPL** / third-party liability", "Claims by others after an accident", "Usually does not cover your own rental car", "Often included by law"]]} />
          <InfoBox><p><strong>Prego Rent a Car</strong> and <strong>MCommerce</strong> often publish separate prices for base rental, CDW, and add-on protection, so a quote that starts at €22/day can rise to €35/day or more once SCDW or FDW is added. If you are driving to Shkodër, ask whether the policy includes a Green Card and whether the company blocks a preauthorisation of €200–€800 on your credit card.</p></InfoBox>
          <p className="text-gray-700 italic mt-3 leading-relaxed">💡 <strong>Tip:</strong> For beach use and border trips, full coverage with zero excess is usually easier to budget than a cheap base rate plus a large deductible, especially when the rental car is a <strong>Ford</strong>-class or <strong>Peugeot 2008</strong>-size vehicle that may attract gravel or parking claims.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A policy that says “insurance included” may still leave you with a franchise, tire exclusion, or glass exclusion, so check the written terms for CDW, SCDW, FDW, and TPL before you sign.</p></WarningBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Practical Pickup Advice for Ulcinj Travelers"
        alt
      >
          <CompanyCard><p><strong>Podgorica Airport TGD:</strong> The fastest airport for Ulcinj road trips is usually Podgorica Airport TGD, because the drive via the Sozina Tunnel takes roughly 1 hour 35 minutes to 2 hours to central Ulcinj depending on traffic and pickup delays.</p></CompanyCard>
          <CompanyCard><p><strong>Tivat Airport TIV:</strong> Tivat Airport TIV is more convenient for travelers who combine Ulcinj with the Bay of Kotor or Budva, but the southern drive usually takes longer than Podgorica and is more sensitive to summer congestion on the coast.</p></CompanyCard>
          <CompanyCard><p><strong>Rental desk rules:</strong> A typical company may hold a preauthorisation on the card, request a franchise confirmation, and verify whether the policy includes CDW, SCDW, or zero excess before releasing the keys. <strong>Rent a Car 999</strong> and <strong>Tim Rent</strong> often use small-city pickups, while <strong>MTL Rent a Car</strong> and <strong>MontenegroCar</strong> may offer better one-way or airport handover options.</p></CompanyCard>
          <InfoBox><p>💡 <strong>Tip:</strong> If your route includes Ulcinj, Stari Bar, and Skadar Lake, a compact model such as the <strong>Hyundai i10</strong>, <strong>Hyundai i20</strong>, <strong>Peugeot 208</strong>, or <strong>Škoda Fabia</strong> is usually enough, while a <strong>VW Passat</strong> or <strong>Renault Megane</strong> gives more comfort for longer coastal transfers.</p></InfoBox>
          <p className="text-gray-700 italic mt-3 leading-relaxed">💡 <strong>Tip:</strong> Before any border drive, ask the rental company to confirm the Green Card, TPL, and destination countries in writing, because verbal approval is weaker than the contract if a police check happens near Shkodër.</p>
      </Section>

      <ImageDivider src="/3.webp" alt="Ulcinj car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="FAQ: Ulcinj Beaches, Day Trips, and Rentals"
      >
          <h3 className="text-xl font-bold mt-6 mb-3">Is it worth renting a car for Ulcinj beaches?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, renting a car is worth it for Velika Plaža, Ada Bojana, and Valdanos Cove because those beaches are 5–20 minutes apart by road, while parking and beach-club access are easier than relying on taxis. Daily rates for compact cars such as the <strong>Opel Corsa</strong> or <strong>Citroën C3</strong> often start in the low tens of euros in shoulder season. The exception is Mala Plaža and the Old Town beaches, where walking is usually simpler than driving.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I drive from Ulcinj to Shkodër in one day?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, Ulcinj to Shkodër is a realistic one-day trip because the route is roughly 42 km and usually takes 1 hour 15 minutes to 2 hours depending on border traffic. The <strong>Sukobin/Muriqan border</strong> is open 24/7, and some rentals charge €20–€60 for Green Card coverage for Albania. The caveat is that you should confirm TPL, border permission, and any preauthorisation before leaving Montenegro.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Which insurance should I choose for Ulcinj road trips?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Choose CDW plus SCDW, or full coverage with zero excess, if you want predictable costs on beach roads and parking lots. Many rentals still use a deductible or franchise of several hundred euros, and a quote that looks cheap can become expensive after add-ons. The exception is that some premium cards cover part of the excess, but they usually do not replace the rental company’s own terms.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">What is the best airport for Ulcinj car rental?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Podgorica Airport TGD is usually the best airport for Ulcinj because the transfer is faster and more direct than from Tivat Airport TIV. The drive from Podgorica through the Sozina Tunnel typically takes about 1 hour 35 minutes to 2 hours, while Tivat is slower in summer due to coastal traffic. The exception is if your itinerary focuses on the Bay of Kotor first, in which case Tivat can make more sense.</p>
      </Section>

      <Section
        icon={<MapPin className="w-6 h-6" />}
        title="Local Context and Route References"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Ulcinj’s driving network is shaped by the Adriatic coast, the Montenegrin Riviera, and the inland connections toward the E-65 and E-851 corridors, so route choice affects travel time more than distance alone. For beach logistics, the main practical names to know are Velika Plaža, Ada Bojana, Valdanos Cove, and Mala Plaža; for day trips, Stari Bar, Sveti Stefan, Virpazar, Cetinje, and Shkodër are the clearest one-day options from Ulcinj.</p>
          <CompanyCard><p><strong>Prego Rent a Car:</strong> A useful city-and-airport reference for compact rentals, often matching Ulcinj beach itineraries with hatchbacks such as the Hyundai i10, Peugeot 208, or Citroën C3.</p></CompanyCard>
          <CompanyCard><p><strong>MCommerce:</strong> A local-style rental reference that is frequently associated with economy pricing, where the key comparison is not just the base rate but also the CDW excess, preauthorisation, and cross-border rules.</p></CompanyCard>
          <CompanyCard><p><strong>Elezovic Rent:</strong> A practical name to compare when you want beach-friendly cars such as the Hyundai i20, Opel Corsa, or Škoda Fabia with straightforward pickup terms.</p></CompanyCard>
          <CompanyCard><p><strong>Rent a Car 999:</strong> A provider name to check for short-stay Ulcinj bookings, especially if you need an airport handover from Podgorica Airport TGD or a compact sedan like the Renault Megane.</p></CompanyCard>
          <CompanyCard><p><strong>MontenegroCar:</strong> A relevant brand for longer coastal itineraries, where the VW Passat can be useful for family luggage and the insurance package may include SCDW or FDW options.</p></CompanyCard>
          <CompanyCard><p><strong>Tim Rent:</strong> A local comparison point for travelers who want flexible pickup near Ulcinj and a clear explanation of franchise, excess/deductible, and zero excess pricing.</p></CompanyCard>
          <CompanyCard><p><strong>Kalamper Petrol:</strong> The most practical fuel reference for drivers heading to Ada Bojana, because it is typically the last reliable fill-up point before the island end of the route.</p></CompanyCard>
          <CompanyCard><p><strong>MTL Rent a Car:</strong> A useful operator reference for mixed coastal and inland trips, especially when comparing Podgorica Airport TGD, Tivat Airport TIV, and city pickup handovers.</p></CompanyCard>
          <CompanyCard><p><strong>AMSCG:</strong> Montenegro’s motorists’ association is a credible source for road-condition checks, winter warnings, and current traffic advice before driving the Jadranska Magistrala or mountain routes toward Cetinje.</p></CompanyCard>
          <h3 className="text-xl font-bold mt-6 mb-3">Related guides</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><a href="/driving-parking-guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ulcinj driving and parking advice</a></li>
            <li><a href="/airport-transfers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Airport transfer options</a></li>
            <li><a href="/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frequently asked questions</a></li>
          </ul>
      </Section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default DayTrips;
