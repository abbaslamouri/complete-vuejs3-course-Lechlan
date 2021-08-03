<template>
  <div class='backdrop' v-if='showModal' @click='click'>
    <div class="modal" :class='modalCssClass'>
      <div class="modal__header">
        <slot name="header"></slot>
        <div class='close-modal'>X</div>  
      </div>
      <div class="modal__content"><slot></slot></div>
      <div class="Modal__footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {

  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'light'
    }
  },

  setup(props, ctx) {

    const modalCssClass = props.theme === 'light' ? 'light' : props.theme === 'dark' ? 'dark' : 'light'

    const click = (event) => {
      console.log("KKKKK", event.target.classList)
      if (event.target.classList.contains('backdrop') || event.target.classList.contains('close-modal') ) ctx.emit ('toggleModal', false)
    }

    // const isOpen = ref(true);


    return {
      // isOpen,
      modalCssClass,
      click
    }
  }

}

</script>

<style lang='scss' scoped>
.backdrop{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position:fixed;
  top:0;
  left:0;

  .modal {
    
    padding:1rem 3rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);
    border-radius: 5px;
    min-width: 25%;

    &.light {
      background-color: rgb(255, 255, 255);
      color:black
    }

    &.dark {
      background-color: rgb(24, 22, 22);
      color:white
    }

    &__header {
      display:flex;
      justify-content: space-between;
      align-items: center;

      .close-modal {
        background-color: #CCC;
        display:flex;
        justify-content: center;
        align-items: center;
        width:2rem;
        height:2rem;
        cursor:pointer;
        border-radius:5px
      }

    }
  }
}

</style>