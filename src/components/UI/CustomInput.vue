<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    @input="updateInput"
    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    type="text"
  />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
