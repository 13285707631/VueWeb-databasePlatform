/* eslint-disable */
<template>
  <div class="database">
    <!-- <img src='../assets/logo.png'> -->
    <el-container class='baseC'>
      <el-aside width="200px" class='addDatabase'>
        <div class='serchBase'>
         <!-- <input type="text" id="search" placeholder="搜索" v-on:keyup.13="searchBase" v-model="NoneInput"> -->
        <el-input
          id="search"
          placeholder="搜索"
          v-model="input"
          clearable
          prefix-icon="el-icon-search"
          v-on:change="searchBase">
        </el-input>
        </div>
        <div class='addBase' >
          <el-button type="text" @click="addBase">新建数据库</el-button>
        </div>
         <div class='baselise'>
            <el-menu @select="select" >
              <el-menu-item-group class='list'>
                <el-menu-item index="1" @click="visible=true" >zyt</el-menu-item>
                <el-menu-item index="2" @click="visible=true">zyt2</el-menu-item>
              </el-menu-item-group>


            </el-menu>
         </div>

      </el-aside>

      <el-container>
        <el-header class='baseheader'>
          <div class='basic'>
            <span >
             <img class="img" src="../assets/logo.png" width="5%" height="5%"/>
            </span>
            <span class='name' @click="alert">zyt</span>
          </div>
        </el-header>
        <el-main>Main</el-main>
        <el-drawer
          :visible.sync="visible"
          :direction="direction"
          size=82%
          >
          <span>
           <databaseDetail message= "messages" ></databaseDetail>
          </span>
        </el-drawer>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
      </el-container>
  </div>
</template>
<script>
import databaseDetail from '../components/databaseDetail.vue'
export default {
  components:{ //引用自定义模板
    'databaseDetail': databaseDetail
  },
  name: 'database',
  data () {
    return {
      text: '',
      input: '',
      visible: false,
      direction: 'rtl',
      messages: "can you see me"
    }
  },
  methods: {
    addBase () { // eslint-disable-next-line
      this.$prompt('新建数据库','数据库名称',{
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '创建成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    },
    searchBase () {
      /* if ({value}==''){
        alert('this')
      } */
      alert('seeme?')
      /* alert('this'+document.getElementById('search').value) */
    },
    alert () {
      alert('what')
    },
    select (key, keyPath) {
      /* console.log(key) */

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
.baseheader{
  /* border: #f7f8ff;
  border-bottom: 0.1mm groove; */
}
.name{
  /* margin-left: 10px; */
  float: left;
}
.img{
  float: left;
}
</style>
