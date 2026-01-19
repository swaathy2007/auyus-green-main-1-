import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PlantCard } from "@/components/plants/PlantCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, Leaf, Trash2, StickyNote } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { getPlantById } from "@/data/plants";
import { toast } from "sonner";

const BookmarksPage = () => {
  const { bookmarks, notes, deleteNote } = useBookmarks();

  const bookmarkedPlants = bookmarks
    .map((b) => getPlantById(b.plantId))
    .filter(Boolean);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Bookmarks & Notes
            </h1>
          </div>
          <p className="text-muted-foreground">
            Your saved plants and personal notes
          </p>
        </div>

        {/* Bookmarked Plants */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            Bookmarked Plants ({bookmarkedPlants.length})
          </h2>
          {bookmarkedPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bookmarkedPlants.map((plant) => (
                <PlantCard key={plant!.id} plant={plant!} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No bookmarks yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start exploring plants and bookmark your favorites!
                </p>
                <Link to="/plants">
                  <Button className="gap-2">
                    <Leaf className="h-4 w-4" />
                    Explore Plants
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Notes */}
        <section>
          <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
            <StickyNote className="h-5 w-5 text-primary" />
            Your Notes ({notes.length})
          </h2>
          {notes.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {notes.map((note) => {
                const plant = getPlantById(note.plantId);
                return (
                  <Card key={note.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center justify-between">
                        <Link
                          to={`/plants/${note.plantId}`}
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          {plant && (
                            <img
                              src={plant.image}
                              alt={plant.commonName}
                              className="h-8 w-8 rounded-full object-cover"
                            />
                          )}
                          {plant?.commonName || "Unknown Plant"}
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            deleteNote(note.id);
                            toast.success("Note deleted");
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{note.content}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <StickyNote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notes yet</h3>
                <p className="text-muted-foreground">
                  Add notes to plants while exploring the library!
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default BookmarksPage;
