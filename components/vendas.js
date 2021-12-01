/* eslint-disable @next/next/no-img-element */

const vendas = () => {
  return (
    <div className="w-full mx-auto px-5 py-10 text-gray-600 mb-4">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-medium mb-5">
          Planos da Academia
        </h1>
        <h3 className="text-lg font-medium mb-10 text-verde">
          Escolha um plano e venha fazer parte da família QUATTOR
        </h3>
      </div>
      <div className="max-w-4xl mx-auto md:flex md:gap-6 md:justify-between">
        {/* black friday */}

        <div className="w-full md:w-1/2 mb-4 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
          <img
            src="hora.jpg"
            alt="img"
            title="img"
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-2 text-vermelho  font-semibold">
              R$ 136,00 <span className="text-base text-gray-400">/mensal</span>
            </h4>
            <p className="my-4 text-lg">Plano Musculação - Hora Certa</p>
            <p className="my-4">
              Horário de acesso: Seg a Sex: 6h as 7h, 11h as 16h, 21h as 23h -
              Sábados e feriados: 8h as 12h - SOMENTE MUSCULAÇÃO
            </p>
            <div className="w-full">
              <a href="https://evo-totem.w12app.com.br/quattor/1/site/oportunidade/cadastro/691/0">
                <button className=" bg-verde hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Comprar
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2  mb-4 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
          <img
            src="fitness.jpg"
            alt="img"
            title="img"
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-2 text-vermelho text-left text-lg font-semibold">
              R$ 214,00 <span className="text-base text-gray-400">/mensal</span>
            </h4>
            <p className="mt-4 text-lg" id="whoobe-950fw">
              QUATTOR FITNESS ASSINATURA{" "}
            </p>
            <p className>
              <ul className="text-sm px-2 ">
                <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 ">
                  <span className="bg-verde h-2 w-2 mt-2 rounded-full"></span>
                  <div className="flex-grow text-base  px-2">
                    Aulas Incluídas:
                  </div>
                </div>
                <div className="flex justify-start  text-laranja  rounded-md px-2 ">
                  <div className="flex-grow text-base pl-4">
                    Boxe, Pilates Solo, FitDance, Spinning
                  </div>
                </div>
                <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2">
                  <span className="bg-verde h-2 w-2 mt-2 rounded-full"></span>
                  <div className="flex-grow text-base px-2 ">Horário Livre</div>
                </div>
              </ul>
            </p>
            <div className="w-full">
              <a href="https://evo-totem.w12app.com.br/quattor/1/site/oportunidade/cadastro/1/0">
                <button className=" bg-verde hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Comprar
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-full md:w-64 mb-4 ml-4 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
          <img
            src="fitness.jpg"
            alt="img"
            title="img"
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-2 text-vermelho text-left text-lg font-semibold">
              R$ 210,00 <span className="text-base text-gray-400">/mensal</span>
            </h4>
            <p className="my-4 text-lg" id="whoobe-950fw">
              MUSCULAÇÃO ASSINATURA{" "}
            </p>
            <p className>
              <ul className="text-sm px-2 ">
                <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 ">
                  <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow text-base  px-2">Musculação</div>
                </div>
                <div className="flex justify-start  text-gray-700  rounded-md px-2 ">
                  <div className="flex-grow text-base  px-2">
                    Somente Musculação
                  </div>
                </div>
                <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2">
                  <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow text-base  ">Horário Livre</div>
                </div>
              </ul>
            </p>
            <div className="w-full">
              <a href="https://evo-totem.w12app.com.br/quattor/1/site/oportunidade/cadastro/1/0">
                <button className=" bg-verde hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Comprar
                </button>
              </a>
            </div>
          </div>
        </div> */}

        {/* <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center text-gray-500 font-bold uppercase mb-4">
              HORA CERTA ASSINATURA
            </h2>
            <h3 className="text-center text-azul font-bold text-2xl mb-5">
              R$ 136,00<span className="text-base text-gray-400">/mensal</span>
            </h3>
            <ul className="text-sm px-5 mb-8">
              <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 my-2">
                <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow text-base  px-2">Horário:</div>
              </div>
              <div className="flex justify-start  text-gray-700  rounded-md px-2  my-2">
                <div className="flex-grow text-base  px-2">6h às 7h </div>
              </div>
              <div className="flex justify-start  text-gray-700  rounded-md px-2  my-2">
                <div className="flex-grow text-base  px-2">11h às 16h </div>
              </div>
              <div className="flex justify-start  text-gray-700  rounded-md px-2  my-2">
                <div className="flex-grow text-base  px-2">21h às 22h </div>
              </div>
            </ul>
          </div>
          <div className="w-full">
            <a href="https://evo-totem.w12app.com.br/quattor/1/site/oportunidade/cadastro/691/0">
              <button className="font-bold bg-verde hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                Comprar
              </button>
            </a>
          </div>
        </div> */}
        {/* <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center text-gray-500 font-bold uppercase mb-4">
              QUATTOR FITNESS ASSINATURA
            </h2>
            <h3 className="text-center text-vermelho font-bold text-2xl mb-5">
              R$ 214,00<span className="text-base text-gray-400">/mensal</span>
            </h3>
            <ul className="text-sm px-5 mb-8">
              <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 my-2">
                <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow text-base  px-2">
                  Aulas Incluídas:
                </div>
              </div>
              <div className="flex justify-start  text-gray-700  rounded-md px-2  my-2">
                <div className="flex-grow text-base  px-2">
                  Boxe, Pilates Solo, FitDance, Zumba
                </div>
              </div>
              <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 my-2">
                <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow text-base  px-2">Horário Livre</div>
              </div>
            </ul>
          </div>
          <div className="w-full">
            <a href="https://evo-totem.w12app.com.br/quattor/1/site/oportunidade/cadastro/1/0">
              <button className="font-bold bg-verde hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                Comprar
              </button>
            </a>
          </div>
        </div> */}
        {/* <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center text-gray-500 font-bold uppercase mb-4">
              MUSCULAÇÃO ASSINATURA
            </h2>
            <h3 className="text-center text-laranja font-bold text-2xl mb-5">
              R$ 210,00<span className="text-base text-gray-400">/mensal</span>
            </h3>
            <ul className="text-sm px-5 mb-8">
              <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 my-2">
                <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow text-base  px-2">
                  Somente Musculação
                </div>
              </div>
              <div className="flex justify-start  text-gray-700  rounded-md px-2 py-2 my-2">
                <span className="bg-verde h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow text-base  px-2">Horário Livre</div>
              </div>
            </ul>
          </div>
          <div className="w-full">
            <button className="font-bold bg-verde hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
              Comprar
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default vendas;
