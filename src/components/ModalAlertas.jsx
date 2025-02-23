/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";

const ModalAlertas = ({ showModalA, closeModalA, childrenA }) => {
  if (!showModalA) return null;

  return createPortal(
    <div className="fixed left-32 z-50 top-2 w-[400px] rounded-md bg-neutral-200/90 pt-3 pb-6 px-6 flex-col text-center shadow-md">
      {childrenA}
      <button
        type="button"
        onClick={closeModalA}
        className="absolute right-5 hover:bg-black/10 rounded-full p-1 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#00000099"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
      <div className="text-black/60 tracking-wide leading-none">
        <h3 className="text-xl font-bold">Alertas</h3>
      </div>

      <section className="flex flex-col gap-3 text-black/60 tracking-wide mt-6">
        <article className="bg-neutral-100 rounded-md p-4 w-full">
          <div className="flex justify-between">
            <div className="flex bg-red-500 py-1 px-2 rounded-full text-white gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" />
              </svg>
              <span>Severidad Alta</span>
            </div>
            <span className="text-green-500">En progreso</span>
          </div>
          <h3 className="text-left text-xl font-medium mt-2">
            Incendio forestal
          </h3>

          <div className="text-left">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000099"
              >
                <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              <span> Hace 5 min</span>
            </div>

            <div className="flex gap-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#00000099"
                className="flex-nowrap"
              >
                <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
              <span>-17.359318522572107, -66.1630296711519</span>
            </div>
            <p className="mt-2"><strong className="font-semibold">Reporte:</strong> Incendio detectado</p>
          </div>
        </article>

        <article className="bg-neutral-100 rounded-md p-4 w-full">
          <div className="flex justify-between">
            <div className="flex bg-yellow-500 py-1 px-2 rounded-full text-white gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" />
              </svg>
              <span>Media</span>
            </div>
            <span className="text-blue-500">En investigación</span>
          </div>
          <h3 className="text-left text-xl font-medium mt-2">
            Detección temprana
          </h3>

          <div className="text-left">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000099"
              >
                <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              <span> Hace 1 hora</span>
            </div>

            <div className="flex gap-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#00000099"
                className="flex-nowrap"
              >
                <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
              <span>-17.359318522572107, 66.17933750196245</span>
            </div>
            <p className="mt-2"><strong className="font-semibold">Reporte:</strong>Humo detectado por vigilantes</p>
          </div>
        </article>
        
      </section>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalAlertas;
