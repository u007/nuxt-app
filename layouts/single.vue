<template>
  <a-layout>
    <Nav />
    <router-view />
    <Footer />
  </a-layout>
</template>

<script type='ts' setup>
// this without wrapper
import Footer from '~/components/layouts/footer.vue'
import Nav from '~/components/layouts/nav.vue'
import { useAclStore } from '../stores/acl';

const $acl = useAclStore()
const fbID = 'tODO'

onMounted(() => {
  $acl.checkSession();
})


</script>

<style scoped>

</style>
