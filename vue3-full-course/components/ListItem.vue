<template>
  <transition 
    name='accordion'
    @enter='enter'
    @after-enter='afterEnter'
    @leave='leave'
  >
    <ul v-show='item.open' class="item-sublist">
      <li class="sublist-element" v-for='(element, index) in item.sublist' :key='index'>
        {{ element }}
      </li>
    </ul>
  </transition>
</template>

<script>
export default {

  props: {
    item: {
      type:Object,
      required: true
    }
  },

  setup() {

    const enter = (el) => {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0;
      getComputedStyle(el).height
      requestAnimationFrame(() => {
        el.style.height = height;
      });
      // setTimeout( () => {
      //   el.style.height = height
      // })

    }

    const afterEnter = (el) => {
      el.style.height = 'auto'
    }

    const leave = (el) => {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el).height
      requestAnimationFrame(() => {
        el.style.height = 0;
      });
      // setTimeout( () => {
      //   el.style.height = 0
      // })
    }

    return {
      enter,
      afterEnter,
      leave
    }
  }

}
</script>

<style lang='scss' scoped>

.item-sublist {
  list-style: none;
  padding:0;

  // background-color: #fefefe;
  // box-shadow: 0 2px rgba($color: black, $alpha: .15);
  // border-radius: 4px;
  // overflow: hidden;

  .sublist-element {
    padding: 10px;
    text-indent: 20px;
    color: #fefefe;
    background-color: #333;
    border-top: 1px solid #222;

    &:hover {
      color: #333;
       background-color: #38B087;
    }
  }
}

.accordion-enter-active, .accordion-leave-active {
  transition: height .3s ease-in-out;
  overflow:hidden;
}




</style>