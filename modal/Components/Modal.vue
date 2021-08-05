<template>
  <div class='backdrop' @click.self='close'>
    <div class="outer-box">
      <div class="modal" :class='{dark: theme === "dark", ligth: theme === "light"}'>
      <div class="modal__header">
        <slot name="header"></slot>
        <div class='close-modal'>X</div>  
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
      <div class="Modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    theme: {
      type: String
    }
  },

  setup(props, ctx) {
    const close = (event) => {
      ctx.emit('closeModal', event.target)
    }

    return {
      close,
    }
  }

}
</script>

<style scoped lang='scss'>
  .backdrop{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.8);
  position:fixed;
  top:0;
  left:0;

  .outer-box {
    padding:1rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);
    min-width:50%;
    border-radius: 5px;
  }

  .modal {
    
    padding:1rem 3rem;
    border-radius: 5px;
    border: 1px solid #CCC;

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