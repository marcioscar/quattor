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
      <div className=" w-full md:w-3/5 mx-auto bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div className="header-card flex justify-between font-semibold">
          <div className="">Próximas Aulas</div>
          <div className="flex items-center gap-x-1 text-sm text-blue-500">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span>See all</span>
          </div>
        </div>

        <div className="card-content divide-y flex flex-col gap-y-3 mt-5">
          <div className="card-content-profil flex justify-between items-center">
            <div className=" flex gap-x-2 items-center">
              <img
                className="avatar h-12 w-12 rounded-full border-4 border-opacity-40"
                src="lutas.png"
                alt=""
              />
              <div className="card-name-user text-xs">
                <h3 className="font-semibold text-base ">Boxe</h3>
                <div className=" flex items-center gap-x-1">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span>Lutas</span>
                </div>
              </div>
            </div>

            <div className="card-action">
              <button className="flex items-center px-2 py-1 text-base text-gray-800   hover:bg-verde hover:text-white">
                <span className="">08:30 as 09:30</span>
              </button>
            </div>
          </div>

          <div className="card-content-profil pt-3 flex justify-between items-center">
            <div className=" flex gap-x-2 items-center">
              <img
                className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
                src="https://ui.glass/generator/static/profile-picture-3-b701fcb37cb1fef6a7e720dccd16e4c0.jpg"
                alt=""
              />
              <div className="card-name-user text-xs">
                <h3 className="font-semibold">Jeny Green</h3>
                <div className=" flex items-center gap-x-1">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span>Offline</span>
                </div>
              </div>
            </div>

            <div className="card-action">
              <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                <span className="">Invite</span>
              </button>
            </div>
          </div>

          <div class="card-content-profil pt-3 flex justify-between items-center">
            <div class=" flex gap-x-2 items-center">
              <img
                class="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCuRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAhAAAAWodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABAoAMABAAAAAEAAABAAAAAAP/hC0NodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDNFMzkyREQ2MkY2MTFFQkJBQUI4RThDNTFDQzgyODgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDNFMzkyREM2MkY2MTFFQkJBQUI4RThDNTFDQzgyODgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTAxMDgwNDEyMTAxMUVBOTNGNUU1NkMyNEY0RUY2MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzODcxMkEwNTRFNTExRUJBOTVBQTQzQzdBMTExOUFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzODcxMkExNTRFNTExRUJBOTVBQTQzQzdBMTExOUFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz4A/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAEAAQAMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAYEBAQF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"
                alt=""
              />
              <div class="card-name-user text-xs">
                <h3 class="font-semibold">Neil Sims</h3>
                <div class=" flex items-center gap-x-1">
                  <span class="h-3 w-3 rounded-full bg-green-500"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>

            <div class="card-action">
              <button class="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                <span class="">Invite</span>
              </button>
            </div>
          </div>
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
