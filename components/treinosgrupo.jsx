/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import api from "../utils/api";
import { useState, useEffect } from "react";

const TreinosGrupo = (props) => {
  const [group, setGroup] = useState(2);
  const [treino, setTreino] = useState([]);
  const [aluno, setAluno] = useState(null);
  const [feito, setFeito] = useState(false);

  const ultimotreino = {
    aluno: props.aluno,
    ultimo: group,
  };

  useEffect(() => {
    if (!group) return;
    fetch(`/api/treinosgrupo/${group}`, {})
      .then((response) => response.json())
      .then((grupo) => setTreino(grupo));
  }, [group]);

  const alteratreino = () => {
    setAluno = 10;
    console;
  };
  const updateTreino = async () => {
    await fetch(
      "/api/historico",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ultimotreino),
      }
    );
    setGroup("");
    setTreino([]);
  };

  const { data, error } = useSWR(`/api/treinosgrupo/`, api);
  if (error) return <div className="text-red-600">Falha ao carregar</div>;
  if (!data)
    return (
      <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
        <span className="inline-flex bg-verde text-white rounded-full h-6 px-3 justify-center items-center">
          Carregando
        </span>
      </div>
    );
  console.log(group.grupo);

  return (
    <div>
      <div className="container px-2 mx-auto grid">
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="mt-4 overflow-hidden lowercase text-gray-600 font-thin focus:outline-none  cursor-pointer w-full border-gray-100 rounded-t border-b"
        >
          <option hidden value="">
            Selecione o Treino
          </option>

          {data.data.map((group) => (
            <option key={group.grupo} value={group.grupo}>
              {group.grupo}
            </option>
          ))}
        </select>

        <div className="grid gap-6 mb-8 ">
          <div>
            {treino.map((grupo) => (
              <div key="_id">
                <div className="flex flex-row justify-between  font-bold text-laranja place-items-center m-2 text-xl">
                  {grupo.grupo}

                  <button
                    className="bg-verde inline-flex items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-green-800"
                    onClick={updateTreino}
                  >
                    <img className="w-4 mr-2" src="feito.png" alt="" />
                    Feito
                  </button>
                </div>
                <div className=" grid  gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {grupo.exercicios.map((exe, index) => (
                    <div
                      key={index}
                      className="mb-2 font-thin p-2 bg-white rounded-lg shadow "
                    >
                      <div>
                        <div className="flex flex-row justify-between">
                          <div
                            id={exe.nome}
                            className="text-lg text-verde  font-normal"
                            //className={feito ? "text-verde" : "text-vermelho"}
                          >
                            {exe.nome}
                          </div>
                        </div>

                        <div className="flex items-center content-around">
                          <img className=" w-4 mr-3" src="repetir.png" alt="" />
                          <p>{exe.Repeticoes}</p>
                        </div>
                        <div className="flex items-center content-around lowercase">
                          <img className="w-4 mr-3" src="carga.png" alt="" />
                          <p>{exe.carga}</p>
                        </div>

                        <div className="flex items-center content-around lowercase ">
                          <img className="w-4 mr-3" src="atencao.png" alt="" />
                          <p>{exe.obs}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default TreinosGrupo;
