<template>
    <div class="index">
        <card />

        <charts />
    </div>
</template>

<script>
import Card from '@/components/cards.vue';
import Charts from '@/components/charts.vue';

export default {
  components: {
    Card,
    Charts,
  },
};
</script>
