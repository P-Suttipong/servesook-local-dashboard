<template>
  <div class="q-mt-xl">
    <div class="flex column items-center justify-center">
      <div class="row">
        <displayCard
          class="q-ml-xs q-mx-xs"
          :icon="`fas fa-laptop-house`"
          :topic="`IP Address`"
          :value="DefaultGateway"
          :cardColor="
            `background-image: linear-gradient(180deg, #FEDA0C, #FFB305);`
          "
          :topicColor="`color: White`"
          :valueColor="`color: White`"
        ></displayCard>
        <displayCard
          class="q-mx-xs"
          :icon="`fas fa-sun`"
          :topic="`Lux`"
          :value="`${lux} Lux`"
          :cardColor="
            `background-image: linear-gradient(180deg, #FEDA0C, #FFB305);`
          "
          :topicColor="`color: White`"
          :valueColor="`color: White`"
          :cardType="'lux-card'"
        ></displayCard>
      </div>

      <!-- Environment -->
      <q-carousel
        v-model="envi"
        swipeable
        animated
        infinite
        :autoplay="autoplay"
        :padding="padding"
        :vertical="vertical"
        :arrows="arrows"
        control-color="grey-6"
        height="18vh"
        class="q-mt-lg rounded-borders"
      >
        <q-carousel-slide name="in" class="column no-wrap flex-center">
          <displayCardLong
            class="q-mx-md q-mt-md"
            :icon1="`fas fa-temperature-high`"
            :topic1="`Temperature`"
            :value1="`IN : ${tempIn.temp} °C`"
            :icon2="`fas fa-tint`"
            :topic2="`Humidity`"
            :value2="`IN : ${tempIn.humd} %`"
            :cardColor="
              `background-image: linear-gradient(80deg, #00F497, #00C6F2);`
            "
            :topicColor="`color: White`"
            :valueColor="`color: White`"
          ></displayCardLong>
        </q-carousel-slide>
        <q-carousel-slide name="out" class="column no-wrap flex-center">
          <displayCardLong
            class="q-mx-md q-mt-md"
            :icon1="`fas fa-temperature-high`"
            :topic1="`Temperature`"
            :value1="`OUT : ${tempOut.temp} °C`"
            :icon2="`fas fa-tint`"
            :topic2="`Humidity`"
            :value2="`OUT : ${tempOut.humd} %`"
            :cardColor="
              `background-image: linear-gradient(80deg, #00F497, #00C6F2);`
            "
            :topicColor="`color: White`"
            :valueColor="`color: White`"
          ></displayCardLong>
        </q-carousel-slide>
      </q-carousel>

      <!-- Water -->
      <q-carousel
        v-model="water"
        swipeable
        animated
        infinite
        :padding="padding"
        :vertical="vertical"
        :arrows="arrows"
        :autoplay="autoplay"
        control-color="grey-6"
        height="18vh"
        class="rounded-borders"
      >
        <q-carousel-slide name="main" class="column no-wrap flex-center">
          <displayCardLong
            class="q-mx-md q-mt-md"
            :icon1="`fas fa-water`"
            :topic1="`pH`"
            :value1="`MAIN : ${mainTank.ph}`"
            :icon2="`fas fa-flask`"
            :topic2="`EC`"
            :value2="`MAIN : ${mainTank.ec} mS/cm`"
            :cardColor="
              `background-image: linear-gradient(180deg, #5a9dfd, #326DFF);`
            "
            :topicColor="`color: White`"
            :valueColor="`color: White`"
          ></displayCardLong>
        </q-carousel-slide>
        <q-carousel-slide name="left" class="column no-wrap flex-center">
          <displayCardLong
            class="q-mx-md q-mt-md"
            :icon1="`fas fa-water`"
            :topic1="`pH`"
            :value1="`LEFT : ${subLeft.ph}`"
            :icon2="`fas fa-flask`"
            :topic2="`EC`"
            :value2="`LEFT : ${subLeft.ec} mS/cm`"
            :cardColor="
              `background-image: linear-gradient(180deg, #5a9dfd, #326DFF);`
            "
            :topicColor="`color: White`"
            :valueColor="`color: White`"
          ></displayCardLong>
        </q-carousel-slide>
        <q-carousel-slide name="right" class="column no-wrap flex-center">
          <displayCardLong
            class="q-mx-md q-mt-md"
            :icon1="`fas fa-water`"
            :topic1="`pH`"
            :value1="`RIGHT : ${subRight.ph}`"
            :icon2="`fas fa-flask`"
            :topic2="`EC`"
            :value2="`RIGHT : ${subRight.ec} mS/cm`"
            :cardColor="
              `background-image: linear-gradient(180deg, #5a9dfd, #326DFF);`
            "
            :topicColor="`color: White`"
            :valueColor="`color: White`"
          ></displayCardLong>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import displayCard from "../components/displayCard";
import displayCardLong from "../components/displayCardLong";
export default {
  name: "PageIndex",
  components: { displayCard, displayCardLong },
  data() {
    return {
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,
      autoplay: true,
      envi: "in",
      water: "main",
      interval: ""
    };
  },
  computed: {
    ...mapState({
      DefaultGateway: state => state.network.defaultGateway,
      staticIP: state => state.network.staticIP,
      tempIn: state => state.network.tempIn,
      tempOut: state => state.network.tempOut,
      mainTank: state => state.network.mainTank,
      subLeft: state => state.network.subLeft,
      subRight: state => state.network.subRight,
      lux: state => state.network.lux
    })
  },
  methods: {
    fetchData() {
      this.interval = setInterval(
        function() {
          this.$store.dispatch("getDefaultGateway");
          this.$store.dispatch("getFarmData");
        }.bind(this),
        10000
      );
    }
  },
  beforeMount() {
    this.$store.dispatch("getDefaultGateway");
    this.$store.dispatch("getFarmData");
  },
  mounted() {
    this.fetchData();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
body {
  background-color: red;
}
.ip-text {
  font-size: 1.5vw;
}
</style>
