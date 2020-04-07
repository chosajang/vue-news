export default {
  SET_NEWS (state, news) {
    // console.log('SET_NEWS', news);
    state.news = news;
  },
  SET_JOBS (state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK (state, ask) {
    state.ask = ask;
  }
}
