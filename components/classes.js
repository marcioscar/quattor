/* eslint-disable @next/next/no-img-element */

import useSWR from "swr";
import api from "../utils/api";
import { useState } from "react";
const Classes = () => {
  const [searchDay, setSearchDay] = useState("");
  const [searchClasse, setSearchClasse] = useState("");
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

  const dayFilter = data.data.filter(
    (classes) =>
      classes.days.includes(parseInt(searchDay)) &&
      classes.classe.includes(searchClasse)
  );

  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl my-4 w-96 overflow-y-auto h-96 block  ">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-azul left-4 ">
        <img src="calendario.png" alt="grade" className="w-6" />
      </div>
      <p className="p-4  ml-10 font-medium">Grade de Aulas</p>
      <div className="border-b-2 mt-2"></div>
      <div className="flex">
        <select
          value={searchDay}
          onChange={(e) => setSearchDay(e.target.value)}
          className="mt-4 overflow-hidden font-thin focus:outline-none  cursor-pointer w-full border-gray-100 rounded-t border-b"
        >
          <option hidden value="">
            Selecione o dia
          </option>
          <option value="1">Segunda</option>
          <option value="2">Terça</option>
          <option value="3">Quarta</option>
          <option value="4">Quinta</option>
          <option value="5">Sexta</option>
          <option value="6">Sábado</option>
        </select>

        <select
          value={searchClasse}
          onChange={(e) => setSearchClasse(e.target.value)}
          className="mt-4 overflow-hidden font-thin focus:outline-none  cursor-pointer w-full border-gray-100 rounded-t border-b"
        >
          <option hidden value="">
            Modalidade
          </option>
          <option value="">Todas</option>
          <option value="natacao">Natação</option>
          <option value="danca">Ballet</option>
          <option value="lutas">Lutas</option>
          <option value="ginastica">Aulas</option>
        </select>
      </div>

      <div className="mt-4 overflow-hidden">
        <table className=" w-full table-auto ">
          <thead>
            <tr className="bg-gray-200 text-gray-500 uppercase text-sm leading-normal">
              <th className="py-2 pl-1 text-center">Aula</th>

              <th className="py-2 px-2 text-center">Hora</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-sm font-light">
            {dayFilter.map(({ turma, start, finish, _id, icon }) => (
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
    </div>
  );
};

export default Classes;
