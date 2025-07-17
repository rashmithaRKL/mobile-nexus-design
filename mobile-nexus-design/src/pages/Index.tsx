
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, Headphones, Smartphone, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import FeaturedSection from "@/components/Home/FeaturedSection";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Index = () => {
  useScrollToTop();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing service! My phone was fixed in just 2 hours. The staff was professional and the price was fair.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d2c3b8?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      text: "Great selection of phones and accessories. The website is easy to navigate and delivery was super fast.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      text: "Excellent customer service. They helped me find the perfect phone case and even gave me a discount!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fadeIn">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Premium Mobile
              <span className="text-primary block">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover the latest smartphones, premium accessories, and professional repair services 
              all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/services">
                  Book a Repair
                </Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Smartphone className="h-8 w-8 text-primary/50" />
        </div>
        <div className="absolute bottom-32 right-10 animate-pulse delay-700">
          <Headphones className="h-8 w-8 text-primary/50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose MobileStore?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We provide exceptional service with premium quality products and expert repairs.
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Warranty Protection",
                description: "All products come with comprehensive warranty coverage"
              },
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Fast and free delivery on orders over $50"
              },
              {
                icon: Zap,
                title: "Quick Repairs",
                description: "Expert repair services with same-day turnaround"
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Only authentic products from trusted brands"
              }
            ].map((feature, index) => (
              <ScrollAnimationWrapper key={index} animation="scaleIn" delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with Sliders */}
      <ScrollAnimationWrapper animation="fadeIn">
        <FeaturedSection />
      </ScrollAnimationWrapper>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real reviews from satisfied customers
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimationWrapper key={index} animation="slideInLeft" delay={index * 150}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Mobile Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust MobileStore for their mobile needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
