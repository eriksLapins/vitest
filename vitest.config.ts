import { defineVitestConfig } from "@nuxt/test-utils/config";
import {createResolver} from '@nuxt/kit';
const {resolve} = createResolver(import.meta.url);
export default defineVitestConfig({
    test: {
        environment: 'nuxt',
    },
})