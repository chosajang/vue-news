<template>
  <li>
    {{ propsdata }}
    <slot>
      <!-- 등록하는 곳에서 정의하는 화면 영역 -->
    </slot>
  </li>
</template>

<script>
export default {
  props: ['propsdata']
};
</script>

<style>

</style>
