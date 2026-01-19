import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { VideoPlayer } from "@/components/plants/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { tours, getPlantById, plants } from "@/data/plants";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = tours.find((t) => t.id === id);
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0);

  if (!tour) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Not Found</h1>
          <Link to="/tours">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tours
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const tourPlants = tour.plantIds
    .map((plantId) => getPlantById(plantId))
    .filter(Boolean);
  const currentPlant = tourPlants[currentPlantIndex];
  const progress = ((currentPlantIndex + 1) / tourPlants.length) * 100;

  const goToPrevious = () => {
    if (currentPlantIndex > 0) {
      setCurrentPlantIndex(currentPlantIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentPlantIndex < tourPlants.length - 1) {
      setCurrentPlantIndex(currentPlantIndex + 1);
    }
  };

  if (!currentPlant) return null;

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-6">
          <Link
            to="/tours"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Link>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
            {tour.title}
          </h1>
          <p className="text-muted-foreground">{tour.description}</p>
        </div>

        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Tour Progress</span>
              <span className="text-sm text-muted-foreground">
                {currentPlantIndex + 1} of {tourPlants.length} plants
              </span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {tourPlants.map((plant, index) => (
                <button
                  key={plant!.id}
                  onClick={() => setCurrentPlantIndex(index)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors shrink-0 ${
                    index === currentPlantIndex
                      ? "border-primary bg-primary/10"
                      : index < currentPlantIndex
                      ? "border-primary/50 bg-primary/5"
                      : "border-border"
                  }`}
                >
                  {index < currentPlantIndex && (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  )}
                  <img
                    src={plant!.image}
                    alt={plant!.commonName}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{plant!.commonName}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Plant Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src={currentPlant.image}
                alt={currentPlant.commonName}
                className="h-full w-full object-cover"
              />
            </div>
            <VideoPlayer
              videos={currentPlant.videos}
              plantName={currentPlant.commonName}
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {currentPlant.ayushSystem.map((system) => (
                  <Badge key={system}>{system}</Badge>
                ))}
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
                {currentPlant.commonName}
              </h2>
              <p className="italic text-muted-foreground mb-4">
                {currentPlant.botanicalName}
              </p>
              <p className="text-foreground leading-relaxed">
                {currentPlant.description}
              </p>
            </div>

            <Card>
              <CardContent className="py-4">
                <h3 className="font-semibold mb-3">Medicinal Uses</h3>
                <ul className="space-y-2">
                  {currentPlant.medicinalUses.slice(0, 4).map((use, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="py-4">
                <h3 className="font-semibold mb-3">Cultivation</h3>
                <p className="text-sm text-muted-foreground">
                  {currentPlant.cultivation}
                </p>
              </CardContent>
            </Card>

            <Link to={`/plants/${currentPlant.id}`}>
              <Button variant="outline" className="w-full gap-2">
                <Leaf className="h-4 w-4" />
                View Full Plant Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentPlantIndex === 0}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Plant
          </Button>
          {currentPlantIndex === tourPlants.length - 1 ? (
            <Button onClick={() => navigate("/tours")} className="gap-2">
              Complete Tour
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={goToNext} className="gap-2">
              Next Plant
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TourDetail;
