<template>
  <div
    :style="cardColor"
    :class="cardBackgroud"
    class="display-card flex items-center row"
  >
    <div class="q-ml-md q-mt-md col-3 flex justify-center">
      <div :style="topicColor" class="column items-center">
        <span><i class="icon" :class="icon"></i></span>
        <span
          ><p class="title-text">{{ topic }}</p></span
        >
      </div>
    </div>
    <div :style="valueColor" class="col-8 q-mt-md flex justify-center">
      <p class="value-text">{{ value }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "display-card",
  components: {},
  props: [
    "icon",
    "topic",
    "value",
    "cardColor",
    "topicColor",
    "valueColor",
    "cardType"
  ],
  computed: {
    cardBackgroud() {
      if (this.cardType === "lux-card") {
        return "lux-card";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.display-card {
  background-size: cover;
  width: 27.6vw;
  height: 12vh;
  border-radius: 7px;
  box-shadow: 1px 1px 4px #707070;
  min-height: 70px;
  min-width: 200px;
}
.title-text {
  font-size: 12px;
}
.value-text {
  font-size: 18px;
  font-weight: 500;
}
.icon {
  font-size: 18px;
}
.lux-card {
  background-image: url("~assets/lux_card.png");
}
</style>
