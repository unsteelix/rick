<template>
  <el-table
    size="mini"
    :data="locations.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase().trim()))"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="Name">
      <!-- popup -->
      <template slot-scope="scope">
        <el-popover trigger="click" placement="top">
          <div class="popover">
            <div class="name">{{ scope.row.name }}</div>
            <div class="type">{{ scope.row.type }}</div>
            <div class="dimension">{{ scope.row.dimension }}</div>
            <CharactersTable :characters="filteredCharacters" />
          </div>
          <div slot="reference" class="name-wrapper" @click="getCharacters(scope.row.residents.map(r => r.split('character/')[1]))">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
          <!-- pagination -->
          <el-pagination
              background
              layout="prev, pager, next"
              :page-size="20"
              :total="characters.length"
              @current-change="onPageChange">
          </el-pagination>
        </el-popover>
      </template>
    </el-table-column>

    <!-- search -->
    <el-table-column>
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
      props: ['locations'],
      data() {
        return {
          search: '',
          characters: [],
          filteredCharacters: [],
          selectedPage: 1
        }
      },
      methods: {
        getCharacters: async function(listIds) {
          this.selectedPage = 1
          if(listIds.length === 0) return
          
          const results = await fetch(
              `https://rickandmortyapi.com/api/character/${listIds}`
          ).then(res => res.json())

          let res = []
          if('id' in results){
            res.push(results)
          } else {
            res = results
          }

          this.characters = res;
          this.filteredCharacters = this.filterByPage(1);
        },
        onPageChange: function(pageId) {
          this.selectedPage = pageId;
          this.filteredCharacters = this.filterByPage(pageId);
        },
        filterByPage: function(pageId) {
          return [...this.characters].splice((pageId - 1) * 20, 20)
        }
      },
    }
  </script>