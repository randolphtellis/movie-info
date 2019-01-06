import { shallowMount } from '@vue/test-utils';
import MovieBar from '@/components/MovieBar.vue';

describe('MovieBar.vue', () => {
  it('fetches the movie when url route changes', () => {
    const $route = {
    params: {
      movieId: 'tt1234567'
    }
  }
    const wrapper = shallowMount(MovieBar, {
      mocks: { $route }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
