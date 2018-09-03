<template>
  <div class="Add">
    <br /><br />
    <form v-on:submit="addAccount">
      <b>Enter first name:</b>
      <input type="text" style="width:700px" v-model="newAccount.firstname" placeholder="Enter firstname" />
      <br /> <br />
      <b>Enter surname:</b>
      <input type="text" style="width:700px" v-model="newAccount.surname" placeholder="Enter surname" />
      <br /> <br />
      <b>Enter account number:</b>
      <input type="text" style="width:700px" v-model="newAccount.accountnum" placeholder="Enter account number" />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>

  </div>
</template>

<script>

import axios from 'axios';

  export default{
    
    name: 'fname',
    name: 'lname',
    name: 'acno',

    data () {
      return {
        newAccount: {},

        fname: '',
        lname: '',
        acno: ''

      }
    },
    methods : {
      addAccount: function (){


        this.fname = this.newAccount.firstname,
        this.lname = this.newAccount.surname,
        this.acno = this.newAccount.accountnum

        axios.post('http://localhost:8080/account', {
          firstname : this.fname,
          lastname: this.lname,
          accountno: this.acno,
        })
        .then( alert("Account added"))

      }
    }

  }


</script>
