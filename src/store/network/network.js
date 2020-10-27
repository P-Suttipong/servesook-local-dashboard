import axios from "axios";

const state = {
  defaultGateway: "",
  staticIP: "",
  tempIn: {
    temp: "N/A",
    humd: "N/A"
  },
  tempOut: {
    temp: "N/A",
    humd: "N/A"
  },
  mainTank: {
    ec: "N/A",
    ph: "N/A"
  },
  subLeft: {
    ec: "N/A",
    ph: "N/A"
  },
  subRight: {
    ec: "N/A",
    ph: "N/A"
  },
  lux: "N/A",
  loadingConfigGateway: false
};

const getters = {};

const actions = {
  getDefaultGateway: async ({ commit }) => {
    axios
      .get("http://localhost:3000/getIP")
      .then(response => {
        commit("SET_DEFAULT_GATEWAY", response.data);
      })
      .catch(error =>
        console.log("Get Default Gateway Error : ", error.message)
      );
  },
  configDefaultDateway: async ({ commit }) => {
    commit("SET_LOADING_CONFIG_DGW", true);
    con;
    await axios
      .get("http://localhost:3000/configDhcpcd")
      .then(response => {
        if (response.data.length < 12) {
          commit("SET_STATIC_IP", response.data);
        } else {
          commit("SET_STATIC_IP", "error");
        }
      })
      .catch(error =>
        console.log("Config Default Gateway Error : ", error.message)
      );
    commit("SET_LOADING_CONFIG_DGW", false);
  },
  getFarmData: async ({ commit }) => {
    axios
      .get("http://localhost:3000/getFarmData")
      .then(response => {
        let dataArr = response.data.split(",");
        if (dataArr[0] === "ENVI") {
          if (dataArr[1] === "IN") {
            commit("SET_TEMP_IN", [dataArr[2], dataArr[3]]);
          } else {
            commit("SET_TEMP_OUT", [dataArr[2], dataArr[3]]);
          }
        } else if (dataArr[0] === "LUX") {
          commit("SET_LUX", dataArr[1]);
        } else if (dataArr[0] === "WATER") {
          if (dataArr[1] === "MAIN") {
            commit("SET_WATER_MAIN", [dataArr[2], dataArr[3]]);
          } else if (dataArr[1] === "LEFT") {
            commit("SET_WATER_LEFT", [dataArr[2], dataArr[3]]);
          } else if (dataArr[1] === "RIGHT") {
            commit("SET_WATER_RIGHT", [dataArr[2], dataArr[3]]);
          }
        }
      })
      .catch(error =>
        console.log("Get Default Gateway Error : ", error.message)
      );
  },
  rebootRaspi: async ({}) => {
    axios
      .get("http://localhost:3000/reboot")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log("Reboot Error : ", error.message));
  }
};

const mutations = {
  SET_DEFAULT_GATEWAY(state, payload) {
    state.defaultGateway = payload;
  },
  SET_STATIC_IP(state, payload) {
    state.staticIP = payload;
  },
  SET_LOADING_CONFIG_DGW(state, status) {
    state.loadingConfigGateway = status;
  },
  SET_TEMP_IN(state, data) {
    state.tempIn.temp = data[0];
    state.tempIn.humd = data[1];
  },
  SET_TEMP_OUT(state, data) {
    state.tempOut.temp = data[0];
    state.tempOut.humd = data[1];
  },
  SET_LUX(state, lux) {
    state.lux = lux;
  },
  SET_WATER_MAIN(state, data) {
    state.mainTank.ec = data[0];
    state.mainTank.ph = data[1];
  },
  SET_WATER_LEFT(state, data) {
    state.subLeft.ec = data[0];
    state.subLeft.ph = data[1];
  },
  SET_WATER_RIGHT(state, data) {
    state.subRight.ec = data[0];
    state.subRight.ph = data[1];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
