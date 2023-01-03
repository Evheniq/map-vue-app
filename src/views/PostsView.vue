<template>
  <div
    class="container flex flex-wrap items-center justify-between mx-auto px-3 mt-3"
  >
    <h1 class="text-2xl text-center my-5 font-semibold">Posts page</h1>

    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <CustomInput
        class="pl-10"
        v-model="searchQuery"
        placeholder="Filter...."
      />
    </div>
  </div>
  <div class="container flex items-center justify-center mx-auto px-3">
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />

    <div v-else class="flex py-3">
      <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Loading...
    </div>
  </div>
  <div class="container mx-auto px-3">
    <div class="flex flex-wrap items-center justify-center">
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center ml-2 mb-2"
        :class="{
          'text-lime-50 bg-emerald-600': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import PostList from "@/components/Posts/PostList.vue";
import CustomInput from "@/components/UI/CustomInput.vue";

export default {
  components: {
    CustomInput,
    PostList,
  },
  data() {
    return {
      posts: [],
      isPostsLoading: false,
      searchQuery: "",
      page: 1,
      limit: 10,
    };
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
    },

    // TODO: decomposition. Separate api processing and data display
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );

        this.posts = await Promise.all(
          response.data.map(async (post) => {
            const commentsForPost = await axios.get(
              "https://jsonplaceholder.typicode.com/comments",
              {
                params: {
                  postId: post.id,
                },
              }
            );

            return {
              ...post,
              comments: commentsForPost.data,
              commentsCount: commentsForPost.data.length,
            };
          })
        );
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedAndSearchedPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
};
</script>
