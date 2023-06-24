<template>
    <div class="page">
        <CharactersTable :characters="characters"  />
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="20"
            :total="count"
            @current-change="onPageChange">
        </el-pagination>
    </div>
</template>


<script>
export default {
    data: () => ({
        characters: [],
        count: 0,
    }),

    async fetch() {      
        await this.setupData(1)
    },
    fetchOnServer: false,
    methods: {
        setupData: async function(pageId) {
            const { info, results } = await fetch(
                `https://rickandmortyapi.com/api/character?page=${pageId}`
            ).then(res => res.json())
            this.characters = results;
            this.count = info.count;
        },
        onPageChange: function(pageId) {
            this.setupData(pageId)
        }
    }
  }
</script>


<style lang="scss" scoped>
    .page {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>