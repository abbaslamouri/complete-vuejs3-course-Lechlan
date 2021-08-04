<template>
  <div class='backdrop'>
    <div class="outer-box">
      <div class="modal" :class='modalCssClass'>
      <div class="modal__header">
        <slot name="header"></slot>
        <div class='close-modal'>X</div>  
      </div>
      <div class="modal__content">
        <slot></slot>
        <!-- <form @submit.prevent='submit'>
          <div class="form-group">
            <label for="">Email</label>
            <input type="text">
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input type="password">
          </div>
          <button class='submit-btn' type='submit'>Login</button>
        </form> -->
      </div>
      <div class="Modal__footer"><slot name="footer"></slot></div>
    </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  setup(props) {

    const modalCssClass = props.theme === 'light' ? 'light' : props.theme === 'dark' ? 'dark' : 'light'

    return {
      modalCssClass,
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

    // &__content {

      // .form-group {
      //   display:flex;
      //   flex-direction: column;
      //   margin-bottom: 2rem;

      //   input {
      //     padding:.8rem 2rem;
      //     margin-top:.2rem;
      //     border:none;
      //     background-color: rgba($color: rgb(211, 199, 199), $alpha: .15);
      //     outline: none;
      //     box-shadow: 1px 2px 2px rgba($color: black, $alpha: .15);
      //   }
      // }

      // .submit-btn {
      //   display:block;
      //   width: 100%;
      //   padding:.5rem 2rem;
      //   font-size: 120%;
      //   background-color: purple;
      //   color: #FFF; 
      //   margin-top: 3rem;
      //   border-radius:5px;
      //   cursor:pointer;    
      // }
    // }
  }
}

</style>