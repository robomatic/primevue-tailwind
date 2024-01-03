export default {
    root: ({ props }) => ({
        class: [
            'inline-flex items-center justify-center align-top gap-2',
            'py-2 px-3 m-0 rounded-md',
            'ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0',
            {
                'text-info-600 dark:text-info-500': props.severity == 'info',
                'text-success-600 dark:text-success-500': props.severity == 'success',
                'text-warning-600 dark:text-warning-500': props.severity == 'warn',
                'text-danger-600 dark:text-danger-500': props.severity == 'error'
            }
        ]
    }),
    icon: {
        class: [
            // Sizing and Spacing
            'w-4 h-4',
            'shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-sm leading-none',
            'font-medium'
        ]
    }
};
