import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState({ title: "", location: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", search);
  };

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Job</h1>
          <p className="text-xl mb-8">Search for jobs, companies, and more.</p>
          <div className="flex justify-center space-x-4 mb-6">
            <Input
              name="title"
              placeholder="Job Title"
              value={search.title}
              onChange={handleInputChange}
              className="w-64"
            />
            <Input
              name="location"
              placeholder="Location"
              value={search.location}
              onChange={handleInputChange}
              className="w-64"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <Button variant="secondary">Post a Job</Button>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((job) => (
            <Card key={job}>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Company Name</p>
                <p>Location</p>
                <p className="mt-2">Brief description of the job.</p>
                <Button variant="link" className="mt-4">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((company) => (
            <Card key={company}>
              <CardHeader>
                <CardTitle>Company Name</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="placeholder"
                  className="mx-auto object-cover w-full h-[200px]"
                />
                <p className="mt-2">Brief description of the company.</p>
                <Button variant="link" className="mt-4">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;