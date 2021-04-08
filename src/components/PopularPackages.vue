<template>
  <div>
    <p>Cамые популярные пакеты:</p>
    <ul>
        <li v-for="packages in packagesList" :key="packages.hits">
            {{ packages.name }}
        </li>
    </ul>
  </div>
</template>

<script>
// api
import { getPopularPackages } from '@/api/packages'

export default {
  name: 'PopularPackages',
  data: () => ({
    packagesList: []
  }),
  created() {
    this.showPopularPackages();
  },
  methods: {
    showPopularPackages() {
      getPopularPackages()
        .then((res) => {
          this.packagesList = res.data
        })
        .catch((err) => {
          console.log("Ошибка получения данных " + err)
        })
    }
  }
}
</script>