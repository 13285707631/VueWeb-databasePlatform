<template>
  <div id="app">
    
    <div  v-if='menuVisible' class="menu">
    <el-container>
      <el-header id='header'>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">数据库</el-menu-item>
        <el-menu-item index="2" >数据导入</el-menu-item>
        <el-menu-item index="3" >查询面板</el-menu-item>
        <el-menu-item index="4">资源池</el-menu-item>
        <li id='img_li'>
            <img id='img_head' src="../assets/logo.png" />
        </li>
        </el-menu>
      <!-- <el-button id='menuButton'>me</el-button> -->
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuVisible: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key==1){//eslint-disable-line
        this.$router.push('/database')
      }else if (key==2){//eslint-disable-line
        this.$router.push('/datain')
      }else if (key==3){//eslint-disable-line
        this.$router.push('/query')
      }else if (key==4){//eslint-disable-line
        this.$router.push('/re')
      }
    }
  }
}
</script>

<style>
#img_li{
}
#img_head{
  height: 40px;
  width: 40px;
  padding-top: 10px;
  position: relative;
  display: inline-block;
  left: 400px;
}
/* #menuButton{
   /* justify-content: right; */
 /*  position: relative;
   height: 60xp; */
   /* left: 500px; */
/* } */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.img_button{
  height: 15px;
  width: 15px;
}
.menu_div{
  width: 400px;
}
.el-menu{
  /* justify-content: left; */
  background-color: #FFFFFF;
  /* text-align: center; */
  box-sizing: border-box;
}
.el-header {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  line-height: 100%;
  height: 80px;
  box-sizing: border-box;

}
.el-main {
 /* background-color: #E9EEF3;
  color: #333; */
  /* text-align: center; */
  /* text-align: center; */
  box-sizing: border-box;
  display:block;
  height: 480px;
}

</style>
