<template>
  <button class="btn_connect font_title" @click="clickConnectWallet" :disabled="connected">CONNECT</button>
</template>

<script setup>
import {defineProps, defineEmits, toRefs} from 'vue';

const props = defineProps({
  connected: Boolean,
});
const {connected} = toRefs(props);

const emit = defineEmits(['clickConnectWallet']);

const clickConnectWallet = () => {
  if (!connected.value)
    emit('clickConnectWallet');
};
</script>

<style scoped lang="scss">
@import "../assets/scss/connectwalletbutton.scss";
</style>
