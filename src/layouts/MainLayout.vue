<template>
  <search-packages />
  <popular-packages />
</template>

<script>
// components
import SearchPackages from '@/components/SearchPackages'
import PopularPackages from '@/components/PopularPackages'

export default {
  name: 'MainLayout',
  components: {
    SearchPackages,
    PopularPackages
  },
}
</script>