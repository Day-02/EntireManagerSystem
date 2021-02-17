<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像 -->
      <div class="logo-box">
        <img src="../assets/logo(2).png" alt="" />
      </div>
      <div class="login-title">人事管理系统</div>
      <!-- 登录表单 -->
      <div class="login-form">
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="80px"
        >
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="loginForm.name"
              prefix-icon="el-icon-user-solid"
            ></el-input> </el-form-item
          ><el-form-item label="密码" prop="password"
            ><el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input
          ></el-form-item>
        </el-form>
      </div>
      <!-- 按钮 -->
      <div class="login-btns">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="reset" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "admin",
        password: "123456",
      },
      loginFormRules: {
        name: [{ required: true, message: "请输入登录名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$router.push("/home");
    },
    reset() {
      this.$refs.loginFormRef.resetFields();
    },
  },
};
</script>
<style scoped>
.login-container {
  background-color: #c2cadd;
  height: 100%;
}
.login-box {
  background-color: #7c7086;
  position: absolute;
  top: 170px;
  left: 450px;
  width: 500px;
  height: 300px;
  border-radius: 3%;
}
.logo-box {
  position: absolute;
  top: -65px;
  left: calc(50% - 65px);
  background-color: #fff;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 0 0 10px #ddd;
}
.logo-box img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 5px 0 0 5px;
}
.login-title {
  position: absolute;
  width: 100%;
  font-size: 28px;
  color: #fff;
  margin-top: 75px;
  text-align: center;
}
.login-form {
  position: absolute;
  bottom: 45px;
  width: 90%;
  color: #fff;
}
.el-form-item__label {
  color: #fff !important;
}
.login-btns {
  position: absolute;
  right: 50px;
  bottom: 10px;
}
</style>