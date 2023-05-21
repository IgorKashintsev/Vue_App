<template>
  <div>
    <div class="inputs">
    <label for="category">
      <input class="input" id="category" type="text" placeholder="Payment description" v-model="category">
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
export default {
  name: 'AddPaymentForm',
  data() {
    return {
      number: 3,
      date: '',
      category: '',
      value: '',
    };
  },
  computed: {
    paymentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    addPayment() {
      const data = {
        number: this.number += 1,
        date: this.date || this.paymentDate,
        category: this.category,
        value: +this.value,
      };
      this.$emit('add-payment', data);
    },
  },
};
</script>

<style lang="scss">
.inputs {
  display: flex;
  flex-direction: column;
  text-align: start;
}
.input {
  height: 30px;
  width: 250px;
  margin-bottom: 15px;
}
.add {
  height: 36px;
  width: 150px;
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