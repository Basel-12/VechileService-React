import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      category: "Regular Maintenance",
      items: [
        {
          title: "Oil Change Service",
          description: "Complete oil change with premium quality oil",
          price: "From $49.99",
          icon: "🛢️",
        },
        {
          title: "Tire Rotation",
          description: "Tire rotation and balancing service",
          price: "From $29.99",
          icon: "🛞",
        },
        {
          title: "Brake Inspection",
          description: "Comprehensive brake system check",
          price: "From $39.99",
          icon: "🛑",
        },
      ],
    },
    {
      category: "Repair Services",
      items: [
        {
          title: "Engine Repair",
          description: "Professional engine diagnostics and repair",
          price: "From $199.99",
          icon: "⚙️",
        },
        {
          title: "Transmission Service",
          description: "Transmission repair and maintenance",
          price: "From $299.99",
          icon: "🔧",
        },
        {
          title: "Electrical System",
          description: "Electrical system diagnostics and repair",
          price: "From $89.99",
          icon: "⚡",
        },
      ],
    },
    {
      category: "Specialized Services",
      items: [
        {
          title: "AC Service",
          description: "Complete AC system check and repair",
          price: "From $79.99",
          icon: "❄️",
        },
        {
          title: "Battery Service",
          description: "Battery testing and replacement",
          price: "From $59.99",
          icon: "🔋",
        },
        {
          title: "Wheel Alignment",
          description: "Precise wheel alignment service",
          price: "From $69.99",
          icon: "🎯",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive vehicle maintenance and repair services
              </p>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        {services.map((category, categoryIndex) => (
          <section
            key={categoryIndex}
            className={`py-20 ${categoryIndex % 2 === 0 ? "bg-gray-50" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        <p className="text-xl font-semibold text-blue-600">
                          {service.price}
                        </p>
                        <Link to="/booking">
                          <Button className="w-full">Book Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Our Services */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-blue-700 border-none">
                <CardHeader>
                  <CardTitle className="text-white">
                    Expert Technicians
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Our certified technicians have years of experience in
                    vehicle maintenance and repair
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-blue-700 border-none">
                <CardHeader>
                  <CardTitle className="text-white">Quality Parts</CardTitle>
                  <CardDescription className="text-gray-300">
                    We use only genuine parts and follow manufacturer guidelines
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-blue-700 border-none">
                <CardHeader>
                  <CardTitle className="text-white">Warranty</CardTitle>
                  <CardDescription className="text-gray-300">
                    All our services come with a satisfaction guarantee and
                    warranty
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Service?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Contact us for any special requirements or custom service packages
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
