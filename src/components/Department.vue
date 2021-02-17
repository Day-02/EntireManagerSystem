<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>部门信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="infoList" style="width: 100%" stripe border>
        <el-table-column prop="dno" label="部门编号" width="180">
        </el-table-column>
        <el-table-column prop="dname" label="部门名称" width="180">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoList: [],
    };
  },
  created() {
    this.getInfoList();
  },
  methods: {
    async getInfoList() {
      const { data: res } = await this.$axios.get(
        "http://localhost:9000/department/findAll"
      );
      this.infoList = res;
    },
  },
};
</script>
<style scoped>
.box-card {
  margin-top: 10px;
}
</style>