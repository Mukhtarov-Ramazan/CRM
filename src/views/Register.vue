<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email пустое</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Поле password пустое</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен быть больше 6 символов</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required)
          }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Введите Имя</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="checkbox"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    email: "",
    password: "",
    name: "",
    checkbox: false,
  }),

  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    checkbox: { checked: (v) => v },
  },

  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };

      console.log(formData);

      // this.$router.push('/')
    },
  },
};
</script>

<style></style>
