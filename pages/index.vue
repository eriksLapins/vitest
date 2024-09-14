<template>
    <div>
        Hello {{ response }}
    </div>
</template>
<script setup lang="ts">
import { getData } from '~/utils/getData';

defineOptions({
    name: 'IndexPage'
})

// const {data} = useAsyncData(async () => {
//     const response = await $fetch<{ data: { some: string}}>('/some/test/endpoint')
//     return response
// })
// const response = data.value

const response = ref('');
onMounted(async () => {
    try {
        response.value = await getData()
    } catch (e) {
        response.value = 'test-error'
    }
})
</script>