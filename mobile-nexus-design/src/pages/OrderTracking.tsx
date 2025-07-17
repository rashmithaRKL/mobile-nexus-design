
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package, Truck, MapPin, Clock, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";

const OrderTracking = () => {
  const { orderId } = useParams();
  const [trackingData, setTrackingData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Mock tracking data
    const mockTracking = {
      "MS12345678": {
        orderId: "MS12345678",
        trackingNumber: "1Z999AA1234567890",
        status: "delivered",
        progress: 100,
        estimatedDelivery: "2024-01-18",
        actualDelivery: "2024-01-17",
        carrier: "UPS",
        currentLocation: "Delivered",
        trackingHistory: [
          {
            status: "Order Processed",
            location: "New York, NY",
            date: "2024-01-15",
            time: "10:30 AM",
            completed: true,
            description: "Your order has been processed and is ready for shipment."
          },
          {
            status: "Shipped",
            location: "New York, NY",
            date: "2024-01-15",
            time: "6:45 PM",
            completed: true,
            description: "Package has been picked up by carrier."
          },
          {
            status: "In Transit",
            location: "Philadelphia, PA",
            date: "2024-01-16",
            time: "3:20 AM",
            completed: true,
            description: "Package is in transit to destination."
          },
          {
            status: "Out for Delivery",
            location: "New York, NY",
            date: "2024-01-17",
            time: "8:15 AM",
            completed: true,
            description: "Package is out for delivery."
          },
          {
            status: "Delivered",
            location: "New York, NY",
            date: "2024-01-17",
            time: "2:30 PM",
            completed: true,
            description: "Package has been delivered successfully."
          }
        ]
      },
      "MS12345679": {
        orderId: "MS12345679",
        trackingNumber: "1Z999AA1234567891",
        status: "in_transit",
        progress: 60,
        estimatedDelivery: "2024-01-20",
        carrier: "FedEx",
        currentLocation: "Chicago, IL",
        trackingHistory: [
          {
            status: "Order Processed",
            location: "New York, NY",
            date: "2024-01-10",
            time: "11:15 AM",
            completed: true,
            description: "Your order has been processed and is ready for shipment."
          },
          {
            status: "Shipped",
            location: "New York, NY",
            date: "2024-01-10",
            time: "4:30 PM",
            completed: true,
            description: "Package has been picked up by carrier."
          },
          {
            status: "In Transit",
            location: "Chicago, IL",
            date: "2024-01-17",
            time: "1:45 PM",
            completed: true,
            description: "Package is currently in transit."
          },
          {
            status: "Out for Delivery",
            location: "New York, NY",
            date: "Pending",
            time: "Pending",
            completed: false,
            description: "Package will be out for delivery soon."
          },
          {
            status: "Delivered",
            location: "New York, NY",
            date: "Pending",
            time: "Pending",
            completed: false,
            description: "Package will be delivered to your address."
          }
        ]
      }
    };

    setTrackingData(mockTracking[orderId as keyof typeof mockTracking] || null);
  }, [orderId]);

  const getStatusIcon = (completed: boolean, isActive: boolean) => {
    if (completed) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    } else if (isActive) {
      return <Clock className="h-6 w-6 text-blue-500" />;
    } else {
      return <Circle className="h-6 w-6 text-gray-300" />;
    }
  };

  if (!trackingData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tracking Information Not Available</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find tracking information for this order.
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to={`/order-detail/${trackingData.orderId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Order Details
            </Link>
          </Button>
          
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Track Your Order
            </h1>
            <p className="text-muted-foreground">
              Order #{trackingData.orderId} • Tracking: {trackingData.trackingNumber}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Current Status
                </span>
                <Badge 
                  className={
                    trackingData.status === "delivered" 
                      ? "bg-green-500" 
                      : trackingData.status === "in_transit" 
                      ? "bg-blue-500" 
                      : "bg-yellow-500"
                  }
                >
                  {trackingData.status === "delivered" 
                    ? "Delivered" 
                    : trackingData.status === "in_transit" 
                    ? "In Transit" 
                    : "Processing"}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mb-2">
                    <MapPin className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h3 className="font-semibold">Current Location</h3>
                  <p className="text-sm text-muted-foreground">{trackingData.currentLocation}</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-2">
                    <Truck className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h3 className="font-semibold">Carrier</h3>
                  <p className="text-sm text-muted-foreground">{trackingData.carrier}</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-2">
                    <Clock className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h3 className="font-semibold">Estimated Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(trackingData.estimatedDelivery).toLocaleDateString()}
                  </p>
                  {trackingData.actualDelivery && (
                    <p className="text-sm text-green-600 font-medium">
                      Delivered: {new Date(trackingData.actualDelivery).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Delivery Progress</span>
                  <span className="text-sm text-muted-foreground">{trackingData.progress}%</span>
                </div>
                <Progress value={trackingData.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Tracking Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Tracking Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trackingData.trackingHistory.map((event: any, index: number) => {
                  const isActive = !event.completed && index === trackingData.trackingHistory.findIndex((e: any) => !e.completed);
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(event.completed, isActive)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex-1">
                            <h3 className={`font-semibold ${
                              event.completed ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {event.status}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {event.description}
                            </p>
                          </div>
                          
                          <div className="text-right mt-2 sm:mt-0">
                            <p className="text-sm font-medium">{event.location}</p>
                            <p className="text-sm text-muted-foreground">
                              {event.date !== "Pending" ? event.date : "Pending"}
                              {event.time !== "Pending" && ` • ${event.time}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Additional Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
                
                <Button variant="outline" asChild>
                  <Link to={`/order-detail/${trackingData.orderId}`}>
                    View Order Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;
