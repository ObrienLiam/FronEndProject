<template>
  <div class="Edit">
    <br /><br />
    <form v-on:submit="edit_Account">
      <b>Enter first name:</b>
      <input type="text" style="width:700px" v-model="editAccount.firstname" name="fname" />
      <br /> <br />
      <b>Enter surname:</b>
      <input type="text" style="width:700px" v-model="editAccount.surname" placeholder="Enter surname" />
      <br /> <br />
      <b>Enter account number:</b>
      <input type="text" style="width:700px" v-model="editAccount.accountnum" placeholder="Enter account number" />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>



  </div>
</template>

<script>

import axios from 'axios';

  export default{
    name: 'account',
    name: 'fname',
    name: 'lname',
    name: 'acno',

    data () {
      return {

        editAccount: {},
        account: [],
        fname: '',
        lname: '',
        acno: ''
      }
    },
    methods : {
      edit_Account: function (){
        console.log(this.fname);
      //   axios.put('http://localhost:8080/account', {
      //     firstname: this.editAccount.firstname,
      //     lastname: this.editAccount.surname,
      //     accountno: this.editAccount.accountnum
      //   })
      }
    },
    created: function(){

      let self = this;

      axios.get('http://localhost:8080/account/2')
      .then(function(response) {
        self.fname=response.data.firstname;
        self.lname=response.data.lastname;
        self.acno=response.data.accountno;
        console.log(response.data.firstname);
        self.account = response.data;
        console.log(JSON.stringify(self.account));
      });
      console.log(JSON.stringify(self.account))
      // $scope.firstnamePlaceholder=self.account.firstname
    }
  }


</script>
