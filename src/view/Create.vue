<template>
  <div class="w-[700px] mx-auto">
    <h1 class="text-[20px]">Create</h1>

    <form @submit.prevent="createStudent()">
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Name</label
        >
        <input
          v-model="user.profile.name"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900"
          >Company</label
        >
        <input
          v-model="user.profile.company"
          type="text"
          id="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900"
          >USERNAME</label
        >
        <input
          v-model="user.username"
          type="text"
          id="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-6">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900"
          >DOB</label
        >
        <input
          v-model="user.profile.dob"
          type="text"
          id="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div class="mb-6">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900"
          >ROLES</label
        >
        <select v-model="selectedRole" @change="addRole">
          <option value="admin">Администратор</option>
          <option value="moderator">Модератор</option>
          <option value="user">Пользователь</option>
          <option value="guest">Гость</option>
        </select>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedRole: "",
      user: {
        roles: [],
        profile: {
          dob: "",
          name: "",
          company: "",
        },
        username: "",
      },
    };
  },
  methods: {
    addRole() {
      this.user.roles.push(this.selectedRole);
    },
    createStudent() {
      axios
        .post("http://localhost:3000/projects", this.user)
        .then((res) => {
          console.log(res);
          this.user = {
            roles: [],
            profile: {
              dob: "",
              name: "",
              company: "",
            },
            username: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
