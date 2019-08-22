<template>
  <div class="container--small">
    <ul class="tab">
      <li class="tab__item" @click="switchTab()">Login</li>
      <li class="tab__item" @click="switchTab()">Register</li>
    </ul>
    {{ currentState }}
    <div class="panel" v-if="registered">
      Login Form
      <div class="panel" v-show="registered">
        <form class="form" @submit.prevent="login">
          <label for="login-email">Email</label>
          <input type="text" class="form__item" id="login-email" v-model="loginForm.email" />
          <label for="login-password">Password</label>
          <input
            type="password"
            class="form__item"
            id="login-password"
            v-model="loginForm.password"
          />
          <div class="form__button">
            <button type="submit" class="button button--inverse">login</button>
          </div>
        </form>
      </div>
    </div>
    <div class="panel" v-if="unregistered">
      Register Form
      <div class="panel" v-show="unregistered">
        <form class="form" @submit.prevent="register">
          <label for="username">Name</label>
          <input type="text" class="form__item" id="username" v-model="registerForm.name" />
          <label for="email">Email</label>
          <input type="text" class="form__item" id="email" v-model="registerForm.email" />
          <label for="password">Password</label>
          <input type="password" class="form__item" id="password" v-model="registerForm.password" />
          <label for="password-confirmation">Password (confirm)</label>
          <input
            type="password"
            class="form__item"
            id="password-confirmation"
            v-model="registerForm.password_confirmation"
          />
          <div class="form__button">
            <button type="submit" class="button button--inverse">register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const UNREGISTERED = 1;
const REGISTERED = 2;

export default {
  data() {
    return {
      currentState: UNREGISTERED,
      loginForm: {
        emai: "",
        password: ""
      },
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  computed: {
    unregistered() {
      return this.currentState === UNREGISTERED;
    },
    registered() {
      return this.currentState === REGISTERED;
    }
  },
  methods: {
    switchTab() {
      if (this.currentState === UNREGISTERED) {
        this.currentState = REGISTERED;
        return;
      }
      this.currentState = UNREGISTERED;
    },
    login() {
      //　多重送信しなボタンコンポーネント作った方が良さげ
      console.log(this.loginForm);
    },
    register() {
      console.log(this.registerForm);
    }
  }
};
</script>
