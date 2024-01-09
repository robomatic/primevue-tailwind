export default {
    root: ({ props, context, parent }) => ({
        class: [
            'relative',

            // Text
            'sm:text-sm sm:leading-6',

            // Spacing
            'px-3 py-1.5',
            // Shape
            { 'rounded-md': parent?.instance?.$name !== 'InputGroup' },
            { 'first:rounded-l-md rounded-none last:rounded-r-md': parent?.instance?.$name === 'InputGroup' },
            { 'first:ml-0 -ml-px': parent?.instance?.$name === 'InputGroup' && !props?.showButtons },

            // Colors
            'text-surface-900 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'ring-1 ring-inset',
            'border-0',
            'shadow-sm',

            // Shape
            'appearance-none outline-none',

            // Interactions
            {
                'hover:ring-primary-500 dark:hover:ring-primary-400': !context?.disabled,
                'focus-within:ring-none opacity-60 select-none pointer-events-none cursor-default': context?.disabled,
            },

            // States
            'focus-within:ring-2 focus-within:ring-inset',
            {
                'ring-surface-400 dark:ring-surface-700 focus-within:ring-primary-500 dark:focus-within:ring-primary-600':
                    !props?.pt?.invalid,
                'ring-danger-500 dark:ring-danger-600 focus-within:ring-danger-500 focus-within:dark:ring-danger-600':
                    props?.pt?.invalid,
            },
        ],
    }),
};
