import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";
import { PlantCard } from "@/components/plants/PlantCard";
import { TourCard } from "@/components/tours/TourCard";
import { plants, tours } from "@/data/plants";
import { ArrowRight, Leaf, BookOpen, Compass, Users, Play } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Index = () => {
  const featuredPlants = plants.slice(0, 4);
  const featuredTours = tours.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Herbal Garden"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative py-20 md:py-32">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover the Healing Power of{" "}
              <span className="text-primary">Medicinal Plants</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Explore our virtual herbal garden featuring AYUSH medicinal plants with
              detailed videos, botanical information, and traditional knowledge passed
              down through generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plants">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Leaf className="h-5 w-5" />
                  Explore Plants
                </Button>
              </Link>
              <Link to="/tours">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Compass className="h-5 w-5" />
                  Take a Guided Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y border-border">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {plants.length}+
              </div>
              <p className="text-sm text-muted-foreground">Medicinal Plants</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-sm text-muted-foreground">AYUSH Systems</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {plants.length * 5}+
              </div>
              <p className="text-sm text-muted-foreground">Educational Videos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {tours.length}
              </div>
              <p className="text-sm text-muted-foreground">Guided Tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
              Featured Plants
            </h2>
            <p className="text-muted-foreground">
              Discover our curated collection of medicinal plants
            </p>
          </div>
          <Link to="/plants">
            <Button variant="outline" className="gap-2">
              View All Plants
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent/50">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Learn Through Interactive Content
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers multiple ways to explore and learn about medicinal plants
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Play className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Video Learning</h3>
                <p className="text-sm text-muted-foreground">
                  5 educational videos per plant covering overview, medicinal uses,
                  cultivation, preparation, and cultural significance
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Detailed Information</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive botanical details, medicinal uses, cultivation methods,
                  and precautions for each plant
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Guided Tours</h3>
                <p className="text-sm text-muted-foreground">
                  Themed virtual tours focusing on immunity, digestion, skin care,
                  and respiratory health
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guided Tours Preview */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
              Guided Virtual Tours
            </h2>
            <p className="text-muted-foreground">
              Explore plants grouped by their health benefits
            </p>
          </div>
          <Link to="/tours">
            <Button variant="outline" className="gap-2">
              All Tours
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="container py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
            Start Your Herbal Journey Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Discover the ancient wisdom of AYUSH medicinal plants and learn how
            they can contribute to your health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plants">
              <Button size="lg" variant="secondary" className="gap-2">
                <Leaf className="h-5 w-5" />
                Browse Plant Library
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn About AYUSH
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
