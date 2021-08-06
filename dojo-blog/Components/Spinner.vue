<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  border-left-color: #ff8800;
  border-right-color: #ff8800;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { -webkit-transform: rotateZ(360deg);  }
}
</style>