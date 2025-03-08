import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSection_2 from "../components/BlogSection_2";
import ContactForm from "../components/ContactForm";
import Profile from "../components/Profile";
import ServicesSlider from "../components/ServicesSlider";
import ServicesSliderMini from "../components/ServicesSliderMini";

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

        <section id="blog">
          <BlogSection_2 />
        </section>

        {/* Service Section */}
        <section id="services">
          <div className="flex md:hidden">
            <ServicesSliderMini />
          </div>

          <div className="hidden md:flex">
            <ServicesSlider />
          </div>
        </section>

        {/* ' Connect with me ' Section */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
