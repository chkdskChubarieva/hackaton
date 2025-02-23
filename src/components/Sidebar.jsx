const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Menú</h2>
        <ul>
          <li className="p-2 hover:bg-gray-700">Mapa</li>
          <li className="p-2 hover:bg-gray-700">Recursos</li>
          <li className="p-2 hover:bg-gray-700">Historial</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;