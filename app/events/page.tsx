"use client";

import { SetStateAction, useState } from "react";
import { CalendarIcon, MapPinIcon, TagIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import { Skeleton } from "@/components/ui/skeleton";

type Event = {
  id: number;
  name: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
};

const events: Event[] = [
  {
    id: 1,
    name: "Taller de Moda Sostenible",
    date: "2023-08-15",
    location: "Madrid",
    category: "Moda",
    imageUrl: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
  },
  {
    id: 2,
    name: "Exposición de Arte Digital",
    date: "2023-09-01",
    location: "Barcelona",
    category: "Arte",
    imageUrl: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
  },
  {
    id: 3,
    name: "Conferencia de Comercio Electrónico",
    date: "2023-09-15",
    location: "Valencia",
    category: "Negocios",
    imageUrl: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
  },
  {
    id: 4,
    name: "Festival Gastronómico",
    date: "2023-10-01",
    location: "Sevilla",
    category: "Gastronomía",
    imageUrl: "/c80b76ea-a46c-415a-aa84-b491f07683b7.webp",
  },
];

export default function Events() {
  const [filter, setFilter] = useState<string>("Todos");

  const filteredEvents =
    filter === "Todos"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="min-h-screen flex justify-center flex-wrap bg-slate-50">
      <BreadcrumbBanner title="Eventos" />
      <main className="container mx-auto px-4 sm:px-7 py-8">
        <h1 className="text-3xl font-bold text-center mb-1 text-black">
          Próximos Eventos
        </h1>

        <div className="flex flex-row gap-4 mb-6">
          <div>
            <Select
              onValueChange={(value: SetStateAction<string>) =>
                setFilter(value)
              }
            >
              <SelectTrigger className="w-full sm:w-[180px] bg-white shadow-md">
                <SelectValue placeholder="Fecha" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Futuros</SelectItem>
                <SelectItem value="Moda">Pasados</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              onValueChange={(value: SetStateAction<string>) =>
                setFilter(value)
              }
            >
              <SelectTrigger className="w-full sm:w-[180px] bg-white shadow-md">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Moda">Moda</SelectItem>
                <SelectItem value="Arte">Arte</SelectItem>
                <SelectItem value="Negocios">Negocios</SelectItem>
                <SelectItem value="Gastronomía">Gastronomía</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <ul className="space-y-6">
          {filteredEvents.map((event, index) => (
            <li
              key={event.id}
              className={`relative bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                index % 2 === 0
                  ? "clip-path-polygon-[0_0,_100%_0,_95%_100%,_0_100%] animate-slide-right"
                  : "clip-path-polygon-[5%_0,_100%_0,_100%_100%,_0_100%] animate-slide-left"
              }`}
            >
              <div
                className={`flex items-center p-4 ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                {event.imageUrl ? (
                  <img
                    src={event.imageUrl}
                    alt={event.name}
                    className={`w-20 h-20 object-cover rounded-md ${
                      index % 2 !== 0 ? "ml-4" : "mr-4"
                    }`}
                  />
                ) : (
                  <Skeleton className="w-20 h-20 rounded-md" />
                )}
                <div
                  className={`flex-grow ${index % 2 !== 0 ? "text-right" : ""}`}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.name}
                  </h2>
                  <div
                    className={`flex flex-wrap gap-4 text-sm text-gray-600 ${
                      index % 2 !== 0 ? "justify-end" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <CalendarIcon
                        className={`h-4 w-4 text-primary ${
                          index % 2 !== 0 ? "ml-2 order-2" : "mr-2"
                        }`}
                      />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon
                        className={`h-4 w-4 text-primary ${
                          index % 2 !== 0 ? "ml-2 order-2" : "mr-2"
                        }`}
                      />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <TagIcon
                        className={`h-4 w-4 text-primary ${
                          index % 2 !== 0 ? "ml-2 order-2" : "mr-2"
                        }`}
                      />
                      <span>{event.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
