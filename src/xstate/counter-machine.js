import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({
  context: { value: 0 },
  on: {
    INCREASE: {
      actions: assign({
        value: (context) => context.value + 1,
      }),
    },
    DECREASE: {
      actions: assign({
        value: (context) => context.value - 1,
      }),
    },
    RESET: {
      actions: assign({
        value: () => 0,
      }),
    },
  },
});
