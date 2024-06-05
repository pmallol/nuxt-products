<template>
  <div>
    <header>
      <NuxtLink to="/">Nuxt Merch</NuxtLink>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: greenyellow;
}
</style>