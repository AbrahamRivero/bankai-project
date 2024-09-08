"use client";

import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

const phoneRegex = new RegExp(/^5\d{7}$/);

const formSchema = z.object({
  name: z.string({ required_error: "Este campo es requerido." }).min(2, {
    message: "Nombre debe contener al menos 2 caractéres.",
  }),
  phone: z
    .string({
      required_error: "Este campo es requerido.",
      invalid_type_error: "Teléfono solo puede contener números.",
    })
    .regex(phoneRegex, { message: "Teléfono no es válido." })
    .min(8, { message: "Teléfono no debe contener menos de 8 números." })
    .max(8, {
      message: "Teléfono no debe contener más de 8 números.",
    }),
  message: z.string({ required_error: "Este campo es requerido." }).min(2, {
    message: "Mensaje debe contener al menos 2 caractéres.",
  }),
});

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      phone: undefined,
      message: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `Me llamo ${values.name}, mi número es ${values.phone}. ${values.message}`;

    const textEncode = encodeURIComponent(message);

    try {
      window.open(`https://wa.me/58113443?text=${textEncode}`, "_blank");
    } catch (error) {
      console.error(error);
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  }

  return (
    <div className="min-h-screen flex justify-center flex-wrap bg-slate-50">
      <BreadcrumbBanner />
      <main className="container mx-auto px-4 sm:px-7 py-8">
        <Card className="border-none shadow-none bg-slate-50">
          <CardHeader className="items-center">
            <CardTitle className="text-3xl font-bold text-center mb-1 text-black">
              Póngase en contacto con nosotros
            </CardTitle>
            <CardDescription className="sm:max-w-xl max-w-sm text-center">
              Para más información acerca de nuestros{" "}
              <span className="text-blue-600">Productos & Servicios</span>, por
              favor, sienta la libertad de escribirnos, nuestro{" "}
              <span className="text-blue-600">Equipo</span> siempre estará
              disponible para ayudarlo.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Envíanos un mensaje
              </h2>
              {isSubmitted ? (
                <div className="text-green-600 text-center py-8">
                  <CircleCheckBig className="mx-auto w-16 h-16 mb-4" />
                  <p className="text-xl font-semibold">
                    ¡Gracias por tu mensaje!
                  </p>
                  <p>Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu móvil"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tu mensaje aquí..."
                              className="h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full sm:w-fit">
                      Enviar Mensaje
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Ubicación
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2594.693282385335!2d-81.28951485782434!3d23.117205560163647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA3JzAxLjciTiA4McKwMTcnMTguOSJX!5e0!3m2!1ses-419!2sus!4v1725754070093!5m2!1ses-419!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md shadow-md"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
