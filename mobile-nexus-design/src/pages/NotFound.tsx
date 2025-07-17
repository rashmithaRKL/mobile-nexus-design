
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const NotFound = () => {
  useScrollToTop();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background page-enter">
      <div className="max-w-md w-full px-4">
        <ScrollAnimationWrapper animation="scaleIn">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-8xl font-bold text-primary mb-4">404</div>
              <h1 className="text-2xl font-bold mb-4 text-foreground">Oops! Page not found</h1>
              <p className="text-muted-foreground mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Return to Home
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default NotFound;
