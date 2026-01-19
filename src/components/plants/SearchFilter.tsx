import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSystem: string;
  onSystemChange: (system: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedBodySystem: string;
  onBodySystemChange: (bodySystem: string) => void;
}

const ayushSystems = ["All", "Ayurveda", "Yoga", "Unani", "Siddha", "Homeopathy"];
const categories = [
  "All",
  "Skin Care",
  "Digestive Health",
  "Immunity Booster",
  "Respiratory Health",
  "Stress Relief",
  "Anti-inflammatory",
  "Heart Health",
];
const bodySystems = [
  { value: "All", label: "All", icon: "" },
  { value: "Respiratory", label: "Respiratory System", icon: "🌬️" },
  { value: "Immune", label: "Immune System", icon: "🛡️" },
  { value: "Nervous", label: "Nervous System", icon: "🧠" },
  { value: "Digestive", label: "Digestive System", icon: "🍽️" },
  { value: "Integumentary", label: "Integumentary System", icon: "🧴" },
  { value: "Musculoskeletal", label: "Musculoskeletal System", icon: "💪" },
];

export const SearchFilter = ({
  searchQuery,
  onSearchChange,
  selectedSystem,
  onSystemChange,
  selectedCategory,
  onCategoryChange,
  selectedBodySystem,
  onBodySystemChange,
}: SearchFilterProps) => {
  const hasFilters = selectedSystem !== "All" || selectedCategory !== "All" || selectedBodySystem !== "All";

  const clearFilters = () => {
    onSystemChange("All");
    onCategoryChange("All");
    onBodySystemChange("All");
    onSearchChange("");
  };

  const FilterContent = () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">AYUSH System</label>
        <Select value={selectedSystem} onValueChange={onSystemChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select system" />
          </SelectTrigger>
          <SelectContent>
            {ayushSystems.map((system) => (
              <SelectItem key={system} value={system}>
                {system}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Body System</label>
        <Select value={selectedBodySystem} onValueChange={onBodySystemChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select body system" />
          </SelectTrigger>
          <SelectContent>
            {bodySystems.map((system) => (
              <SelectItem key={system.value} value={system.value}>
                {system.icon && <span className="mr-2">{system.icon}</span>}
                {system.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {hasFilters && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search plants by name, use, or system..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => onSearchChange("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-3">
          <Select value={selectedSystem} onValueChange={onSystemChange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="AYUSH System" />
            </SelectTrigger>
            <SelectContent>
              {ayushSystems.map((system) => (
                <SelectItem key={system} value={system}>
                  {system}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedBodySystem} onValueChange={onBodySystemChange}>
            <SelectTrigger className="w-52">
              <SelectValue placeholder="Body System" />
            </SelectTrigger>
            <SelectContent>
              {bodySystems.map((system) => (
                <SelectItem key={system.value} value={system.value}>
                  {system.icon && <span className="mr-2">{system.icon}</span>}
                  {system.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button variant="outline" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
              {hasFilters && (
                <Badge variant="secondary" className="ml-1">
              {(selectedSystem !== "All" ? 1 : 0) +
                    (selectedCategory !== "All" ? 1 : 0) +
                    (selectedBodySystem !== "All" ? 1 : 0)}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Plants</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters Display */}
      {hasFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedSystem !== "All" && (
            <Badge variant="secondary" className="gap-1">
              {selectedSystem}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onSystemChange("All")}
              />
            </Badge>
          )}
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="gap-1">
              {selectedCategory}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onCategoryChange("All")}
              />
            </Badge>
          )}
          {selectedBodySystem !== "All" && (
            <Badge variant="secondary" className="gap-1">
              {bodySystems.find(s => s.value === selectedBodySystem)?.icon} {bodySystems.find(s => s.value === selectedBodySystem)?.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onBodySystemChange("All")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
