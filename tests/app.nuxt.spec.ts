
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import Index from '../pages/index.vue';
import App from '../app.vue'

import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

beforeAll(() => {
  // vi.mock('ofetch', () => {
  //   const $fetch = (path: string) => {
  //     return {
  //       data: {
  //         some: 'test-field'
  //       }
  //     }
  //   }
  //   return {
  //     $fetch,
  //     fetch: $fetch,
  //   }
  // })
  vi.stubGlobal('$fetch', () => {
    return {
      data: {
        some: 'test-field'
      }
    }
  })
})

afterAll(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals()
})

describe('App nuxt', async () => {
  it('renders the app', async () => {
      const component = await mountSuspended(App)
      console.log(component.html())
      expect(component.html()).toContain('test-field');
  })
})

