import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const ThankYou = () => {
  useScrollToTop();

  // Mock order data
  const orderNumber = "MS" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeIn">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Thank You for Your Order!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Your order has been successfully placed and is being processed.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-sm font-medium text-foreground mb-1">Order Number</p>
              <p className="text-2xl font-bold text-primary">#{orderNumber}</p>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Order Details */}
          <ScrollAnimationWrapper animation="slideInLeft">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">iPhone 15 Pro</p>
                      <p className="text-sm text-muted-foreground">Qty: 1</p>
                    </div>
                    <p className="font-medium">$999.00</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">AirPods Pro</p>
                      <p className="text-sm text-muted-foreground">Qty: 2</p>
                    </div>
                    <p className="font-medium">$498.00</p>
                  </div>
                </div>
                
                <hr />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$1,497.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$119.76</span>
                  </div>
                </div>
                
                <hr />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>$1,616.76</span>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>

          {/* Delivery Information */}
          <ScrollAnimationWrapper animation="slideInRight">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  What's Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Order Confirmation</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive an email confirmation shortly with your order details.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Processing</p>
                      <p className="text-sm text-muted-foreground">
                        We'll prepare your order for shipment within 1-2 business days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        Estimated delivery: <strong>{estimatedDelivery}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm font-medium mb-2">Need help with your order?</p>
                  <p className="text-sm text-muted-foreground">
                    Contact our customer support team at{" "}
                    <a href="mailto:support@mobilestore.com" className="text-primary hover:underline">
                      support@mobilestore.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>

        {/* Action Buttons */}
        <ScrollAnimationWrapper animation="fadeIn" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/profile">
                Track Your Order
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>

        {/* Additional Information */}
        <ScrollAnimationWrapper animation="fadeIn" delay={600}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Why Shop with MobileStore?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">30-Day Returns</h4>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? Return your items within 30 days for a full refund.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Warranty Protection</h4>
                <p className="text-sm text-muted-foreground">
                  All products come with manufacturer warranty and our quality guarantee.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Expert Support</h4>
                <p className="text-sm text-muted-foreground">
                  Our technical experts are available to help with setup and troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
