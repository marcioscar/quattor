/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import TreinosGrupo from "../components/treinosgrupo";
const EVO_AUTH = process.env.NEXT_PUBLIC_EVO_AUTH;
function Treinos() {
  //const evo = process.env.EVO_AUTH;
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [ultimo, setUltimo] = useState([]);
  useEffect(() => {
    if (!user) return;
    fetch(`/api/historico/${user.idMember}`)
      .then((response) => response.json())
      .then((data) => setUltimo(data));
  }, [user]);

  const handleSearch = async () => {
    setIsLoading(true);

    await fetch(
      `https://evo-integracao.w12app.com.br/api/v1/members/${query}`,

      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(EVO_AUTH),
        },
      }
    )
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      });
    setIsLoading(false);
  };

  return (
    <main className="bg-gray-100">
      <Navbar link="/" icon="/home.svg" legenda="Home" />
      {user.membershipStatus === "Active" && (
        <div className=" grid place-content-center place-items-center">
          <img
            className=" mt-4 w-16 h-16 rounded-full"
            src={user.photo}
            alt="foto"
          />
          <p className=" p-2 text-gray-500 ">
            {user.firstName} {user.lastName} -{" "}
            <span className="font-thin text-azul">{user.idMember}</span>
          </p>
          <div>
            {ultimo.map((aluno) => (
              <div key={aluno.aluno}>
                {aluno.treinos
                  .map((treino) => (
                    <div
                      className="flex gap-2 text-white bg-verde rounded-full px-2 py-0.5 mx-2"
                      key={aluno._id}
                    >
                      <span className="font-thin">Último Treino:</span>
                      <div className="uppercase font-bold ">
                        {treino.treino}{" "}
                      </div>
                      <div className="font-thin">
                        {new Date(treino.data).toLocaleDateString("pt-BR")}
                      </div>
                    </div>
                  ))
                  .pop()}
              </div>
            ))}
          </div>
        </div>
      )}
      {(!user.membershipStatus || user.membershipStatus == "Inactive") && (
        <div className="w-screen h-screen flex justify-center items-start pt-40 bg-gray-100">
          <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
            <p className="mb-5 text-3xl uppercase text-gray-600">
              {user.membershipStatus == "Active" || !user.membershipStatus ? (
                "Aluno"
              ) : (
                <span className="text-xl font-medium text-vermelho">
                  {" "}
                  {user.firstName} Inativo{" "}
                </span>
              )}
            </p>
            <input
              type="search"
              name="Matrícula"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
              className="mb-5 p-3 w-80 focus:border-azul rounded border-2 outline-none"
              autoComplete="off"
              placeholder="Matrícula"
              required
            />

            <button
              className="bg-azul hover:bg-laranja text-white font-bold p-2 rounded w-80"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? "Pesquisando..." : "Treino"}
            </button>
          </form>
        </div>
      )}
      {user.membershipStatus === "Active" && (
        <TreinosGrupo aluno={user.idMember} />
      )}
    </main>
  );
}

export default Treinos;
