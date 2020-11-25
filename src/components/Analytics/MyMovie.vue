<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>추천 영화</strong></h1>
    <hr/>
    <div>
      <h3 class="text-left mx-3"><strong><span id="coloring">{{ username }}</span>님을 위한 영화입니다🤍</strong></h3><br>
    </div>
    <ul class="ml-5">
      <li class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">🥇 {{ ratings[0][1].toFixed(2) }} Point</span>{{ ratings[0][0] }}</h5>
      </li>
      <li class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">🥈 {{ ratings[1][1].toFixed(2) }} Point</span>{{ ratings[1][0] }}</h5>
      </li>
      <li class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">🥉 {{ ratings[2][1].toFixed(2) }} Point</span>{{ ratings[2][0] }}</h5>
      </li>
      <li class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">{{ ratings[3][1].toFixed(2) }} Point</span>{{ ratings[3][0] }}</h5>
      </li>
      <li class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">{{ ratings[4][1].toFixed(2) }} Point</span>{{ ratings[4][0] }}</h5>
      </li>
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
  methods: {
    
  },
  mounted: function () {
    setTimeout(() => {
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