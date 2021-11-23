/* eslint-disable @next/next/no-img-element */

import useSWR from "swr";
import api from "../utils/api";
const now = new Date();
const ClassesCard = () => {
  const now = new Date();

  const { data, error } = useSWR("/api/classes", api);
  if (error) return <div className="text-red-600">Falha ao carregar</div>;
  if (!data)
    return (
      <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
        <span className="inline-flex bg-verde text-white rounded-full h-6 px-3 justify-center items-center">
          Carregando
        </span>
      </div>
    );
  var horaCerta = "";
  if (now.getHours() < 10) {
    horaCerta = "0" + now.getHours();
  }
  if (now.getHours() >= 10) {
    horaCerta = now.getHours();
  }

  //console.log(horaCerta);

  const hourFilter = data.data.filter(
    (classes) =>
      classes.start >= horaCerta.toString() &&
      classes.days.includes(now.getDay())
  );

  return (
    <>
      <div className=" w-full md:w-2/3 mx-auto bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg mb-8">
        <div className="header-card flex justify-between text-lg font-semibold">
          <div className="">Próximas Aulas</div>
          <div className="flex items-center gap-x-1 font-light text-blue-500">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span>Horário</span>
          </div>
        </div>

        <div className="card-content divide-y flex flex-col gap-y-3 mt-5">
          {hourFilter.map(
            ({ turma, start, classe, plano, finish, _id, icon }) => (
              <div
                key={_id}
                className="card-content-profil flex justify-between items-center"
              >
                <div className=" flex gap-x-2 items-center">
                  <img
                    className="avatar h-12 w-12 rounded-full border-4 border-opacity-40"
                    src={icon}
                    alt={turma}
                  />
                  <div className="card-name-user text-xs">
                    <h3 className=" text-base ">{turma}</h3>
                    <div className=" flex items-center gap-x-1">
                      <span className="text-verde">Plano - </span>
                      <span className="text-azul"> {plano}</span>
                    </div>
                  </div>
                </div>

                <div className="card-action">
                  <button className="flex items-center px-2 py-1 text-base text-gray-800   hover:bg-verde hover:text-white">
                    <span className="">
                      {start} - {finish}
                    </span>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* <div className="relative bg-white py-6 px-6 rounded-3xl my-4 w-96 overflow-y-auto h-96 block  ">
        <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-verde left-4 ">
          <img src="proxima.png" alt="grade" className="w-6" />
        </div>
        <p className="p-4  ml-10 font-medium">Próximas Aulas</p>
        <div className="border-b-2 mt-2"></div>

        <div className="mt-4 overflow-hidden">
          <table className=" w-full table-auto ">
            <thead>
              <tr className="bg-gray-200 text-gray-500 uppercase text-sm leading-normal">
                <th className="py-2 pl-1 text-center">Aula</th>

                <th className="py-2 px-2 text-center">Hora</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 text-sm font-light">
              {hourFilter.map(({ turma, start, finish, _id, icon }) => (
                <tr
                  key={_id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="p-3">
                    <div className="flex items-center ">
                      <img
                        className="rounded-full h-7 w-7  object-cover"
                        src={icon}
                        alt={turma}
                      />
                      <div className="ml-3 py-2 font-medium pr-1 text-center whitespace-nowrap">
                        {turma}
                      </div>
                    </div>
                  </td>
                  

                  <td className="py-2 pr-2 text-center whitespace-nowrap font-medium">
                    {start} - {finish}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default ClassesCard;
