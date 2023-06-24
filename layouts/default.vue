<template>
  <div class="page">
    <!-- <TheHeader /> -->
    <div class="page-content">
      <Sidebar />
      <Nuxt />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>

<style>
  .page-content {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 100vw;
      height: auto;
      min-height: 100vh;
      overflow-x: hidden;
  }
</style>