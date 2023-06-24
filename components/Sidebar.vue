<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo">
      
      <NuxtLink to="/" class="one-link">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          Home page
        </el-menu-item>
      </NuxtLink>
      
      <NuxtLink to="/characters" class="one-link">
        <el-menu-item index="2">
          <i class="el-icon-user"></i>
          Characters
        </el-menu-item>  
      </NuxtLink>

      <NuxtLink to="/locations" class="one-link">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          Locations
        </el-menu-item>  
      </NuxtLink>

      <NuxtLink to="/episodes" class="one-link">
        <el-menu-item index="4">
          <i class="el-icon-film"></i>
          Episodes
        </el-menu-item>  
      </NuxtLink>
    
    </el-menu>
</template>

<script>
export default {
  name: 'NuxtSidebar',
}
</script>

<style>
  .one-link {
    text-decoration: none;
    color: #313131;
    border: none;

    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 18px;
    }
  }
</style>