import ListView from '../views/ListView.vue';
import bus from '../utils/bus.js';

export default function createListView (name) {
  return {
    // 재사용 인스턴스(컴포넌트) 옵션 선언
    name: name,
    created () {
      console.log('CreateListView.js', name);
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            bus.$emit('end:spinner');
          })
          .catch(error => {
            console.log(error);
          });
      }, 1000);
    },
    render (createElement) {
      return createElement(ListView);
    }
  };
}
