import { Layout } from "@/components/layout/Layout";
import { TourCard } from "@/components/tours/TourCard";
import { tours } from "@/data/plants";
import { Compass } from "lucide-react";

const GuidedTours = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Compass className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Guided Virtual Tours
            </h1>
          </div>
          <p className="text-muted-foreground ml-13">
            Explore medicinal plants grouped by their health benefits with step-by-step guided navigation
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 p-6 bg-accent/50 rounded-2xl">
          <h2 className="font-serif text-xl font-semibold mb-3">
            About Our Guided Tours
          </h2>
          <p className="text-muted-foreground mb-4">
            Each guided tour takes you through a curated selection of medicinal plants
            focused on specific health benefits. You'll learn about:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            <li className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Plant overview and identification
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Medicinal properties and uses
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Cultivation and care methods
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Preparation and usage guidelines
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Cultural and traditional significance
            </li>
            <li className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Safety precautions
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default GuidedTours;
