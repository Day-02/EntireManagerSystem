<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>请假信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="infoList" style="width: 100%" stripe border>
        <el-table-column prop="lno" label="请假编号" width="180">
        </el-table-column>
        <el-table-column prop="eno" label="职员工号" width="180">
        </el-table-column
        ><el-table-column prop="dno" label="职员所在部门" width="180">
        </el-table-column
        ><el-table-column prop="lrs" label="请假事宜" width="180">
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
        "http://localhost:9000/leaving/findAll"
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