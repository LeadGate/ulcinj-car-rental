import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import { Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@ulcinj-car-rental.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us — Ulcinj Car Rental"
        description="Get in touch with our team for car rental advice in Ulcinj, Montenegro. We help with bookings, insurance questions, Albania border crossing, and parking tips."
        canonical="https://ulcinj-car-rental.com/contact"
      />

      <Breadcrumbs items={[{ label: "Contact" }]} />

      <Section
        icon={<Mail className="w-6 h-6" />}
        title="Contact Us"
      >
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Have a question about car rental in Ulcinj? Whether you need help comparing agencies, understanding insurance options, or planning your route from Podgorica Airport TGD or Tivat Airport TIV, our team is here to help.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-green-800 font-semibold">Thank you for your message! We'll respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t">
          <h2 className="text-xl font-bold mb-3">Other Ways to Reach Us</h2>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:info@ulcinj-car-rental.com" className="text-primary hover:underline">info@ulcinj-car-rental.com</a></p>
          <p className="text-gray-700 mb-2">Response time: within 24 hours</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-3">Useful Emergency Contacts</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Police emergency: <strong>122</strong></li>
            <li>AMSCG Roadside Assistance: <strong>19807</strong> (24/7)</li>
            <li>DOO Parking Servis Ulcinj: <strong>+382 30 416 190</strong></li>
            <li>Podgorica Airport (TGD): <strong>+382 20 444 244</strong></li>
            <li>Tivat Airport (TIV): <strong>+382 32 671 894</strong></li>
          </ul>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
