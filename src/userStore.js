import { computed } from "vue";
import { useStore } from "vuex";

export function useUserStore() {
  const store = useStore();

  return {
    get user() {
      return computed(() => store.state.user);
    },
    login() {},
    logout() {},
  };
}
