<template>
     <div class="common-layout">
        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">
              <el-scrollbar>
                <el-menu>
                  <div v-for="item in routeList" :key="item.id">
                      <div v-if="!item.children">
                        <el-menu-item :index="item.path" @click="toLink(item)">
                          <el-icon color="#409EFC" class="no-inherit">
                            <component :is="item.icon"></component>
                          </el-icon>
                          <span>
                            {{item.title }}
                          </span>
                        </el-menu-item>
                      </div>
                      <div v-else>
                        <!-- <el-sub-menu index="1">
                          <template #title>
                            <el-icon><message /></el-icon>Navigator One
                          </template>
                          <el-menu-item-group>
                            <template #title>Group 1</template>
                            <el-menu-item index="1-1">Option 1</el-menu-item>
                            <el-menu-item index="1-2">Option 2</el-menu-item>
                          </el-menu-item-group>
                          <el-menu-item-group title="Group 2">
                            <el-menu-item index="1-3">Option 3</el-menu-item>
                          </el-menu-item-group>
                          <el-sub-menu index="1-4">
                            <template #title>Option4</template>
                            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                          </el-sub-menu>
                        </el-sub-menu> -->
                        <div >
                          <el-sub-menu :index="item.path">
                            <template #title>{{ item.title }}</template>
                            <el-menu-item v-for="items in item.children" :key="items.id" :index="items.path" @click="toLink(items)">
                              {{ items.title }}
                            </el-menu-item>
                          </el-sub-menu>
                        </div>
                      </div>
                  </div>
                </el-menu>
              </el-scrollbar>
            </el-aside>
              <el-main>
                <el-scrollbar>
                  <router-view></router-view>
                </el-scrollbar>
              </el-main>
          </el-container>
        </el-container>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import {ElContainer} from 'element-plus'
import { Menu as IconMenu, Message, Setting, HomeFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routeList = [
  {
    path:"/homes",
    title:"首页",
    icon:'HomeFilled',
    id:'2',
  },
  {
    path:"/echarts",
    title:'echars可视化数据',
    icon:'Menu',
    id:'1',
    children:[
      {
        path:"/echarts/home",
        title1:'echars可视化数据',
        title:"echartsHome",
        icon:"Message",
        id:'1-1'
      },
      {
        path:"/echarts/list",
        title1:'echars可视化数据',
        title:"echartsList",
        icon:"Message",
        id:'1-2'
      }
    ]
  }
]

const toLink = (item) => {
  router.push(item.path)
}
</script>
<style scoped>
</style>