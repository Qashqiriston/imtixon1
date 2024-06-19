<template>
  <section>
    <h1>Apply</h1>

    <div class="flex gap-4">
      <button v-for="i of steps" :key="i.id" @click="activeStep = i.id">
        {{ i.name }}
      </button>
    </div>

    <pre>Active Step: {{ activeStep }}</pre>
    <pre>{{ backData[USER.FIRST_NAME] }}</pre>

    <input v-model="localForm[USER.FIRST_NAME]" type="text">
    <button @click="onSubmit">Saqlash</button>
  </section>
</template>

<script setup lang="ts">
enum APPLY_STEPS {
  MAIN_STEP = 1,
  ADDITIONAL_STEP = 2,
  DOCS_STEP = 3
}

const steps = [
  {
    name: 'Main',
    id: APPLY_STEPS.MAIN_STEP,
  },
  {
    name: 'Additional',
    id: APPLY_STEPS.ADDITIONAL_STEP,
  },
  {
    name: 'Docs',
    id: APPLY_STEPS.DOCS_STEP
  }
]

const activeStep = ref<APPLY_STEPS>(APPLY_STEPS.MAIN_STEP)

enum USER {
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name'
}

type BackData = Record<USER, string>

const backData : BackData = {
  first_name: "Sanjar",
  last_name: "Barakayev"
}

const localForm = reactive<BackData>({
  [USER.FIRST_NAME]: backData[USER.FIRST_NAME],
  [USER.LAST_NAME]: backData[USER.LAST_NAME]
})

const onSubmit = () => {
  const data = localForm
  console.log(data)
  //
}

enum UNIVERSITY_KEYS {
  YEAR = 'year',
  NAME = 'name'
}

type CustomObject = Record<UNIVERSITY_KEYS, number | string | boolean>

const university : CustomObject = {
  [UNIVERSITY_KEYS.YEAR]: 1980,
  [UNIVERSITY_KEYS.NAME]: 'TATU',
}

</script>