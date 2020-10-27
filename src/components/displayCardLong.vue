<template>
  <div :style="cardColor" class="display-card flex items-center row">
    <div class="q-ml-md q-mt-md col-2 flex justify-center">
      <div :style="topicColor" class="column items-center">
        <span><i class="icon" :class="icon1"></i></span>
        <span
          ><p class="title-text">{{ topic1 }}</p></span
        >
      </div>
    </div>
    <div :style="valueColor" class="col-3 q-mt-md flex justify-center">
      <p class="value-text">{{ value1 }}</p>
    </div>

    <div class="q-ml-md q-mt-md col-3 flex justify-center">
      <div :style="topicColor" class="column items-center">
        <span><i class="icon" :class="icon2"></i></span>
        <span
          ><p class="title-text">{{ topic2 }}</p></span
        >
      </div>
    </div>
    <div :style="valueColor" class="col-2 q-mt-md flex justify-center">
      <p class="value-text">{{ value2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "display-card-long",
  components: {},
  props: [
    "icon1",
    "topic1",
    "value1",
    "icon2",
    "topic2",
    "value2",
    "cardColor",
    "topicColor",
    "valueColor"
  ]
};
</script>

<style scoped>
.display-card {
  width: 57vw;
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
  font-size: 16px;
}
.icon {
  font-size: 18px;
}
</style>
