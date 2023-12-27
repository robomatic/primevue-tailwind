export default {
    root: {
        class: [
            'relative',

            // Flexbox & Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-6 h-6',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    input: ({ props, state }) => ({
        class: [
            // Flexbox
            'flex justify-center items-center',

            // Size
            'w-6 h-6',
            'text-base',
            'font-medium',

            // Shape
            'border',
            'rounded-full',

            // Transition
            'transition duration-200 ease-in-out',

            // Colors
            {
                'text-surface-700 dark:text-white/80': props.value !== props.modelValue && props.value !== undefined,
                'bg-surface-0 dark:bg-surface-900': props.value !== props.modelValue && props.value !== undefined,
                'border-surface-400 dark:border-surface-700': props.value !== props.modelValue && props.value !== undefined,
                'border-primary-500 dark:border-primary-400': props.value == props.modelValue && props.value !== undefined,
                'border-double border-[10px] border-primary-500 dark:border-primary-500': props.value == props.modelValue && props.value !== undefined,
            },
            { 'border-surface-300 dark:border-surface-700': props.value === undefined  },

            // States
            {
                'outline-none outline-offset-0': !props.disabled && state.focused,
                'ring-1 ring-primary-400 dark:ring-primary-500': !props.disabled && state.focused && !props.pt?.invalid,
                'opacity-60 cursor-default': props.disabled,
                'ring-1 ring-danger-500 dark:ring-danger-600': props.pt?.invalid
            }
        ]
    }),
    icon: {
        class: 'hidden'
    }
};
