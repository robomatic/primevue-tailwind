export default {
    root: ({ props }) => ({
        class: [
            // Font
            'font-medium',
            {
                'text-xs leading-[1.5rem]': props.size == null,
                'text-lg leading-[2.25rem]': props.size == 'large',
                'text-2xl leading-[3rem]': props.size == 'xlarge'
            },

            // Alignment
            'text-center inline-block',

            // Size
            'px-1 p-0',
            {
                'min-w-[1.5rem] h-[1.5rem]': props.size == null,
                'min-w-[2.25rem] h-[2.25rem]': props.size == 'large',
                'min-w-[3rem] h-[3rem]': props.size == 'xlarge'
            },

            // Shape
            'rounded-full',

            // Color
            'text-white dark:text-white/60',
            {
                'bg-primary-600 dark:bg-primary-700': props.severity == null || props.severity == 'primary',
                'bg-surface-600 dark:bg-surface-700': props.severity == 'secondary',
                'bg-success-600 dark:bg-success-700': props.severity == 'success',
                'bg-info-600 dark:bg-info-700': props.severity == 'info',
                'bg-warning-600 dark:bg-warning-700': props.severity == 'warning',
                'bg-help-600 dark:bg-help-700': props.severity == 'help',
                'bg-danger-600 dark:bg-danger-700': props.severity == 'danger'
            }
        ]
    })
};
