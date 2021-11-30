<template>
  <div>
    <h3>Game Stats</h3>
    <win-chart></win-chart>
    <h3>Rating over Time</h3>
    <rating-chart></rating-chart>
  </div>
</template>

<script>
import RatingChart from '@/components/RatingChart'
import WinChart from '@/components/WinChart'

export default {
  components: {
    WinChart,
    RatingChart
  },
  computed: {

  }
}
</script>