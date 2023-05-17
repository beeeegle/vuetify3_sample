<template>
  <v-container>
      <v-data-table
          :headers="headers"
          :items="users"
          item-key="id"
          class="elevation-1 table"
          loading="ロードしてます。"
          v-model:items-per-page="itemsPerPage"
      >
          <template v-slot:[`item.valid`]="{ item }">
            <div v-if="item.raw.valid">有効</div>
            <div v-else>無効</div>
          </template>
          <template v-slot:[`item.createdAt`]="{ item }">
            {{ comm.convUnixTimeToDateTime(item.raw.createdAt) }}
          </template>
          <template v-slot:[`item.modifiedAt`]="{ item }">
            {{ comm.convUnixTimeToDateTime(item.raw.modifiedAt) }}
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon @click="editIconClick(item.raw.id)"> mdi-pencil </v-icon>
          </template>
      </v-data-table>
  </v-container>
</template>

<script lang="ts" setup>
import { CommonModels } from '@/utils/CommonModels'

const comm = new CommonModels()
const itemsPerPage: number = 10
const headers: any = [
    { title: 'ID', align: 'center', sortable: true, key: 'id' },
    { title: 'ユーザー名', align: 'center', sortable: false, key: 'name' },
    { title: 'email', align: 'center', sortable: false, key: 'email' },
    { title: '有効', align: 'center', sortable: false, key: 'valid' },
    { title: '作成日', align: 'center', key: 'createdAt' },
    { title: '更新日', align: 'center', key: 'modifiedAt' },
    { title: '操作', align: 'center', sortable: false, key:'actions'}
  ]
const users: any = [
    {
      id: 1,
      name: 'user1',
      email: 'test@tset.co.jp',
      valid: true,
      createdAt: 1683381722,
      modifiedAt: 1683381722,
    },
    {
      id: 2,
      name: 'user2',
      email: 'test2@tset.co.jp',
      valid: false,
      createdAt: 1683381722,
      modifiedAt: 1683381722,
    }
]
const editIconClick = ( id: number ): void => {
console.log(id)
}
</script>
<style scoped>
.table {
  font-size: .75em;
}
</style>
