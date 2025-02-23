/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";

const ModalHerramientas = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return createPortal(
    <div className="fixed left-32 z-50 top-2 w-72 h-96 rounded-md bg-neutral-200/90 py-3 px-6 flex-col text-center shadow-md">
      {children}
      <button type="button" onClick={closeModal} className="absolute right-5 hover:bg-black/10 rounded-full p-1 transition-colors">
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
        <h3 className="text-xl font-bold">Recursos</h3>
        <h4 className="text-lg">Central Sar</h4>
      </div>

      <article className="flex text-black/60 tracking-wide mt-6 px-4">
        <section className="flex-col flex w-1/2 text-left space-y-2 font-medium">
          <span>Botiquines</span>
          <span>Picotas</span>
          <span>Palas</span>
          <span>Hachas</span>
          <span>Mangeras</span>
          <span>Mascarillas</span>
          <span>Uniformes</span>
          <span>Extintores</span>
        </section>
        <section className="flex-col flex w-1/2 space-y-2 text-right">
          <span>5</span>
          <span>7</span>
          <span>8</span>
          <span>5</span>
          <span>3</span>
          <span>12</span>
          <span>15</span>
          <span>6</span>
        </section>
      </article>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalHerramientas;
