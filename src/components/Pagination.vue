<template>
  <div class="paginate">
    <a
      href="#"
      class="page-link"
      :class="{ 'page-link_active': page === currentPage }"
      v-for="page of pagCount" :key="page"
      @click="selectPage(page)"
    >
      {{ page }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'PaginationForm',
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
    pagCount() {
      return Math.ceil(this.items.length / this.pageSize);
    },
  },
  methods: {
    selectPage(page) {
      this.$emit('pagechanged', page);
    },
  },
};
</script>

<style lang="scss">
.paginate {
  display: flex;
  justify-content: center;
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
</style>