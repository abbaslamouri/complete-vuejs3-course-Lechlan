<template>
  <h1>Accordion</h1>
  <ul class="wrapper">
    <li v-for='(item, index) in list' :key='`item${index}`'>
      <div class='title'>{{ item.title }}<fa class='arrowIcon' icon='angle-right' /></div>
    </li>
  </ul>
</template>

<script>

import { reactive } from 'vue'

import ListItem from '../components/ListItem.vue'

export default {

  components: {
    ListItem,
  },

  setup() {

    const list = reactive([
      {
        title: 'Projects',
        open: false,
        sublist: ['Javascrip', 'vue', 'scss']
      },
      {
        title: 'Portfolio',
        open: false,
        sublist: ['Transitions', 'Course A']
      },
      {
        title: 'Timeline',
        open: false,
        sublist: ['2017', '2018', '2020']
      },
      {
        title: 'Resources',
        open: false,
        sublist: ['Github', 'Gacebook', 'Youtube']
      },
      {
        title: 'Documentaion',
        open: false,
        sublist: ['Articee A', 'Article B']
      },
    ])


    return {
      list
    }
  }
}
</script>

<style lang='scss' scoped>

.wrapper {
  list-style: none;
  background-color: #fefefe;
  box-shadow: 0 2px rgba($color: black, $alpha: .15);
  border-radius: 4px;
  overflow: hidden;

  li {
    position:relative;
    color: #555;
    border-top: 1px solid #dedede;
    cursor: pointer;

    .title {
      padding: 1rem .5rem;
      text-indent: 20px;
      display:flex;
      justify-content: space-between;
      align-items:flex-end;

      .arrowIcon {
        color:red;
        transform: rotate(90Deg)
      }
    }

    &:hover {
      color: #4f7351;
      background-color: #DFEEE0;
    }
  }
}

</style>