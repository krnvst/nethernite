<template>
    <div>
        <input v-model="search" type="search" name="" id="">
        <ul>
          <li v-for="list in searchList" :key="list.package.name">
            {{ list.package.name }}
          </li>
        </ul>
    </div>
</template>

<script>
// helpers
import { debounce } from '@/helpers/debounce'

// api
import { searchPackages } from '@/api/search'

export default {
  name: 'SearchPackages',
  data: () => ({
    search: '',
    searchList: []
  }),
  watch: {
    search: debounce(function (newVal) {
      this.searchPackagesByName(newVal)
    }, 300)
  },
  methods: {
    searchPackagesByName(name) {
      searchPackages(name, 10)
        .then((res) => {
          this.searchList = res.data.objects
        })
        .catch((err) => {
          console.log("Ошибка получения данных " + err)
        })
    },
  }
}
</script>