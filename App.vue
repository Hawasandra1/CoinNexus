<template>
  <div id="app">
    <FunnelStep
      v-if="currentStep === 1"
      stepTitle="Step 1: Introduction"
      stepDescription="Learn about our services and benefits."
      @next-step="currentStep = 2"
    />
    <FunnelStep
      v-if="currentStep === 2"
      stepTitle="Step 2: Pricing"
      stepDescription="Explore our pricing plans and choose what suits you best."
      @next-step="currentStep = 3"
    />
    <FunnelStep
      v-if="currentStep === 3"
      stepTitle="Step 3: Contact"
      stepDescription="Get in touch with us for more information or support."
      @next-step="completeFunnel"
    />
    <p v-if="funnelCompleted">Thank you for completing the funnel!</p>
  </div>
</template>

<script>
import FunnelStep from './components/FunnelStep.vue';

export default {
  components: {
    FunnelStep
  },
  data() {
    return {
      currentStep: 1,
      funnelCompleted: false
    }
  },
  methods: {
    completeFunnel() {
      this.funnelCompleted = true;
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  margin: 20px;
}
</style>
