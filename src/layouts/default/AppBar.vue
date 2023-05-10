<template>
    <v-app-bar flat>
        <v-app-bar-nav-icon v-if="isLogin()"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <h2>オートメーションチェック</h2>
        <v-spacer></v-spacer>
        <v-icon v-if="isLogin()"
            large
            style="padding-right: 1em;"
            @click="logout()"
        >mdi-logout</v-icon>
    </v-app-bar>
    <v-navigation-drawer v-if="isLogin()"
        v-model="drawer"
        absolute
        temporary
    >
        <v-list-item>
            <v-list-item-avatar>
                <v-img v-if="false" src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                <v-icon color="indigo" size="48">mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>UserName</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list
            dense
            nav
        >
            <!-- <v-list-item to="/"><v-icon left>mdi-view-dashboard</v-icon>ダッシュボード</v-list-item> -->
            <v-list-item to="/"><v-icon left>mdi-account-circle</v-icon>プロフィール</v-list-item>

            <v-divider></v-divider>

            <!-- <v-list-item to="#" class="list-bg"><v-icon left>mdi-clipboard-text-multiple-outline</v-icon>プロジェクト</v-list-item> -->
            <v-list-item to="/info" class="list-bg"><v-icon left>mdi-information-outline</v-icon>お知らせ</v-list-item>
            <v-list-item to="/users" class="list-bg"><v-icon left>mdi-account-group</v-icon>ユーザー</v-list-item>
            <v-list-item to="#" class="list-bg"><v-icon left>mdi-vuejs</v-icon>デバッグ</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { piniaStore } from '@/models/PiniaStore';

const store = piniaStore();
const router = useRouter()
let loginStatus = ref<boolean>(false)
let drawer = ref<boolean>(false)

console.log('created');

onBeforeMount(() => {
  console.log("on before mount")
  beforeCreate()
})
const beforeCreate = () => {
    loginStatus.value = store.isLogin
    console.log('beforeCreat AppBar')
}
const isLogin = (): boolean => {
  return store.isLogin
}
const logout = () => {
  store.isLogin = false
  router.push('/')
}
</script>
<style>
  .list-bg {
    background-color: #fff;
  }
</style>