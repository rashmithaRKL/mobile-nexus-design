import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Smartphone, Headphones, RefreshCw, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const mobileBrands = ["Samsung", "Apple", "Xiaomi", "Oppo", "Vivo", "Huawei", "OnePlus", "Google Pixel", "Nokia", "Motorola", "Realme"];
  const accessoryBrands = ["Anker", "Belkin", "Baseus", "Samsung", "Apple", "Xiaomi", "JBL", "Sony", "Bose", "Ugreen", "Aukey", "Huawei"];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">DialZone</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === "products" && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-background border border-border rounded-lg shadow-lg p-6 grid grid-cols-3 gap-6 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Smartphone className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-sm">Mobile Phones</h3>
                    </div>
                    <div className="space-y-2">
                      {mobileBrands.slice(0, 5).map((brand) => (
                        <Link
                          key={brand}
                          to={`/products/mobile-phones/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Headphones className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-sm">Accessories</h3>
                    </div>
                    <div className="space-y-2">
                      {accessoryBrands.slice(0, 5).map((brand) => (
                        <Link
                          key={brand}
                          to={`/products/accessories/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <RefreshCw className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-sm">Used Phones</h3>
                    </div>
                    <div className="space-y-2">
                      {mobileBrands.slice(0, 5).map((brand) => (
                        <Link
                          key={brand}
                          to={`/products/used-phones/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About Us
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === "services" && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-4 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/phone-repair"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Phone Repairs
                  </Link>
                  <Link
                    to="/accessory-repair"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Accessory Repairs
                  </Link>
                  <Link
                    to="/repair-tracker"
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Repair Tracker
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            <Button asChild className="hidden md:flex">
              <Link to="/sign-in">Sign In</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/phone-repair"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Phone Repairs
            </Link>
            <Link
              to="/accessory-repair"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accessory Repairs
            </Link>
            <Link
              to="/repair-tracker"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Repair Tracker
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/cart"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              to="/profile"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/sign-in"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
