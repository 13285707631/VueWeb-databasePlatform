<template>
  <div class="database">
    <!-- <img src='../assets/logo.png'> -->
    <el-container class='baseC'>
      <el-aside width="200px" class='addDatabase'>

        <el-input
          placeholder="搜索任务"
          v-model="input"
          clearable>
        </el-input>
        <el-button type="text" @click="addTask">新建导入任务</el-button>
        <div class='tasklise'>
           <el-menu >
             <el-menu-item>zyt</el-menu-item>
             <el-menu-item>zyt2</el-menu-item>
           </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class='taskheader'>

        </el-header>
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
     input: ''
    }
  },
  methods: {
    addTask () { // eslint-disable-next-line
      this.$prompt('新建任务','任务名称',{
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => { // eslint-disable-next-line
        this.$message({
          type: 'success',
          message: '创建成功'
        })
      }).catch(() => { // eslint-disable-next-line
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addDatabase{
  border: #333333;
  /* border-right: 0.1mm groove; */
}
.baseC{
  height: 440px;
}
.taskheader{
  border: #333333;
  border-bottom: 0.1mm groove;
}
</style>
