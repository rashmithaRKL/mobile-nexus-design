import { useState } from "react";
import { Search, Clock, CheckCircle, AlertCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const RepairTracker = () => {
  useScrollToTop();
  
  const [trackingId, setTrackingId] = useState("");
  const [repairData, setRepairData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Sample repair data
  const sampleRepairs = {
    "RT001": {
      id: "RT001",
      deviceType: "iPhone 14 Pro",
      issue: "Cracked Screen",
      customerName: "John Smith",
      submittedDate: "2024-01-15",
      estimatedCompletion: "2024-01-17",
      status: "In Progress",
      progress: 60,
      statusHistory: [
        { status: "Received", date: "2024-01-15 10:30 AM", completed: true },
        { status: "Diagnostic Complete", date: "2024-01-15 2:15 PM", completed: true },
        { status: "Parts Ordered", date: "2024-01-15 4:20 PM", completed: true },
        { status: "Repair in Progress", date: "2024-01-16 9:00 AM", completed: true },
        { status: "Quality Check", date: "Pending", completed: false },
        { status: "Ready for Pickup", date: "Pending", completed: false }
      ],
      notes: "Screen replacement parts have arrived. Repair is currently in progress.",
      estimatedCost: "$299",
      contactInfo: "Contact us at (555) 123-4567 for any questions."
    },
    "RT002": {
      id: "RT002",
      deviceType: "Samsung Galaxy S23",
      issue: "Battery Replacement",
      customerName: "Sarah Johnson",
      submittedDate: "2024-01-10",
      estimatedCompletion: "2024-01-16",
      status: "Ready for Pickup",
      progress: 100,
      statusHistory: [
        { status: "Received", date: "2024-01-10 11:15 AM", completed: true },
        { status: "Diagnostic Complete", date: "2024-01-10 3:30 PM", completed: true },
        { status: "Parts Ordered", date: "2024-01-11 9:00 AM", completed: true },
        { status: "Repair in Progress", date: "2024-01-12 10:30 AM", completed: true },
        { status: "Quality Check", date: "2024-01-15 2:00 PM", completed: true },
        { status: "Ready for Pickup", date: "2024-01-16 9:00 AM", completed: true }
      ],
      notes: "Battery replacement completed successfully. Device is ready for pickup.",
      estimatedCost: "$89",
      contactInfo: "Contact us at (555) 123-4567 for any questions."
    }
  };

  const handleTrack = () => {
    setLoading(true);
    setTimeout(() => {
      const repair = sampleRepairs[trackingId as keyof typeof sampleRepairs];
      setRepairData(repair || null);
      setLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ready for Pickup":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "In Progress":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "Awaiting Parts":
        return <Package className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready for Pickup":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      case "Awaiting Parts":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper animation="fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Repair Tracker
            </h1>
            <p className="text-xl text-muted-foreground">
              Track the status of your device repair in real-time
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Tracking Form */}
        <ScrollAnimationWrapper animation="scaleIn" delay={200}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Enter Your Repair ID</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter repair tracking ID (e.g., RT001)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="text-center text-lg"
                  />
                </div>
                <Button 
                  onClick={handleTrack} 
                  disabled={!trackingId || loading}
                  className="bg-primary hover:bg-primary/90"
                >
                  {loading ? "Tracking..." : "Track Repair"}
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Try: RT001 or RT002 for demo
              </p>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>

        {/* Repair Details */}
        {repairData ? (
          <div className="space-y-6">
            {/* Status Overview */}
            <ScrollAnimationWrapper animation="slideInLeft">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      {getStatusIcon(repairData.status)}
                      <span>Repair Status: {repairData.status}</span>
                    </CardTitle>
                    <Badge className={getStatusColor(repairData.status)}>
                      {repairData.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Device Information</h3>
                      <p><strong>Device:</strong> {repairData.deviceType}</p>
                      <p><strong>Issue:</strong> {repairData.issue}</p>
                      <p><strong>Repair ID:</strong> {repairData.id}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Timeline</h3>
                      <p><strong>Submitted:</strong> {repairData.submittedDate}</p>
                      <p><strong>Estimated Completion:</strong> {repairData.estimatedCompletion}</p>
                      <p><strong>Estimated Cost:</strong> {repairData.estimatedCost}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{repairData.progress}%</span>
                    </div>
                    <Progress value={repairData.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>

            {/* Status History */}
            <ScrollAnimationWrapper animation="slideInRight" delay={200}>
              <Card>
                <CardHeader>
                  <CardTitle>Repair Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {repairData.statusHistory.map((item: any, index: number) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${
                          item.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`} />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className={`font-medium ${
                              item.completed ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {item.status}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>

            {/* Additional Notes */}
            <ScrollAnimationWrapper animation="fadeIn" delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Technician Notes</h3>
                      <p className="text-muted-foreground">{repairData.notes}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Contact Information</h3>
                      <p className="text-muted-foreground">{repairData.contactInfo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>
        ) : trackingId && !loading && (
          <ScrollAnimationWrapper animation="fadeIn">
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Repair ID Not Found</h3>
                <p className="text-muted-foreground">
                  Please check your repair ID and try again. If you continue to have issues, 
                  please contact our support team.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RepairTracker;
