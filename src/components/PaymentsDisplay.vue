<template>
  <div class="payments">
    <div class="payments_top">
      <div>#</div>
      <div>Date</div>
      <div>Category</div>
      <div>Value</div>
    </div>
    <div class="payments_list" v-for="(item, index) of pageList" :key="index">
      <div>{{ item.number }}</div>
      <div>{{ item.date }}</div>
      <div>{{ item.category }}</div>
      <div>{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => ([]),
    },
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    pageList() {
      const { currentPage, pageSize } = this;
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;

      return this.items.slice(start, end);
    },
  },
};
</script>

<style lang="scss">
.payments {
  height: 205px;
  &_top {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    & div:first-child {
      min-width: 70px;
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 8px;
    }
    & div:not(:first-child) {
      min-width: 250px;
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 8px;
    }
    & div:last-child {
      min-width: 150px;
    }
  }
  &_list {
    display: flex;
    padding-top: 8px;
    & div:not(:first-child) {
      width: 250px;
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 8px;
    }
    & div:first-child {
      min-width: 70px;
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 8px;
    }
    & div:last-child {
      width: 150px;
    }
  }
}
</style>