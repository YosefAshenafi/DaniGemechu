import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-40 bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 max-w-4xl py-20 animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-5xl font-serif font-bold text-primary mb-10">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600 space-y-8 font-light leading-relaxed">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and document any personal information provided through our website.
          </p>
          <h2 className="text-2xl font-serif font-bold text-primary">Information We Collect</h2>
          <p>
            When you use the contact form on this website, we collect personal information such as your name, email address, and the content of your message. This data is used solely to respond to your inquiry and provide legal consultations.
          </p>
          <h2 className="text-2xl font-serif font-bold text-primary">Use of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All client interactions are treated with the highest degree of professional confidentiality as required by Ethiopian legal ethics.
          </p>
          <h2 className="text-2xl font-serif font-bold text-primary">Security</h2>
          <p>
            While we implement appropriate security measures to protect your personal information, please be aware that no method of transmission over the internet is 100% secure.
          </p>
          <h2 className="text-2xl font-serif font-bold text-primary">Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us at danielgemechulawoffice@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
