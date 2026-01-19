import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PlantCard } from "@/components/plants/PlantCard";
import { SearchFilter } from "@/components/plants/SearchFilter";
import { plants } from "@/data/plants";
import { Leaf } from "lucide-react";

const PlantLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBodySystem, setSelectedBodySystem] = useState("All");

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch =
        searchQuery === "" ||
        plant.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.medicinalUses.some((use) =>
          use.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesSystem =
        selectedSystem === "All" ||
        plant.ayushSystem.includes(selectedSystem as any);

      const matchesCategory =
        selectedCategory === "All" ||
        plant.category.includes(selectedCategory);

      const matchesBodySystem =
        selectedBodySystem === "All" ||
        plant.bodySystem.includes(selectedBodySystem);

      return matchesSearch && matchesSystem && matchesCategory && matchesBodySystem;
    });
  }, [searchQuery, selectedSystem, selectedCategory, selectedBodySystem]);

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Plant Library
            </h1>
          </div>
          <p className="text-muted-foreground ml-13">
            Explore our collection of {plants.length} AYUSH medicinal plants
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedSystem={selectedSystem}
            onSystemChange={setSelectedSystem}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedBodySystem={selectedBodySystem}
            onBodySystemChange={setSelectedBodySystem}
          />
        </div>

        {/* Results */}
        {filteredPlants.length > 0 ? (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredPlants.length} of {plants.length} plants
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Leaf className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No plants found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PlantLibrary;
