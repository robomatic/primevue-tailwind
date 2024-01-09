export default {
    root: ({ props }) => ({
        class: [
            // Font
            'text-xs font-bold',

            // Alignments
            'inline-flex items-center justify-center',

            // Spacing
            'px-2 py-1',

            // Shape
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded,
            },

            // Colors
            'text-white dark:text-white/70',
            {
                'bg-primary-500 dark:bg-primary-700': props.severity === null || props.severity === 'primary',
                'bg-success-500 dark:bg-success-700': props.severity === 'success',
                'bg-info-500 dark:bg-info-700': props.severity === 'info',
                'bg-warning-500 dark:bg-warning-700': props.severity === 'warning',
                'bg-danger-500 dark:bg-danger-700': props.severity === 'danger',
            },
        ],
    }),
    value: {
        class: 'leading-1',
    },
    icon: {
        class: 'mr-1 text-sm',
    },
};
