<template>
	<component :is="`${name}-icon`"/>
</template>

<script>
import DealsIcon from '@/components/icons/DealsIcon.vue'
import FavoritesIcon from '@/components/icons/FavoritesIcon.vue'
import StockIcon from '@/components/icons/StockIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import GeoIcon from '@/components/icons/GeoIcon.vue'


export default {
	props: {
		name: {
			type: String,
			required: true
		}
	},
	components: {
    DealsIcon, FavoritesIcon, StockIcon, SearchIcon, GeoIcon
  }
}
</script>