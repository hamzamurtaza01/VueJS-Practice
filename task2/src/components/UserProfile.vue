<template>
  <div class="profile">
    <div>
      <h2>User Profile</h2>

      <a-row v-memo="[profile.name, profile.age, profile.email]">
        <div style="padding: 12px 0px">
          <a-avatar
            size="large"
            style="
              color: #f56a00;
              background-color: #fde3cf;
              padding: 20px;
              border-radius: 250px;
              font-size: 30px;
            "
          >
            {{ profile.name[0] }}
          </a-avatar>
        </div>

        <div>
          <p>Name: {{ profile.name }}</p>
          <p>Age: {{ profile.age }}</p>
          <p>Email: {{ profile.email }}</p>
        </div>
      </a-row>

      <input v-model="name" placeholder="Enter new name" />
      <input v-model="age" type="number" placeholder="Enter new age" />
      <input v-model="email" type="email" placeholder="Enter new email" />

      <button @click="saveProfile">Save</button>
    </div>

    <div>
      <h3>Hobbies</h3>
      <input v-model="newHobbyText" placeholder="Enter new hobby" />
      <button @click="addNewHobby">Add new hobby</button>

      <ul>
        <li v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 0,
      email: "",
      newHobbyText: "",
      profile: {},
      hobbies: ["Reading", "Cooking", "Gaming"],
    };
  },

  computed: {
    birthYear() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.age;
    },
  },

  watch: {
    age(newAge) {
      if (newAge > 50) {
        alert("You are getting older!");
      }
    },
  },

  created() {
    // Simulated fetching user data from an API
    this.profile = {
      name: "Hamza Murtaza",
      age: 30,
      email: "hamzamurtaza@folio3.com",
    };
  },

  methods: {
    saveProfile() {
      // Add logic to save profile data
      this.profile = {
        name: this.name,
        age: this.age,
        email: this.email,
      };
      this.resetProfileForm();
    },

    resetProfileForm() {
      this.name = "";
      this.age = 0;
      this.email = "";
    },

    addNewHobby() {
      this.hobbies = [...this.hobbies, this.newHobbyText];
      this.newHobbyText = "";
    },
  },
};
</script>

<style>
.profile {
  padding: 20px;
}
</style>
