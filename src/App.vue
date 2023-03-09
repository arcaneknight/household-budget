<template>
  <div class="app-wrapper">
    <Navbar />
    <div class="page">
      <NavigationSidebar />
      <Dashboard />
    </div>
  </div>
  <NewCategoryDialog />
  <NewMoneyEntryDialog />
  <NewCostPaymentDialog />
  <ManageCategoriesDialog />
  <PieChartDialog />
  <ConfirmDeleteDialog />
  <UserNameDialog />
  <ImportDialog />
</template>

<script setup>

import Dashboard from "./views/Dashboard.vue";
import NavigationSidebar from './components/page/NavigationSidebar.vue';
import Navbar from './views/Navbar.vue';
import NewCategoryDialog from './components/dialogs/NewCategoryDialog.vue';
import NewMoneyEntryDialog from './components/dialogs/NewMoneyEntryDialog.vue';
import NewCostPaymentDialog from './components/dialogs/NewCostPaymentDialog.vue';
import ManageCategoriesDialog from './components/dialogs/ManageCategoriesDialog.vue';
import PieChartDialog from './components/dialogs/PieChartDialog.vue';
import ConfirmDeleteDialog from './components/dialogs/ConfirmDeleteDialog.vue';
import UserNameDialog from './components/dialogs/UserNameDialog.vue';
import ImportDialog from './components/dialogs/ImportDialog.vue';

</script>

<style lang="scss">

#app, .app-wrapper {
  height: 100vh;
}

.page {
    background: white;
    display: flex;
    padding-top: 30px;
    height: calc(100% - 74px);

}
</style>
