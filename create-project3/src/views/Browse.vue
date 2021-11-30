<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Won')" href="#" class="pure-menu-link">Won</a></li>
      <li class="pure-menu-item"><a @click="select('Lost')" href="#" class="pure-menu-link">Lost</a></li>
      <li class="pure-menu-item"><a @click="select('White')" href="#" class="pure-menu-link">White</a></li>
      <li class="pure-menu-item"><a @click="select('Black')" href="#" class="pure-menu-link">Black</a></li>
    </ul>
  </div>
  <GameList :games="games" />
</div>
</template>


<script>
import GameList from "../components/GameList.vue"
export default {
  name: 'Browse',
  components: {
    GameList
  },
  data() {
    return {
      setting: '',
    }
  },
  computed: {
    games() {
      console.log(this.$root.$data.games)
      if (this.setting === "White" || this.setting === "Black") {
        return this.$root.$data.games.filter(game => game.color === this.setting);
      } else if (this.setting == "Won" || this.setting == "Lost") {
        return this.$root.$data.games.filter(game => game.outcome === this.setting);
      } else {
        return this.$root.$data.games;
      }
    }
  },
  methods: {
    select(setting) {
      this.setting = setting;
    }
  }
}
</script>
