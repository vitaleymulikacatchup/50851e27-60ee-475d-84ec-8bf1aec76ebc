"use client"

// Missing imports for referenced components
// HeroBillboardScroll, TextSplitAbout, ProductCardOne, TestimonialCardOne, SocialProofOne, FaqDouble, ContactCenter, FooterBase

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
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
        {/* HeroBillboardScroll component would be rendered here */}
      </div>

      <div id="about" data-section="about">
        {/* TextSplitAbout component would be rendered here */}
      </div>

      <div id="menu" data-section="menu">
        {/* ProductCardOne component would be rendered here */}
      </div>

      <div id="reviews" data-section="reviews">
        {/* TestimonialCardOne component would be rendered here */}
      </div>

      <div id="partners" data-section="partners">
        {/* SocialProofOne component would be rendered here */}
      </div>

      <div id="faq" data-section="faq">
        {/* FaqDouble component would be rendered here */}
      </div>

      <div id="contact" data-section="contact">
        {/* ContactCenter component would be rendered here */}
      </div>

      <div id="footer" data-section="footer">
        {/* FooterBase component would be rendered here */}
      </div>
    </ThemeProvider>
  );
}