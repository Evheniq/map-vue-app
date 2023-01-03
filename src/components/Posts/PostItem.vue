<template>
  <div class="my-3 p-3 border border-black-50 rounded-md shadow-lg">
    <div @click="showChart = !showChart">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div class="my-2"><strong>Content:</strong> {{ post.body }}</div>
      <div class="flex justify-between">
        <div><strong>Comments:</strong> {{ post.commentsCount }}</div>
        <CustomButton>Show statistic</CustomButton>
      </div>
      <ModalWindow v-model:show="showChart">
        <b>Selected post:</b> {{ post.title }}
        <PostChart :comments="post.comments" />
      </ModalWindow>
    </div>
  </div>
</template>

<script>
import ModalWindow from "@/components/UI/ModalWindow.vue";
import PostChart from "@/components/UI/PostChart.vue";
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {
    PostChart,
    ModalWindow,
    CustomButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showChart: false,
    };
  },
};
</script>
