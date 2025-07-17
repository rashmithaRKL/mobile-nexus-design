
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const FeaturedSection = () => {
  const [phonesIndex, setPhonesIndex] = useState(0);
  const [accessoriesIndex, setAccessoriesIndex] = useState(0);

  const phones = products.filter(p => p.category === "mobile-phones").slice(0, 8);
  const accessories = products.filter(p => p.category === "accessories").slice(0, 8);

  const itemsPerView = 4;
  const maxPhonesIndex = Math.max(0, phones.length - itemsPerView);
  const maxAccessoriesIndex = Math.max(0, accessories.length - itemsPerView);

  const nextPhones = useCallback(() => {
    setPhonesIndex(prev => Math.min(prev + 1, maxPhonesIndex));
  }, [maxPhonesIndex]);

  const prevPhones = useCallback(() => {
    setPhonesIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const nextAccessories = useCallback(() => {
    setAccessoriesIndex(prev => Math.min(prev + 1, maxAccessoriesIndex));
  }, [maxAccessoriesIndex]);

  const prevAccessories = useCallback(() => {
    setAccessoriesIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const ProductSlider = ({ 
    products: sliderProducts, 
    currentIndex, 
    onNext, 
    onPrev, 
    maxIndex,
    sectionKey
  }: {
    products: typeof phones;
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
    maxIndex: number;
    sectionKey: string;
  }) => (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {sliderProducts.map((product, index) => (
            <div 
              key={`${sectionKey}-${product.id}`}
              className="w-1/4 flex-shrink-0 px-3"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover-scale h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        {product.isNew && (
                          <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                        )}
                        {product.isOnSale && (
                          <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-muted-foreground ml-1">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4 mt-auto">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                        Add to Cart
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {sliderProducts.length > itemsPerView && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-lg z-10"
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-lg z-10"
            onClick={onNext}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );

  return (
    <section id="featured-products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Phones Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Mobile Phones
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the latest smartphones from top brands
            </p>
          </div>
          
          <ProductSlider
            products={phones}
            currentIndex={phonesIndex}
            onNext={nextPhones}
            onPrev={prevPhones}
            maxIndex={maxPhonesIndex}
            sectionKey="phones"
          />
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products/mobile-phones">
                View All Mobile Phones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Accessories Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Accessories
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete your mobile experience with our accessories
            </p>
          </div>
          
          <ProductSlider
            products={accessories}
            currentIndex={accessoriesIndex}
            onNext={nextAccessories}
            onPrev={prevAccessories}
            maxIndex={maxAccessoriesIndex}
            sectionKey="accessories"
          />
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products/accessories">
                View All Accessories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
