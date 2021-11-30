<template>
  <div class="wrapper">
    <div class="games">
      <div class="game" v-for="game in games" :key="game.id">
        <div class="info">
          <h1>
            {{ game.format }} game <i>({{ game.date }})</i>
          </h1>
          <p>{{ game.moves }} moves</p>
        </div>
        <div class="game-info">
          <h3>
            {{ game.opponent }} <i>({{ game.opponentRating }})</i>
          </h3>
          <p>Accuracy was {{ game.opponentAccuracy }}</p>
        </div>
        <section>
          <div class="image">
            <img :src="'/images/' + game.image" />
          </div>
          <div class="game-info">
            <h1>
              {{ "SassyWormhole" }} <i>({{ game.rating }})</i>
            </h1>
            <p>Accuracy was {{ game.accuracy }}</p>
          </div>
        </section>
        

        <!-- <div class="">
          <h2>{{ product.price }}</h2>
          <button class="auto" @click="addToCart(product)">
            Add to Cart
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "GameList",
  props: {
    games: Array,
  },
  // methods: {
  //   addToCart(product) {
  //     this.$root.$data.cart.push(product)
  //   },
  // },
};
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.games {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.game {
  margin: 10px;
  margin-top: 50px;
  width: 250px;
}

.game img {
  border: 2px solid #333;
  height: 250px;
  width: 250px;
  /* object-fit: cover; */
}

.game .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 5px;
}

.info {
  background: #9ae291da;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
