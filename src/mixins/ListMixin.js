import bus from '../utils/bus.js';

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created () {
    // console.log('ListMixin.js', 'created()');
    // bus.$emit('start:spinner');
    // this.$store.dispatch('FETCH_LIST', this.$route.name)
    //   .then(() => {
    //     bus.$emit('end:spinner');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // 스피너 샘플을 위한 setTimeOut 설정
    // console.log('ListMixin.js', 'created()');
    // bus.$emit('start:spinner');
    // setTimeout(() => {
    //   this.$store.dispatch('FETCH_LIST', this.$route.name)
    //     .then(() => {
    //       bus.$emit('end:spinner');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, 1000);
  },
  mounted () {
    bus.$emit('end:spinner');
  }
};
