<template>
  <div :id="item_id" class="item" :class="{ hover : hover, sold : sold }" @mouseover="hover = true"
       @mouseleave="hover = false" :style="background_image">
    <span class="text_sold font_title" v-if="sold">SOLD</span>
    <div class="overlay">
      <div class="item_content width-100">
        <p class="name font_title">{{ name }}</p>
        <div class="btn_wrapper">
          <cus-connect-wall-button :connect="connected" v-if="!connected" @clickConnectWallet="clickConnectWallet" />
          <div class="w-100" v-if="isConnectedCorrectly">
            <button class="btn_mint font_title" @click="emit('mintClicked', { event:$event, id: id })" :disabled="isMinting" v-if="!sold">MINT</button>
            <button class="btn_mint font_title" disabled v-else>SOLD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps, defineEmits, ref, toRefs} from 'vue';
import CusConnectWallButton from "@/components/CusConnectWallButton";

const emit = defineEmits(['mintClicked', 'clickConnectWallet']);
const props = defineProps({
  connected: Boolean,
  isConnectedCorrectly: Boolean,
  id: Number,
  name: String,
  sold: Boolean,
  image: String,
  isMinting: Boolean,
  userAddress: String,
  web3: Object,
});

const {connected, isConnectedCorrectly, id, name, sold, image, isMinting} = toRefs(props);

const hover = ref(false);

const item_id = computed(() => {
  return `item_${id.value}`;
});

const background_image = computed(() => {
  const path = require(`@/assets/images/${image.value}`);
  return `background-image: url("${path}")`;
});

const clickConnectWallet = () => {
  emit('clickConnectWallet');
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mintitem.scss";
</style>
