"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Tag } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero-img", url: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { id: "about-img", url: "https://images.pexels.com/photos/3771814/pexels-photo-3771814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Unrecognizable cook in uniform standing at table doing noodles from dough in kitchen at home" },
  { id: "product-img-1", url: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { id: "faq-img", url: "https://images.pexels.com/photos/12872903/pexels-photo-12872903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A rich chocolate dessert garnished with hazelnuts in a stylish setting with artistic decor." },
  { id: "contact-img", url: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Appetizing gourmet pizza cooked in a wood-fired oven, showcasing artisanal toppings." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "product" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
          buttonText="Order Now"
          buttonVariant="slide-background"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Enjoy authentic Italian pizzas right at your doorstep. Made with the freshest ingredients."
            imageSrc="https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "View Menu", href: "product" },
              { text: "Reserve a Table", href: "contact" }
            ]}
            imagePosition="left"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "We are passionate about bringing the best of Italy to your table.",
              "Our pizzeria combines traditional recipes with a modern touch."
            ]}
            buttons={[
              { text: "Learn More", href: "about" }
            ]}
            tagIcon={Tag}
            showBorder={true}
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[{ id: "1", name: "Pepperoni Pizza", price: "$12", imageSrc: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }]}
            title="Our Menu"
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FaqDouble
            faqs={[
              { id: "1", title: "Do you offer delivery?", content: "Yes, we deliver within a 10-mile radius." },
              { id: "2", title: "Are there vegetarian options?", content: "Yes, we have a variety of vegetarian pizzas and sides." }
            ]}
            title="Frequently Asked Questions"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Get in Touch"
            description="Contact us for reservations, orders, or any queries."
            imageSrc="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttonText="Submit"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-red-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[{ items: [
              { label: "Home", href: "hero" },
              { label: "Menu", href: "product" },
              { label: "Contact", href: "contact" }
            ] }]} 
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
