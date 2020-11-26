<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>추천 영화</strong></h1>
    <hr/>
    <div>
      <h3 class="text-left mx-3"><strong><span id="coloring">{{ username }}</span>님을 위한 영화입니다🤍</strong></h3><br>
    </div>
    <ul class="ml-5">
      <li v-if="sortedRatings.length > 1" class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">🥇 {{ sortedRatings[0][1].toFixed(2) }} Point</span>{{ sortedRatings[0][0] }}</h5>
      </li>
      <li v-if="sortedRatings.length > 2" class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">🥈 {{ sortedRatings[1][1].toFixed(2) }} Point</span>{{ sortedRatings[1][0] }}</h5>
      </li>
      <li v-if="sortedRatings.length > 3" class="d-flex justify-content-between" style="list-style: none;">
        <h5 class="text-left"><span class="pr-3" style="font-size: 15px;">🥉 {{ sortedRatings[2][1].toFixed(2) }} Point</span>{{ sortedRatings[2][0] }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  data () {
    return {
      sortedRatings: [],
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
    },
  },
  methods: {
    
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

    const sensitivity = 0.2

    for (const movie in movieRatings) {
      const movieRating = movieRatings[movie]
      const average = movieRating.reduce((a, b) => a + b) / movieRating.length;
      const sigmoidRating = 2 * (1 / ( 1 + 2.72 ** ( - movieRating.length * sensitivity )) - 0.5)

      movieRatings[movie] = 2.5 + (average - 2.5) * sigmoidRating
    }

    const sortedRatings = [];
    for (const rating in movieRatings) {
        sortedRatings.push([rating, movieRatings[rating]]);
    }

    sortedRatings.sort(function(a, b) {
        return b[1] - a[1];
    });
    this.sortedRatings = sortedRatings
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