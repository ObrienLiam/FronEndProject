<template>

  <div class="users">


    <b-table :striped="striped"
            :outlined="outlined"
            :hover="hover"
            :items="accounts"
            :fields="fields">

            <template slot="edit"  slot-scope="row">
              <b-button size="sm" @click = "showModal(row.item.id, row.item.firstname, row.item.lastname, row.item.accountno)">Edit</b-button>
            </template>

            <template slot="delete" slot-scope="row">
              <b-button size="sm" @click.stop="deleteAccount(row.item)" >Delete</b-button>
            </template>

    </b-table>

    <b-modal id = "updateModal" ref = "myModalRef" hide-footer title = "Update Account">
    <h3>{{accounts.accountno}}</h3>
    <b-container fluid>
        <b-row class = "my-1">
            <b-col sm="2" place><label for="input-default">First Name:</label></b-col>
            <b-col sm="10">
                <b-form-input id="input-default" type="text" placeholder="Edit first name" name = "firstName" v-model="view_account.firstname"></b-form-input>
            </b-col>
        </b-row>
            <b-row class = "my-1">
            <b-col sm="2" place><label for="input-default">Surname:</label></b-col>
            <b-col sm="10">
                <b-form-input id="input-default" type="text" placeholder="Edit surname" name = "surname" v-model="view_account.surname"></b-form-input>
            </b-col>
        </b-row>
        <b-row class = "my-1">
            <b-col sm="2" place><label for="input-default">Account Number:</label></b-col>
            <b-col sm="10">
                <b-form-input id="input-default" type="text" placeholder="Edit account number" name = "accountno" v-model="view_account.accountno"></b-form-input>
            </b-col>
        </b-row>
        <b-button @click="updateMethod">Update Account</b-button>
    </b-container>
</b-modal>

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
        view_account:{
            id:'',
            firstname: '',
            surname: '',
            accountno: ''
        },

        fields: [
          {key: 'firstname',
          sortable: true
          },

          {key:'lastname',
          sortable: true
          },

          {key:'accountno',
          sortable: true
          },

          {key:'edit'
          },

          {key:'delete'
          }],
        accounts: [],
        striped: true,
        outlined: true,
        hover: true,
        edit_data: {content: ''}
      }
    },
    methods: {
      // edit_account: function(item){
      //   this.edit_data.content = JSON.stringify(item)
      // },
      deleteAccount: function(item){
        //console.log("Hello")
         axios.delete('http://localhost:8080/account/'+item.id),
         alert("Item deleted"),
         window.location.reload();
      },
      showModal(id, firstname, surname, accountno) {
          this.view_account.id = id;
          this.view_account.firstname = firstname;
          this.view_account.surname = surname;
          this.view_account.accountno = accountno;
          this.$refs.myModalRef.show();
      },
      updateMethod() {
        let self = this;
        var id = this.id;
            console.log(id);
        axios.put('http://localhost:8080/account' + id, {
            id: self.view_account.id,
            accountno:self.view_account.accountno,
            firstname :self.view_account.firstname,
            lastname :self.view_account.surname
        }),
        this.$refs.myModalRef.hide();
        //window.location.reload();

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
