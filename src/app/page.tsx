"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAboutFeatures from '@/components/sections/about/SplitAboutFeatures';
import FeatureCardSeventeen from '@/components/sections/feature/FeatureCardSeventeen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFourteen from '@/components/sections/testimonial/TestimonialCardFourteen';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Chef, Leaf, Heart, Home, Flame, Soup, Package, Droplet } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Korean Kitchen"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Korean Kitchen"
          description="Authentic Korean cuisine crafted with tradition and passion. Experience bold flavors and time-honored recipes in every bite."
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Now", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942213421-itklw285.jpg"
          imageAlt="Delicious Korean bibimbap rice bowl"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutFeatures
          title="Our Story"
          features={[
            { text: "Authentic recipes passed down through generations with traditional Korean cooking methods", icon: Chef },
            { text: "Fresh ingredients sourced daily from premium suppliers to ensure quality and flavor", icon: Leaf },
            { text: "Warm hospitality and genuine care creating a welcoming community for every guest", icon: Heart },
            { text: "Modern elegance meets cultural heritage in our thoughtfully designed dining space", icon: Home }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardSeventeen
          title="Signature Dishes"
          description="Explore our carefully curated selection of authentic Korean specialties that define our restaurant's identity"
          features={[
            { id: "1", icon: Flame, text: "Bulgogi" },
            { id: "2", icon: Soup, text: "Kimchi Jjigae" },
            { id: "3", icon: Package, text: "Tteokbokki" },
            { id: "4", icon: Droplet, text: "Bibimbap" }
          ]}
          animationType="slide-up"
          variant="card"
          useUncappedRounding={false}
          useSplitLayout={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Menu Items"
          description="Discover our most beloved dishes, handpicked for their exceptional taste and authentic preparation"
          products={[
            {
              id: "1",
              brand: "Korean Kitchen",
              name: "Premium Beef Bulgogi",
              price: "$18.99",
              rating: 5,
              reviewCount: "324",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942214114-oml47dfe.jpg",
              imageAlt: "Marinated bulgogi beef grilled to perfection"
            },
            {
              id: "2",
              brand: "Korean Kitchen",
              name: "Spicy Kimchi Jjigae",
              price: "$14.99",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942214910-phojcczw.jpg",
              imageAlt: "Traditional kimchi stew with pork and tofu"
            },
            {
              id: "3",
              brand: "Korean Kitchen",
              name: "Mixed Seafood Soup",
              price: "$16.99",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942215656-vgay9wyv.jpg",
              imageAlt: "Aromatic seafood and vegetable soup"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardFourteen
          title="What Our Guests Say"
          description="Real experiences from diners who have fallen in love with our authentic Korean cuisine"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@foodlover",
              testimonial: "The most authentic Korean food I've had outside of Seoul. Every dish is prepared with care and passion. A true gem!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942216967-8kdzzx4g.jpg"
            },
            {
              id: "2",
              name: "Michael Park",
              handle: "@mikeeats",
              testimonial: "Incredible flavors and such warm hospitality. We came for dinner and felt like family. Can't wait to return!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942217639-dn085vcx.jpg"
            },
            {
              id: "3",
              name: "Emma Johnson",
              handle: "@emmaf",
              testimonial: "The bulgogi is absolutely divine. My friends who've been to Korea say it's just like home. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942218571-6kvfopv8.jpg"
            },
            {
              id: "4",
              name: "David Lee",
              handle: "@davidlicious",
              testimonial: "Best Korean restaurant in the area by far. Fresh ingredients, authentic recipes, and beautiful ambiance. Perfect!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942219174-ftnjlds8.jpg"
            },
            {
              id: "5",
              name: "Lisa Martinez",
              handle: "@lisakitchen",
              testimonial: "Took my family here for a special dinner. The service was exceptional and the food was outstanding. Will definitely be back!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942219953-jkfb3by7.jpg"
            },
            {
              id: "6",
              name: "James Wilson",
              handle: "@jameswilson",
              testimonial: "Finally found authentic Korean cuisine that rivals the restaurants in Korea. Everything is fresh and full of flavor!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942220684-qtwx2rf0.jpg"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Make a Reservation"
          animationType="background-highlight"
          inputPlaceholder="Enter your email"
          buttonText="Reserve"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942221831-okkzoaaw.jpg"
          imageAlt="Korean Kitchen restaurant exterior"
          logoText="Korean Kitchen"
          copyrightText="© 2025 Korean Kitchen. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" },
                { label: "Menu", href: "#" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Feedback", href: "#" }
              ]
            },
            {
              title: "Dining",
              items: [
                { label: "Dine In", href: "#" },
                { label: "Takeout", href: "#" },
                { label: "Catering", href: "#" },
                { label: "Private Events", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}