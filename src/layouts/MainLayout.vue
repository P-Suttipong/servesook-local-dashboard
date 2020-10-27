<template>
  <q-layout view="hHh lpr fFf">
    <q-header class="header-container" flat>
      <div class="flex justify-center header q-mt-xl">
        <img class="logo" src="~assets/farm_logo.png" />
        <p class="q-mt-xs q-ml-lg header-title">SERVESOOK LOCAL DASHBOARD</p>
      </div>
    </q-header>

    <q-page-container class="q-mt-xl">
      <router-view />
    </q-page-container>

    <q-footer flat class="footer-container flex items-center justify-center">
      <div class="row q-mt-xs">
        <q-btn
          flat
          :style="`color: ${monitorBtn}`"
          class="footer-btn"
          to="/"
          @click="monitorSelected()"
          ><div class="column">
            <i class="fas fa-desktop footer-icon"></i>
            <p class="footer-text">Monitor</p>
          </div></q-btn
        >

        <q-btn
          flat
          class="footer-btn q-ml-xl q-mr-xl"
          to="/setting"
          :style="`color: ${settingBtn}`"
          @click="settingSelected()"
          ><div class="column">
            <i class="fas fa-cogs footer-icon"></i>
            <p class="footer-text">setting</p>
          </div></q-btn
        >

        <!-- <q-btn flat class="footer-btn" to="/"
          ><div class="column">
            <i class="fas fa-info-circle footer-icon"></i>
            <p class="footer-text">Information</p>
          </div></q-btn
        > -->
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      left: false,
      monitorBtn: "#448AFF",
      settingBtn: "#9E9E9E"
    };
  },
  computed: {},
  methods: {
    monitorSelected() {
      this.monitorBtn = "#448AFF";
      this.settingBtn = "#9E9E9E";
    },
    settingSelected() {
      this.settingBtn = "#448AFF";
      this.monitorBtn = "#9E9E9E";
    }
  }
};
</script>

<style scoped>
.logo {
  width: 5vw;
  height: 5vw;
}
.header-title {
  font-size: 28px;
  letter-spacing: 1px;
  color: #000;
}
.header-container {
  height: 12vh;
  background-color: #fff;
}
.footer-container {
  height: 10vh;
  background-color: #fff;
}
.footer-icon {
  font-size: 24px;
}
.footer-text {
  font-size: 8px;
}
.footer-btn {
  width: 10vw;
}
</style>
