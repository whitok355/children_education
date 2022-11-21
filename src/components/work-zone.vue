<template>
  <div class="work-zone">
    <h2 class="work-zone__title">Задание по теме: {{ user.programm }}</h2>
    <form class="work-zone__task task" @submit.prevent="calc">
      <div class="task__content">
        <div class="task__el">{{ numbers.first }}</div>
        <div class="task__el">{{ numbers.operation }}</div>
        <div class="task__el">{{ numbers.second }}</div>
        <inputs
          class="task__field"
          :type="'Number'"
          :placeholder="'Введи ответ'"
          v-model="numbers.userAnswer"
          :value="numbers.userAnswer"
        />
      </div>
      <div class="task__btn">
        <btn :text="'Ответить'" />
      </div>
      <div class="task__answer answer">
        <div
          class="answer__result answer__result--green"
          :class="!numbers.boolValue.touched ? 'hidden' : ''"
          v-if="numbers.boolValue.result"
        >
          Верный ответ
        </div>
        <div
          class="answer__result answer__result--red"
          v-else
          :class="!numbers.boolValue.touched ? 'hidden' : ''"
        >
          Неверный ответ, подумай лучше
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted, computed, defineProps } from "vue";
import btn from "elms/btn.vue";
import inputs from "elms/inputs.vue";

const operation = ref(["-", "+"]);

const props = defineProps({
  user: {
    type: Object,
  },
});

const numbers = reactive({
  first: "",
  second: "",
  operation: "",
  trueAnswer: "",
  userAnswer: "",
  boolValue: {
    result: false,
    touched: false,
  },
});

const ramdomizer = (val) => Math.floor(Math.random() * (val - 0) + 0);

const checkAnswer = computed(
  () => Number(numbers.trueAnswer) === Number(numbers.userAnswer)
);

const statist = (type) => {
  const localData = props.user;
  localData.stat.quantity++;
  localData.stat[type]++;
  localStorage.user = JSON.stringify(localData);
};

const useTask = () => {
  numbers.first = ramdomizer(10);
  numbers.second = ramdomizer(10);
  numbers.operation = operation.value[ramdomizer(operation.value.length)];
};

const choicOperation = () => {
  switch (numbers.operation) {
    case "+":
      numbers.trueAnswer = numbers.first + numbers.second;
      break;
    case "-":
      numbers.trueAnswer = numbers.first - numbers.second;
      break;
  }
};
const calc = () => {
  choicOperation();
  numbers.boolValue.result = checkAnswer;
  numbers.boolValue.touched = true;
  if (numbers.boolValue.result) {
    setTimeout(() => {
      Object.keys(numbers)
        .filter((el) => el !== "boolValue")
        .map((elem) => (numbers[elem] = ""));
      useTask();
      statist("trueQuantity");
      numbers.boolValue.touched = false;
    }, 1500);
  } else {
    statist("falseQuantity");
  }
};

onMounted(() => useTask());
</script>
<style lang="scss" scoped>
.work-zone {
  border: 10px solid $green;
  border-radius: 10px;
  padding: 60px 10px;
  &__task {
    margin-top: 100px;
  }
}

.task {
  .task__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
  }
  &__field {
    margin-top: 15px;
  }
  &__el {
    padding: 3px 60px;
    border: 2px solid $green;
    border-radius: 10px;
    margin-top: 15px;
    display: inline;
    font-weight: 900;
    font-size: 2em;
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
    padding: 0 50px;
    margin-top: 70px;
  }
}

.answer {
  margin-top: 50px;
  text-align: center;
  font-size: 2em;
  font-weight: 900;
  &__result--green {
    color: green;
  }
  &__result--red {
    color: red;
  }
}
.hidden {
  display: none;
}
</style>
