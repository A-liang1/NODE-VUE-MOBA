<template>
  <!-- <i class="iconfont icon-menu"> </i> -->
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont fs-xl" :class="`icon-${icon}`"> </i>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <svg class="icon fs-xl" aria-hidden="true">
        <use
          xlink:href="#icon-menu
"
        ></use>
      </svg>
    </div>
    <div class="card-body fs-lg pt-3">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>
