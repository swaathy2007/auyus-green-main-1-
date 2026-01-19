import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, Play } from "lucide-react";
import { Plant } from "@/data/plants";
import { useBookmarks } from "@/hooks/useBookmarks";

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard = ({ plant }: PlantCardProps) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(plant.id);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={plant.image}
          alt={plant.commonName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-card/80 hover:bg-card backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault();
            toggleBookmark(plant.id);
          }}
        >
          {bookmarked ? (
            <BookmarkCheck className="h-4 w-4 text-primary" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </Button>
        <Link
          to={`/plants/${plant.id}`}
          className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button className="w-full gap-2" size="sm">
            <Play className="h-4 w-4" />
            Explore Plant
          </Button>
        </Link>
      </div>
      <CardContent className="p-4">
        <Link to={`/plants/${plant.id}`}>
          <h3 className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors">
            {plant.commonName}
          </h3>
        </Link>
        <p className="text-sm italic text-muted-foreground mb-3">
          {plant.botanicalName}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {plant.ayushSystem.slice(0, 2).map((system) => (
            <Badge key={system} variant="secondary" className="text-xs">
              {system}
            </Badge>
          ))}
          {plant.category.slice(0, 1).map((cat) => (
            <Badge key={cat} variant="outline" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
