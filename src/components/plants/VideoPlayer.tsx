import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Info, Sprout, FlaskConical, BookOpen } from "lucide-react";
import { PlantVideo } from "@/data/plants";

interface VideoPlayerProps {
  videos: PlantVideo[];
  plantName: string;
}

const videoIcons = {
  overview: Info,
  medicinal: FlaskConical,
  cultivation: Sprout,
  preparation: FlaskConical,
  cultural: BookOpen,
};

const videoLabels = {
  overview: "Overview",
  medicinal: "Medicinal Uses",
  cultivation: "Cultivation",
  preparation: "Preparation",
  cultural: "Cultural Importance",
};

export const VideoPlayer = ({ videos, plantName }: VideoPlayerProps) => {
  const [activeVideo, setActiveVideo] = useState(videos[0]?.id || "");

  const currentVideo = videos.find((v) => v.id === activeVideo);

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="relative aspect-video bg-secondary">
          {currentVideo ? (
            <video
              key={currentVideo.id}
              controls
              className="h-full w-full object-cover"
              poster={`/videos/${currentVideo.type}-poster.jpg`}
            >
              <source src={currentVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex h-full items-center justify-center">
              <Play className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
        {currentVideo && (
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground">{currentVideo.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about {videoLabels[currentVideo.type].toLowerCase()} of {plantName}
            </p>
          </CardContent>
        )}
      </Card>

      <div className="space-y-2">
        <h4 className="font-semibold text-foreground">Video Series</h4>
        <Tabs value={activeVideo} onValueChange={setActiveVideo}>
          <TabsList className="w-full h-auto flex-wrap gap-1 bg-transparent p-0">
            {videos.map((video) => {
              const Icon = videoIcons[video.type];
              return (
                <TabsTrigger
                  key={video.id}
                  value={video.id}
                  className="flex-1 min-w-[140px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{videoLabels[video.type]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
