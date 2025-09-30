import { Metadata } from "next";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact - Taher Said",
  description:
    "Get in touch with Taher Said for collaboration opportunities or questions about my work.",
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600">
            {`I'm always open to discussing new opportunities and collaborations`}
          </p>
        </div>

        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
