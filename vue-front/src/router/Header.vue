<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header>
      
      <nav class="navbar navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div v-for="nav in navigations" :key="nav.name" class="nav-item">
            <RouterLink :to="nav.href" active-class="active" class="nav-link">
              {{ nav.name }}
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
<script>
  export default {
    data() {
      return {
        navigations: [
          {
            name: 'Mypage',
            href: '/mypage'
          },
          {
            name: 'Basket',
            href: '/basket'
          }
        ]
      }
    }
  }
</script>