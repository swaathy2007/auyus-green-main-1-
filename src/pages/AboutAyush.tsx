import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Heart, Leaf, Sun, Droplets, Sparkles } from "lucide-react";

const AboutAyush = () => {
  const systems = [
    {
      name: "Ayurveda",
      description:
        "The 'Science of Life' originated in India over 5,000 years ago. It focuses on balancing the three doshas (Vata, Pitta, Kapha) through diet, herbal treatments, and yogic breathing.",
      icon: Leaf,
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Yoga & Naturopathy",
      description:
        "Yoga combines physical postures, breathing techniques, and meditation. Naturopathy emphasizes the body's ability to heal itself through natural therapies.",
      icon: Sun,
      color: "bg-chart-2/10 text-chart-2",
    },
    {
      name: "Unani",
      description:
        "Based on the teachings of Hippocrates and Galen, Unani medicine focuses on the balance of the four humors: blood, phlegm, yellow bile, and black bile.",
      icon: Droplets,
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      name: "Siddha",
      description:
        "One of the oldest medical systems in the world, originated in South India. It emphasizes the use of minerals and metals along with herbs for treatment.",
      icon: Sparkles,
      color: "bg-chart-4/10 text-chart-4",
    },
    {
      name: "Homeopathy",
      description:
        "Based on 'like cures like' principle, where highly diluted substances trigger the body's natural healing system. Developed by Samuel Hahnemann in the 18th century.",
      icon: Heart,
      color: "bg-destructive/10 text-destructive",
    },
  ];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              About AYUSH
            </h1>
          </div>
          <p className="text-muted-foreground">
            Learn about India's traditional systems of medicine
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="py-6">
            <div className="prose prose-neutral max-w-none">
              <p className="text-foreground leading-relaxed">
                <strong>AYUSH</strong> is an acronym for{" "}
                <Badge variant="secondary">Ayurveda</Badge>,{" "}
                <Badge variant="secondary">Yoga & Naturopathy</Badge>,{" "}
                <Badge variant="secondary">Unani</Badge>,{" "}
                <Badge variant="secondary">Siddha</Badge>, and{" "}
                <Badge variant="secondary">Homeopathy</Badge>. These are India's
                traditional systems of medicine that have been practiced for
                centuries and are recognized by the Ministry of AYUSH, Government
                of India.
              </p>
              <p className="text-muted-foreground mt-4">
                These systems emphasize a holistic approach to health, focusing on
                prevention, natural remedies, and the balance of mind, body, and
                spirit. They utilize medicinal plants as a cornerstone of their
                therapeutic practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AYUSH Systems */}
        <h2 className="font-serif text-2xl font-semibold mb-6">
          The Five Systems of AYUSH
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {systems.map((system) => (
            <Card key={system.name} className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${system.color}`}
                  >
                    <system.icon className="h-5 w-5" />
                  </div>
                  {system.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {system.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Importance of Medicinal Plants */}
        <Card className="bg-accent/50 border-none">
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Importance of Medicinal Plants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Traditional Knowledge</h3>
                <p className="text-sm text-muted-foreground">
                  India has a rich heritage of traditional knowledge about
                  medicinal plants passed down through generations. This
                  knowledge forms the basis of all AYUSH systems.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Biodiversity</h3>
                <p className="text-sm text-muted-foreground">
                  India is home to over 8,000 species of medicinal plants. This
                  incredible biodiversity makes it one of the world's leading
                  centers for herbal medicine.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sustainable Healthcare</h3>
                <p className="text-sm text-muted-foreground">
                  Medicinal plants offer a sustainable and eco-friendly approach
                  to healthcare, reducing dependence on synthetic drugs and their
                  associated environmental impacts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Holistic Wellness</h3>
                <p className="text-sm text-muted-foreground">
                  AYUSH systems view health holistically, considering physical,
                  mental, and spiritual well-being. Medicinal plants play a key
                  role in achieving this balance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mt-8 border-destructive/30">
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Disclaimer:</strong> The
              information provided on this platform is for educational purposes
              only. Always consult a qualified healthcare practitioner before
              using any medicinal plants or herbal remedies. Self-medication can
              be harmful.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AboutAyush;
