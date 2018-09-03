<template>
<b-navbar toggleable="md" variant="secondary" type="light">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand router-link to="/accounts">AccountApp</b-navbar-brand>



    <b-navbar-nav>
      <b-nav-item router-link to="/accounts">Dashboard</b-nav-item>


      <b-nav-item-dropdown text="Account" >
        <b-dropdown-item router-link to="/accounts">Get Accounts</b-dropdown-item>
        <b-dropdown-item router-link to="/add">Add Account</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>


</b-navbar>
</template>
