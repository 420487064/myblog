<template>
    <div class="wrapper">
        <div class="table-content">

            <el-table
                :data="nowlist"
                style="width: 100%">
                <el-table-column label="时间" prop="upTime">
                </el-table-column>
                <el-table-column label="标题" prop="title">
                </el-table-column>
                <el-table-column align="right" >
                    <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" @click="fd(scope)"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="mini" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        <el-pagination
            background       
            :page-size="13"
            layout="total, prev, pager, next, jumper"
            :total="total"
            @current-change="fy"
             >
        </el-pagination>
        </div>
    </div>
</template>

 


<script>
import { alltitle,articlerdelete } from '@/api/index.js'
import { transformTime } from '@/utils/index.js'
export default {
    name: 'alltitle',
    data() {
        return {
            nowlist:[],
            list:[], 
            total:0,
            search: '',
            index:1,
            timer:''
        }
    },
    mounted() {
     alltitle().then((data)=>{
        // 时间戳转换
        data.map(item => item.upTime = transformTime(item.upTime))
    
        this.list = data;
        this.nowlist = data.slice(0,13)
        this.total = data.length
     
     });   
    },
    methods: {
        fy(index){
            this.index = index
            this.nowlist =  this.getdata()
        },
        getdata(){
        this.total =  this.list.filter(data => !this.search ||data.title.toLowerCase().includes(this.search.toLowerCase())).length
        return this.list
            .filter(data => !this.search ||data.title.toLowerCase().includes(this.search.toLowerCase()))
             .slice((this.index - 1) * 13, this.index * 13)
        },
        handleEdit(index, row) {
            // console.log(index, row);
            this.$router.push({path:'/backcontrol/articleAdd',query:{
                id:row._id,
                headerPic:row.headerPic ,
                title:row.title,
                category:row.category,
                tag:row.tag,
                upTime:row.upTime,
                content:row.content
        }})
        },
        async handleDelete(index, row) {
          let data = await  articlerdelete({id : row._id});
           
          if(data.code == 200){
            this.$message({
              message:'删除成功',
              type:'success'
            });
            this.list.map((item,index) => item._id == row._id ? this.list.splice(index,1) : '' );
            this.nowlist.splice(index,1);
          }else{
            this.$message({
              message:'删除失败',
              type:'error'
            });
          }

        },
        nodouble(thus){
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                // console.log(thus);
                thus.nowlist = thus.getdata()
            },500)
        }
        
    },
    watch: {
        search:{
            handler(){
                this.nodouble(this)
            }
        }
    },
}
</script>

<style scoped lang='less'>
@import './index.less';
/deep/ .el-table{
    background-color: rgba(0,0,0,0);
}
/deep/ .el-table th , /deep/ .el-table tr,/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0,0,0,0);
}
/deep/ .el-table{
    color: #fff;
}
/deep/ .el-input__inner,/deep/ .el-input__inner :hover{
    background-color: rgba(0,0,0,0);
    border-color: #fff;
}
/deep/ .el-pagination.is-background .btn-prev,
/deep/ .el-pagination.is-background .el-pager li ,
/deep/ .el-pagination.is-background .el-pager li:hover,
/deep/ .el-pagination.is-background .btn-next {
    background-color: #ffffff60;
    color: #000;
}

/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #f78989;
    color: #fff;
}

/deep/ .el-pagination.is-background{
    text-align: center;
    margin-top: 20px;
}
</style>