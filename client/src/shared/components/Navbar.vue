<script setup lang="ts">
import Logo from '@/shared/components/icons/Logo.vue'

</script>

<template>
  <header class="navbar">
    <div class="navbar__options">
      <Logo :width="150" :height="50" />

      <div class="option option--menu">
        <span>Menu</span>
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </div>

      <a class="option">
        Start Fundraising
      </a>

    </div>

    <ul class="navbar__actions">
      <li class="action__item">
        <button class="item__search">Search<i class="fa fa-search" aria-hidden="true"></i></button>
      </li>

      <li class="action__item">
        <a>Log In</a>
      </li>

      <li class="action__item">
        <a>Sign Up</a>
      </li>

    </ul>
  </header>
</template>


<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--standard-component-padding);
  background: var(--navbar-bg);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--text-secondary);
}

.navbar__options,
.navbar__actions {
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
}

.option--menu {
  display: flex;
  align-items: center;
  gap: 5px;
}

.navbar__actions {
  list-style: none;
}

.action__item,
.option {
  cursor: pointer;
}

.option:hover,
.action__item:hover,
.item__search:hover  {
  color: var(--text-main);
}

.item__search {
  display: flex;
  gap: 5px;
  cursor: pointer;
  font-size: 1rem;
  padding: 5px 11px;
  color: var(--text-secondary);
  border: none;
  background-color: transparent;
}
</style>