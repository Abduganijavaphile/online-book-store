<template>
  <div>
    <b-dropdown-item to="/book">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.book')">Book</span>
    </b-dropdown-item>
    <b-dropdown-item to="/sale">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.sale')">Sale</span>
    </b-dropdown-item>
    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
  </div>
</template>

<script lang="ts" src="./entities-menu.component.ts"></script>
