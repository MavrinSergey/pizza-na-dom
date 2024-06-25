<script setup lang="ts">
import {useRoute} from 'vue-router';
import {usePizzaStore} from "~/app/stores/pizzaStore";

const route = useRoute();
const pizza = usePizzaStore().getPizzaById(`${route.params.id}`);
const selectedTopping = ref([])
const selectedSize = ref('small')

const sizes = computed(() =>['small','medium','large'].map(param=>({name:param,value:pizza?.params[param].sizeInSm})))

const topings = computed(() =>
 pizza?.params[selectedSize.value].toppings.map((item: object) =>  item)
)

const finalPrice = computed(() => pizza?.params[selectedSize.value].toppings.reduce((acc, topping) => 
    selectedTopping.value.includes(topping.name) ? acc + topping.price: acc, pizza?.params[selectedSize.value].price))
</script>

<template>

  <div class="pizza">
    <img :src="`${pizza.image}`">
    <div class="pizza__constructor">
      <h2>{{ pizza.name }}</h2>
      <p>{{ finalPrice }}р</p>
      <div>
        <p>выбирите размер пиццы</p>
        <UiWidgetsRadioButtons
            v-model="selectedSize"
            :checkboxes="sizes"/>
      </div>

      <div>
        <UiCheckboxGroup
            v-model:value="selectedTopping"
            name="toppings"
            :options="topings">
        </UiCheckboxGroup>
      </div>

      <select>

      </select>
      <UiBaseButton form="sizepicker-form"
                    color="sizepicker-color">
        добавить в корзину
      </UiBaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pizza {
  padding-left: 30px;
  display: flex;
  gap: 30px;

  &__constructor {
    @include flexd();
    gap: 20px;
  }
}

img {
  width: 440px;
}

.group-checkbox {
  @include flexd();
}
</style>
