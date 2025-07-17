
import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Grid, List, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import ProductFilters from "@/components/Products/ProductFilters";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = () => {
  const { category, brand } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedBrand, setSelectedBrand] = useState(brand || "all");
  const [selectedModel, setSelectedModel] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(category ? [category] : []);
  const [sortBy, setSortBy] = useState("featured");

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, brand]);

  // Update selectedBrand when URL brand changes
  React.useEffect(() => {
    if (brand && brand !== selectedBrand) {
      setSelectedBrand(brand.replace('-', ' '));
    }
  }, [brand]);

  // Update selectedCategories when URL category changes
  React.useEffect(() => {
    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([category]);
    }
  }, [category]);

  // Clear model when brand changes
  React.useEffect(() => {
    setSelectedModel("all");
  }, [selectedBrand]);

  const brands = useMemo(() => {
    return [...new Set(products.map(p => p.brand))];
  }, []);

  const models = useMemo(() => {
    if (!selectedBrand || selectedBrand === "all") return [];
    return [...new Set(products
      .filter(p => p.brand === selectedBrand)
      .map(p => p.model))];
  }, [selectedBrand]);

  const categories = [
    { id: "mobile-phones", name: "Mobile Phones" },
    { id: "accessories", name: "Accessories" },
    { id: "used-phones", name: "Used Phones" }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filtering
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.some(cat => {
          if (cat === "used-phones") return product.condition === "used";
          return product.category === cat;
        });
      
      // Brand filtering
      const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
      
      // Model filtering
      const matchesModel = selectedModel === "all" || product.model === selectedModel;
      
      // Condition filtering
      const matchesCondition = selectedCondition === "all" || product.condition === selectedCondition;
      
      // Price filtering
      const matchesPrice = priceRange === "all" || (
        priceRange === "under-200" && product.price < 200 ||
        priceRange === "200-500" && product.price >= 200 && product.price <= 500 ||
        priceRange === "500-1000" && product.price >= 500 && product.price <= 1000 ||
        priceRange === "over-1000" && product.price > 1000
      );
      
      return matchesSearch && matchesCategory && matchesBrand && matchesModel && matchesCondition && matchesPrice;
    });

    // Sorting
    switch (sortBy) {
      case "price-low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured sorting (keep original order but prioritize new and on-sale items)
        filtered.sort((a, b) => {
          const aScore = (a.isNew ? 2 : 0) + (a.isOnSale ? 1 : 0);
          const bScore = (b.isNew ? 2 : 0) + (b.isOnSale ? 1 : 0);
          return bScore - aScore;
        });
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedBrand, selectedModel, selectedCondition, priceRange, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("all");
    setSelectedModel("all");
    setSelectedCondition("all");
    setPriceRange("all");
    setSelectedCategories([]);
    setSortBy("featured");
  };

  const getPageTitle = () => {
    if (selectedCategories.length > 0) {
      const categoryNames = selectedCategories.map(cat => 
        categories.find(c => c.id === cat)?.name
      ).filter(Boolean).join(", ");
      return categoryNames;
    }
    return "All Products";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {getPageTitle()}
            {selectedBrand && selectedBrand !== "all" && ` - ${selectedBrand}`}
            {selectedModel && selectedModel !== "all" && ` - ${selectedModel}`}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              brands={brands}
              models={models}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* View Controls */}
            <div className="flex justify-between items-center mb-6 animate-fade-in">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Sort by: Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-lg transition-all duration-300 hover-scale"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                  }}
                >
                  <CardContent className="p-0">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                            viewMode === "grid" ? "h-64" : "h-32"
                          } ${viewMode === "list" ? "sm:w-32 sm:h-32" : ""}`}
                        />
                        <div className="absolute top-4 left-4 flex flex-col space-y-2">
                          {product.isNew && (
                            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                          )}
                          {product.isOnSale && (
                            <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                          )}
                          {product.condition === "used" && (
                            <Badge variant="secondary">Used</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className={`p-6 ${viewMode === "list" ? "sm:flex sm:flex-1 sm:items-center" : ""}`}>
                        <div className={viewMode === "list" ? "sm:flex-1" : ""}>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                          <p className="text-xs text-muted-foreground mb-2">{product.model}</p>
                          
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-muted-foreground ml-1">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-primary">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            <Button className="bg-primary hover:bg-primary/90">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
