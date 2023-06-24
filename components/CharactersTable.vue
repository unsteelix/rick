<template>
  <el-table
    class="table"
    size="mini"
    :data="characters.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase().trim()))">
    <el-table-column
      prop="name"
      label="Name"
      width="250">
      <!-- image popup -->
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="right" :title="scope.row.name">
          <div class="popover">
            <img class="pop-image" :src="scope.row.image" />
          </div>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>

    </el-table-column>
    <el-table-column
      prop="species"
      label="Species"
      width="150">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="80"
      :filters="[{ text: 'Alive', value: 'Alive' }, { text: 'Dead', value: 'Dead' }, { text: 'unknown', value: 'unknown' }]"
      :filter-method="filterStatus"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="Gender"
      width="90"
      :filters="[{ text: 'Female', value: 'Female' }, { text: 'Male', value: 'Male' }, { text: 'Genderless', value: 'Genderless' }, { text: 'unknown', value: 'unknown' }]"
      :filter-method="filterGender"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column
      prop="origin.name"
      label="Origin.name"
      min-width="200px">

      <!-- search -->
      <template slot="header" slot-scope="scope">
        {{ scope.search }}
        <el-input
          v-model="search"
          size="mini"
          placeholder="Find me..."/>
      </template>

    </el-table-column>

  </el-table>
</template>
  
  <script>
    export default {
      props: ['characters'],
      data() {
        return {
          search: '',
        }
      },
      methods: {
        filterStatus(value, row) {
          return row.status.toLowerCase() === value.toLowerCase();
        },
        filterGender(value, row) {
          return row.gender.toLowerCase() === value.toLowerCase();
        },
    },
    }
  </script>

<style>
  .table {
    width: 100%;
    height: 100%;
  }

  .el-table__body-wrapper {
    overflow-y: auto;
  }
</style>