export default {
    root: {
        class: [
            // Shape
            'rounded-md',

            // Spacing
            'p-4',

            // Color
            'bg-surface-0 dark:bg-surface-700/40',
            'border border-surface-200 dark:border-surface-700/40',

            // Misc
            'overflow-x-auto'
        ]
    },
    menu: {
        class: [
            // Flex & Alignment
            'flex items-center flex-nowrap',

            // Spacing
            'm-0 p-0 list-none leading-none'
        ]
    },
    action: {
        class: [
            // Flex & Alignment
            'flex items-center',

            // Shape
            'rounded-md',

            // Color
            'text-surface-600 dark:text-white/70',

            // States
            'focus-visible:outline focus-visible:outline-offset-4',
            'focus-visible:outline-primary-500',

            // Transitions
            'transition-shadow duration-200',

            // Misc
            'text-decoration-none'
        ]
    },
    icon: {
        class: 'text-surface-600 dark:text-white/70'
    },
    separator: {
        class: [
            // Flex & Alignment
            'flex items-center',

            // Spacing
            ' mx-2',

            // Color
            'text-surface-600 dark:text-white/70'
        ]
    }
};
