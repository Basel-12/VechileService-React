import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      title: "Oil Change",
      description: "Regular oil changes to keep your engine running smoothly",
      icon: "🛢️",
    },
    {
      title: "Brake Service",
      description: "Complete brake inspection and maintenance",
      icon: "🛑",
    },
    {
      title: "Tire Service",
      description: "Tire rotation, balancing, and replacement",
      icon: "🛞",
    },
    {
      title: "Engine Repair",
      description: "Professional engine diagnostics and repair",
      icon: "⚙️",
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
                Professional Vehicle Service
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Expert care for your car and bike. Quality service, guaranteed
                satisfaction.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/booking">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Book Service
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/booking">
                      <Button variant="outline" className="w-full">
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Expert Technicians</CardTitle>
                  <CardDescription>
                    Our team consists of certified professionals with years of
                    experience
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Service</CardTitle>
                  <CardDescription>
                    We use only genuine parts and follow manufacturer guidelines
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Service</CardTitle>
                  <CardDescription>
                    Fast turnaround time without compromising on quality
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Service Your Vehicle?
            </h2>
            <p className="text-xl mb-8">
              Book your service appointment today and get 10% off on your first
              service!
            </p>
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
