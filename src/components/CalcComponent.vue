<template>
  <div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }} <br>
      Fibonacci = {{ fibResult }}
    </div>
    <div v-if="error">
      {{error}}
    </div>
    <!-- <div v-show="error">
      {{ error }}
    </div>
    <div>
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
      <button @click="expon">*ex</button>
      <button @click="divInteger">/in</button> 
    </div> -->
    <div class="message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Просто условие</template>
    </div>
    <button
      v-for="operator of operators"
      :key="operator"
      @click="calculate(operator)"
      >{{ operator }}
    </button>
    <div class="logs">
      {{ logs }}
    </div>
    <div>
      <div class="checkBox">
        <input type="checkbox" @click="show = !show">
        {{ checked }}
      </div>
      <div class="numberPanel" v-if="show">
        <button
          v-for="number of numbers"
          :key="number"
          @click="addNumber(number)"
        >{{ number }}
        </button> <br>
          <input type="radio" id="one" value="1" v-model="picked">
          <label for="one">Операнд 1</label>
          <input type="radio" id="two" value="2" v-model="picked">
          <label for="two">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',
  data() {
    return {
      op1: 0,
      op2: 0,
      result: 0,
      fibResult: 0,
      error: '',
      operators: ['+','-','/','*','*ex','/in'],
      logs: {},
      checked: 'Отобразить экранную клавиатуру',
      show: false,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '<'],
      picked: '1',
    }
  },
  methods: {
    calculate(operator) {
      this.error = '';
      switch(operator) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
        case '*ex': this.expon(); break;
        case '/in': this.divInteger(); break;
      }
      //this.logs[Date.now()] = `${this.op1} ${operator} ${this.op2} = ${this.result}`;
      //this.logs = Object.assign(this.logs, { [Date.now()]: `${this.op1} ${operator} ${this.op2} = ${this.result}` });
      //const newLog = { [Date.now()]: `${this.op1} ${operator} ${this.op2} = ${this.result}` };
      //this.logs = {...this.logs, ...newLog};
      //Vue.set();
      this.$set(this.logs, Date.now(), `${this.op1} ${operator} ${this.op2} = ${this.result}`);
    },
    addNumber(number) {
      if (this.picked === '2') {
        switch(number) {
        case 0: this.op2 = this.op2*10; break;
        case 1: this.op2 = this.op2*10 + this.numbers[1]; break;
        case 2: this.op2 = this.op2*10 + this.numbers[2]; break;
        case 3: this.op2 = this.op2*10 + this.numbers[3]; break;
        case 4: this.op2 = this.op2*10 + this.numbers[4]; break;
        case 5: this.op2 = this.op2*10 + this.numbers[5]; break;
        case 6: this.op2 = this.op2*10 + this.numbers[6]; break;
        case 7: this.op2 = this.op2*10 + this.numbers[7]; break;
        case 8: this.op2 = this.op2*10 + this.numbers[8]; break;
        case 9: this.op2 = this.op2*10 + this.numbers[9]; break;
        case '<': this.op2 = Math.trunc(this.op2 / 10); break;
        }
      } else {
        switch(number) {
        case 0: this.op1 = this.op1*10; break;
        case 1: this.op1 = this.op1*10 + this.numbers[1]; break;
        case 2: this.op1 = this.op1*10 + this.numbers[2]; break;
        case 3: this.op1 = this.op1*10 + this.numbers[3]; break;
        case 4: this.op1 = this.op1*10 + this.numbers[4]; break;
        case 5: this.op1 = this.op1*10 + this.numbers[5]; break;
        case 6: this.op1 = this.op1*10 + this.numbers[6]; break;
        case 7: this.op1 = this.op1*10 + this.numbers[7]; break;
        case 8: this.op1 = this.op1*10 + this.numbers[8]; break;
        case 9: this.op1 = this.op1*10 + this.numbers[9]; break;
        case '<': this.op1 = Math.trunc(this.op1 / 10); break;
      }
      }
      
    },
    sum() {
      const {op1, op2} = this;
      this.error = '';
      this.result = op1 + op2;
      //this.fibResult = this.fib(op1) + this.fib(op2);
      this.fibResult = this.fib1 + this.fib2;
    },
    sub() {
      const {op1, op2} = this;
      this.error = '';
      this.result = op1 - op2;
      //this.fibResult = this.fib(op1) - this.fib(op2);
      this.fibResult = this.fib1 - this.fib2;
    },
    div() {
      const {op1, op2} = this;
      this.error = '';
      if (this.op2 === 0) return this.error = 'На ноль делить нелзя';
      this.result = op1 / op2;
      //this.fibResult = this.fib(op1) / this.fib(op2);
      this.fibResult = this.fib1 / this.fib2;
    },
    mult() {
      const {op1, op2} = this;
      this.error = '';
      this.result = op1 * op2;
      //this.fibResult = this.fib(op1) * this.fib(op2);
      this.fibResult = this.fib1 * this.fib2;
    },
    expon() {
      const {op1, op2} = this;
      this.error = '';
      this.result = Math.pow(op1, op2);
    },
    divInteger() {
      const {op1, op2} = this;
      this.error = '';
      this.result = Math.floor(op1 / op2);
    },
    /* fib(n) {
      console.log('fib');
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    } */
  },
  computed: {
    /* fib1() {
      return this.fib(this.op1);
    },
    fib2() {
      return this.fib(this.op2);
    } */
  }
}
</script>

<style scoped>

</style>