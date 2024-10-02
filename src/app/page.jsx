import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import BlogSections from "../components/BlogSections";
import ContactForm from "../components/ContactForm";
import Profile from "../components/Profile";
// import ServicesSlider from "../components/ServicesSlider";
// import ServicesSliderMini from "../components/ServicesSliderMini";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-16">
        {/* Profile Section */}
        <section id="about">
          <Profile />
        </section>

        {/* Blog Section */}

        {/* Service Section */}

        {/* ' Connect with me ' Section */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
