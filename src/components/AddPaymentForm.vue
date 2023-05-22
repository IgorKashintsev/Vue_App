<template>
  <div>
    <div class="inputs">
      <label for="category">
        <select class="select" v-model="category" id="category">
          <option v-for="category of categoryList" :value="category" :key="category">
            {{ category }}
          </option>
        </select>
      </label>
      <label for="value">
        <input class="input" id="value" type="text" placeholder="Payment amount" v-model="value">
      </label>
      <label for="date">
        <input class="input" id="date" type="text" placeholder="Payment date" v-model="date">
      </label>
      <button class="add" @click="addPayment">ADD<span>+</span></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddPaymentForm',
  data() {
    return {
      date: '',
      category: '',
      value: '',
    };
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
    paymentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    ...mapActions([
      'addNewPayment',
      'fetchCategoryListData',
    ]),
    addPayment() {
      if (this.category && this.value) {
        const data = {
          number: this.paymentsList[this.paymentsList.length - 1].number + 1,
          date: this.date || this.paymentDate,
          category: this.category,
          value: +this.value,
        };
        this.addNewPayment(data);
      }
    },
  },
  created() {
    this.fetchCategoryListData();
  },
};
</script>

<style lang="scss">
.inputs {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.select {
  height: 37px;
  width: 254px;
  margin-bottom: 15px;
}

.input {
  height: 30px;
  width: 250px;
  margin-bottom: 15px;
}

.add {
  height: 36px;
  margin-left: 108px;
  margin-bottom: 15px;
  padding-left: 45px;
  color: white;
  background-color: #00c4aa;
  border: none;
  border-radius: 3px;
}

.add span {
  padding-left: 40px;
}
</style>