export async function getData() {
    const {data: {some}} = await $fetch<{ data: { some: string}}>('/some/test/endpoint');
    return some
}