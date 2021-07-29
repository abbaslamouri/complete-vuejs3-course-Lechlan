import *  as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
  props:['greeting'],
  template: '<h1>{{ greeting }}</h1>'
}

const Number = {
  props:['number'],

  template: `
  <button 
    :class='getCssClass(number)' 
    @click='btnClicked(number)'
  >
    {{ number }}
    <span v-if='isEven()'>Even</span>
    <span v-else>Odd</span>
  </button>
  `,

  methods: {

    isEven(val) {
      return val % 2 === 0
    },
    getCssClass(number) {
      return this.isEven(number)? 'red' : 'blue'
    },

    btnClicked() {
      this.$emit('chosen', this.number)
    }
    
   
  },
}

const app = Vue.createApp({

  components: {Hello, Number},

  template: `
  <hello :greeting='msg'/>
  
  <button @click='increment()'>Increment Counter</button><span>{{ counter }}</span>
  <div v-if='isEven()'>Even</div>
  <div v-else>Odd</div>



  <Number :number='number' v-for='number in numbers' @chosen='addNumber'/>

  <div>{{ evenNumbers }}</div>
  <div>{{ numberHistory }}</div>

  <input type='text' v-model='user' placeholder='enter name' />
  <div class='red'>{{ error }}</div>

  <input type='radio' v-model='readioSelect' value='odd' />
  <input type='radio' v-model='readioSelect' value='even' />
  <div class='red'>{{ readioSelect }}</div>

  <input type='checkbox' v-model='checkboxSelect' value='odd' />
  <input type='checkbox' v-model='checkboxSelect' value='even' />
  <div class='red'>{{ checkboxSelect }}</div>

  `,

  data() {
    return {
      msg: "Again World",
      counter:0,
      numbers: [1,2,3,4,5,6,7,8,9],
      numberHistory:[],
      user: '',
      readioSelect: 'even',
      checkboxSelect: ['even'],
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => this.isEven(number))
    },

    error() {
      return this.user.length < 5 ? 'Must be greater than 5' : ''
    }
  },

  methods: {
    increment() {
      this.counter++
    },
    isEven(val) {
      return val % 2 === 0
    },
    getCssClass(number) {
      return this.isEven(number)? 'red' : 'blue'
    },

    addNumber(number) {
      console.log(number)
      this.numberHistory.push(number)

    }
   
  },

})

app.mount('#app')