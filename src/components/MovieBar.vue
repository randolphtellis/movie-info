<template>
  <el-container class="sidebar--container">
    <div v-if="inValidId">
      <h2>Invalid IMDB ID !!</h2>
    </div>
    <el-row v-else class="sidebar--row" :gutter="20">
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <div v-if="this.result.Title" class="text-left">

          <h2 v-html="this.result.Title" class="title"></h2>
          <h6 v-html="this.result.Genre" class="genres"></h6>
          <p v-html="moviePlot" class="plot"></p>

          <div v-if="this.result.Language" class="languages">
            <strong v-if="isPlural(this.result.Language)">Languages: </strong>
            <strong v-else>Language: </strong>
            {{ this.result.Language }}
          </div>
          <div v-if="this.result.Director" class="director">
            <strong v-if="isPlural(this.result.Director)">Directors: </strong>
            <strong v-else>Director: </strong>
            {{ this.result.Director }}
          </div>
          <div v-if="this.result.Actors" class="actors">
            <strong v-if="isPlural(this.result.Actors)">Actors: </strong>
            <strong v-else>Actor: </strong>
            {{ this.result.Actors }}
          </div>
          <div class="duration">
            <strong>Duration:</strong> {{ this.result.Runtime }}
          </div>
        </div>
      </el-col>
      <el-col v-if="this.result.Poster !== 'N/A'" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <img :src="this.result.Poster" alt="">
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'moviebar',
  data() {
    return {
      result: {},
      inValidId: false
    }
  },
  watch: {
    '$route.params.movieId'() {
      this.fetchMovie()
    }
  },
  mounted() {
    this.fetchMovie()
  },
  computed: {
    moviePlot() {
      return `Movie plot - ${this.result.Plot}`
    }
  },
  methods: {
    isPlural(data) {
      if (data) {
        const multi = data.split(', ').length
        if (multi > 1) {
          return true
        }
      }
      return false
    },
    fetchMovie() {
      const id = this.$route.params.movieId
      if (id) {
        this.inValidId = false
        const apiKey = this.$store.state.omdbApiKey
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
        fetch(url)
          .then(res => res.json())
          .then((res) => {
            if (res.Response === 'True') {
              this.result = res
            } else {
              this.inValidId = true
            }
          })
          .catch((error) => {
            console.log('Network error:', error)
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .sidebar--container {
      padding: 25px 50px;

    }
    .sidebar--row {
      width: 100%;
    }
    .text-left {
      text-align: left;
    }
</style>
