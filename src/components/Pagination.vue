<template>
  <div class="pagination" v-if="this.total > this.perPage">
    <div class="pager">
      <div class="pager-prev text-left" @click="onClickPreviousPage">
        <i class="el-icon-caret-left"></i>
      </div>
      <div class="pager-pages">
        Page {{ this.currentPage }}
      </div>
      <div class="pager-next text-right" @click="onClickNextPage">
        <i class="el-icon-caret-right"></i>
      </div>
    </div>
    <div class="pagination-total">
      {{ this.total }} results
    </div>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    }
  }

}
</script>

<style lang="scss" scoped>
  .pagination {
    display: inline-block;
    width: 100%;
    padding: 10px 0;
  }
  .pager {
    display: flex;
    align-items: center;
  }
  .pager-prev, .pager-next {
    width: 20%;
    margin: 0;
    display: inline-block;
    float: left;
    i {
      font-size: 2.5em;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .pager-pages {
    width: 60%;
    float: left;
    padding: 0;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .pagination-total {
    width: 100%;
    float: left;
  }

</style>
