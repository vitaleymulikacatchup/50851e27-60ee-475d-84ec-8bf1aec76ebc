"use client";

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Coffee, Star, MessageCircle, Handshake, HelpCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Onana Coffee"
          button={{
            text: "Order Now",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Premium Coffee Experience"
          description="Discover the perfect blend of artisan craftsmanship and premium coffee beans at Onana Coffee. Every cup tells a story of quality and passion."
          tag="Welcome to Onana"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "#menu" },
            { text: "Visit Us", href: "#contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Onana Coffee shop interior with warm lighting"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "At Onana Coffee, we believe that great coffee is more than just a beverage – it's a daily ritual that brings people together.",
            "Founded by passionate coffee enthusiasts, we source our beans directly from sustainable farms and roast them with care to bring you the perfect cup every time."
          ]}
          buttons={[{ text: "Learn More", href: "#menu" }]}
          showBorder={true}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Blends"
          description="Discover our carefully crafted selection of premium coffee blends, each with its unique character and flavor profile."
          tag="Coffee Menu"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "House Blend",
              price: "$12.99",
              imageSrc: "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "House blend coffee beans"
            },
            {
              id: "2",
              name: "Signature Espresso",
              price: "$15.99",
              imageSrc: "https://images.pexels.com/photos/17312403/pexels-photo-17312403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium espresso cup"
            },
            {
              id: "3",
              name: "Cold Brew Special",
              price: "$8.99",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee glass"
            }
          ]}
          buttons={[{ text: "View Full Menu", href: "#contact" }]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who have experienced the Onana Coffee difference."
          tag="Customer Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy customer Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Local Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/13736138/pexels-photo-13736138.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business owner Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Freelance Designer",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Designer Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Software Engineer",
              company: "Tech Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Engineer David Kim"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted Partnerships"
          description="We work with the finest suppliers and organizations to bring you exceptional coffee experiences."
          tag="Our Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/34578434/pexels-photo-34578434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30677598/pexels-photo-30677598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820663/pexels-photo-4820663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/29324430/pexels-photo-29324430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34517070/pexels-photo-34517070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1088120/pexels-photo-1088120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={45}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee, services, and location."
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes Onana Coffee special?",
              content: "We source premium beans directly from sustainable farms and roast them fresh in-house. Our experienced baristas craft each cup with care and passion."
            },
            {
              id: "2",
              title: "Do you offer plant-based milk alternatives?",
              content: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk as alternatives to dairy. All our plant-based options are organic and locally sourced when possible."
            },
            {
              id: "3",
              title: "Can I purchase beans to take home?",
              content: "Absolutely! We sell our signature blends and single-origin beans for home brewing. All beans are available in whole bean or ground options."
            },
            {
              id: "4",
              title: "Do you offer catering services?",
              content: "Yes, we provide coffee catering for corporate events, meetings, and special occasions. Contact us for custom packages and pricing."
            },
            {
              id: "5",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday 6:30 AM - 6:00 PM, Saturday 7:00 AM - 7:00 PM, and Sunday 8:00 AM - 5:00 PM."
            },
            {
              id: "6",
              title: "Do you have WiFi and workspace areas?",
              content: "Yes! We offer complimentary high-speed WiFi and have comfortable seating areas perfect for work, study, or casual meetings."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join Our Coffee Community"
          description="Subscribe to receive updates about new blends, special offers, and coffee brewing tips from our expert baristas."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails from Onana Coffee. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Onana Coffee"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Blends", href: "#menu" },
                { label: "Espresso", href: "#menu" },
                { label: "Cold Brew", href: "#menu" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "#about" },
                { label: "Sustainability", href: "#about" },
                { label: "Partners", href: "#partners" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "#contact" },
                { label: "Catering", href: "#contact" },
                { label: "Support", href: "#faq" }
              ]
            }
          ]}
          copyrightText="© 2025 | Onana Coffee"
        />
      </div>
    </ThemeProvider>
  );
}