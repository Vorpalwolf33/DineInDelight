<script lang="ts">
  import type { Food } from '$lib/utils/FoodType';
  export let food: Food
</script>

<div class="w-full max-w-[400px] md:w-[400px] w-[300px] shadow-lg rounded-2xl flex flex-row overflow-hidden hover:shadow-xl duration-100 border hover:border-gray-200">
  <div class="md:w-[200px] md:h-[200px] w-[150px] h-[150px]">
    <img src="./src/lib/assets/{food.image}" alt="Food" class="h-full w-full object-cover"/>
  </div>
  <div class="flex-1 px-4 py-3 flex flex-col justify-between">
    <div>
      <h2 class="text-xl font-bold">{food.name}</h2>
      <div>₹ {food.price}</div>
    </div>
    <div>
      <button class="bg-orange-500 px-3 py-1 text-white rounded-md">Add</button>
    </div>
  </div>
</div>