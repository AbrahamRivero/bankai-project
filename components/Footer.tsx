import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all pt-8 pb-6">
      <div className="mx-auto w-full px-2.5 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pb-8">
          <div>
            <h3 className="font-semibold">Bankai Project</h3>

            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 text-gray-400 mr-2" />
                <a href="tel:+5358113443" className="text-sm text-gray-400">
                  +5358113443
                </a>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-4 h-4 text-gray-400 mr-2" />
                <a
                  href="mailto:riveromartinezabraham@gmail.com"
                  className="text-sm text-gray-400"
                >
                  riveromartinezabraham@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-400">
                  Calle 12/ 3era y 4ta #315 Santa Marta, Matanzas
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="text-sm text-gray-400 sm:font-medium">Links</h3>
            <Separator className="block sm:hidden" />
            <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4">
              <Link href="/" className="text-sm">
                Inicio
              </Link>
              <Link href="/shop" className="text-sm">
                Tienda
              </Link>
              <Link href="/events" className="text-sm">
                Eventos
              </Link>
              <Link href="/about-us" className="text-sm">
                Sobre Nosotros
              </Link>
              <Link href="/contact-us" className="text-sm">
                Contáctenos
              </Link>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="text-sm text-gray-400 sm:font-medium">Ayuda</h3>
            <Separator className="block sm:hidden" />
            <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4">
              <Link href="/" className="text-sm">
                Métodos de Pago
              </Link>
              <Link href="/" className="text-sm">
                Reembolsos
              </Link>
              <Link href="/" className="text-sm">
                Domicilio
              </Link>
              <Link href="/" className="text-sm">
                Horarios
              </Link>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="text-sm text-gray-400 sm:font-medium">Redes</h3>
            <Separator className="block sm:hidden" />
            <div className="flex -mx-2 mt-6 sm:mt-8">
              <a
                href="https://www.instagram.com/bankaiprojectoficial/"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/groups/1263396164551200/#_=_"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebook className="w-4 h-4" />
              </a>

              <a
                href="https://chat.whatsapp.com/Br3eTByxbuUCwapR0V5uDi"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Whatsapp"
                target="_blank"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Bankai Project. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
