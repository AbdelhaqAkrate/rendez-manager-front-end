const config = {
    API_BASE_URL: "http://rendez.test/api/",
    TOKEN: JSON.parse(localStorage.getItem("user"))?.token ?? null,
  };
  
  export default config;
  