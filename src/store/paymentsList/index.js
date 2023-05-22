export default {
  state: {
    paymentsList: [],
    pageSize: 5,
    currentPage: 1,
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    pageSize: (state) => state.pageSize,
    currentPage: (state) => state.currentPage,
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENTS_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            number: 1,
            date: '28.3.2020',
            category: 'Food',
            value: 169,
          },
          {
            number: 2,
            date: '24.3.2020',
            category: 'Transport',
            value: 360,
          },
          {
            number: 3,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 4,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 5,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 6,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 7,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 8,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 9,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 10,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
          {
            number: 11,
            date: '24.3.2020',
            category: 'Food',
            value: 532,
          },
        ];

        commit('SET_PAYMENTS_LIST', initialPaymentsList);
      }, 1000);
    },
    addNewPayment({ commit }, payment) {
      commit('ADD_PAYMENTS_DATA', payment);
    },
    setCurrentPage({ commit }, page) {
      commit('SET_CURRENT_PAGE', page);
    },
  },
};