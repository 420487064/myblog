<template>
  <div id="articleadd">
  <el-form ref="form" :model="form" label-width="80px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="图标">
      <el-input v-model="form.headerPic"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-input v-model="form.category"></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-input v-model="form.tag"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>

    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">{{ btn }}</el-button>
      <el-button v-if="btn =='立即创建'" @click="clear">清空</el-button>
      <el-button v-else @click="back">返回</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script >
// import axios from "@/utils/axios";
import { addcontent,articleremake } from '@/api/index.js'
export default {
    name:'artucleadd',
    data() {
      return {
        form: {
          id:'',
          headerPic: '',
          title: '',
          category: '',
          tag: '',
          upTime:'',
          content: ''
        },
        btn:'立即创建'
      };
    },
    mounted() {
      if(this.$route.query.id){
        this.btn = '修改'
        this.form = this.$route.query
      }
    },
    methods: {
     async onSubmit() {
      if(this.btn == '立即创建'){
        this.form.upTime =  new Date().getTime();
        let data = await addcontent(this.form);
  
        if(data.code == 200){
          this.$message({
            message:'发布成功',
            type:'success'
          });
        }else{
          this.$message({
            message:'发布失败',
            type:'error'
          });
        }
      }
      else {
        let form = this.form;
        form.upTime = new Date(form.upTime).getTime();
        let data = await articleremake(form);
        // console.log(data);
        if(data.code == 200){
            this.$message({
              message:'修改成功',
              type:'success'
            });
          }else{
            this.$message({
              message:'修改失败',
              type:'error'
            });
          }
      }
      },
      clear(){
        this.form =  {
          headerPic: '',
          title: '',
          category: '',
          tag: '',
          upTime:'',
          content: ''
        }
      },
      back(){
        window.history.back(-1);
      }
    }
  };
</script>

<style scoped lang='less'>
@import "./index.less";
#articleadd{
    width: 50%;
    margin: 100px auto;
    color: #fff;
    /deep/ .el-input__inner  {
        background-color: rgba(0, 0, 0, 0)!important;
    }
}
/deep/ .line&.el-col&.el-col-2 {
      text-align: center;
    }

</style>