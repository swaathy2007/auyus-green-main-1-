import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Share2,
  MapPin,
  Leaf,
  FlaskConical,
  AlertTriangle,
  Sprout,
  Plus,
  Trash2,
} from "lucide-react";
import { getPlantById } from "@/data/plants";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useState } from "react";
import { toast } from "sonner";

import { AudioPlayer } from "@/components/plants/AudioPlayer";
import { VideoShare } from "@/components/plants/VideoShare";

const PlantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const plant = getPlantById(id || "");
  const { isBookmarked, toggleBookmark, addNote, getNotesByPlant, deleteNote } =
    useBookmarks();
  const [newNote, setNewNote] = useState("");

  if (!plant) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Plant Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The plant you're looking for doesn't exist.
          </p>
          <Link to="/plants">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Library
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const bookmarked = isBookmarked(plant.id);
  const notes = getNotesByPlant(plant.id);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: plant.commonName,
        text: `Learn about ${plant.commonName} (${plant.botanicalName}) - a medicinal plant from the AYUSH system.`,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote(plant.id, newNote.trim());
      setNewNote("");
      toast.success("Note added successfully!");
    }
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/plants"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Plant Library
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Image, Video, 3D Model, and Audio */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={plant.image}
                alt={plant.commonName}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-10 w-10"
                  onClick={() => {
                    toggleBookmark(plant.id);
                    toast.success(
                      bookmarked ? "Removed from bookmarks" : "Added to bookmarks"
                    );
                  }}
                >
                  {bookmarked ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-10 w-10"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Plant Video with Share */}
            {plant.video && (
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-border">
                  <video
                    src={plant.video}
                    controls
                    className="w-full aspect-video"
                    poster={plant.image}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="flex justify-end">
                  <VideoShare
                    plantName={plant.commonName}
                    videoTitle={`${plant.commonName} Overview`}
                  />
                </div>
              </div>
            )}

            {/* Audio Player */}
            {plant.audio && (
              <AudioPlayer audioUrl={plant.audio} plantName={plant.commonName} />
            )}

          </div>

          {/* Right Column - Information */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {plant.ayushSystem.map((system) => (
                  <Badge key={system} variant="default">
                    {system}
                  </Badge>
                ))}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {plant.commonName}
              </h1>
              <p className="text-lg italic text-muted-foreground mb-4">
                {plant.botanicalName}
              </p>
              <p className="text-foreground leading-relaxed">{plant.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="gap-1">
                <Leaf className="h-3 w-3" />
                {plant.family}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <MapPin className="h-3 w-3" />
                {plant.region[0]}
              </Badge>
            </div>

            <Separator />

            {/* Medicinal Uses */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  Medicinal Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plant.medicinalUses.map((use, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Parts Used */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Leaf className="h-5 w-5 text-primary" />
                  Parts Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {plant.partsUsed.map((part) => (
                    <Badge key={part} variant="secondary">
                      {part}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cultivation */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sprout className="h-5 w-5 text-primary" />
                  Cultivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">{plant.cultivation}</p>
              </CardContent>
            </Card>

            {/* Precautions */}
            <Card className="border-destructive/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Precautions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plant.precautions.map((precaution, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                      {precaution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Notes Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Your Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Add a note about this plant..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    rows={2}
                  />
                  <Button onClick={handleAddNote} disabled={!newNote.trim()}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {notes.length > 0 && (
                  <div className="space-y-2">
                    {notes.map((note) => (
                      <div
                        key={note.id}
                        className="flex items-start justify-between gap-2 p-3 bg-muted/50 rounded-lg"
                      >
                        <p className="text-sm">{note.content}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 shrink-0"
                          onClick={() => {
                            deleteNote(note.id);
                            toast.success("Note deleted");
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlantDetail;
