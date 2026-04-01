import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <div className="flex flex-col min-h-screen pt-40 bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 max-w-4xl py-20 animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-5xl font-serif font-bold text-primary mb-10">Legal Disclaimer</h1>
        <div className="prose prose-lg text-gray-600 space-y-8 font-light leading-relaxed">
          <p>
            The information contained on this website is for general informational purposes only and does not constitute legal advice. You should not act or refrain from acting on the basis of any content included in this site without searching for the appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the recipient's jurisdiction.
          </p>
          <p>
            The transmission of information from this website does not create an attorney-client relationship between you and Daniel Gemechu. Any information sent to Daniel Gemechu via e-mail or through this website is not secure and is done so on a non-confidential basis.
          </p>
          <p>
            Daniel Gemechu Werdofa is a licensed federal court advocate in Addis Ababa, Ethiopia. All legal matters are subject to the laws and regulations of the Federal Democratic Republic of Ethiopia.
          </p>
          <p>
            Past results described on this website do not guarantee a similar outcome in future legal matters.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
