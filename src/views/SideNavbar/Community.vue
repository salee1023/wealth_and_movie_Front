<template>
  <div>
    <section id="community">
      <h1 id="community-title" class="text-light">
        <strong>Community</strong>
      </h1>
      <MovieList />
      <section id="community-review-block">
        <article id="recent-review"><RecentReview /></article>
        <aside id="bext-reviewer"><BestReviewer /></aside>
      </section>
    </section>
    <br /><br /><br />
  </div>
</template>

<script>
import MovieList from "@/components/Community/MovieList"
import RecentReview from "@/components/Community/RecentReview"
import BestReviewer from "@/components/Community/BestReviewer"
// import ReviewPage from "@/components/Community/ReviewPage"
import axios from "axios"
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Community",
  components: {
    MovieList,
    RecentReview,
    BestReviewer,
    // ReviewPage,
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem("jwt")

      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
      return config;
    },
  },
  computed: {
    clickedReview: function () {
      return this.$store.state.clickedReview
    },
  },
  created: function () {
    const isLogin = this.$store.state.is_login
    const config = this.setToken()

    //선택된 영화, 리뷰 초기화
    this.$store.dispatch("initialize")
    this.$store.dispatch("getReviews")

    if (isLogin === false) {
      this.$router.push({ name: "Login" })
    }

    axios
      .get(`${SERVER_URL}/articles/`, config)
      .then((res) => {
        this.reviews = res.data
      })
      .catch((err) => {
        console.log(err);
      })

    window.scrollTo(0, 0)
  },
};
</script>

<style>
#community {
  width: 80%; /* 너비 80% 만큼 차지 */
  margin: 0 auto; /* 양 옆 마진 똑같이 */
  padding: 1rem 0;
  color: black;
}
#community-title {
  font-size: 5rem;
}
#community-review-block {
  display: flex;
  padding: 1rem 1rem;
  background-color: rgb(0, 0, 0, 0.6);
  color: #ede8f1;
}
#recent-review {
  width: 70%;
  margin-top: 1rem;
  margin-right: 1rem;
  border-right: 3pt groove lightgrey;
}
</style>