<template>
    <div v-if="navigationStore.getActivePage === 'profile'">
      <DashboardHeader>
        <template #pageName>Mein Profil</template>
        <template #pageDetailText>Verwalte Dein Profil und den Look des Dashboards.</template>
      </DashboardHeader>
      <div class="button-wrapper">
        <div><Button label="Daten exportieren" @click="exportLocalContentToFile()"></Button></div>
        <div><Button label="Daten importieren" @click="dialogStore.openImportDialog()"></Button></div>
      </div>
    </div>
</template>

<script setup>
import { exportLocalContentToFile } from '@/services/exports.service';

import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';

import { useNavigationStore } from '@/stores/navigation';
import { useDialogStore } from '@/stores/dialogs';

const navigationStore = useNavigationStore();
const dialogStore = useDialogStore();

</script>

<style scoped lang="scss">
.button-wrapper {
  display: flex;

  > div {
    margin: 1rem;
  }
}
</style>