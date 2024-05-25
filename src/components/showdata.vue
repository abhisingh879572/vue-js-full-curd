<template>
  <div class="container mx-auto mt-5 ggg" style="overflow-x:auto;">
    <table class="min-w-full border border-gray-200 divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 font-medium tracking-wider text-left text-gray-500 uppercase border-r border-gray-200 text-1xl">Name</th>
          <th scope="col" class="px-6 py-3 tracking-wider text-left text-gray-500 uppercase border-r border-gray-200 font-2xl text-medium">Contact</th>
          <th scope="col" class="px-6 py-3 tracking-wider text-left text-gray-500 uppercase border-r border-gray-200 font-2xl text-medium">Address</th>
          <th scope="col" class="px-6 py-3 tracking-wider text-left text-gray-500 uppercase border-r border-gray-200 font-2xl text-medium">Message</th>
          <th scope="col" class="px-6 py-3 tracking-wider text-left text-gray-500 uppercase border-r border-gray-200 font-2xl text-medium">Profiles</th>
          <th scope="col" class="px-6 py-3 tracking-wider text-left text-gray-500 uppercase border-r border-gray-200 font-2xl text-medium">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(category, index) in categories.slice(0, 8)" :key="index">
          <td class="px-6 py-4 border-r border-gray-200 whitespace-nowrap">{{ category.name }}</td>
          <td class="px-6 py-4 border-r border-gray-200 whitespace-nowrap">{{ category.contact }}</td>
          <td class="px-6 py-4 border-r border-gray-200 whitespace-nowrap">{{ category.address }}</td>
          <td class="px-6 py-4 border-r border-gray-200 whitespace-nowrap">{{ category.massages }}</td>
          <td class="px-6 py-4 border-r border-gray-200 whitespace-nowrap">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="'http://localhost:5000/api/img/' + category.img" :alt="category.name + ' image'" />
          </td>
          <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <button @click="deleteCategory(category._id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            <router-link :to="'/edit/' + category._id">
              <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
            </router-link>          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "ShowData",
  data() {
    return {
      categories: []
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:5000/api/getCategory');
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async deleteCategory(categoryId) {
      try {
        const response = await fetch(`http://localhost:5000/api/deleteCategory/${categoryId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          this.categories = this.categories.filter(category => category._id !== categoryId);
          alert("Delete the data")
        } else {
          console.error('Failed to delete category');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.ggg {
  margin-bottom: 30px;
}
</style>
