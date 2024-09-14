
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import Index from '../pages/index.vue';
import App from '../app.vue'

import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { resolveAlias } from '@nuxt/kit';

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
  vi.mock('~/utils/getData');  
})

afterAll(() => {
  vi.unstubAllGlobals();
  vi.resetAllMocks();
})

describe('App nuxt', async () => {
  const utils = await import('~/utils/getData');
  test('renders the app', async () => {
    utils.getData = vi.fn().mockResolvedValue('test-field');
    const component = await mountSuspended(Index)
    console.log(component.html())
    expect(component.html()).toContain('test-field');
  })
  test('will catch an error', async () => {
    utils.getData = vi.fn().mockRejectedValue('test-error');
    const component = await mountSuspended(Index)
    console.log(component.html())
    expect(component.html()).toContain('test-error');
  })
})

