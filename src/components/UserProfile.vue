<template>
  <div>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <div>
          <!--
            ItemView -> info.user
            UserView -> info.id
            를 slot username으로 통일
          -->
          <slot name="username"></slot>
        </div>
        <div class="time">
          <slot name="time">
            time
          </slot>
        </div>
        <slot name="karma">
          karma
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 10px;
}

.time {
  font-size:0.7rem;
}
</style>
