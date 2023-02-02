<template>
    <div id="right-sidebar">
        <div class="sidebar-menu">
            <OverviewSidebar />
        </div>
    </div>
</template>

<script setup>
import OverviewSidebar from '@/components/rightsidebar/OverviewSidebar.vue';
</script>

<style scoped lang="scss">
#right-sidebar {
    color: white;
    height: 100%;
    .sidebar-menu {
        height: 70%;
    }
}
</style>