<template>
  <div>
    <button @click="startTimer">Start Timer</button>
    <button @click="stopTimer">Stop Timer</button>
    <p>Elapsed Time: {{ elapsedTimeInSeconds | formatTime }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["elapsedTimeInSeconds"]),
  },
  methods: {
    ...mapActions(["startTimer", "stopTimer"]),
    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped>
/* 样式 */
</style>
