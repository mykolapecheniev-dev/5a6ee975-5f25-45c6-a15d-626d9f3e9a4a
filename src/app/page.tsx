"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "collection",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Bakteria"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "radial-gradient",
      }}
      logoText="Bakteria"
      description="Bespoke floral arrangements crafted with artisanal care. Experience the organic beauty of curated botanical design."
      buttons={[
        {
          text: "View Collection",
          href: "#collection",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      layoutOrder="default"
      imageSrc="https://pixabay.com/get/g4b37e55be1ceac1bcfda7141c73aec24d5abffa97d529980f62e2b17431b43f2fbbef0d772146befece5d7075950949ab2f68218dc7f13098b840caa8dc074ab_1280.jpg"
      imageAlt="Bakteria floral arrangement"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Artisanal Botany"
      description={[
        "Bakteria started as a small exploration into the organic interplay between light and petal. Today, we are a studio dedicated to capturing ephemeral beauty.",
        "Our designs prioritize natural form, seasonal rarity, and intentional composition. Every arrangement tells a unique story rooted in the seasons.",
      ]}
    />
  </div>

  <div id="collection" data-section="collection">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Midnight Bloom",
          price: "$120",
          variant: "Bouquet",
          imageSrc: "https://pixabay.com/get/gbd259bdf972edc98af22e08a512f653c9b0fb08d7b781b6f9525f76edb8465adaef656cc09b26ef6e74134a2513ed16d33dafa8b4bafce7c348e5876d98907e8_1280.jpg",
        },
        {
          id: "2",
          name: "Earth & Stone",
          price: "$85",
          variant: "Vase Arrangement",
          imageSrc: "https://pixabay.com/get/g3cf333b05be5f791d6e02b8edca395d2795fffe5184b3cab660f83a7038dc284e06338c1b75d33dcf98a6ceb51b3cea70d0167eaf1a569a3e669a8334380039e_1280.jpg",
        },
        {
          id: "3",
          name: "Spring Essence",
          price: "$150",
          variant: "Large Installation",
          imageSrc: "https://pixabay.com/get/gaafd04b011098ae59ee68100af6907bc7005e68a5f67007c6fcf335b912386dcf08c81a03aa273dee5d275bbb33bc1e088fc27fc27d665563719cad54b00792d_1280.jpg",
        },
      ]}
      title="Seasonal Collections"
      description="Curated arrangements tailored for your space and special occasions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Elena Thorne",
          role: "Creative Director",
          company: "DesignCo",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g6960026b13677ded541edcafa257d933a244d84f80f1f28fbb4e9807d50048043b4bccee8fd10d8cb4a7b2dd3d7986c0cb134ab95a36eb85b299b913e4ad78fe_1280.jpg?_wi=1",
        },
        {
          id: "2",
          name: "Marcus Vane",
          role: "Architect",
          company: "Vane Arch",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g6960026b13677ded541edcafa257d933a244d84f80f1f28fbb4e9807d50048043b4bccee8fd10d8cb4a7b2dd3d7986c0cb134ab95a36eb85b299b913e4ad78fe_1280.jpg?_wi=2",
        },
        {
          id: "3",
          name: "Sienna Roy",
          role: "Event Planner",
          company: "Events Pro",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g6960026b13677ded541edcafa257d933a244d84f80f1f28fbb4e9807d50048043b4bccee8fd10d8cb4a7b2dd3d7986c0cb134ab95a36eb85b299b913e4ad78fe_1280.jpg?_wi=3",
        },
        {
          id: "4",
          name: "Julian Fox",
          role: "Artist",
          company: "Studio X",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g6960026b13677ded541edcafa257d933a244d84f80f1f28fbb4e9807d50048043b4bccee8fd10d8cb4a7b2dd3d7986c0cb134ab95a36eb85b299b913e4ad78fe_1280.jpg?_wi=4",
        },
      ]}
      kpiItems={[
        {
          value: "120+",
          label: "Bespoke Designs",
        },
        {
          value: "95%",
          label: "Client Return",
        },
        {
          value: "45",
          label: "Flower Species",
        },
      ]}
      title="Botanical Stories"
      description="Client memories crafted by our studio."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Story"
      description="Have a specific vision? Reach out to our design team to discuss your next floral arrangement or installation."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your project",
        rows: 4,
        required: true,
      }}
      imageSrc="https://pixabay.com/get/g6706f5be6c43a2bbdef5a1a149916a540030cb6e886de1ec5738ea39bfae44e1574b6c45bb88c98347bc04464f52312585b3128d23ea3b9b42844eaab87d92c8_1280.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Bakteria",
          items: [
            {
              label: "Our Process",
              href: "#about",
            },
            {
              label: "Catalog",
              href: "#collection",
            },
            {
              label: "Collaborate",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Care Guide",
              href: "#",
            },
            {
              label: "Shipping Info",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Bakteria Flower Studio."
      bottomRightText="Crafted in the Studio."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
