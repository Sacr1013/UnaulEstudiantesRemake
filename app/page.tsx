"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  GraduationCap,
  Calendar,
  CreditCard,
  FileText,
  Mail,
  BookOpen,
  Users,
  Clock,
  Star,
  MessageSquare,
  Phone,
  DollarSign,
  Award,
  Settings,
  HelpCircle,
  ExternalLink,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

export default function EstudiantesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const allServicios = [
    {
      title: "CLAVE ULISES",
      description: "Obtén o cambia tu contraseña. Revisa la guía aquí",
      icon: <Settings className="h-6 w-6" />,
      category: "Acceso",
      section: "Académico",
      urgent: true,
      keywords: ["contraseña", "acceso", "login", "usuario", "clave"],
    },
    {
      title: "CALENDARIO PREGRADOS",
      description: "No te pierdas ninguna fecha clave",
      icon: <Calendar className="h-6 w-6" />,
      category: "Académico",
      section: "Académico",
      keywords: ["fechas", "calendario", "pregrado", "cronograma"],
    },
    {
      title: "CALENDARIO POSGRADOS",
      description: "Planifica tu semestre desde hoy",
      icon: <Calendar className="h-6 w-6" />,
      category: "Académico",
      section: "Académico",
      keywords: ["fechas", "calendario", "posgrado", "maestría", "especialización"],
    },
    {
      title: "TURNOS DE MATRÍCULA",
      description: "Consulta las fechas asignadas para realizar tu matrícula",
      icon: <Clock className="h-6 w-6" />,
      category: "Matrícula",
      section: "Académico",
      keywords: ["matrícula", "inscripción", "turnos", "fechas"],
    },
    {
      title: "ENCUESTA AUTOEVALUACIÓN",
      description: "Evalúa y apoya el proceso de calidad",
      icon: <MessageSquare className="h-6 w-6" />,
      category: "Evaluación",
      section: "Evaluación",
      keywords: ["encuesta", "autoevaluación", "calidad"],
    },
    {
      title: "EVALUACIÓN DOCENTE PREGRADO",
      description: "Tu opinión construye una mejor universidad",
      icon: <Star className="h-6 w-6" />,
      category: "Evaluación",
      section: "Evaluación",
      keywords: ["evaluación", "docente", "profesor", "pregrado"],
    },
    {
      title: "EVALUACIÓN DOCENTE POSGRADO",
      description: "Ayúdanos a fortalecer la experiencia académica",
      icon: <Star className="h-6 w-6" />,
      category: "Evaluación",
      section: "Evaluación",
      keywords: ["evaluación", "docente", "profesor", "posgrado"],
    },
    {
      title: "TEST DE CARACTERIZACIÓN",
      description: "Tus datos son clave para seguir creciendo juntos",
      icon: <FileText className="h-6 w-6" />,
      category: "Evaluación",
      section: "Evaluación",
      keywords: ["test", "caracterización", "datos", "perfil"],
    },
    {
      title: "CORREO INSTITUCIONAL",
      description: "Ingresa a tu correo electrónico universitario",
      icon: <Mail className="h-6 w-6" />,
      category: "Digital",
      section: "Digital",
      keywords: ["correo", "email", "institucional", "outlook"],
    },
    {
      title: "UNAULA VIRTUAL",
      description: "Tu espacio académico en línea",
      icon: <BookOpen className="h-6 w-6" />,
      category: "Digital",
      section: "Digital",
      keywords: ["virtual", "plataforma", "moodle", "clases"],
    },
    {
      title: "LEX",
      description: "Ingresa al sistema de gestión jurídica",
      icon: <FileText className="h-6 w-6" />,
      category: "Digital",
      section: "Digital",
      keywords: ["lex", "jurídica", "derecho", "legal"],
    },
    {
      title: "FORMATOS",
      description: "Accede a los formatos institucionales aquí",
      icon: <FileText className="h-6 w-6" />,
      category: "Digital",
      section: "Digital",
      keywords: ["formatos", "documentos", "plantillas"],
    },
    {
      title: "TAQUILLA VIRTUAL",
      description: "Tus trámites académicos con Admisiones y Registro, en un solo clic",
      icon: <CreditCard className="h-6 w-6" />,
      category: "Financiero",
      section: "Financiero",
      popular: true,
      keywords: ["taquilla", "trámites", "admisiones", "registro"],
    },
    {
      title: "PAGOS EN LÍNEA",
      description: "Paga tus trámites de Admisiones y Registro sin filas",
      icon: <DollarSign className="h-6 w-6" />,
      category: "Financiero",
      section: "Financiero",
      popular: true,
      keywords: ["pagos", "pagar", "online", "matrícula", "dinero"],
    },
    {
      title: "PAGO DE CRÉDITO",
      description: "Paga tu crédito de forma rápida y segura",
      icon: <CreditCard className="h-6 w-6" />,
      category: "Financiero",
      section: "Financiero",
      keywords: ["crédito", "préstamo", "financiación"],
    },
    {
      title: "LIQUIDACIONES INTERNAS",
      description: "Realiza el pago de tus conceptos internos",
      icon: <FileText className="h-6 w-6" />,
      category: "Financiero",
      section: "Financiero",
      keywords: ["liquidaciones", "conceptos", "internos"],
    },
    {
      title: "MESA DE AYUDA TIC",
      description: "Soporte para correo, plataforma o cámaras. Revisa las preguntas frecuentes aquí",
      icon: <HelpCircle className="h-6 w-6" />,
      category: "Soporte",
      section: "Apoyo",
      keywords: ["ayuda", "soporte", "tic", "técnico", "problemas"],
    },
    {
      title: "GRADOS",
      description: "Conoce fechas, requisitos y documentos necesarios",
      icon: <GraduationCap className="h-6 w-6" />,
      category: "Graduación",
      section: "Apoyo",
      keywords: ["grados", "graduación", "ceremonia", "diploma"],
    },
    {
      title: "AGENDAMIENTO DE CITAS",
      description: "Programa tu atención en la oficina de Créditos",
      icon: <Calendar className="h-6 w-6" />,
      category: "Citas",
      section: "Apoyo",
      keywords: ["citas", "agendar", "créditos", "oficina"],
    },
    {
      title: "OFERTA EDUCO",
      description: "Descubre toda nuestra oferta de Educación Continua",
      icon: <Award className="h-6 w-6" />,
      category: "Educación",
      section: "Apoyo",
      keywords: ["educo", "educación continua", "cursos", "diplomados"],
    },
  ]

  const filteredServicios = useMemo(() => {
    console.log("[v0] Search term:", searchTerm) // Added debug log for search term

    if (!searchTerm) return allServicios

    const searchLower = searchTerm.toLowerCase()
    const filtered = allServicios.filter(
      (servicio) =>
        servicio.title.toLowerCase().includes(searchLower) ||
        servicio.description.toLowerCase().includes(searchLower) ||
        servicio.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower)) ||
        servicio.category.toLowerCase().includes(searchLower),
    )

    console.log("[v0] Filtered results:", filtered.length, "services found") // Added debug log for results
    return filtered
  }, [searchTerm])

  const groupedServicios = useMemo(() => {
    const grouped = filteredServicios.reduce(
      (acc, servicio) => {
        if (!acc[servicio.section]) {
          acc[servicio.section] = []
        }
        acc[servicio.section].push(servicio)
        return acc
      },
      {} as Record<string, typeof allServicios>,
    )

    return grouped
  }, [filteredServicios])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    UNAULA
                  </h1>
                  <p className="text-sm text-muted-foreground">Portal Estudiantes</p>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium">
                    Universidad <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Historia</DropdownMenuItem>
                  <DropdownMenuItem>Misión y Visión</DropdownMenuItem>
                  <DropdownMenuItem>Directivos</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium">
                    Programas <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Pregrados</DropdownMenuItem>
                  <DropdownMenuItem>Posgrados</DropdownMenuItem>
                  <DropdownMenuItem>Educación Continua</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" className="text-sm font-medium">
                Admisiones
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                Internacionalización
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                Extensión
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                Investigación
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                Bienestar
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                Biblioteca
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Universidad
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Programas
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Admisiones
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Internacionalización
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Extensión
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Investigación
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Bienestar
                </Button>
                <Button variant="ghost" className="justify-start text-sm font-medium">
                  Biblioteca
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground py-20 overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full overflow-hidden">
            <img
              src="/happy-student-studying.png"
              alt="Estudiante universitario"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-20 right-20 w-24 h-24 rounded-full overflow-hidden">
            <img
              src="/university-collaboration.png"
              alt="Estudiantes colaborando"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-10 left-1/4 w-28 h-28 rounded-full overflow-hidden">
            <img src="/modern-campus-student.png" alt="Estudiante con laptop" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full overflow-hidden">
            <img
              src="/graduation-celebration.png"
              alt="Graduación universitaria"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Tu Portal Estudiantil
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Accede a todos tus servicios académicos, financieros y de apoyo en un solo lugar. Tu éxito académico
            comienza aquí.
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar servicios... (ej: pagos, matrícula, correo, calendario)"
                value={searchTerm}
                onChange={(e) => {
                  console.log("[v0] Input change:", e.target.value) // Added debug log for input changes
                  setSearchTerm(e.target.value)
                }}
                className="pl-12 pr-4 py-4 text-lg bg-background/95 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
            {searchTerm && (
              <p className="text-sm mt-2 opacity-80">
                {filteredServicios.length} servicio{filteredServicios.length !== 1 ? "s" : ""} encontrado
                {filteredServicios.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <ExternalLink className="mr-2 h-5 w-5" />
              Acceso Rápido ULISES
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="mr-2 h-5 w-5" />
              Mesa de Ayuda
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {searchTerm ? (
          // Search results view
          <section>
            <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] mb-8">
              Resultados de búsqueda para "{searchTerm}"
            </h2>
            {filteredServicios.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServicios.map((servicio, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {servicio.icon}
                        </div>
                        <div className="flex flex-col gap-1">
                          {servicio.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgente
                            </Badge>
                          )}
                          {servicio.popular && (
                            <Badge className="text-xs bg-secondary text-secondary-foreground">Popular</Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                        {servicio.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed mb-3">{servicio.description}</CardDescription>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {servicio.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {servicio.section}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No se encontraron servicios</h3>
                <p className="text-muted-foreground">
                  Intenta con otros términos como "pagos", "matrícula", "correo" o "calendario"
                </p>
              </div>
            )}
          </section>
        ) : (
          // Default organized view
          <>
            {/* Servicios Académicos */}
            {groupedServicios.Académico && (
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    Servicios Académicos
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {groupedServicios.Académico.map((servicio, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {servicio.icon}
                          </div>
                          {servicio.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgente
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                          {servicio.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">{servicio.description}</CardDescription>
                        <Badge variant="secondary" className="mt-3 text-xs">
                          {servicio.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Servicios Financieros */}
            {groupedServicios.Financiero && (
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <CreditCard className="h-8 w-8 text-secondary" />
                  <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    Servicios Financieros
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {groupedServicios.Financiero.map((servicio, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                            {servicio.icon}
                          </div>
                          {servicio.popular && (
                            <Badge className="text-xs bg-secondary text-secondary-foreground">Popular</Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                          {servicio.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">{servicio.description}</CardDescription>
                        <Badge variant="outline" className="mt-3 text-xs">
                          {servicio.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Servicios de Evaluación */}
            {groupedServicios.Evaluación && (
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <Star className="h-8 w-8 text-accent" />
                  <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    Evaluación y Calidad
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {groupedServicios.Evaluación.map((servicio, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            {servicio.icon}
                          </div>
                          <CardTitle className="text-lg font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                            {servicio.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">{servicio.description}</CardDescription>
                        <Badge variant="outline" className="mt-3 text-xs">
                          {servicio.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Servicios Digitales y Apoyo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Servicios Digitales */}
              {groupedServicios.Digital && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Users className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                      Plataformas Digitales
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {groupedServicios.Digital.map((servicio, index) => (
                      <Card key={index} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {servicio.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                                {servicio.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{servicio.description}</p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Servicios de Apoyo */}
              {groupedServicios.Apoyo && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <HelpCircle className="h-8 w-8 text-secondary" />
                    <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                      Apoyo y Graduación
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {groupedServicios.Apoyo.map((servicio, index) => (
                      <Card key={index} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                              {servicio.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                                {servicio.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{servicio.description}</p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Universidad Autónoma Latinoamericana - UNAULA. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Portal de Servicios Estudiantiles | Mesa de Ayuda: soporte@unaula.edu.co
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
