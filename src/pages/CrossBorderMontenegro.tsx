import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car, ShieldCheck, AlertTriangle, FileText, DollarSign, HelpCircle } from "lucide-react";

const CrossBorderMontenegro = () => {
  return (
    <Layout>
      <SEOHead
        title="Cross-Border Car Rental from Ulcinj: Albania, Kosovo and Croatia 2026"
        description="Ulcinj is Montenegro's southern gateway to Albania. Sukobin joint crossing, the mandatory Green Card for Albania, the Kosovo €138 payload trap, cross-border fees and 2026 rules."
        canonical="https://ulcinj-car-rental.com/cross-border-car-rental-montenegro/"
        ogImage="/5.webp"
      />

      <Breadcrumbs items={[{ label: "Cross-Border Car Rental" }]} />

      <HeroSection
        title="Cross-Border Car Rental from Ulcinj: Albania, Kosovo and Croatia"
        subtitle={<><p>Ulcinj is Montenegro's southern outpost — the closest town to Albania and the natural gateway to Albania and Kosovo. Most Ulcinj renters who cross a border head south into Albania, not north into Croatia. That changes what you need to prepare: Albania is the one neighbour where a paper Green Card is genuinely mandatory, and it must be arranged before you reach the crossing you will actually use.</p></>}
        image="/5.webp"
        imageAlt="Cross-border car rental from Ulcinj, Montenegro"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare-cars"
      />

      <AffiliateWidget />

      <Section icon={<Car className="w-6 h-6" />} title="Ulcinj to Albania: The Short Run, One Document You Can't Skip">
        <p className="text-gray-700 mb-4 leading-relaxed">From Ulcinj, Shkodër is roughly 26–40 km away — about 30 to 50 minutes of driving. You cross at Sukobin (Montenegrin side) / Muriqan (Albanian side), which operates as a single joint checkpoint: both countries' border control sit in the same facility, so you are not clearing two separate booths. In practice this roughly halves the processing you would expect at a normal two-booth crossing. It runs 24/7, though summer weekends can still back up to about 2 hours at peak times.</p>
        <WarningBox><p>⚠️ Albania is the one border in this region where a <strong>Green Card is legally required</strong>, not just a commercial upsell — and Sukobin/Muriqan does <strong>not sell them on site</strong>. Arrange the Green Card through your rental company before you leave Ulcinj, and confirm in writing that it covers Albania. The Božaj crossing near Podgorica sells them for ~€15/14 days, but that is not your route.</p></WarningBox>
      </Section>

      <Section icon={<ShieldCheck className="w-6 h-6" />} title="The Green Card Myth for Croatia, Bosnia, and Serbia" alt>
        <p className="text-gray-700 mb-4 leading-relaxed">Worth saying plainly, because rental companies don't always explain it: for Croatia, Bosnia and Herzegovina, and Serbia, you do <strong>not</strong> legally need a Green Card. These countries are part of the <a href="https://www.cobx.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Multilateral Agreement</a> license-plate subsystem — your Montenegrin plates themselves prove valid insurance at the border. If your rental company charges a "Green Card fee" for a Croatia or Serbia trip, that is a <strong>commercial surcharge</strong> for cross-border authorization, not a legal border requirement. Kosovo is the exception on the other side — outside the Green Card system entirely.</p>
        <DataTable headers={["Country", "Green Card", "Detail"]} rows={[
          ["Albania", "Required", "Mandatory; arrange in advance (not sold at Sukobin)"],
          ["Kosovo", "Special case", "Outside Green Card system — border TPL €15/15 days; often banned"],
          ["Croatia", "Not required", "Multilateral Agreement — plate proves insurance"],
          ["Bosnia & Herzegovina", "Not required", "Same subsystem — no Green Card by law"],
          ["Serbia", "Not required", "Multilateral Agreement — 0.03% alcohol limit + vignette"],
        ]} />
      </Section>

      <Section icon={<AlertTriangle className="w-6 h-6" />} title="Kosovo from Ulcinj: The Payload Trap">
        <p className="text-gray-700 mb-4 leading-relaxed">Kosovo is a real option from Ulcinj if you continue to Pristina or Prizren, but it carries a cost trap that catches renters by surprise. Because Kosovo is outside the Green Card system, you buy short-term third-party liability insurance from the <a href="https://www.bks-ks.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Kosovo Insurance Bureau</a> directly at the border.</p>
        <WarningBox><p>⚠️ For a normal passenger car, border TPL is roughly <strong>€15 for 15 days</strong>. But if your rental is a large SUV or pickup classified with a <strong>payload over one tonne</strong>, the same insurance jumps to around <strong>€138</strong> — the local TPL schedule treats it as commercial-adjacent. If you booked anything bigger than a standard sedan or compact SUV in Ulcinj and you are heading to Kosovo, ask your rental company for the vehicle's payload classification before you go.</p></WarningBox>
        <InfoBox><p>Two more checks: the <strong>Kula / Kulina</strong> crossing (the one from the south) is <strong>not 24/7</strong> — it runs roughly 06:00 to 22:00, with possible winter closures, so plan your return before it shuts. And many Montenegro companies (Europcar, Stella Car) ban Kosovo outright — verify in writing before you plan a leg there.</p></InfoBox>
      </Section>

      <ImageDivider src="/2.webp" alt="Ulcinj cross-border car rental" />

      <Section icon={<FileText className="w-6 h-6" />} title="Documents to Carry at Every Crossing" alt>
        <p className="text-gray-700 mb-4 leading-relaxed">Whichever direction you are headed, carry these in the car — not in a photo on your phone:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4 leading-relaxed">
          <li>The <strong>original vehicle registration document</strong> — copies are routinely rejected at Montenegrin, Albanian and neighbouring borders. Confirm it is in the glovebox before you leave Ulcinj.</li>
          <li>Your <strong>rental agreement plus a written cross-border authorization</strong> naming the countries you may enter. A verbal "that's fine" is not enough if you are stopped.</li>
          <li>Your <strong>passport</strong> — the Croatian/Schengen side now runs the EU's <a href="https://travel-europe.europa.eu/ees_en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Entry/Exit System (EES)</a> biometric checks, which add a few minutes at that border.</li>
          <li>The <strong>paper Green Card</strong>, physically in hand, if Albania is on your route.</li>
        </ul>
      </Section>

      <Section icon={<Car className="w-6 h-6" />} title="Croatia and Bosnia: The Long Way from Ulcinj">
        <p className="text-gray-700 mb-4 leading-relaxed">Worth being upfront: Croatia is not the natural direction from Ulcinj. It is roughly 185 km away — a longer, more deliberate trip than the quick hop to Shkodër, since you drive most of the length of the Montenegrin coast first. If Dubrovnik is genuinely on your itinerary it is entirely doable — plates alone satisfy the insurance requirement — but factor in the drive time and the EES passport check, and expect your company to apply its standard cross-border fee regardless of the (non-mandatory) Green Card question. Bosnia sits under the same insurance rules and is a realistic add-on if you route north through the interior.</p>
      </Section>

      <Section icon={<DollarSign className="w-6 h-6" />} title="Cross-Border Fees by Company" alt>
        <p className="text-gray-700 mb-4 leading-relaxed">Even where a Green Card is not legally required, companies charge a separate cross-border fee to authorize the car leaving the country, and these vary a lot. All figures below are indicative (Summer 2024) — verify directly with your rental company before you book, since terms shift by season.</p>
        <DataTable headers={["Company", "Cross-border fee", "Notes"]} rows={[
          ["Europcar Montenegro", "€6.05/day (max €60.50)", "Kosovo, Greece, Bulgaria, Romania not allowed"],
          ["Sixt Montenegro", "€40 flat", "Kosovo not included"],
          ["MTL Rent", "€50 flat + 200 km/day", "€0.10/km over the daily limit"],
          ["CarWiz", "€50 flat", "All countries"],
          ["Stella Car", "€25 flat", "Kosovo banned"],
        ]} />
      </Section>

      <Section icon={<Car className="w-6 h-6" />} title="Practical Tips for the Ulcinj Border Run">
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4 leading-relaxed">
          <li>Book your cross-border authorization and Green Card (if Albania is on the plan) when you reserve, not at pickup — Green Cards take time and aren't sold at Sukobin.</li>
          <li>Never let a GPS route sneak you across an unauthorized border. Companies like AbbyCar charge a flat <strong>€500</strong> for exactly this, on top of voiding your insurance.</li>
          <li>Heading toward Serbia, note the strict <strong>0.03%</strong> alcohol limit (effectively zero for newer drivers) and budget for the Serbian vignette.</li>
          <li>Driving the mountain route to Kosovo between 15 November and 1 April requires winter tyres with at least <strong>4.0 mm</strong> tread — a legal requirement and genuinely relevant terrain.</li>
        </ul>
      </Section>

      <Section icon={<HelpCircle className="w-6 h-6" />} title="Frequently Asked Questions" alt>
        <div className="space-y-6">
          <div><h3 className="font-semibold text-lg mb-2">Can I drive my Ulcinj rental car into Albania?</h3><p className="text-gray-700 leading-relaxed">Yes, and it is the most common cross-border trip from Ulcinj — Shkodër is only 26–40 km away via the Sukobin/Muriqan joint checkpoint. You need a paper Green Card, arranged in advance, since it is not sold at that crossing.</p></div>
          <div><h3 className="font-semibold text-lg mb-2">Do I need a Green Card for Kosovo?</h3><p className="text-gray-700 leading-relaxed">No — Kosovo sits outside the Green Card system. You buy short-term border insurance instead: about €15 for 15 days for a normal car, but roughly €138 if your rental is classified with a payload over one tonne. Confirm your vehicle's class first, and check your company doesn't ban Kosovo — Europcar and Stella Car do.</p></div>
          <div><h3 className="font-semibold text-lg mb-2">How long does the Sukobin/Muriqan crossing take?</h3><p className="text-gray-700 leading-relaxed">It is a single joint checkpoint covering both Montenegrin and Albanian control in one stop, which roughly halves typical processing versus a two-booth border. Summer weekend queues can still stretch up to about 2 hours.</p></div>
          <div><h3 className="font-semibold text-lg mb-2">Is a Green Card required for Croatia, Bosnia or Serbia?</h3><p className="text-gray-700 leading-relaxed">No. These fall under the Multilateral Agreement license-plate system, so your plates alone prove valid insurance. Any "Green Card fee" for those routes is a commercial surcharge, not a border-mandated cost.</p></div>
          <div><h3 className="font-semibold text-lg mb-2">What documents must my rental company provide for a border crossing?</h3><p className="text-gray-700 leading-relaxed">The original vehicle registration (not a copy), a signed rental agreement with written cross-border authorization naming the countries, and — for Albania — a physical paper Green Card. Verify all are in the car before leaving Ulcinj.</p></div>
          <div><h3 className="font-semibold text-lg mb-2">Is Croatia a realistic day trip from a car rented in Ulcinj?</h3><p className="text-gray-700 leading-relaxed">Not really — it is about 185 km away, much further than Albania, and best treated as a planned multi-day leg rather than a quick crossing.</p></div>
        </div>
      </Section>
    </Layout>
  );
};

export default CrossBorderMontenegro;
