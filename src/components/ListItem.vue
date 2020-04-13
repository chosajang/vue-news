<template>
  <div>
    <ul class="item-list">
      <li class="post" v-for="item in listItems" :key="item.id">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="item-title">
            <!--//
              item.domain으로 분기
              -->
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a :href="`http://${item.domain}`" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems () {
      const name = this.$route.name;
      let items;
      if (name === 'news') {
        items = this.$store.state.news;
      } else if (name === 'ask') {
        items = this.$store.state.ask;
      } else if (name === 'jobs') {
        items = this.$store.state.jobs;
      }
      return items;
    }
  },
  created () {
    const name = this.$route.name;
    let actionName = 'FETCH_NEWS';
    if (name === 'news') {
      actionName = 'FETCH_NEWS';
    } else if (name === 'ask') {
      actionName = 'FETCH_ASK';
    } else if (name === 'jobs') {
      actionName = 'FETCH_JOBS';
    }
    this.$store.dispatch(actionName);
  }
};
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 100px;
  height: 80px;
  display: flex;;
  align-items: center;
  justify-content: center;
  color: #45BEAC;
  font-weight: bold;
}

.item-title {
  margin: 0;
}

.link-text {
  color: #323232;
}

a {
  text-decoration: none;
  color: #323232;
}

a:hover {
  color: #45BEAC;
  text-decoration: underline;
}

a.router-link-active {
  text-decoration: underline;
}
</style>
