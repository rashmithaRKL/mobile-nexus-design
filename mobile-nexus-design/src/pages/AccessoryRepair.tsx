
import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import BookingForm from "@/components/Services/BookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Clock, Shield, Wrench } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface Service {
  title: string;
  price: string;
}

const AccessoryRepair = () => {
  useScrollToTop();
  
  const [selectedService, setSelectedService] = useState<Service | undefined>();

  const accessoryRepairServices: Service[] = [
    { title: "Headphone Jack Repair", price: "$19-$39" },
    { title: "Cable Repair", price: "$15-$29" },
    { title: "Wireless Earbuds Repair", price: "$39-$79" },
    { title: "Power Bank Repair", price: "$29-$59" },
    { title: "Case Replacement", price: "$9-$19" },
    { title: "Screen Protector Installation", price: "$5-$15" },
    { title: "Charger Repair", price: "$19-$39" },
    { title: "Bluetooth Speaker Repair", price: "$49-$99" },
  ];

  const features = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most accessory repairs completed within hours"
    },
    {
      icon: Shield,
      title: "Quality Parts",
      description: "Only genuine and high-quality replacement parts"
    },
    {
      icon: Wrench,
      title: "Expert Care",
      description: "Specialized technicians for each accessory type"
    }
  ];

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper animation="fadeIn">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Headphones className="h-16 w-16 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Accessory Repair Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional repair services for all your mobile accessories with quick and reliable solutions
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Accessory Repair Services</h2>
                <p className="text-xl text-muted-foreground">
                  We fix all types of mobile accessories and peripherals
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {accessoryRepairServices.map((service, index) => (
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
                services={accessoryRepairServices}
              />
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessoryRepair;
