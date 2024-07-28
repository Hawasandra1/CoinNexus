<template>
  <div class="funnel-step">
    <h2>{{ stepTitle }}</h2>
    <p>{{ stepDescription }}</p>
    <button @click="nextStep">Next</button>
  </div>
</template>

<script>
export default {
  props: ['stepTitle', 'stepDescription'],
  methods: {
    nextStep() {
      this.$emit('next-step');
    }
  }
}
</script>

<style scoped>
.funnel-step {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  text-align: center;
}
</style>
