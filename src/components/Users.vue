<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name" />
      <br />
      <input type="text" v-model="newUser.email" placeholder="Enter Email" />
      <br />
      <input type="submit" value="Submit" />
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
    <ul>
      <li v-for="account in accounts">
        <input type="checkbox" class="toggle" v-model="account.contacted" />
        <span :class="{contacted: account.contacted}">
          {{account.id}}: {{account.firstName}}: {{account.secondName}}: {{account.accountNum}} <button v-on:click="deleteAccount(account)">x</button>
        </span>
      </li>
    </ul>
    <b-form-checkbox v-model="striped">Striped</b-form-checkbox>
    <b-form-checkbox v-model="bordered">Bordered</b-form-checkbox>
    <b-form-checkbox v-model="outlined">Outlined</b-form-checkbox>
    <b-form-checkbox v-model="small">Small</b-form-checkbox>
    <b-form-checkbox v-model="hover">Hover</b-form-checkbox>
    <b-form-checkbox v-model="dark">Dark</b-form-checkbox>
    <b-form-checkbox v-model="fixed">Fixed</b-form-checkbox>
    <b-form-checkbox v-model="footClone">Foot Clone</b-form-checkbox>

    <b-table :striped="striped"
            :bordered="bordered"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :items="accounts">

    </b-table>
  </div>
</template>

<script>

import axios from 'axios';

  export default {
    name: 'users',
    name: 'accounts',
    data() {
      return {
        newUser: {},
        users: [],

        accounts: [],
        striped: false,
        bordered: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false

      }
    },
    methods: {
      addUser: function(e){
        this.users.push({
          name : this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
      },
      deleteUser: function(user){
        this.users.splice(this.users.indexOf(user),1)
      },
      deleteAccount: function(account){
        this.accounts.splice(this.accounts.indexOf(account),1)
      }
    },
    created: function(){
      let self = this

      axios.get('http://localhost:8080/account')
      .then(function(response) {
        console.log(response.data);
        self.accounts = response.data;
      });
    }
  }

</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }
</style>
