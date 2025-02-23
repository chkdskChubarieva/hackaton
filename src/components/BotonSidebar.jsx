/* eslint-disable react/prop-types */

const BotonSidebar = ({ icono, tituloBoton, onClick }) => {
  return (
    <button onClick={onClick} className="w-24 h-20 rounded-md p-2 flex-col flex justify-center items-center hover:bg-neutral-100 transition-colors cursor-pointer select-none">
      <div className="justify-center flex">{icono}</div>
      <span className="text-black/60 text-md font-medium tracking-wide">
        {tituloBoton}
      </span>
    </button>
  );
};

export default BotonSidebar; 
