export default {
    root: ({ props }) => ({
        class: [
            'relative',
            'flex items-center',

            // Size
            {
                'h-2 w-full min-w-[15rem]': props.orientation === 'horizontal',
                'w-2 h-full min-h-[15rem]': props.orientation === 'vertical',
            },

            // Shape
            'border-0 rounded-lg',

            // Colors
            'bg-surface-100 dark:bg-surface-700',

            // States
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled },
        ],
    }),
    range: ({ props }) => ({
        class: [
            // Position
            'block absolute',
            {
                'top-0 left-0': props.orientation === 'horizontal',
                'bottom-0 left-0': props.orientation === 'vertical',
            },

            // Size
            {
                'h-full': props.orientation === 'horizontal',
                'w-full': props.orientation === 'vertical',
            },

            // Shape
            'rounded-lg',

            // Colors
            'bg-primary-500 dark:bg-primary-400 to-primary-600',
            {
                'bg-gradient-to-r': props.orientation === 'horizontal',
                'bg-gradient-to-t': props.orientation === 'vertical',
                'via-primary-500 from-primary-600': props.range,
                'from-primary-500': !props.range,
            },
        ],
    }),
    handle: ({ props }) => ({
        class: [
            'block',

            // Size
            'h-5',
            'w-5',
            {
                'top-[50%] mt-[-0.625rem] ml-[-0.625rem]': props.orientation === 'horizontal',
                'left-[50%] mb-[-0.625rem] ml-[-0.625rem]': props.orientation === 'vertical',
            },

            // Shape
            'rounded-full',

            // Colors
            'bg-primary-500 dark:bg-primary-500 bg-gradient-to-t from-primary-500 to-primary-400/90',
            'border-primary-600 dark:border-primary-500',

            // States
            'focus:outline-none focus:outline-offset-0',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none',
        ],
    }),
    starthandler: ({ props }) => ({
        class: [
            'block',

            // Size
            'h-5',
            'w-5',
            {
                'top-[50%] mt-[-0.625rem] ml-[-0.625rem]': props.orientation === 'horizontal',
                'left-[50%] mb-[-0.625rem] ml-[-0.625rem]': props.orientation === 'vertical',
            },

            // Shape
            'rounded-full',
            'border',

            // Colors
            'bg-primary-500 dark:bg-primary-500 bg-gradient-to-t from-primary-500 to-primary-400/90',
            'border-primary-600 dark:border-primary-500',

            // States
            'focus:outline-none focus:outline-offset-0',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none',
        ],
    }),
    endhandler: ({ props }) => ({
        class: [
            'block',

            // Size
            'h-5',
            'w-5',
            {
                'top-[50%] mt-[-0.625rem] ml-[-0.625rem]': props.orientation === 'horizontal',
                'left-[50%] mb-[-0.625rem] ml-[-0.625rem]': props.orientation === 'vertical',
            },

            // Shape
            'rounded-full',
            'border',

            // Colors
            'bg-primary-500 dark:bg-primary-500 bg-gradient-to-t from-primary-500 to-primary-400/90',
            'border-primary-600 dark:border-primary-500',

            // States
            'focus:outline-none focus:outline-offset-0',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none',
        ],
    }),
};
