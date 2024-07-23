import { contactData } from "@/utils/placeholder-data";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-12">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24 gap-10">

                    <div className="bg-muted w-full lg:w-[50%] order-2 lg:order-none space-y-5 rounded-xl p-6">
                        <ContactForm />
                    </div>

                    <div className="w-full lg:w-[50%] order-1 lg:order-none mb-8 lg:mb-0 lg:pl-10">
                        <ContactInfo content={contactData} />
                    </div>

                </div>
            </div>
        </section>
    )
}