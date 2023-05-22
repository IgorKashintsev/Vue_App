<template>
  <div class="paginate">
    <a class="arrow left" href="#" @click="previousPage">
      <img src="../assets/images/ArrowLeft.svg" alt="ArrowLeft">
    </a>
    <a
      href="#"
      class="page-link"
      :class="{ 'page-link_active': page === currentPage }"
      v-for="page of pageCount" :key="page"
      @click="selectPage(page)"
    >
      {{ page }}
    </a>
    <a class="arrow right" href="#" @click="nextPage">
      <img src="../assets/images/ArrowRight.svg" alt="ArrowRight">
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PaginationForm',
  methods: {
    ...mapActions([
      'setCurrentPage',
    ]),
    selectPage(page) {
      this.setCurrentPage(page);
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.setCurrentPage(this.currentPage - 1);
      }
      return;
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.setCurrentPage(this.currentPage + 1);
      }
      return;
    },
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'pageSize',
      'paymentsList',
    ]),
    pageCount() {
      return Math.ceil(this.paymentsList.length / this.pageSize);
    },
  },
};
</script>

<style lang="scss">
.paginate {
  display: flex;
  justify-content: center;
  max-width: 720px;
  border-bottom: 1px solid #EAEAEA;
  padding-top: 5px;
  padding-bottom: 5px;
}
.page-link {
  display: flex;
  align-items: center;
  margin: 4px;
  text-decoration: none;
  color: #000;

  &:hover {
    cursor: pointer;
  }

  &_active {
    color: dodgerblue;
    font-weight: 500;
   }
}
.arrow {
  padding-top: 5px;
}
.left {
  margin-right: 15px;
}
.right {
  margin-left: 15px;
}
</style>