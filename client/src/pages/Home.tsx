/**
 * Modernismo Editorial Europeo
 * Jerarquía tipográfica dramática, espacios en blanco generosos
 * Paleta terrosa: ocre, terracota, verde oliva, crema
 */

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Hotel, DollarSign, Mail, Phone, MapPinIcon, Car, Utensils, Ticket, Coffee, RefreshCw, Info, Plane, FileText, AlertCircle } from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  const [activeTab, setActiveTab] = useState("itinerario");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Imagen cinematográfica con overlay */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Toscana.jpg"
            alt="Viaje Europa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-16 container">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            España, Roma y Suiza
          </h1>
          <p className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white/90 mb-2">
            Sres. Paiz
          </p>
          <p className="font-accent text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white/80 italic">
            2026
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-auto sm:h-16 bg-transparent border-0 rounded-none flex-wrap sm:flex-nowrap">
              <TabsTrigger
                value="itinerario"
                className="font-display text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-0 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none flex-1 sm:flex-initial"
              >
                Itinerario
              </TabsTrigger>
              <TabsTrigger
                value="hoteles"
                className="font-display text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-0 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none flex-1 sm:flex-initial"
              >
                Hoteles
              </TabsTrigger>
              <TabsTrigger
                value="presupuesto"
                className="font-display text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-0 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none flex-1 sm:flex-initial"
              >
                Presupuesto
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* ITINERARIO TAB */}
          <TabsContent value="itinerario" className="mt-0">
            <ItinerarioSection />
          </TabsContent>

          {/* HOTELES TAB */}
          <TabsContent value="hoteles" className="mt-0">
            <HotelesSection />
          </TabsContent>

          {/* PRESUPUESTO TAB */}
          <TabsContent value="presupuesto" className="mt-0">
            <PresupuestoSection />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 mt-24">
        <div className="container">
          <div className="flex items-center justify-center">
            <p className="text-sm text-secondary-foreground/70">
              © 2026 Viajes personalizados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente de Separador de Etapa con overlay oscuro
