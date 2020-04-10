<template>
  <div id="app">
    <!-- url에 다른 뷰컴포넌트 출력 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data () {
    return {
      loadingStatus: false
    };
  },
  methods: {
    startSpinner () {
      this.loadingStatus = true;
    },
    endSpinner () {
      this.loadingStatus = false;
    }
  },
  created () {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy () {
    // created에 생성한 이벤트를 생성한 경우 반드시 소멸자를 작성한다
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* Router Transitions */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
