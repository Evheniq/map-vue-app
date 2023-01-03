<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 backdrop-brightness-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full"
    v-if="show"
    @click.stop="hideDialog"
  >
    <div
      @click.stop
      class="relative mx-auto top-10 w-full h-full max-w-5xl h-auto"
    >
      <div class="relative bg-white rounded-lg shadow px-7 py-5">
        <button
          class="text-gray-400 absolute right-7 top-5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          @click.stop="hideDialog"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
