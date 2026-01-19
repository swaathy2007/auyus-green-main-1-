import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Leaf, Sparkles, Wind } from "lucide-react";
import { plants } from "@/data/plants";

interface Tour {
  id: string;
  title: string;
  description: string;
  icon: string;
  plantIds: string[];
  color: string;
}

interface TourCardProps {
  tour: Tour;
}

const iconMap = {
  Shield,
  Leaf,
  Sparkles,
  Wind,
};

export const TourCard = ({ tour }: TourCardProps) => {
  const Icon = iconMap[tour.icon as keyof typeof iconMap] || Leaf;
  const tourPlants = tour.plantIds.map((id) =>
    plants.find((p) => p.id === id)
  ).filter(Boolean);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {tour.title}
            </h3>
            <Badge variant="outline" className="mt-1">
              {tour.plantIds.length} Plants
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
        
        <div className="flex -space-x-2 mb-4">
          {tourPlants.slice(0, 3).map((plant) => (
            <div
              key={plant!.id}
              className="h-10 w-10 rounded-full border-2 border-card overflow-hidden"
            >
              <img
                src={plant!.image}
                alt={plant!.commonName}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          {tourPlants.length > 3 && (
            <div className="h-10 w-10 rounded-full border-2 border-card bg-muted flex items-center justify-center text-xs font-medium">
              +{tourPlants.length - 3}
            </div>
          )}
        </div>

        <Link to={`/tours/${tour.id}`}>
          <Button className="w-full group-hover:bg-primary gap-2">
            Start Tour
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
