<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide
        ><img class="w-100" src="../assets/曲师大第一一帅.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/曲师大第一帅.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/曲师大第一一一帅.jpg"
      /></swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey ml-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2 fs-xl">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-xxl">
        <i class="sprite sprite-arrow sq"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <!-- <i class="iconfont icon-menu"> </i> -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <div v-for="(news, i) in category.newsList" :key="i" class="py-2">
          <span>[{{ news.categoryName }}]</span>
          <span>|</span>
          <span>{{ news.title }}</span>
          <span>{{ news.date }}</span>
        </div>
      </template>
    </m-list-card>
    <m-card icon="menu" title="英雄列表"> </m-card>
    <m-card icon="menu" title="新闻资讯"> </m-card>

    111
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
        },
        autoplay: { delay: 2500, disableOnInteraction: false },
      },
      newsCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
      console.log(this.newsCats);
    },
  },
  created() {
    this.fetchNewsCats();
  },
};
</script>
<style lang="scss">
@import "../assets/scss/variables";
.w-100 {
  height: 250px;
  width: 100%;
}
.sq {
  //文字和图片对齐方式
  vertical-align: middle;
}
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background: #fff;
  }
  &.swiper-pagination-bullet-active {
    background: map-get($colors, "info");
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>
