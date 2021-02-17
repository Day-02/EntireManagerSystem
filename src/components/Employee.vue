<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>员工信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="infoList" style="width: 100%" stripe border>
        <el-table-column prop="eno" label="员工编号" width="180">
        </el-table-column>
        <el-table-column prop="ename" label="员工姓名" width="180">
        </el-table-column>
        <el-table-column prop="esex" label="员工性别"> </el-table-column>

        <el-table-column prop="eage" label="员工年龄"> </el-table-column>
        <el-table-column prop="dno" label="员工所在部门"> </el-table-column>
        <el-table-column prop="esta" label="员工状态">
          <template slot-scope="scope"
            ><el-tag type="success" v-if="scope.row.esta === 0" size="mini"
              >工作中</el-tag
            >
            <el-tag type="danger" v-else size="mini">请假中</el-tag>
          </template>
        </el-table-column></el-table
      >
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
        "http://localhost:9000/employee/findAll"
      );
      this.infoList = res;
      console.log(this.infoList);
    },
  },
};
</script>
<style scoped>
.box-card {
  margin-top: 10px;
}
</style>