export default {
    root: ({ props }) => ({
        class: [
            'flex',
            {
                'opacity-60 select-none cursor-not-allowed': props.disabled,
                'cursor-text': !props.disabled,
            }
        ]
    }),
    container: ({ state, props }) => ({
        class: [
            // Font
            'font-sans text-base leading-6',

            // Flex
            'flex items-center flex-wrap',
            'gap-2',

            // Spacing
            'm-0',
            'px-3 py-[0.5685rem]',

            // Size
            'w-full',

            // Shape
            'list-none',
            'rounded-sm',

            // Color
            'text-surface-900 dark:text-surface-0',
            'bg-surface-0 dark:bg-surface-900',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'shadow-sm',

            // States
            'ring-1 ring-inset ring-offset-0',
            'focus:outline-none focus:outline-offset-0',
            {
                'ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0': !state.focused && !props.pt?.invalid,
                'ring-2': state.focused,
                'ring-primary-500 dark:ring-primary-400': state.focused && !props.pt?.invalid,
                'ring-danger-500 dark:ring-danger-600': props.pt?.invalid
            },

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'overflow-hidden',
            'appearance-none'
        ]
    }),
    inputtoken: {
        class: ['py-0.5 px-0', 'inline-flex flex-auto']
    },
    input: ({ props }) => ({
        class: [
            // Font
            'font-sans text-base leading-none',

            // Size
            'w-full',

            // Spacing
            'p-0 m-0',

            // Shape
            'appearance-none rounded-none',
            'border-0 outline-none',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-transparent',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',

            // Misc
            {
                'cursor-not-allowed': props.disabled,
                'cursor-text': !props.disabled,
            }
        ]
    }),
    token: {
        class: [
            // Flexbox
            'inline-flex items-center',

            // Spacing
            '-my-1',
            'py-1.5 px-3',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-700 dark:text-white/70',
            'bg-surface-200 dark:bg-surface-700'
        ]
    },
    label: {
        class: 'leading-5'
    },
    removeTokenIcon: {
        class: [
            // Shape
            'rounded-sm leading-6',

            // Spacing
            'ml-2',

            // Size
            'w-4 h-4',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer'
        ]
    }
};
