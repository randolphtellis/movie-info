<template>
  <div class="search-list">
    <div class="container">
      <div class="row" :class="{ 'movie--clicked': movieOpened }">
        <div class="search-bar grid">
          <div class="grid-content">
            <div class="search-input" :class="{ 'has-searched': results }">
              <el-input type="search" placeholder="Search movies" v-model.lazy="term"></el-input>
            </div>
            <div class="search--loader" v-loading="searching" element-loading-text="Searching..." element-loading-spinner="el-icon-loading"></div>
            <div v-html="emptyInputMsg" v-if="emptyInput"></div>
            <div v-html="noResultsMsg" v-if="noResults"></div>
            <div v-html="networkErrorMsg" v-if="networkError"></div>
            <div v-if="!searching">
              <SearchResults
                :results="this.results"
              />
              <Pagination
                v-if="results"
               :total="total"
               :per-page="10"
               :currentPage="currentPage"
               @pagechanged="onPageChange"
               />
            </div>
          </div>
        </div>
        <div v-if="movieOpened" class="result-bar grid">
          <div class="grid-content">
            <MovieBar>
            </MovieBar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import SearchResults from '@/components/SearchResults.vue'
import Pagination from '@/components/Pagination.vue'
import MovieBar from '@/components/MovieBar.vue'

export default {
  name: 'search',
  props: ['movies'],
  components: {
    SearchResults,
    Pagination,
    MovieBar
  },
  data() {
    return {
      term: '',
      emptyInput: true,
      networkError: false,
      results: null,
      total: 0,
      noResults: false,
      searching: false,
      currentPage: 1,
      movieOpened: false,
      noResultsMsg: '<h2>Nothing found...</h2><p>Nothing could be found matching that search criteria</p>',
      networkErrorMsg: '<h2>Error. Something went wrong.</h2><p>Please try again later.</p>',
      emptyInputMsg: '<h2>Type a keyword for a movie</h2><p>Please enter a valid search term</p>'
    }
  },
  created() {
    if (this.$route.params.movieId) {
      this.movieOpened = true
    }
  },
  watch: {
    term: debounce(function debounced() {
      this.noResults = false
      this.emptyInput = false
      this.onPageChange(1)
    }, 800),
    '$route.params.movieId'() {
      this.movieOpened = true
    }
  },
  methods: {
    search(page) {
      if (this.term === '') {
        this.emptyInput = true
      }
      this.searching = true
      const apiKey = this.$store.state.omdbApiKey
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.term}&page=${page}&type=movie`
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          this.searching = false
          if (res.Response === 'True') {
            this.total = Number(res.totalResults)
            this.results = res.Search
          } else {
            this.results = null
            // Run custom validation on term 
            if (this.term === '') {
              this.emptyInput = true
            } else {
              this.noResults = true
            }
          }
        })
        .catch((error) => {
          console.warn('Sorry, there seems to be a network error. Please try again later !!', error)
          this.networkError = true
          this.searching = false
        })
    },
    onPageChange(page) {
      this.currentPage = page
      this.search(page)
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/variables.scss";

  .grid {
    display: inline-block;
    float: left;
    width: 100%;
    transition: width 0.3s ease-in;
  }
  .search-bar {
    min-height: 100vh;
  }
  .search--loader {
    font-size: 75px;
  }
  .movie--clicked {
    .search-bar.grid {
      width: calc(30% - 2px);
      border-right: 1px solid lightgray;
      transition: width 0.3s ease-in;
    }
    .result-bar.grid {
      width: 70%;
      transition: width 0.3s ease-in;
    }
    @media #{$tablet} {
      .search-bar.grid,  .result-bar.grid{
        width: 100%;
      }
    }
  }
  .search-input {
    padding: 20px 10px 35px 10px;
    max-width: 500px;
    margin: 0 auto;
  }
  h2 {
      margin-bottom: 40px;
  }
  ul {
      list-style-type: none;
  }

</style>
