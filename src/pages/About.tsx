import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "John Smith",
      role: "Lead Mechanic",
      experience: "15+ years",
      image: "👨‍🔧",
    },
    {
      name: "Sarah Johnson",
      role: "Service Manager",
      experience: "10+ years",
      image: "👩‍💼",
    },
    {
      name: "Mike Brown",
      role: "Diagnostic Specialist",
      experience: "12+ years",
      image: "👨‍🔬",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Started Our Journey",
      description: "Opened our first service center with a team of 5 mechanics",
    },
    {
      year: "2015",
      title: "Expanded Services",
      description: "Added specialized services for both cars and motorcycles",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Launched online booking system and digital service tracking",
    },
    {
      year: "2023",
      title: "Excellence Award",
      description: "Recognized as the best service center in the region",
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
                About FixIt
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your trusted partner in vehicle maintenance and repair since
                2010
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, FixIt has grown from a small local garage to
                  one of the most trusted vehicle service centers in the region.
                  Our commitment to quality service and customer satisfaction
                  has been the driving force behind our success.
                </p>
                <p className="text-gray-600">
                  We believe in providing transparent, reliable, and
                  professional service to all our customers. Our team of
                  certified technicians ensures that your vehicle receives the
                  best care possible.
                </p>
              </div>
              <div className="relative h-[400px] bg-gray-200 rounded-lg">
                {/* Add your image here */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl">
                  🏢
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="text-6xl mb-4">{member.image}</div>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-gray-600">{member.role}</p>
                    <p className="text-sm text-gray-500">
                      {member.experience} experience
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-blue-600">
                      {milestone.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8">
              Experience the difference of professional vehicle service
            </p>
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Book Your Service
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
