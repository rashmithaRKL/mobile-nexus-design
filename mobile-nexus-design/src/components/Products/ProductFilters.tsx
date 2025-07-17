
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/data/products";

interface ProductFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedCondition: string;
  setSelectedCondition: (condition: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  brands: string[];
  models: string[];
  onClearFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedCondition,
  setSelectedCondition,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  brands,
  models,
  onClearFilters,
}) => {
  // Calculate product counts for categories
  const categoryData = [
    { id: "mobile-phones", name: "Mobile Phones", count: products.filter(p => p.category === "mobile-phones").length },
    { id: "accessories", name: "Accessories", count: products.filter(p => p.category === "accessories").length },
    { id: "used-phones", name: "Used Phones", count: products.filter(p => p.condition === "used").length },
  ];

  // Calculate brand counts
  const brandData = brands.map(brand => ({
    name: brand,
    count: products.filter(p => p.brand === brand).length
  }));

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(cat => cat !== categoryId));
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-6">Filters</h3>

        {/* Search */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">PRODUCT CATEGORIES</h4>
          <div className="space-y-3">
            {categoryData.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">{category.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">BRANDS</h4>
          <div className="space-y-3">
            {brandData.map((brand) => (
              <div key={brand.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={brand.name}
                    checked={selectedBrand === brand.name}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedBrand(brand.name);
                      } else {
                        setSelectedBrand("all");
                      }
                    }}
                  />
                  <label htmlFor={brand.name} className="text-sm cursor-pointer">
                    {brand.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">{brand.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Models */}
        {selectedBrand && selectedBrand !== "all" && (
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">MODELS</h4>
            <div className="space-y-3">
              {models.map((model) => {
                const modelCount = products.filter(p => p.brand === selectedBrand && p.model === model).length;
                return (
                  <div key={model} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={model}
                        checked={selectedModel === model}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedModel(model);
                          } else {
                            setSelectedModel("all");
                          }
                        }}
                      />
                      <label htmlFor={model} className="text-sm cursor-pointer">
                        {model}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">{modelCount}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Condition */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">CONDITION</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="brand-new"
                  checked={selectedCondition === "new"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCondition("new");
                    } else {
                      setSelectedCondition("all");
                    }
                  }}
                />
                <label htmlFor="brand-new" className="text-sm cursor-pointer">
                  Brand New
                </label>
              </div>
              <span className="text-xs text-muted-foreground">
                {products.filter(p => p.condition === "new").length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="used"
                  checked={selectedCondition === "used"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCondition("used");
                    } else {
                      setSelectedCondition("all");
                    }
                  }}
                />
                <label htmlFor="used" className="text-sm cursor-pointer">
                  Used
                </label>
              </div>
              <span className="text-xs text-muted-foreground">
                {products.filter(p => p.condition === "used").length}
              </span>
            </div>
          </div>
        </div>

        {/* Filter by Price */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">FILTER BY PRICE</h4>
          <div className="space-y-3">
            {[
              { value: "under-200", label: "Under $200", min: 0, max: 199 },
              { value: "200-500", label: "$200 - $500", min: 200, max: 500 },
              { value: "500-1000", label: "$500 - $1000", min: 500, max: 1000 },
              { value: "over-1000", label: "Over $1000", min: 1000, max: Infinity },
            ].map((range) => {
              const count = products.filter(p => p.price >= range.min && p.price <= range.max).length;
              return (
                <div key={range.value} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={range.value}
                      checked={priceRange === range.value}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setPriceRange(range.value);
                        } else {
                          setPriceRange("all");
                        }
                      }}
                    />
                    <label htmlFor={range.value} className="text-sm cursor-pointer">
                      {range.label}
                    </label>
                  </div>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Button variant="outline" className="w-full" onClick={onClearFilters}>
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