function EtapaSeparador({ titulo, descripcion }: { titulo: string; descripcion: string }) {
  return (
    <div className="relative my-8 sm:my-12 md:my-16 py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 rounded overflow-hidden w-full">
      {/* Fondo con overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      <div className="absolute inset-0 bg-primary/10" />
      
      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          {titulo}
        </h2>
        <p className="font-accent text-lg sm:text-xl md:text-2xl italic text-white/90 leading-relaxed max-w-4xl">
          {descripcion}
        </p>
      </div>
    </div>
  );
}

// Componente de Itinerario
function ItinerarioSection() {
  const dias = [
    {
      dia: 1,
      fecha: "Martes 6 de octubre",
      titulo: "Llegada a Madrid",
      ciudad: "Madrid",
      imagen: "/images/jzQ1CSP5JN6D.jpg",
      descripcion:
        "Traslado privado desde el aeropuerto y llegada al hotel para su instalación inmediata. Paseo de orientación por la capital, que combina la elegancia de sus avenidas señoriales con la riqueza histórica del Madrid de los Austrias. Como evento de bienvenida, les invito a una cena típica en el centro de Madrid para disfrutar de la gastronomía local.",
      entradas: "Cena de bienvenida típica",
      etapa: "Etapa I: España",
      etapaDescripcion: "Esta primera etapa está diseñada para sumergirse en el legado imperial de España. El objetivo es combinar la historia viva de Toledo y Segovia con el placer de las compras exclusivas en Madrid, culminando con una travesía mediterránea hacia Italia."
    },
    {
      dia: 2,
      fecha: "Miércoles 7 de octubre",
      titulo: "Toledo",
      ciudad: "Toledo",
      imagen: "/images/4gLfODTP0f1G.jpg",
      km: "75 km",
      tiempo: "40 min",
      descripcion:
        "Salida hacia Toledo y llegada directa al casco histórico. Conocida como la 'Ciudad de las Tres Culturas', es un laberinto medieval de piedra que parece detenido en el tiempo. Su catedral gótica custodia tesoros artísticos incalculables de El Greco y Goya. Regreso a Madrid y tarde libre al final de la jornada.",
      entradas: "Catedral Primada de Toledo",
      guiaLocal: "Sí (guía oficial de Toledo)",
    },
    {
      dia: 3,
      fecha: "Jueves 8 de octubre",
      titulo: "Segovia y Las Rozas Village",
      ciudad: "Segovia",
      imagen: "/images/segovia.jpg",
      km: "92 km",
      tiempo: "50 min",
      descripcion:
        "Traslado matinal a Segovia, famosa por su imponente acueducto romano y su Alcázar. Posteriormente, nos desplazaremos a Las Rozas Village, un exclusivo destino de compras con las mejores firmas de lujo internacionales.",
      entradas: "Alcázar de Segovia y Catedral de Segovia",
      guiaLocal: "Sí (guía oficial de Segovia)",
    },
    {
      dia: 4,
      fecha: "Viernes 9 de octubre",
      titulo: "Madrid → Barcelona y travesía",
      ciudad: "Barcelona",
      imagen: "/images/grimaldi-ferry.webp",
      km: "620 km",
      tiempo: "AVE 2h 30 min",
      descripcion:
        "Billete de tren hacia Barcelona. Tras el checkout en Madrid, dispondrán de tiempo libre en Barcelona. Yo llegaré más tarde con el vehículo y los equipajes para recogerles y embarcar en el Ferry (Suite Exterior y desayuno incluido).",
      entradas: "Billete AVE Preferente y Suite Exterior Ferry (desayuno inc.)",
    },
    {
      dia: 5,
      fecha: "Sábado 10 de octubre",
      titulo: "Llegada a la Toscana",
      ciudad: "Toscana",
      imagen: "/images/borgo-scopeto.jpg",
      km: "180 km",
      tiempo: "1h 30 min",
      descripcion:
        "Tras desembarcar en Civitavecchia al final del día, realizaremos únicamente el traslado nocturno directo hacia el hotel en la Toscana, con llegada prevista sobre las 12 de la noche.",
    },
    {
      dia: 6,
      fecha: "Domingo 11 de octubre",
      titulo: "Pueblos de la Toscana",
      ciudad: "Montepulciano, Pienza y San Gimignano",
      imagenes: ["/images/pienza.jpg", "/images/montepulciano.jpg", "/images/sangimignano.jpg"],
      km: "85 km",
      tiempo: "45 min",
      descripcion:
        "Un día relajado de visita por los pueblos más bellos de la Toscana. Disfrutaremos de un almuerzo en un restaurante típico de 'abuela italiana'. Estos pueblos (como Montepulciano o San Gimignano) se podrán visitar este día o en días posteriores; nos adaptaremos totalmente a sus condiciones y nivel de cansancio tras la travesía en barco.",
      etapa: "Etapa II: Toscana",
      etapaDescripcion: "Exploración de joyas arquitectónicas, inmersión en la cocina italiana y disfrute del hotel Relais Borgo Scopeto (5 estrellas)."
    },
    {
      dia: 7,
      fecha: "Lunes 12 de octubre",
      titulo: "Siena",
      ciudad: "Siena",
      imagen: "/images/siena.jpeg",
      km: "25 km",
      tiempo: "15 min",
      descripcion:
        "Traslado a Siena para visitar la Piazza del Campo y su catedral de mármol. Tarde libre en el hotel o posibilidad de visitar otro pueblo típico como sugerencia adicional.",
      entradas: "Catedral de Siena (Duomo)",
      guiaLocal: "Sí (guía oficial de Siena)",
    },
    {
      dia: 8,
      fecha: "Martes 13 de octubre",
      titulo: "Bodega en Chianti",
      ciudad: "Chianti",
      imagen: "/images/bodega.jpg",
      descripcion:
        "Traslado matinal a una bodega tradicional en Chianti para una cata privada.",
      entradas: "Cata privada y visita técnica a bodega",
    },
    {
      dia: 9,
      fecha: "Miércoles 14 de octubre",
      titulo: "Florencia y su arte",
      ciudad: "Florencia",
      imagen: "/images/3gt9sLy2jOZn.jpg",
      km: "75 km",
      tiempo: "40 min",
      descripcion:
        "Traslado a Florencia e instalación. Paseo por la cuna del Renacimiento, un museo al aire libre donde cada plaza cuenta una historia de genio artístico.",
      etapa: "Etapa III: Norte de Italia",
      etapaDescripcion: "Ascenso hacia la sofisticación: Florencia, Cinque Terre, Milán y el Lago di Como."
    },
    {
      dia: 10,
      fecha: "Jueves 15 de octubre",
      titulo: "Florencia y las galerías",
      ciudad: "Florencia",
      imagenes: ["/images/uffizzi.webp", "/images/uffizzi2.jpeg"],
      descripcion:
        "Inmersión artística con guía experto exclusivamente para la Galería de los Uffizi (Botticelli, Da Vinci, Rafael). La visita a la Galleria dell'Accademia se realizará por libre. Existe la posibilidad de visitar The Mall, el outlet de lujo más exclusivo de la Toscana, con las mejores firmas internacionales.",
      entradas: "Galería Uffizi y Galería de la Academia (acceso prioritario)",
      guiaLocal: "Sí (guía oficial de Florencia)",
    },
    {
      dia: 11,
      fecha: "Viernes 16 de octubre",
      titulo: "Florencia → Cinque Terre → Milán",
      ciudad: "Cinque Terre",
      imagen: "/images/vernazza.jpg",
      km: "A Cinque Terre: 160 km | A Milán: 220 km",
      tiempo: "1h 20 min + 1h 50 min",
      descripcion:
        "Conducción directa hasta Vernazza o Levanto para admirar los pueblos de colores colgados sobre el mar. Tras el paseo, traslado a Milán y llegada al hotel para su instalación.",
    },
    {
      dia: 12,
      fecha: "Sábado 17 de octubre",
      titulo: "Milán",
      ciudad: "Milán",
      imagen: "/images/nNxu2SwmZVLz.jpg",
      descripcion:
        "Visita al Duomo, Castillo Sforzesco y Galería Vittorio Emanuele II. Haremos lo posible por gestionar entradas para 'La Última Cena'. Tarde libre en el centro para compras. Se ofrece la opción de visitar Serravalle Designer Outlet, el más grande de Europa, con una selección premium de marcas italianas.",
      entradas: "Catedral (Duomo), Castillo Sforzesco y La Última Cena",
    },
    {
      dia: 13,
      fecha: "Domingo 18 de octubre",
      titulo: "Milán → Lago di Como",
      ciudad: "Como",
      imagen: "/images/bianca.jpg",
      km: "50 km",
      tiempo: "30 min",
      descripcion:
        "Traslado al Lago di Como y llegada al hotel frente al agua. Un refugio exclusivo de la aristocracia europea.",
    },
    {
      dia: 14,
      fecha: "Lunes 19 de octubre",
      titulo: "Navegación privada en el lago",
      ciudad: "Lago di Como",
      imagen: "/images/como.webp",
      descripcion:
        "Navegación hacia Bellagio y Varenna, perlas del lago con elegancia atemporal, disfrutando del máximo glamour desde el agua.",
      entradas: "Alquiler de lancha motora privada con capitán",
    },
    {
      dia: 15,
      fecha: "Martes 20 de octubre",
      titulo: "Menaggio y Villa Carlotta",
      ciudad: "Menaggio",
      imagen: "/images/qcQ100Yu607o.jpg",
      descripcion:
        "Visita a los jardines de Villa Carlotta. Tarde libre.",
      entradas: "Villa Carlotta y jardines botánicos",
    },
    {
      dia: 16,
      fecha: "Miércoles 21 de octubre",
      titulo: "Paso del San Gotardo",
      ciudad: "Alpes Suizos",
      imagen: "/images/gotardo.webp",
      km: "200 km",
      tiempo: "1h 40 min",
      descripcion:
        "Paso del San Gotardo, una de las carreteras más bellas del mundo (sujeto a clima). Llegada a Lucerna.",
      etapa: "Etapa IV: Suiza",
      etapaDescripcion: "Paisajes alpinos y precisión helvética."
    },
    {
      dia: 17,
      fecha: "Jueves 22 de octubre",
      titulo: "Lucerna",
      ciudad: "Lucerna",
      imagen: "/images/sMucKYaSFmFJ.webp",
      descripcion:
        "Lucerna fue el refugio predilecto de la realeza del siglo XIX; la Reina Victoria de Inglaterra la eligió para su descanso, consolidándola como el destino más aristocrático de los Alpes. Tarde libre para compras.",
    },
    {
      dia: 18,
      fecha: "Viernes 23 de octubre",
      titulo: "Monte Pilatus",
      ciudad: "Lucerna",
      imagen: "/images/pilatus.jpg",
      descripcion:
        "Ascenso al Monte Pilatus. Tarde libre en Lucerna o paseo en barco por el lago (incluido).",
      entradas: "Tickets tren cremallera / teleférico Monte Pilatus",
    },
    {
      dia: 19,
      fecha: "Sábado 24 de octubre",
      titulo: "Lucerna → Zúrich",
      ciudad: "Zúrich",
      imagen: "/images/fyUJyLgiQVx8.jpg",
      km: "55 km",
      tiempo: "30 min",
      descripcion:
        "Zúrich destaca por su elegancia urbana y exclusividad, ofreciendo una calidad de vida inigualable a orillas del agua.",
    },
    {
      dia: 20,
      fecha: "Domingo 25 de octubre",
      titulo: "Cataratas del Rin y compras",
      ciudad: "Zúrich",
      imagen: "/images/rin.jpg",
      km: "50 km",
      tiempo: "30 min",
      descripcion:
        "Traslado al mayor salto de agua de Europa Central. Regreso a Zúrich para recorrer la Bahnhofstrasse, epicentro de la alta relojería y el chocolate artesanal.",
      entradas: "Acceso miradores Cataratas del Rin",
    },
    {
      dia: 21,
      fecha: "Lunes 26 de octubre",
      titulo: "Zúrich relax",
      ciudad: "Zúrich",
      imagen: "/images/zurich1.jpg",
      descripcion:
        "Día de relax y últimas compras. En esta jornada nos despedimos del guía para que disfruten de total independencia.",
    },
    {
      dia: 22,
      fecha: "Martes 27 al jueves 29 de octubre",
      titulo: "Regreso a Madrid y Guatemala",
      ciudad: "Madrid",
      imagen: "/images/xpT2XAj2YaiN.jpg",
      descripcion:
        "Dos noches finales en Madrid para descanso y preparación del regreso internacional.",
      etapa: "Etapa V: Regreso",
      etapaDescripcion: "Regreso a Madrid, recuperación de compras y estancia final antes del vuelo de regreso el día 29."
    },
  ];

  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Itinerario día por día
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Un recorrido cuidadosamente diseñado que combina la riqueza cultural
          de España, la belleza atemporal de Italia y la elegancia alpina de
          Suiza. Cada día ha sido pensado para ofrecer experiencias auténticas
          con el equilibrio perfecto entre visitas guiadas y tiempo libre.
        </p>
      </div>

      <div className="space-y-8">
        {dias.map((dia, index) => (
          <div key={index}>
            {dia.etapa && dia.etapaDescripcion && (
              <EtapaSeparador titulo={dia.etapa} descripcion={dia.etapaDescripcion} />
            )}
            {dia.etapa && !dia.etapaDescripcion && (
              <div className="my-16 py-8 px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border-l-4 border-primary">
                <h2 className="font-display text-4xl font-bold text-foreground">
                  {dia.etapa}
                </h2>
              </div>
            )}
            <DiaCard {...dia} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DiaCard({
  dia,
  fecha,
  titulo,
  ciudad,
  imagen,
  imagenes,
  km,
  tiempo,
  descripcion,
  entradas,
  guiaLocal,
}: {
  dia: number;
  fecha: string;
  titulo: string;
  ciudad: string;
  imagen?: string;
  imagenes?: string[];
  km?: string;
  tiempo?: string;
  descripcion: string;
  entradas?: string;
  guiaLocal?: string;
}) {
  return (
    <Card className="overflow-hidden border-border luxury-shadow hover:shadow-xl transition-all duration-400 bg-card">
      {/* Layout: Imagen izquierda, texto derecha en desktop; apilado en móvil */}
      <div className="flex flex-col lg:flex-row">
        {/* Imagen o Slider */}
        <div className="lg:w-2/5 flex-shrink-0">
          {imagenes && imagenes.length > 0 ? (
              <div className="relative h-full min-h-[250px] sm:min-h-[300px] md:min-h-[320px]">
              <ImageCarousel images={imagenes} alt={ciudad} />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded shadow-lg z-20">
                <span className="font-display text-2xl font-bold">Día {dia}</span>
              </div>
            </div>
          ) : (
            <div className="relative h-full min-h-[250px] sm:min-h-[300px] md:min-h-[320px]">
              <img
                src={imagen}
                alt={ciudad}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded shadow-lg">
                <span className="font-display text-2xl font-bold">Día {dia}</span>
              </div>
            </div>
          )}
        </div>

        {/* Contenido - Alineado perfectamente con imagen, sin padding extra */}
        <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-5 flex flex-col justify-center">
          {/* Encabezado */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              {fecha}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              {titulo}
            </h3>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold text-lg">{ciudad}</span>
            </div>
          </div>

          {/* KM y Tiempo - Tipografía Sans-Serif muy fina y pequeña */}
          {(km || tiempo) && (
            <div className="flex items-center gap-6 text-xs font-light text-muted-foreground tracking-wide">
              {km && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{km}</span>
                </div>
              )}
              {tiempo && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tiempo}</span>
                </div>
              )}
            </div>
          )}

          {/* Descripción con espaciado generoso */}
          <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">{descripcion}</p>

          {/* Servicios con iconos horizontales minimalistas */}
          {(entradas || guiaLocal) && (
            <div className="flex flex-wrap gap-4 pt-3">
              {entradas && (
                <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded border border-primary/20">
                  <Ticket className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-0.5">
                      Entradas
                    </p>
                    <p className="text-sm text-foreground">{entradas}</p>
                  </div>
                </div>
              )}
              {guiaLocal && (
                <div className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded border border-secondary">
                  <svg
                    className="w-5 h-5 text-foreground flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs text-foreground font-semibold uppercase tracking-wide mb-0.5">
                      Guía local
                    </p>
                    <p className="text-sm text-foreground/80">{guiaLocal}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

// Componente de Hoteles
function HotelesSection() {
  const hoteles = [
    {
      nombre: "Hotel Emperador",
      estrellas: 4,
      ciudad: "Madrid",
      ubicacion: "Centro - Gran Vía",
      tipo: "Corner Junior Suite",
      fechaInicio: "06/10/2026",
      fechaFin: "09/10/2026",
      descripcion:
        "Un emblema de la elegancia clásica en la arteria más vibrante de Madrid. Su espectacular 'Beach Club' en la azotea ofrece la piscina más icónica del centro y vistas inigualables del skyline madrileño.",
      imagenPrincipal: "/images/emperador-fachada.jpg",
      imagenHabitacion: "/images/emperador-hab.jpg",
    },
    {
      nombre: "Grimaldi Lines",
      estrellas: 0,
      ciudad: "Ferry Barcelona-Italia",
      ubicacion: "Travesía marítima",
      tipo: "Junior Suite Exterior",
      fechaInicio: "09/10/2026",
      fechaFin: "10/10/2026",
      descripcion: "Travesía mediterránea nocturna con suite exterior y desayuno incluido a bordo.",
      imagenPrincipal: "/images/barco-fachada.jpg",
      imagenHabitacion: "/images/barco-hab.jpg",
    },
    {
      nombre: "Relais Borgo Scopeto Wine & Spa",
      estrellas: 5,
      ciudad: "Toscana",
      ubicacion: "Castelnuovo Berardenga (Chianti)",
      tipo: "Doble Deluxe",
      fechaInicio: "10/10/2026",
      fechaFin: "14/10/2026",
      descripcion:
        "Un refugio señorial del siglo XIV restaurado con un gusto exquisito. Esta habitación Doble Deluxe ofrece amplitud y diseño refinado en un entorno de viñedos, complementado por un spa de clase mundial y gastronomía toscana de alta excelencia.",
      imagenPrincipal: "/images/borgo-fachada.jpg",
      imagenHabitacion: "/images/borgo-hab.jpg",
    },
    {
      nombre: "Room Mate Collection Isabella",
      estrellas: 4,
      ciudad: "Florencia",
      ubicacion: "Centro Histórico - Via de' Tornabuoni",
      tipo: "Doble Deluxe",
      fechaInicio: "14/10/2026",
      fechaFin: "16/10/2026",
      descripcion:
        "Lujo boutique en un palacio del siglo XIX situado en la calle más exclusiva de Florencia. A pasos de las grandes firmas de moda y los tesoros del Renacimiento, combina aristocracia y modernidad.",
      imagenPrincipal: "/images/florencia-fachada.jpg",
      imagenHabitacion: "/images/florencia-hab.jpg",
    },
    {
      nombre: "Hotel The Square Milano Duomo",
      estrellas: 4,
      ciudad: "Milán",
      ubicacion: "Centro - Junto al Duomo",
      tipo: "Habitación Doble Executive",
      fechaInicio: "16/10/2026",
      fechaFin: "18/10/2026",
      descripcion:
        "Ubicado en un edificio histórico renovado con un estilo contemporáneo y prestigioso. Su ubicación es inmejorable, en el corazón de Milán, ofreciendo una terraza panorámica y un nivel de servicio ejecutivo excepcional a pocos metros de la catedral.",
      imagenPrincipal: "/images/milan-fachada1.jpg",
      imagenHabitacion: "/images/milan-hab1.jpg",
      lujoSuperior: true,
    },
    {
      nombre: "Bianca Relais (by R Collection)",
      estrellas: 5,
      ciudad: "Lago di Como",
      ubicacion: "Frente al Lago (Oggiono)",
      tipo: "Suite Junior con Vistas al Lago",
      fechaInicio: "18/10/2026",
      fechaFin: "21/10/2026",
      descripcion:
        "La máxima expresión del lujo contemporáneo a orillas del lago. Esta Suite Junior ofrece vistas frontales al agua en un entorno íntimo y exclusivo de solo 10 habitaciones, donde el diseño de vanguardia se funde con la serenidad del paisaje alpino.",
      imagenPrincipal: "/images/como-fachada.jpg",
      imagenHabitacion: "/images/como-hab.jpg",
    },
    {
      nombre: "Radisson Blu Lucerne",
      estrellas: 4,
      ciudad: "Lucerna",
      ubicacion: "Centro - Frente al Lago",
      tipo: "Habitación Premium",
      fechaInicio: "21/10/2026",
      fechaFin: "24/10/2026",
      descripcion:
        "Arquitectura de cristal y confort suizo de última generación. Situado estratégicamente frente al lago, permite disfrutar de vistas panorámicas y acceso inmediato al casco antiguo y los muelles de navegación.",
      imagenPrincipal: "/images/lucerna-fachada.jpg",
      imagenHabitacion: "/images/lucerna-hab.jpg",
    },
    {
      nombre: "Central Plaza Hotel",
      estrellas: 4,
      ciudad: "Zúrich",
      ubicacion: "Centro - Junto al Río Limmat",
      tipo: "Corner Junior Suite",
      fechaInicio: "24/10/2026",
      fechaFin: "27/10/2026",
      descripcion:
        "Tradición y lujo en el punto más céntrico de Zúrich. A pasos de la Bahnhofstrasse y la estación central, ofrece un refugio insonorizado de alta calidad con el mejor piano bar de la ciudad.",
      imagenPrincipal: "/images/zurich-fachada.jpg",
      imagenHabitacion: "/images/zurich-hab.jpg",
    },
    {
      nombre: "Hotel Emperador",
      estrellas: 4,
      ciudad: "Madrid",
      ubicacion: "Centro - Gran Vía",
      tipo: "Habitación Doble Superior",
      fechaInicio: "27/10/2026",
      fechaFin: "29/10/2026",
      descripcion:
        "Regreso al emblemático Hotel Emperador para las noches finales del viaje. Habitación Doble Superior con todas las comodidades para descansar antes del vuelo de regreso, con acceso al icónico 'Beach Club' en la azotea.",
      imagenPrincipal: "/images/emperador-fachada.jpg",
      imagenHabitacion: "/images/emperador-hab.jpg",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Nuestra colección de hoteles: confort y exclusividad
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Cada hotel ha sido cuidadosamente seleccionado por su ubicación
          privilegiada, servicios de calidad y carácter único. Todas las
          habitaciones son de categoría Superior o Suite para garantizar máximo
          confort durante su viaje.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {hoteles.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </div>
  );
}

function HotelCard({
  nombre,
  estrellas,
  ciudad,
  ubicacion,
  tipo,
  fechaInicio,
  fechaFin,
  descripcion,
  imagenPrincipal,
  imagenHabitacion,
  lujoSuperior,
}: {
  nombre: string;
  estrellas: number;
  ciudad: string;
  ubicacion: string;
  tipo: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  imagenPrincipal: string;
  imagenHabitacion: string;
  lujoSuperior?: boolean;
}) {
  return (
    <Card className="overflow-hidden border-border luxury-shadow hover:shadow-xl transition-all duration-400 bg-card">
      {/* Layout de Revista - Imagen grande */}
      <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden w-full">
        <img
          src={imagenPrincipal}
          alt={nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Información sobre la imagen */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <div className="flex items-center gap-2 mb-3">
            <Hotel className="w-5 h-5 text-white" />
            <span className="text-sm text-white/90 uppercase tracking-wider font-light">
              {ciudad}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {nombre}
          </h3>
          
          {/* Estrellas en iconos dorados */}
          {estrellas > 0 && (
            <div className="flex items-center gap-1">
              {Array.from({ length: estrellas }).map((_, i) => (
                <span key={i} className="text-primary text-2xl drop-shadow-lg">
                  ★
                </span>
              ))}
              {lujoSuperior && (
                <span className="ml-3 text-xs text-white bg-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                  Lujo Superior
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cuadro de texto con fondo blanco puro */}
      <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 bg-white">
        {/* Nombre de la habitación - Tipografía elegante y destacada */}
        <div className="border-b border-border pb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Habitación reservada
          </p>
          <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
            {tipo}
          </h4>
        </div>

        {/* Información de ubicación y fechas */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                Ubicación
              </p>
              <p className="text-sm text-foreground font-medium">{ubicacion}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                Estancia
              </p>
              <p className="text-sm text-foreground font-medium">
                {fechaInicio} - {fechaFin}
              </p>
            </div>
          </div>
        </div>

        {/* Descripción con espaciado generoso */}
        <p className="text-foreground/85 leading-relaxed text-sm sm:text-base pt-2">{descripcion}</p>
        
        {/* Imagen de habitación pequeña como preview */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg mt-4">
          <img
            src={imagenHabitacion}
            alt={`${tipo} - ${nombre}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-foreground">
            Vista de la habitación
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente de Presupuesto
function PresupuestoSection() {
  const transporteLogistica = [
    {
      titulo: "Vehículo privado",
      descripcion:
        "Furgoneta Mercedes-Benz Clase V (o similar de alta gama), amplia y acondicionada para máxima comodidad y capacidad de equipaje.",
    },
    {
      titulo: "Guía acompañante",
      descripcion:
        "Servicio exclusivo de conductor-guía durante los 24 días de viaje (disponibilidad 24/7).",
    },
    {
      titulo: "Alta velocidad",
      descripcion: "Billetes de tren de Alta Velocidad (AVE).",
    },
    {
      titulo: "Travesía marítima",
      descripcion: "Ferry en Suite Junior Exterior con desayuno incluido.",
    },
    {
      titulo: "Gastos operativos",
      descripcion:
        "Combustible, peajes, parkings en todas las ciudades y manutención del guía.",
    },
  ];

  const entradas = [
    { lugar: "Toledo", detalle: "Entrada a la Catedral Primada (con guía local oficial)" },
    {
      lugar: "Segovia",
      detalle: "Entradas al Alcázar y a la Catedral (con guía local oficial)",
    },
    {
      lugar: "Siena",
      detalle: "Entrada a la Catedral / Duomo (con guía local oficial)",
    },
    {
      lugar: "Toscana",
      detalle: "Visita técnica y cata privada en bodega tradicional de Chianti",
    },
    {
      lugar: "Florencia",
      detalle:
        "Entradas preferentes a la Galería Uffizi y Galería de la Academia (con guía local oficial)",
    },
    {
      lugar: "Milán",
      detalle:
        "Entradas al Duomo, Castillo Sforzesco y 'La Última Cena' (sujeto a disponibilidad)",
    },
    {
      lugar: "Lago di Como",
      detalle: "Alquiler de lancha motora privada con capitán para tour panorámico",
    },
    {
      lugar: "Lago di Como",
      detalle: "Entrada a Villa Carlotta y sus jardines botánicos",
    },
    {
      lugar: "Alpes Suizos",
      detalle: "Tickets de tren cremallera y teleférico para el ascenso al Monte Pilatus",
    },
    { lugar: "Cataratas del Rhin", detalle: "Acceso a los miradores principales" },
  ];

  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Presupuesto y condiciones del viaje
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Precio basado en el itinerario presentado y los hoteles seleccionados. La idea es verlo juntos y ajustar en función de las demandas que puedan tener, ya que se ha elaborado teniendo en cuenta sus gustos y formas de viajar. Aparte, también revisaremos juntos las entradas y los guías locales para que el resultado final esté totalmente a su gusto.
        </p>
      </div>

      {/* Presupuesto Total Destacado */}
      <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              Importe total del viaje
            </p>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">
              29.500 €
            </p>
            <p className="text-sm text-muted-foreground">
              Presupuesto para 2 personas
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Qué está incluido */}
      <div className="space-y-8">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
          Qué está incluido
        </h3>

        {/* Transporte y Logística */}
        <Card className="border-border">
          <CardContent className="p-4 sm:p-5 md:p-6">
            <h4 className="font-display text-xl sm:text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              Transporte y logística
            </h4>
            <div className="space-y-4">
              {transporteLogistica.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">{item.titulo}</p>
                    <p className="text-sm text-foreground/70">{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gastronomía de Bienvenida */}
        <Card className="border-border">
          <CardContent className="p-4 sm:p-5 md:p-6">
            <h4 className="font-display text-xl sm:text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Utensils className="w-6 h-6 text-primary" />
              Gastronomía de bienvenida
            </h4>
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1 text-lg">✓</span>
              <div>
                <p className="font-semibold text-foreground">Cena de bienvenida</p>
                <p className="text-sm text-foreground/70">
                  Invitación a una cena típica en el centro de Madrid el primer día
                  de llegada.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalle de Entradas y Actividades */}
        <Card className="border-border">
          <CardContent className="p-4 sm:p-5 md:p-6">
            <h4 className="font-display text-xl sm:text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Ticket className="w-6 h-6 text-primary" />
              Detalle de entradas y actividades incluidas
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {entradas.map((entrada, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">{entrada.lugar}</p>
                    <p className="text-sm text-foreground/70">{entrada.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Condiciones Generales */}
      <div className="space-y-6">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
          Condiciones generales
        </h3>

        <Card className="border-border">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Coffee className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Régimen de estancia
                </p>
                <p className="text-sm text-foreground/70">
                  El presupuesto incluye siempre alojamiento y desayuno en todos los
                  hoteles seleccionados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Flexibilidad total
                </p>
                <p className="text-sm text-foreground/70">
                  El itinerario es abierto. Los clientes tienen la libertad de
                  cambiar, reorganizar, añadir o eliminar elementos a su gusto, tanto
                  antes como durante el transcurso del viaje.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Servicio de orientación
                </p>
                <p className="text-sm text-foreground/70">
                  En los destinos donde no haya guía local oficial, el guía
                  acompañante realizará una explicación histórica y logística antes de
                  su tiempo libre.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Plane className="w-5 h-5 text-muted-foreground mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">Vuelos</p>
                <p className="text-sm text-foreground/70">
                  No se incluyen los vuelos internacionales ni el vuelo de conexión
                  Zúrich-Madrid.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Reserva y confirmación
                </p>
                <p className="text-sm text-foreground/70">
                  Una vez validado el presupuesto, se emitirá la factura
                  correspondiente con los detalles para el pago.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Política de Cancelación */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="p-6">
          <h4 className="font-display text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-destructive" />
            Política de cancelación
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-destructive mt-1">•</span>
              <div>
                <p className="font-semibold text-foreground">Gastos de gestión</p>
                <p className="text-sm text-foreground/70">
                  La cancelación del viaje conlleva un cargo fijo de 1.500 €.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-destructive mt-1">•</span>
              <div>
                <p className="font-semibold text-foreground">Reembolsos</p>
                <p className="text-sm text-foreground/70">
                  Los importes a devolver dependerán de las políticas específicas de
                  cada proveedor (hoteles y transportes). Nos comprometemos a
                  gestionar la recuperación del máximo importe posible en cada caso.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
