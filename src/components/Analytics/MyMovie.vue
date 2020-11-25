<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>추천 영화</strong></h1>
    <hr/>
    <div>
      <h3 class="text-left mx-3"><strong><span id="coloring">{{ username }}</span>님을 위한 영화입니다🤍</strong></h3><br>
    </div>
    <ul>
      <ui v-for="(rating, idx) in ratings.slice(0, 5)" :key="idx">
        <h5>{{ rating[0] }} / 예상점수: {{ rating[1] }}</h5>
      </ui>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  data () {
    return {
      ratings: [],
    }
  },
  computed: {
    username: function () {
      return this.$store.state.username
    },
    profile: function () {
      return this.$store.state.profile
    },
    reviews: function () {
      return this.$store.state.reviews
    }
  },
  mounted: function () {
    const movieRatings = {}

    for (const review of this.reviews) {
      if (review.user != this.username & this.profile.followings.includes(review.user)) {
        if (review.movie.title in movieRatings) {
          movieRatings[review.movie.title].push(review.rank)
        } else {
          movieRatings[review.movie.title] = [review.rank]
        }
      }
    }
    setTimeout(() => {
      const sensitivity = 0.5

      for (const movie in movieRatings) {
        const ratings = movieRatings[movie]
        const average = ratings.reduce((a, b) => a + b) / ratings.length;
        const sigmoidRating = Math.round(200 * (1 / ( 1 + 2.7 ** ( - ratings.length * sensitivity )) - 0.5) * average) / 100

        movieRatings[movie] = sigmoidRating
      }

      const sortedRatings = [];
      for (const rating in movieRatings) {
          sortedRatings.push([rating, movieRatings[rating]]);
      }

      sortedRatings.sort(function(a, b) {
          return b[1] - a[1];
      });
      console.log(sortedRatings)
      this.ratings = sortedRatings
    }, 2000)
    

    
  },
};
</script>

<style>
#coloring {
  color:lightcoral; 
}
hr {
  margin-left: 1rem;
  background-color: white;
  width: 95%;
}
</style>