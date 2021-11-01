<template>
  <div class="database">
    <!-- <img src='../assets/logo.png'> -->
    <el-container class='baseC'>
      <el-aside width="200px" class='addDatabase'>
        <el-button>新建查询</el-button>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <!-- <el-main>Main</el-main>
        <el-footer>Footer</el-footer> -->
      </el-container>
      </el-container>
  </div>
</template>
<script>
export default {
  name: 'database',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addDatabase{
  border: #333333;
  border-right: 0.1mm groove;
}
.baseC{
  height: 440px;
}
</style>
