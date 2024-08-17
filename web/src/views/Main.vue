<template>
  <div>
    <div class="topbar bg-dark py-2 text-white px-4 d-flex ai-center">
      <img src="../assets/曲师大第一帅.jpg" height="50" />
      <div class="px-2 flex-1">
        <div class="text-white">狗屁牢阚</div>
        <div class="text-grey fs-xs">曲师大第一帅</div>
      </div>
      <button type="button" class="btn bg-primary">立即预约</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse jc-around pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="">攻略</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="">赛事</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
