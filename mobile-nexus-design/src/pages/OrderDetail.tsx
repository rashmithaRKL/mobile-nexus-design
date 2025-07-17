
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package, Truck, MapPin, Calendar, CreditCard, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";

const OrderDetail = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Mock order data - in a real app, this would fetch from an API
    const mockOrders = {
      "MS12345678": {
        id: "MS12345678",
        date: "2024-01-15",
        status: "delivered",
        total: 1616.76,
        items: [
          { id: 1, name: "iPhone 15 Pro", quantity: 1, price: 999, image: "/placeholder.svg" },
          { id: 2, name: "AirPods Pro", quantity: 2, price: 249, image: "/placeholder.svg" }
        ],
        tracking: "1Z999AA1234567890",
        estimatedDelivery: "2024-01-18",
        actualDelivery: "2024-01-17",
        shippingAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "New York",
          zipCode: "10001",
          country: "USA"
        },
        billingAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "New York",
          zipCode: "10001",
          country: "USA"
        },
        paymentMethod: "Credit Card ending in 4567",
        subtotal: 1497.00,
        shipping: 15.00,
        tax: 104.76
      },
      "MS12345679": {
        id: "MS12345679",
        date: "2024-01-10",
        status: "in_transit",
        total: 449.99,
        items: [
          { id: 1, name: "Samsung Galaxy Buds", quantity: 1, price: 149.99, image: "/placeholder.svg" },
          { id: 2, name: "Phone Case", quantity: 1, price: 29.99, image: "/placeholder.svg" }
        ],
        tracking: "1Z999AA1234567891",
        estimatedDelivery: "2024-01-20",
        shippingAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "New York",
          zipCode: "10001",
          country: "USA"
        },
        billingAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "New York",
          zipCode: "10001",
          country: "USA"
        },
        paymentMethod: "Credit Card ending in 4567",
        subtotal: 179.98,
        shipping: 12.00,
        tax: 27.01
      },
      "MS12345680": {
        id: "MS12345680",
        date: "2024-01-05",
        status: "processing",
        total: 299.99,
        items: [
          { id: 1, name: "Wireless Charger", quantity: 1, price: 79.99, image: "/placeholder.svg" },
          { id: 2, name: "Screen Protector", quantity: 2, price: 19.99, image: "/placeholder.svg" }
        ],
        estimatedDelivery: "2024-01-22",
        shippingAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "New York",
          zipCode: "10001",
          country: "USA"
        },
        billingAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "New York",
          zipCode: "10001",
          country: "USA"
        },
        paymentMethod: "Credit Card ending in 4567",
        subtotal: 119.97,
        shipping: 10.00,
        tax: 17.02
      }
    };

    setOrderData(mockOrders[orderId as keyof typeof mockOrders] || null);
  }, [orderId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "in_transit":
        return "bg-blue-500";
      case "processing":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "in_transit":
        return "In Transit";
      case "processing":
        return "Processing";
      case "cancelled":
        return "Cancelled";
      default:
        return "Unknown";
    }
  };

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Order Not Found</h3>
              <p className="text-muted-foreground mb-4">
                The order you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild>
                <Link to="/profile">Back to Orders</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/profile">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Link>
          </Button>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Order #{orderData.id}
              </h1>
              <p className="text-muted-foreground">
                Placed on {new Date(orderData.date).toLocaleDateString()}
              </p>
            </div>
            <Badge className={getStatusColor(orderData.status)}>
              {getStatusText(orderData.status)}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item: any) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                        <Package className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Shipping Address
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      <p>{orderData.shippingAddress.name}</p>
                      <p>{orderData.shippingAddress.street}</p>
                      <p>
                        {orderData.shippingAddress.city}, {orderData.shippingAddress.zipCode}
                      </p>
                      <p>{orderData.shippingAddress.country}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Delivery Information
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>
                        <span className="font-medium">Estimated:</span>{" "}
                        {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                      </p>
                      {orderData.actualDelivery && (
                        <p>
                          <span className="font-medium">Delivered:</span>{" "}
                          {new Date(orderData.actualDelivery).toLocaleDateString()}
                        </p>
                      )}
                      {orderData.tracking && (
                        <p>
                          <span className="font-medium">Tracking:</span> {orderData.tracking}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${orderData.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${orderData.tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${orderData.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Payment Method</h3>
                    <p className="text-sm text-muted-foreground">
                      {orderData.paymentMethod}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Billing Address</h3>
                    <div className="text-sm text-muted-foreground">
                      <p>{orderData.billingAddress.name}</p>
                      <p>{orderData.billingAddress.street}</p>
                      <p>
                        {orderData.billingAddress.city}, {orderData.billingAddress.zipCode}
                      </p>
                      <p>{orderData.billingAddress.country}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              {orderData.status === "in_transit" && (
                <Button asChild className="w-full">
                  <Link to={`/order-tracking/${orderData.id}`}>
                    <Truck className="h-4 w-4 mr-2" />
                    Track Order
                  </Link>
                </Button>
              )}
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/products">
                  <Package className="h-4 w-4 mr-2" />
                  Shop Again
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderDetail;
