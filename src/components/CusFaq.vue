<template>
  <dl data-aos="fade-up" data-aos-delay="100">
    <dt class="font_title">{{ question }}</dt>
    <dd>{{ answer }}</dd>
  </dl>
</template>

<script setup>
import {defineProps, toRefs} from 'vue';

const props = defineProps({
  question: String,
  answer: String,
});
const {question, answer} = toRefs(props);
</script>

<style scoped lang="scss">
@import "../assets/scss/cusfaq.scss";
</style>
