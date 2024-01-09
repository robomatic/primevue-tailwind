export default {
    root: ({ props }) => ({
        class: [
            // Alignments
            'inline-flex relative',
            'flex-shrink-0',

            // Size
            'h-7 w-12',

            // States
            'focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled,
            },
        ],
    }),
    slider: ({ props }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0',

            // Shape
            'rounded-full',
            'shadow-inner-md',

            // Before:
            'before:absolute before:top-1/2 before:left-1',
            'before:-mt-2.5',
            'before:h-5 before:w-5',
            'before:rounded-full',
            'before:transition-duration-200 before:transition before:ease-in-out',
            'before:bg-surface-0 before:dark:bg-surface-900',
            'before:shadow',
            { 'before:transform before:translate-x-[1.12rem]': props.modelValue },

            // Colors
            'border border-transparent',

            // States
            {
                'bg-primary-500 dark:bg-primary-400': props.modelValue && !props.pt?.invalid,
                'bg-surface-200 dark:bg-surface-700': !props.modelValue && !props.pt?.invalid,
                'hover:bg-surface-300 hover:dark:bg-surface-600 ': !props.modelValue && !props.pt?.invalid,
                'bg-danger-500 dark:bg-danger-600 hover:bg-danger-400 dark:hover:bg-danger-500': props.pt?.invalid,
            },

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer',
        ],
    }),
};
