<template>
    <v-container>
      <v-snackbar
        v-model="snackbar"
        top
        color="red accent-10"
        elevation="1"
        :timeout="3000"
      >
        {{snackBarMsg}}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="#fff"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

        <v-row
            justify="center" align-content="center"
        >
            <v-col cols="md">
                <v-card>
                    <v-card-title></v-card-title>
                        <v-form
                            ref="form"
                        >
                            <v-row
                                justify="center" align-content="center"
                            >
                                <v-col
                                    cols="10"
                                >
                                    <v-text-field
                                        label="ログインID"
                                        type="text"
                                        id="id"
                                        v-model="id"
                                        outlined
                                        autofocus
                                    ></v-text-field>
                                    <v-text-field
                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show ? 'text' : 'password'"
                                        class="input-group--focused"
                                        @click:append="show = !show"
                                        @keyup.enter="login()"
                                        label="パスワード"
                                        id="password"
                                        v-model="pw"
                                        outlined
                                    ></v-text-field>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        depressed
                                        color="primary"
                                        @click="login()"
                                    >
                                        ログイン
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { ref, onBeforeMount } from 'vue'
  import { piniaStore } from '@/models/PiniaStore';
  
  const store = piniaStore();
  const router = useRouter()
  let snackbar = ref(false)
  let snackBarMsg = ref('')
  const id = ref<string>('')
  const pw = ref<string>('')
  let show = ref(false)
  
onBeforeMount(() => {
  console.log("on before mount")
  beforeCreate()
})

const beforeCreate = () => {
  if (store.isLogin) {
    router.push('dashboard')
  }
}
const login = () => {
  store.isLogin = true
  router.push('dashboard')
}
</script>
