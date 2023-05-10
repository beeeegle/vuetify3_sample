<template>
    <v-container>
        TEST
        <v-data-table
            :headers="headers"
            :items="users"
            item-key="id"
            class="elevation-1 table"
            loading="ロードしてます。"
            v-model:items-per-page="itemsPerPage"
        >
            <template v-slot:items="{ item }">
                <tr style="text-align: center;">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>TEST</td>
                    <td>{{item.createdAt}}</td>
                    <td>{{item.modifiedAt}}</td>
                    <td>{{item.ope}}</td>
                </tr>
            </template>
        </v-data-table>
    </v-container>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { ref, onBeforeMount } from 'vue'

    const itemsPerPage: number = 10
    const headers: any = [
          { title: 'ID', align: 'center', sortable: true, key: 'id' },
          { title: 'ユーザー名', align: 'center', sortable: false, key: 'name' },
          { title: 'email', align: 'center', sortable: false, key: 'email' },
          { title: '有効', align: 'center', sortable: false, key: 'vaild' },
          { title: '作成日', align: 'center', key: 'createdAt' },
          { title: '更新日', align: 'center', key: 'modifiedAt' },
          { title: '操作', align: 'center', sortable: false, value:'ope'}
        ]
    const users: any = [
          {
            id: 1,
            name: 'user1',
            email: 'test@tset.co.jp',
            vaild: false,
            createdAt: 1683381722,
            modifiedAt: 1683381722,
          },
          {
            id: 2,
            name: 'user2',
            email: 'test2@tset.co.jp',
            vaild: false,
            createdAt: 1683381722,
            modifiedAt: 1683381722,
          }
    ]
</script>
<style scoped>
.table {
    font-size: .75em;
}
</style>