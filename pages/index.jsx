/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Classes from "../components/classes";
import ClassesDia from "../components/classesDia";
import Vendas from "../components/vendas";
import Link from "next/link";
import ClassesCard from "../components/classesCard";

export default function Home() {
  return (
    <main className="bg-gray-100 container mx-auto ">
      <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20 shadow-md ">
        <div className="inline-flex">
          <Image src="/logo_hor.svg" alt="logo" width={170} height={170} />
        </div>
        <div className="block">
          <div className="inline relative">
            <Link href="/treinos">
              <a>
                <button className="bg-verde px-4 py-1 font-light inline-flex items-center space-x-2 rounded">
                  <Image
                    src="/academia.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-white">Treinos</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className="block">
        <div className="inline relative">
          <Link href="https://www.bilheteriadigital.com/espetaculo-de-ballet-classico-e-dancas-13-de-novembro">
            <a>
              <button className="bg-purple-600 px-4 py-1 w-full flex items-center justify-center  h-16 font-light mb-2 mt-2 space-x-2 rounded">
                <img
                  src="aladdin.png"
                  alt="local"
                  className=" h-8 rounded-full mr-2"
                />

                <span className="  text-xl font-montserrat  text-white">
                  Comprar Ingressos Aladdin
                </span>
              </button>
            </a>
          </Link>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 ">
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
            Jornada de Resultados Reais
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
            Quattor Academia
          </h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
          <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <img
              src="local.svg"
              alt="local"
              className="w-6 h-6 rounded-full mr-2"
            />

            <div className="ml-1">
              <span className=" text-xl">
                Rua 5 sul - Araucárias - Águas Claras
              </span>
            </div>
          </div>
          <div className="flex items-center  justify-between md:justify-start text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <img
              src="whatsapp.png"
              alt="local"
              className="w-6 h-6 rounded-full mr-2"
            />

            <div className="ml-1">
              <a
                className="text-xl tracking-tight"
                href="https://wa.me/5561993190568"
              >
                (61) 99319-0568
              </a>
            </div>
            <a href="https://wa.me/5561993190568">
              <button className="bg-laranja tracking-tighter ml-5 px-2 py-2  text-white inline-flex items-center space-x-2 rounded">
                <img src="whatsapp.svg" className="w-4 h-4 fill-current"></img>
                <span>Aula experimental</span>
              </button>
            </a>
          </div>
        </div>

        <div className="col-start-1 row-start-3 space-y-3 px-4">
          <p className="flex items-center text-black text-sm font-light">
            <img
              src="/horario_icon.svg"
              alt=""
              className="w-6 h-6 rounded-full mr-2 bg-gray-200"
            />
            HORÁRIO DE FUNCIONAMENTO
          </p>
          <p className="text-gray-700 text-sm font-light">SEGUNDA A SEXTA</p>
          <li className="text-verde">6h às 12h - 12:30 às 22h</li>
          <p className="text-gray-700 text-sm font-light">SÁBADOS / FERIADOS</p>
          <li className="text-verde">8h às 12h</li>
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <img
                src="/fundo_novo.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/face1.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/face2.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
      <Vendas />
      <ClassesCard />
      <Classes />
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:space-x-4">
          {/* <ClassesDia /> */}
          {/* <Classes /> */}
        </div>
      </div>
    </main>
  );
}
