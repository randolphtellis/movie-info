<template>
  <div class="search-results">
    <div v-for="(result, index) in this.results" :key="index" class="result">
      <search-card
      :route="movieRoute(result.imdbID)"
      :title="result.Title"
      :year="result.Year">
      </search-card>
    </div>
  </div>
</template>
<script>
import SearchCard from './SearchCard.vue'

export default {
  name: 'searchresults',
  props: ['results'],
  components: {
    SearchCard
  },
  methods: {
    movieRoute(imdbId) {
      return {
        name: 'Movie',
        params: {
          movieId: imdbId
        },
        query: this.$route.query
      }
    }
  }
}
</script>

<style scoped>

  .result {
    padding: 5px 10px;
  }

</style>
