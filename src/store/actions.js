import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
  FETCH_NEWS (context) {
    return fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS ({ commit }) {
    return fetchJobsList()
      .then(response => {
        commit('SET_JOBS', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASK ({ commit }) {
    return fetchAskList()
      .then(response => {
        commit('SET_ASK', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM ({ commit }, id) {
    return fetchItemInfo(id)
      .then(response => {
        commit('SET_ITEM', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_USER ({ commit }, name) {
    return fetchUserInfo(name)
      .then(response => {
        commit('SET_USER', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_LIST ({ commit }, pageName) {
    return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
