<template>
  <div class="pt-[300px]">
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg w-[1200px] mx-auto"
    >
      <router-link to="/create">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </router-link>

      <table
        class="mt-[15px] w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">name</th>
            <th scope="col" class="px-6 py-3">company</th>
            <th scope="col" class="px-6 py-3">username</th>
            <th scope="col" class="px-6 py-3">dob</th>
            <th scope="col" class="px-6 py-3">roles</th>

            <th scope="col" class="px-15 py-3">
              <span>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.profile.name }}
            </th>
            <td class="px-6 py-4">{{ user.profile.company }}</td>
            <td class="px-6 py-4">{{ user.username }}</td>
            <td class="px-6 py-4">{{ user.profile.dob }}</td>
            <td class="px-6 py-4">
              <p v-for="role in user.roles">{{ role }}</p>
            </td>
            <td class="px-6 py-4 text-right">
              <router-link
                :to="{ path: '/projects/' + user.id }"
                href=""
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</router-link
              >
            </td>
            <td
              @click="deleteUser(user.id)"
              class="font-medium text-[#ef4444] dark:text-[#ef4444] hover:underline"
            >
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      res: "renat",
    };
  },
  components: {},
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("http://localhost:3000/projects")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteUser(id) {
      axios.delete(`http://localhost:3000/projects/${id}`).then((res) => {
        this.getUser();
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
