<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <span class="img"><img src="../assets/logo(2).png" /></span>
      <span class="title">人事管理系统</span>
      <el-button class="quit" @click="quit">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="/employee">
            <i class="el-icon-menu"></i>
            <span slot="title">员工信息管理</span>
          </el-menu-item>
          <el-menu-item index="/department">
            <i class="el-icon-menu"></i>
            <span slot="title">部门信息管理</span>
          </el-menu-item>
          <el-menu-item index="/attendance">
            <i class="el-icon-setting"></i>
            <span slot="title">出勤信息管理</span>
          </el-menu-item>
          <el-menu-item index="/leaving">
            <i class="el-icon-menu"></i>
            <span slot="title">请假信息管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 底部区域 -->
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    quit() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #8d91ac;
  height: 100px !important;
  line-height: 100px;
}
.el-header .img {
  float: left;
  width: 90px;
  height: 90px;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 50%;
}
.el-header img {
  width: 80px;
  float: left;
  border-radius: 50%;
  margin: 5px 0 0 5px;
}
.el-header .title {
  float: left;
  margin-left: 10px;
  font-size: 26px;
  color: white;
}
.el-header .quit {
  float: right;
  margin: 31px;
}
.el-aside {
  background-color: #a1a6ba;
}
.el-main {
  background-color: #c2cadd;
}
.el-footer {
  background-color: #7c7086;
}
</style>