
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smartphone, Wrench, Clock, Shield, CheckCircle, Star, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Services = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const services = [
    {
      icon: Smartphone,
      title: "Screen Repair",
      description: "Professional screen replacement for all major smartphone brands",
      price: "From $89",
      duration: "30-60 minutes",
      warranty: "6 months",
      popular: true
    },
    {
      icon: Wrench,
      title: "Battery Replacement",
      description: "Replace worn-out batteries to restore your phone's performance",
      price: "From $59",
      duration: "20-30 minutes",
      warranty: "12 months",
      popular: false
    },
    {
      icon: Phone,
      title: "Water Damage Repair",
      description: "Emergency water damage assessment and restoration services",
      price: "From $129",
      duration: "2-24 hours",
      warranty: "3 months",
      popular: false
    },
    {
      icon: Shield,
      title: "Camera Repair",
      description: "Fix camera issues, lens replacement, and sensor problems",
      price: "From $99",
      duration: "45-90 minutes",
      warranty: "6 months",
      popular: false
    }
  ];

  const features = [
    { icon: Clock, title: "Quick Turnaround", description: "Most repairs completed within the hour" },
    { icon: Shield, title: "Warranty Included", description: "Up to 12 months warranty on all repairs" },
    { icon: CheckCircle, title: "Quality Parts", description: "Only genuine and high-quality replacement parts" },
    { icon: Star, title: "Expert Technicians", description: "Certified professionals with years of experience" }
  ];

  const repairProcess = [
    { step: 1, title: "Diagnosis", description: "Free assessment of your device's issues" },
    { step: 2, title: "Quote", description: "Transparent pricing with no hidden fees" },
    { step: 3, title: "Repair", description: "Professional repair using quality parts" },
    { step: 4, title: "Testing", description: "Thorough testing to ensure everything works" },
    { step: 5, title: "Warranty", description: "Comprehensive warranty on all repairs" }
  ];

  const handleBookService = (service) => {
    navigate('/repair-book', { 
      state: { 
        service: {
          title: service.title,
          price: service.price
        }
      }
    });
  };

  const handleGeneralBooking = () => {
    navigate('/repair-book');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <ScrollAnimationWrapper animation="fadeIn">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Phone Repair Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional, reliable, and fast mobile phone repair services. 
              Get your device back to perfect working condition with our expert technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleGeneralBooking}>
                <Calendar className="mr-2 h-5 w-5" />
                Book Repair Now
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Services Grid */}
      <ScrollAnimationWrapper animation="slideInLeft" delay={200}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Repair Services</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive mobile phone repair solutions for all major brands
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ScrollAnimationWrapper key={index} animation="scaleIn" delay={index * 100}>
                  <Card className="relative hover:shadow-lg transition-shadow">
                    {service.popular && (
                      <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Price:</span>
                          <span className="font-semibold text-primary">{service.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Duration:</span>
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Warranty:</span>
                          <span className="text-sm">{service.warranty}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={() => handleBookService(service)}
                      >
                        Book This Service
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Features Section */}
      <ScrollAnimationWrapper animation="slideInRight" delay={400}>
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-muted-foreground">
                We're committed to providing the best repair experience possible
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimationWrapper key={index} animation="fadeIn" delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Repair Process */}
      <ScrollAnimationWrapper animation="slideInLeft" delay={600}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Repair Process</h2>
              <p className="text-xl text-muted-foreground">
                Simple, transparent, and efficient - here's how we fix your device
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {repairProcess.map((step, index) => (
                <ScrollAnimationWrapper key={index} animation="scaleIn" delay={index * 100}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* CTA Section */}
      <ScrollAnimationWrapper animation="fadeIn" delay={800}>
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Get Your Phone Fixed?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let a broken phone slow you down. Book your repair service today 
              and get back to what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleGeneralBooking}>
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Repair
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <Footer />
    </div>
  );
};

export default Services;
