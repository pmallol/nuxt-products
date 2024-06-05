<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt Merch</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: greenyellow;
}
</style>