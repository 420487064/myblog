<template>
    <div id="backcontrol">
        <div class="header">后台管理</div>
        <div class="body">
            <div class="aside">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="rgba(255,255,255,0)"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    >
                        <!-- <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>分类</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu> -->

                        <router-link to="/backcontrol/articleAdd">
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">添加文章</span>
                            </el-menu-item>
                        </router-link>

                        <router-link to="/backcontrol/alltitle">
                            <el-menu-item index="3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">全部文章</span>
                            </el-menu-item>
                        </router-link>

        
                    </el-menu>   
            </div>
            <div class="main">
                <router-view></router-view>
                <!-- <div class="foot">
                    4
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "navmenu",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>