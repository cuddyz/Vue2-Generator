<template>
  <nav>
    <ul>
      <li class="no-select">
        <router-link class="flex column flex-1 align-center p-1" :to="'/'">
          <i class="fas fa-home" />
          <p>Home</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';
  @import '../styles/breaks.scss';

  nav {
    background-color: #0081da;
  }
  ul {
    height: 80vh;
    background: linear-gradient(130deg, var(--color-primary), var(--color-secondary) 70%) var(--color-secondary);
    position: sticky;
    top: 0;
    padding-top: 5rem;
  }
  li {
    a.router-link-active {
      color: darken(color(primary), 8%);
      background: color(page);
    }
  }
  a {
    flex: 1;
    color: $white;
    font-weight: 300;
    padding: 0.8rem;
    transition: color 100ms,
                background-color 150ms;
    &:hover {
      background: $white;
      color: darken(color(primary), 8%);
    }
    &:focus,
    &:active {
      border-color: transparent;
    }
  }
  p {
    font-size: 0.85em;
    font-weight: 400;
    text-transform: uppercase;
    display: none;
    @media (min-width: breaks(laptop)) {
      display: inline;
    }
  }
  i {
    font-size: 2.4em;
    margin-bottom: 0.5rem;
  }
</style>
