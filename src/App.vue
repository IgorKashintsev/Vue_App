<template>
  <div id="app">
    <header class="container">
      <div class="header">My personal costs</div>
    </header>
    <main class="container">
      <button class="addNew" @click="show = !show">ADD NEW COST +</button>
      <add-payment-form class="addForm" @add-payment="addNewPayment" v-show="show"/>
      <payments-display 
        :pageSize="pageSize"
        :currentPage="currentPage" 
        :items="paymentsList" 
      />
      <pagination-form 
        :items="paymentsList" 
        :pageSize="pageSize"
        :currentPage="currentPage" 
        @pagechanged="onPageChange"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaginationForm from './components/Pagination.vue'

export default {
  name: 'App',
  data() {
    return {
      show: false,
      paymentsList: [],
      pageSize: 5,
      currentPage: 1,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          number: 1,
          date: '28.3.2020',
          category: 'Food',
          value: '169',
        },
        {
          number: 2,
          date: '24.3.2020',
          category: 'Transport',
          value: '360',
        },
        {
          number: 3,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 4,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 5,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 6,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 7,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 8,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 9,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 10,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
        {
          number: 11,
          date: '24.3.2020',
          category: 'Food',
          value: '532',
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList.push(data);
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
  },
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    PaginationForm,
  },
  created() {
    this.paymentsList = this.fetchData();
  }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: Lato, sans-serif;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 720px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1600px) {
      padding-right: 16px;
      padding-left: 16px;
  }
  @media (max-width: 767px) {
      padding-right: 8px;
      padding-left: 8px;
  }
}
.header {
  font-size: 38px;
  margin-bottom: 15px;
}
.addNew {
  position: relative;
  height: 30px;
  width: 150px;
  margin-bottom: 15px;
  color: white;
  background-color: #00c4aa;
  border: none;
  border-radius: 3px;
}
.addForm {
  position: absolute;
  left: 115px;
}
</style>
