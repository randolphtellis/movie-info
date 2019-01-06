<template>
  <router-link :to="route" class="card">
    <div class="card--body">
      <p class="card--title">{{ this.title }}</p>
      <div class="card--aside">
        <i class="el-icon-star-off"></i>
        <p class="card--year">{{ this.year }}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'searchcard',
  props: ['route', 'title', 'year', 'id']
}
</script>

<style lang="scss" scoped>

  .card {
    display: inline-block;
    width: 100%;
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: all 0.3s ease-in;
    &:hover {
      cursor: pointer;
    }
  }
  .card--body {
    padding: 15px 5px;
  }
  .card--aside {
    width: 20%;
    float: right;
  }
  i {
    color: transparent;
    font-size: 1.5em;
  }
  .router-link-active {
    &.card {
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
    }
    i {
      color: inherit;
    }
  }
  .card--title {
    text-align: left;
    margin: 0;
    float: left;
    width: 80%
  }
  .card--year {
    margin-top: 5px;
    font-size: 11px;
  }
</style>
