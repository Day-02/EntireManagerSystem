<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>出勤信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="infoList" style="width: 100%" stripe border>
        <el-table-column prop="ano" label="出勤编号" width="180">
        </el-table-column>
        <el-table-column prop="amo" label="月份" width="180"> </el-table-column
        ><el-table-column prop="eno" label="职员" width="180"> </el-table-column
        ><el-table-column prop="awork" label="该月到勤天数" width="180">
        </el-table-column
        ><el-table-column prop="anowork" label="该月缺勤天数" width="180">
        </el-table-column
        ><el-table-column prop="aexwork" label="该月加班天数" width="180">
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
        "http://localhost:9000/attendance/findAll"
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