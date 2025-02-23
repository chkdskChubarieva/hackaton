const ApiService = {
    getCentrales: async () => {
      const response = await fetch("/api/centrales");
      return response.json();
    },
    getIncendios: async () => {
      const response = await fetch("/api/incendios");
      return response.json();
    },
  };
  
  export default ApiService;