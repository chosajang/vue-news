<template>
  <div>
    <ul class="item-list">
      <li class="post" v-for="item in listItems" v-bind:key="item.id">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="item-title">
            <a v-bind:href="item.url">
            {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <a v-bind:href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data () {
    return {
      listItems: []
    };
  },
  created () {
    // data의 listItems에 접근하기 위한 객체 선언
    const vm = this;
    fetchNewsList()
      .then(response => {
        vm.listItems = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
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
