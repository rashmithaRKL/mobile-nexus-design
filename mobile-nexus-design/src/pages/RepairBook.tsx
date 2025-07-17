
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, Wrench, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import BookingForm from "@/components/Services/BookingForm";

const RepairBook = () => {
  useScrollToTop();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPart, setSelectedPart] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Get the pre-selected service from navigation state
  const preSelectedService = location.state?.service;

  const brands = [
    "Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Huawei", "Sony", "LG", "Motorola", "Nokia"
  ];

  const modelsByBrand = {
    "Apple": ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 12 Pro Max"],
    "Samsung": ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy Note 20 Ultra", "Galaxy A54", "Galaxy A34"],
    "Google": ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7", "Pixel 6 Pro", "Pixel 6"],
    "OnePlus": ["OnePlus 12", "OnePlus 11", "OnePlus 10 Pro", "OnePlus 9 Pro", "OnePlus Nord 3"],
    "Xiaomi": ["Mi 14 Ultra", "Mi 13 Pro", "Redmi Note 13 Pro", "Redmi 12", "POCO X6 Pro"],
    "Huawei": ["P60 Pro", "Mate 60 Pro", "Nova 11", "P50 Pro"],
    "Sony": ["Xperia 1 V", "Xperia 5 V", "Xperia 10 V"],
    "LG": ["Wing", "V60 ThinQ", "G8 ThinQ"],
    "Motorola": ["Edge 40 Pro", "Moto G84", "Razr 40 Ultra"],
    "Nokia": ["XR21", "G60", "X30"]
  };

  const partsPricing = {
    "Screen": { icon: Smartphone, basePrice: 89, description: "Complete screen assembly replacement" },
    "Battery": { icon: Wrench, basePrice: 59, description: "High-quality battery replacement" },
    "Camera": { icon: Shield, basePrice: 99, description: "Camera module repair or replacement" },
    "Charging Port": { icon: Phone, basePrice: 79, description: "Charging port cleaning or replacement" },
    "Speaker": { icon: Phone, basePrice: 69, description: "Speaker repair or replacement" },
    "Home Button": { icon: Smartphone, basePrice: 49, description: "Home button functionality repair" },
    "Water Damage": { icon: Shield, basePrice: 129, description: "Complete water damage assessment and repair" },
    "Back Glass": { icon: Smartphone, basePrice: 89, description: "Back panel glass replacement" }
  };

  const calculatePrice = () => {
    if (!selectedPart) return 0;
    const basePart = partsPricing[selectedPart];
    if (!basePart) return 0;
    
    let multiplier = 1;
    if (selectedBrand === "Apple") multiplier = 1.3;
    else if (selectedBrand === "Samsung") multiplier = 1.2;
    else if (selectedBrand === "Google") multiplier = 1.15;
    
    return Math.round(basePart.basePrice * multiplier);
  };

  const handleProceedToBooking = () => {
    if (!selectedBrand || !selectedModel || !selectedPart) {
      alert("Please select brand, model, and part to continue");
      return;
    }
    setShowBookingForm(true);
  };

  const services = Object.keys(partsPricing).map(part => ({
    title: `${part} Repair`,
    price: `From $${calculatePrice() || partsPricing[part].basePrice}`
  }));

  if (showBookingForm) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="outline" 
              onClick={() => setShowBookingForm(false)}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Selection
            </Button>
            
            <div className="mb-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Selected Repair Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Brand:</span>
                  <p className="font-medium">{selectedBrand}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Model:</span>
                  <p className="font-medium">{selectedModel}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Part:</span>
                  <p className="font-medium">{selectedPart}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <span className="text-lg font-bold text-primary">
                  Estimated Price: ${calculatePrice()}
                </span>
              </div>
            </div>

            <BookingForm 
              selectedService={{ 
                title: `${selectedPart} Repair - ${selectedBrand} ${selectedModel}`,
                price: `$${calculatePrice()}`
              }}
              onServiceSelect={() => {}}
              services={services}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <ScrollAnimationWrapper animation="fadeIn">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Repair
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your device brand, model, and the part that needs repair to get an instant quote
            </p>
            
            {preSelectedService && (
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Pre-selected service:</p>
                <p className="font-medium text-primary">{preSelectedService.title}</p>
              </div>
            )}
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Selection Form */}
      <ScrollAnimationWrapper animation="slideInLeft" delay={200}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Device & Repair Selection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Brand Selection */}
                <div className="space-y-2">
                  <Label htmlFor="brand">Select Brand *</Label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your device brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Model Selection */}
                <div className="space-y-2">
                  <Label htmlFor="model">Select Model *</Label>
                  <Select 
                    value={selectedModel} 
                    onValueChange={setSelectedModel}
                    disabled={!selectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={selectedBrand ? "Choose your device model" : "Select brand first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedBrand && modelsByBrand[selectedBrand]?.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Part Selection */}
                <div className="space-y-2">
                  <Label htmlFor="part">Select Part to Repair *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(partsPricing).map(([part, details]) => {
                      const Icon = details.icon;
                      const isSelected = selectedPart === part;
                      const price = selectedBrand ? calculatePrice() : details.basePrice;
                      
                      return (
                        <Card 
                          key={part}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            isSelected ? 'ring-2 ring-primary bg-primary/5' : ''
                          }`}
                          onClick={() => setSelectedPart(part)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium">{part}</h4>
                                <p className="text-sm text-muted-foreground">{details.description}</p>
                                <p className="text-sm font-medium text-primary mt-1">
                                  From ${selectedBrand && selectedPart === part ? price : details.basePrice}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Price Summary */}
                {selectedBrand && selectedModel && selectedPart && (
                  <ScrollAnimationWrapper animation="scaleIn">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Repair Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Device:</span>
                          <span className="font-medium">{selectedBrand} {selectedModel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Part:</span>
                          <span className="font-medium">{selectedPart}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-primary border-t pt-2">
                          <span>Estimated Price:</span>
                          <span>${calculatePrice()}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={handleProceedToBooking}
                        className="w-full mt-6"
                        size="lg"
                      >
                        Proceed to Booking
                      </Button>
                    </div>
                  </ScrollAnimationWrapper>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <Footer />
    </div>
  );
};

export default RepairBook;
