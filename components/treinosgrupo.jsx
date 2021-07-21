/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import api from "../utils/api";
import { useState, useEffect } from "react";

const TreinosGrupo = (props) => {
  const [group, setGroup] = useState(2);
  const [treino, setTreino] = useState([]);
  const [aluno, setAluno] = useState(null);

  const ultimotreino = {
    aluno: props.aluno,
    ultimo: group,
  };

  //console.log(props.aluno);
  useEffect(() => {
    if (!group) return;
    fetch(`/api/treinosgrupo/${group}`, {})
      .then((response) => response.json())
      .then((data) => setTreino(data));
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
  // console.log(group);
  //console.log(treino);

  // const { data, error } = useSWR(`/api/treinosgrupo/${group}`, api);
  // if (error) return <div className="text-red-600">Falha ao carregar</div>;
  // if (!data)
  //   return (
  //     <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
  //       <span className="inline-flex bg-verde text-white rounded-full h-6 px-3 justify-center items-center">
  //         Carregando
  //       </span>
  //     </div>
  //   );
  // console.log(data.data);

  return (
    <div>
      <div className="container px-6 mx-auto grid">
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="mt-4 overflow-hidden font-thin focus:outline-none  cursor-pointer w-full border-gray-100 rounded-t border-b"
        >
          <option hidden value="">
            Selecione o Treino
          </option>
          <option value="ombros">Ombros</option>
          <option value="PEITORAL">Peitoral</option>
          <option value="quads">Quads + Panturrilha</option>
          <option value="posterior">Posterior + Glúteos</option>
        </select>
        <div className="grid gap-6 mb-8 ">
          {/* <div className="flex items-center p-4 bg-white rounded-lg shadow-md"> */}
          <div>
            {/* <p className="mb-2 text-sm font-medium text-gray-600">{group}</p> */}
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
                      key={exe.nome}
                      className="mb-2 font-thin p-2 bg-white rounded-lg shadow "
                    >
                      <div>
                        <div className="flex flex-row justify-between">
                          <div
                            id={exe.nome}
                            className="text-lg text-verde font-normal"
                          >
                            {exe.nome}
                          </div>

                          {/* <button className="uppercase p-2 flex items-center bg-azul  max-w-max shadow-sm hover:shadow-lg rounded-md w-8 h-8 ">
                          <img src="feito.png" alt="" />
                        </button> */}
                        </div>

                        <div className="flex items-center content-around">
                          <img className="w-4 mr-3" src="repetir.png" alt="" />
                          <p>{exe.Repeticoes}</p>
                        </div>
                        <div className="flex items-center content-around">
                          <img className="w-4 mr-3" src="carga.png" alt="" />
                          <p>{exe.carga}</p>
                        </div>

                        <div className="flex items-center content-around">
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
