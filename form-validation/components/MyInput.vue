<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input 
      :id="name" 
      :type="type" 
      :value="value" 
      @input="input"
    />
  </div>
</template>

<script>
export default {

  props: {
    type: {
      type: String,
      default: 'text',
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    rules: {  // min: number & required: boolean
      type: Object,
      default: {}
    },
    value: {
      type: String,
      required: false
    },
    error: {
      type: String
    }
  },

  emits: ['update'],

  created() {
    this.$emit ('update', { name: this.name.toLowerCase(), value: this.value, error: this.validate(this.value) })   
  },

  methods: {

    input($event) {
      this.$emit ('update', { name: this.name.toLowerCase(), value: $event.target.value, error: this.validate($event.target.value) })
    },

    validate(value) {
      if (this.rules.required && ! value.length) return`${this.name} is required`
      if (this.rules.min && this.rules.min > value.length) return `${this.name} minimum length is ${this.rules.min}`
    },

  },

}
</script>

<style scoped>

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  .label {
    display: flex;
    justify-content: space-between;
  }
  .error {
    color: red;
  }
  .input {
    width: 100%;
  }

  input {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid silver;
    margin: 2px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
  }

</style>