<template>
  <nav class="p-3 border-gray-200 rounded bg-gray-50 shadow-sm">
    <div
      class="container flex flex-wrap items-center justify-center sm:justify-between mx-auto px-3"
    >
      <RouterLink to="/">
        <span class="flex items-center justify-center block mr-5">
          <img
            src="../../assets/logo.svg"
            class="h-12 md:h-10 mr-3 sm:h-10"
            alt="Vue Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap"
            >MapVueApp</span
          >
        </span>
      </RouterLink>
      <div class="w-full block w-auto">
        <ul
          class="flex mt-1 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent"
        >
          <li>
            <RouterLink to="/">
              <span
                class="block p-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
                >Home</span
              >
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/posts">
              <span
                class="block p-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >Posts</span
              >
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/map">
              <span
                class="block p-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >Map</span
              >
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
