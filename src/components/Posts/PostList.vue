<template>
  <div v-if="posts.length > 0">
    <post-item v-for="post in posts" :post="post" :key="post.id" />
  </div>
  <h2
    v-else
    class="my-5 text-2xl font-medium focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
  >
    No posts
  </h2>
</template>

<script>
import PostItem from "@/components/Posts/PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
