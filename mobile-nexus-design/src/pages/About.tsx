
import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const About = () => {
  useScrollToTop();

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Clock, value: "5 Years", label: "In Business" },
    { icon: Award, value: "99.9%", label: "Satisfaction Rate" },
    { icon: Shield, value: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in mobile technology industry"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Repairs",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d2c3b8?w=300&h=300&fit=crop&crop=face",
      bio: "Expert technician with 8 years experience"
    },
    {
      name: "Mike Chen",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to ensuring customer satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <ScrollAnimationWrapper animation="fadeIn">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About MobileStore
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're passionate about connecting people with the latest mobile technology 
              and providing exceptional repair services that keep your devices running perfectly.
            </p>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Stats Section */}
      <ScrollAnimationWrapper animation="slideInLeft" delay={200}>
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimationWrapper key={index} animation="scaleIn" delay={index * 100}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Story Section */}
      <ScrollAnimationWrapper animation="slideInRight" delay={300}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimationWrapper animation="slideInLeft">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2019, MobileStore began as a small repair shop with a simple mission: 
                      to provide honest, reliable mobile device services to our community. What started 
                      as a passion project has grown into a trusted destination for mobile technology.
                    </p>
                    <p>
                      Today, we're proud to offer not only expert repair services but also a carefully 
                      curated selection of the latest smartphones, accessories, and refurbished devices. 
                      Our commitment to quality and customer satisfaction has never wavered.
                    </p>
                    <p>
                      We believe that technology should enhance your life, not complicate it. That's why 
                      we focus on providing clear communication, transparent pricing, and solutions that 
                      actually work for real people living real lives.
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slideInRight" delay={200}>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                    alt="Our store" 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Values Section */}
      <ScrollAnimationWrapper animation="fadeIn" delay={400}>
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper animation="slideInLeft">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Trust & Transparency</h3>
                    <p className="text-muted-foreground">
                      We believe in honest communication and transparent pricing. No hidden fees, 
                      no surprises – just straightforward service you can trust.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Quality Excellence</h3>
                    <p className="text-muted-foreground">
                      From the products we sell to the repairs we perform, we maintain the highest 
                      standards of quality in everything we do.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Customer First</h3>
                    <p className="text-muted-foreground">
                      Your satisfaction is our priority. We listen to your needs and work tirelessly 
                      to exceed your expectations.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Team Section */}
      <ScrollAnimationWrapper animation="slideInLeft" delay={500}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper animation="fadeIn">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
                <p className="text-xl text-muted-foreground">
                  The passionate people behind MobileStore
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ScrollAnimationWrapper key={index} animation="scaleIn" delay={index * 150}>
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <Footer />
    </div>
  );
};

export default About;
