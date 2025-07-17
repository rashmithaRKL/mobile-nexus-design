
import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import BookingForm from "@/components/Services/BookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Clock, Shield, Wrench } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface Service {
  title: string;
  price: string;
}

const PhoneRepair = () => {
  useScrollToTop();
  
  const [selectedService, setSelectedService] = useState<Service | undefined>();

  const phoneRepairServices: Service[] = [
    { title: "Screen Replacement", price: "$89-$299" },
    { title: "Battery Replacement", price: "$49-$89" },
    { title: "Camera Repair", price: "$79-$149" },
    { title: "Charging Port Repair", price: "$59-$99" },
    { title: "Speaker Repair", price: "$39-$79" },
    { title: "Water Damage Repair", price: "$99-$199" },
    { title: "Button Repair", price: "$29-$69" },
    { title: "Software Issues", price: "$39-$79" },
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Service",
      description: "Most repairs completed within 24 hours"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "90-day warranty on all repairs"
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper animation="fadeIn">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Smartphone className="h-16 w-16 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Phone Repair Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional mobile phone repair services with quick turnaround times and quality guarantees
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimationWrapper key={feature.title} animation="scaleIn" delay={index * 200}>
                  <Card className="text-center hover-scale">
                    <CardContent className="p-6">
                      <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper animation="fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Phone Repair Services</h2>
                <p className="text-xl text-muted-foreground">
                  We repair all major phone brands and models
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {phoneRepairServices.map((service, index) => (
                <ScrollAnimationWrapper key={service.title} animation="slideInLeft" delay={index * 100}>
                  <Card className="hover-scale cursor-pointer transition-all duration-200 hover:shadow-lg" 
                        onClick={() => setSelectedService(service)}>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="text-primary font-semibold">
                          {service.price}
                        </Badge>
                        <span className="text-sm text-muted-foreground">Click to book</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Booking Form */}
            <ScrollAnimationWrapper animation="fadeIn">
              <BookingForm 
                selectedService={selectedService}
                onServiceSelect={setSelectedService}
                services={phoneRepairServices}
              />
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhoneRepair;
