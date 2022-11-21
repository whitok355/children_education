<template>
  <div class="wrapper">
    <div class="container index">
      <div class="index__bg index__bg--bg"></div>
      <form class="index__form form" @submit.prevent="submit">
        <logo class="form__logo" />
        <h2 class="form__title">Укажи свои данные</h2>
        <inputs
          class="form__input"
          :class="{ err: !form.name.valid && form.name.touched }"
          @blur="form.name.blur"
          :type="'String'"
          :placeholder="'Как тебя зовут'"
          :model-value="form.name.value"
          @update:modelValue="form.name.value = $event"
        />
        <small class="form__err" v-if="form.name.error.required && form.name.touched"
          >Это обязательное поле</small
        >
        <small class="form__err" v-if="form.name.error.regExpName && form.name.touched"
          >Имя должно содержать Русские быквы</small
        >
        <inputs
          class="form__input"
          :class="{ err: !form.years.valid && form.years.touched }"
          v-model="form.years.value"
          @blur="form.years.blur"
          :type="'String'"
          :placeholder="'Сколько тебе лет'"
          :model-value="form.years.value"
          @update:modelValue="form.years.value = $event"
        />
        <small class="form__err" v-if="form.years.error.required && form.years.touched"
          >Это обязательное поле</small
        >
        <small class="form__err" v-if="form.years.error.regExpYears && form.years.touched"
          >Необходимо указать числовое значение</small
        >
        <h2 class="form__title">Выбери программу</h2>
        <div class="form__radios">
          <radio
            name="programm"
            class="form__radio"
            :id="'Математика'"
            :value="!radioValue"
            @click="change"
            :model-value="form.programm.value"
            @update:modelValue="form.programm.value = $event"
          >
            Математика</radio
          >
          <radio
            name="programm"
            class="form__radio"
            :id="'Грамматика'"
            :value="radioValue"
            @click="change"
            :model-value="form.programm.value"
            @update:modelValue="form.programm.value = $event"
          >
            Грамматика</radio
          >
        </div>
        <btn class="form__btn" :text="'К заданиям'" />
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useForm } from "./use/form";
import { useRouter } from "vue-router";
import btn from "elms/btn.vue";
import logo from "elms/logo.vue";
import radio from "elms/radio.vue";
import inputs from "elms/inputs.vue";

const required = (val) => !!val;

const regExpName = (val) => {
  const regExp = new RegExp(/^[а-яёА-ЯЁ]+$/, "i");
  return regExp.test(val);
};
const regExpYears = (val) => {
  const regExp = new RegExp(/^\d{1,}$/);
  return regExp.test(val);
};

export default {
  components: { btn, logo, radio, inputs },
  setup() {
    const router = useRouter();
    const radioValue = ref(false);
    const change = () => {
      radioValue.value = !radioValue.value;
    };

    const form = useForm({
      name: {
        value: "",
        validators: {
          required,
          regExpName,
        },
      },
      years: {
        value: "",
        validators: {
          required,
          regExpYears,
        },
      },
      programm: {
        value: "Математика",
        validators: {
          required,
        },
      },
    });
    const submit = () => {
      if (form.valid) {
        localStorage.user = JSON.stringify({
          name: form.name.value,
          years: form.years.value,
          programm: form.programm.value,
          stat: {
            quantity: 0,
            trueQuantity: 0,
            falseQuantity: 0,
          },
        });
        router.push({ path: "/main/", name: "main" });
      }
    };
    return { change, form, radioValue, submit };
  },
};
</script>
<style lang="scss" scoped>
.index {
  display: flex;
  align-items: flex-start;
  height: 100vh;
  &__bg {
    width: 100%;
    height: inherit;
    &--bg {
      background-image: url("../../assets/img/index-bg.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 100px;
  max-width: 50%;
  box-sizing: border-box;
  &__logo {
    justify-content: center;
  }
  &__title {
    text-align: center;
    margin-top: 50px;
    font-weight: 700;
    font-size: 1.3em;
    text-transform: uppercase;
  }
  &__input {
    margin-top: 15px;
  }
  &__err {
    color: red;
  }

  &__radios {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 37px;
  }
  &__btn {
    margin-top: 15px;
  }
}
</style>
