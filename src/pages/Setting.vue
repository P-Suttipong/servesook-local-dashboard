<template>
  <div class="q-mt-xl flex justify-center">
    <div class="column col-md-8">
      <q-btn
        class="config-btn"
        :loading="loadingConfigGateway"
        @click="configGateway()"
        ><i class="fas fa-sliders-h q-mr-md"></i> Default Gateway Config</q-btn
      >
      <q-btn class="reboot-btn q-mt-xl" @click="rebootRaspi()"
        ><i class="fas fa-undo q-mr-md"></i> Reboot</q-btn
      >
    </div>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section> </q-card-section>

        <q-card-section class="q-pt-none alert-text">
          Configuration Default Gateway Done !
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SettingPage",
  components: {},
  data() {
    return {
      alert: false
    };
  },
  computed: {
    ...mapState({
      DefaultGateway: state => state.network.defaultGateway,
      staticIP: state => state.network.staticIP,
      loadingConfigGateway: state => state.network.loadingConfigGateway,
      isConfig: state => state.network.isConfig
    })
  },
  methods: {
    getDefaultGateway() {
      this.$store.dispatch("getDefaultGateway");
    },
    configGateway() {
      this.$store.dispatch("configDefaultDateway");
    },
    rebootRaspi() {
      this.$store.dispatch("rebootRaspi");
    }
  },
  mounted() {
    this.alert = this.isConfig;
  }
};
</script>

<style scoped>
.config-btn {
  background-image: linear-gradient(180deg, #5a9dfd, #326dff);
  font-size: 18px;
  font-weight: 400;
  height: 12vh;
  width: 30vw;
  border-radius: 7px;
  color: #fff;
}
.reboot-btn {
  background-image: linear-gradient(180deg, #ff5733, #c70039);
  font-size: 18px;
  font-weight: 400;
  height: 12vh;
  width: 30vw;
  border-radius: 7px;
  color: #fff;
}
.alert-text {
  font-size: 18px;
}
</style>
