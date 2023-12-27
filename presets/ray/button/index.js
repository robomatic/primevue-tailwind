export default {
    root: ({ props, context, parent }) => ({
        class: [
            'relative',
            'leading-6',

            // Alignments
            'items-center justify-center inline-flex text-center align-bottom',

            // Sizes & Spacing
            {
                'px-4 py-2.5 min-w-[2rem] text-base': props.size === null && props.label !== null,
                'px-3 py-1.5 text-sm': props.size === 'small',
                'px-[1.5rem] py-2.5 text-lg': props.size === 'large'
            },
            {
                'h-11 w-11 p-0': props.label == null
            },

            // Shapes
            { 'shadow-sm': !props.raised && !props.link && !props.text, 'shadow-lg': props.raised },
            { 
                'rounded-sm': !props.rounded && parent.instance.$name !== 'InputGroup',
                'rounded-full': props.rounded
            },
            { 'rounded-none first:rounded-l-sm last:rounded-r-sm self-center': parent.instance.$name == 'InputGroup' },
            'ring-inset',

            // Link Button
            { 'text-primary-600 dark:text-primary-500 bg-transparent ring-transparent': props.link && !context.disabled },

            // Plain Button
            { 'text-white bg-gray-500 ring-1 ring-gray-500': props.plain && !props.outlined && !props.text },
            // Plain Text Button
            { 'text-surface-500': props.plain && props.text },
            // Plain Outlined Button
            { 'text-surface-500 ring-1 ring-gray-500': props.plain && props.outlined && !props.severity },

            // Text Button
            { 'bg-transparent ring-transparent': props.text && !props.plain },

            // Outlined Button
            { 'bg-transparent ring-primary-500': props.outlined && !props.plain && !props.severity },


            // --- Severity Buttons ---

            // Primary Button
            {
                'text-white dark:text-surface-950': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'bg-primary-500 dark:bg-primary-600': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-primary-500 dark:ring-primary-600': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain
            },
            // Primary Text Button
            { 'text-primary-500 dark:text-primary-600': props.text && props.severity === null && !props.plain },
            // Primary Outlined Button
            { 'text-primary-500 ring-1 ring-primary-500 hover:bg-primary-400/20': props.outlined && props.severity === null && !props.plain },

            // Secondary Button
            {
                'text-white dark:text-secondary-950': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'bg-secondary-500 dark:bg-secondary-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-secondary-500 dark:ring-secondary-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain
            },
            // Secondary Text Button
            { 'text-secondary-500 dark:text-secondary-600': props.text && props.severity === 'secondary' && !props.plain },
            // Secondary Outlined Button
            { 'text-secondary-500 ring-1 ring-secondary-500 hover:bg-secondary-400/20': props.outlined && props.severity === 'secondary' && !props.plain },

            // Success Button
            {
                'text-white dark:text-surface-950': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'bg-success-500 dark:bg-success-600': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-success-500 dark:ring-success-600': props.severity === 'success' && !props.text && !props.outlined && !props.plain
            },
            // Success Text Button
            { 'text-success-500 dark:text-success-600': props.text && props.severity === 'success' && !props.plain },
            // Success Outlined Button
            { 'text-success-500 ring-1 ring-success-500 hover:bg-success-400/20': props.outlined && props.severity === 'success' && !props.plain },

            // Info Button
            {
                'text-white dark:text-surface-950': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'bg-info-500 dark:bg-info-600': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-info-500 dark:ring-info-600': props.severity === 'info' && !props.text && !props.outlined && !props.plain
            },
            // Info Text Button
            { 'text-info-500 dark:text-info-600': props.text && props.severity === 'info' && !props.plain },
            // Info Outlined Button
            { 'text-info-500 ring-1 ring-info-500 hover:bg-info-400/20 ': props.outlined && props.severity === 'info' && !props.plain },

            // Warning Button
            {
                'text-white dark:text-surface-950': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                'bg-warning-500 dark:bg-warning-600': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-warning-500 dark:ring-warning-600': props.severity === 'warning' && !props.text && !props.outlined && !props.plain
            },
            // Warning Text Button
            { 'text-warning-500 dark:text-warning-600': props.text && props.severity === 'warning' && !props.plain },
            // Warning Outlined Button
            { 'text-warning-500 ring-1 ring-warning-500 hover:bg-warning-400/20': props.outlined && props.severity === 'warning' && !props.plain },

            // Help Button
            {
                'text-white dark:text-surface-950': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'bg-help-500 dark:bg-help-600': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-help-500 dark:ring-help-600': props.severity === 'help' && !props.text && !props.outlined && !props.plain
            },
            // Help Text Button
            { 'text-help-500 dark:text-help-600': props.text && props.severity === 'help' && !props.plain },
            // Help Outlined Button
            { 'text-help-500 ring-1 ring-help-500 hover:bg-help-400/20': props.outlined && props.severity === 'help' && !props.plain },

            // Danger Button
            {
                'text-white dark:text-black': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                'bg-danger-500 dark:bg-danger-500': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-danger-500 dark:ring-danger-500': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
            },
            // Danger Text Button
            { 'text-danger-500 dark:text-danger-600': props.text && props.severity === 'danger' && !props.plain },
            // Danger Outlined Button
            { 'text-danger-500 ring-1 ring-danger-500 hover:bg-danger-400/20': props.outlined && props.severity === 'danger' && !props.plain },


            // --- Severity Button States ---

            'focus:outline-none focus:outline-offset-0 focus:ring',

            // Link
            { 'focus:ring-primary-500/50 dark:focus:ring-primary-500/50': props.link },

            // Plain
            { 'hover:bg-gray-600 hover:ring-gray-400': props.plain && !props.outlined && !props.text },
            // Text & Outlined Button
            { 'hover:bg-surface-400/20 dark:hover:bg-surface-300/10': props.plain && (props.text || props.outlined) },

            // Primary
            { 'hover:bg-primary-600 dark:hover:bg-primary-400 hover:ring-primary-300 dark:hover:ring-primary-500': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-primary-500/50 dark:focus:ring-primary-500/50': props.severity === null },
            // Text & Outlined Button
            { 'hover:bg-primary-400/20': (props.text || props.outlined) && props.severity === null && !props.plain },

            // Secondary
            { 'hover:bg-secondary-600 dark:hover:bg-secondary-300 hover:ring-secondary-600 dark:hover:ring-secondary-300': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-secondary-500/50 dark:focus:ring-secondary-500/50': props.severity === 'secondary' },
            // Text & Outlined Button
            { 'hover:bg-secondary-400/20': (props.text || props.outlined) && props.severity === 'secondary' && !props.plain },

            // Success
            { 'hover:bg-success-600 dark:hover:bg-success-300 hover:ring-success-600 dark:hover:ring-success-300': props.severity === 'success' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-success-500/50 dark:focus:ring-success-500/50': props.severity === 'success' },
            // Text & Outlined Button
            { 'hover:bg-success-400/20': (props.text || props.outlined) && props.severity === 'success' && !props.plain },

            // Info
            { 'hover:bg-info-600 dark:hover:bg-info-300 hover:ring-info-600 dark:hover:ring-info-300': props.severity === 'info' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-info-500/50 dark:focus:ring-info-500/50': props.severity === 'info' },
            // Text & Outlined Button
            { 'hover:bg-info-400/20': (props.text || props.outlined) && props.severity === 'info' && !props.plain },

            // Warning
            { 'hover:bg-warning-600 dark:hover:bg-warning-300 hover:ring-warning-600 dark:hover:ring-warning-300': props.severity === 'warning' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-warning-500/50 dark:focus:ring-warning-500/50': props.severity === 'warning' },
            // Text & Outlined Button
            { 'hover:bg-warning-400/20': (props.text || props.outlined) && props.severity === 'warning' && !props.plain },

            // Help
            { 'hover:bg-help-600 dark:hover:bg-help-300 hover:ring-help-600 dark:hover:ring-help-300': props.severity === 'help' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-help-500/50 dark:focus:ring-help-500/50': props.severity === 'help' },
            // Text & Outlined Button
            { 'hover:bg-help-400/20': (props.text || props.outlined) && props.severity === 'help' && !props.plain },

            // Warning
            { 'hover:bg-danger-600 dark:hover:bg-danger-300 hover:ring-danger-600 dark:hover:ring-danger-300': props.severity === 'danger' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-danger-500/50 dark:focus:ring-danger-500/50': props.severity === 'danger' },
            // Text & Outlined Button
            { 'hover:bg-danger-400/20': (props.text || props.outlined) && props.severity === 'danger' && !props.plain },

            // Disabled
            {
                'ring-surface-300 dark:ring-surface-700': context.disabled, 
                'bg-surface-300 dark:bg-surface-700': context.disabled && !props.outlined && !props.text && !props.link,
                'text-surface-400 dark:text-surface-600 ': context.disabled && (props.outlined  || props.text || props.link),
                'pointer-events-none cursor-default': context.disabled
            },

            // Transitions
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer overflow-hidden select-none',
            { 'before:from-surface-100/20 before:via-black/0 before:to-surface-900/20 before:bg-gradient-to-br before:mix-blend-hard-light before:w-full before:h-full before:absolute before:inset-0': !props.link && !context.disabled && !props.text && !props.outlined && !props.plain },
        ]
    }),
    label: ({ props }) => ({
        class: [
            'duration-200',
            'font-semibold',
            {
                'hover:underline': props.link
            },
            { 'flex-1': props.label !== null, 'invisible w-0': props.label == null }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            {
                'before:text-sm': props.size === 'small',
                'before:text-base': !props.size,
                'before:text-lg': props.size === 'large'
            },
            'mx-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2': props.iconPos == 'bottom' && props.label != null
            }
        ]
    }),
    loadingicon: ({ props }) => ({
        class: [
            'h-3 w-3',
            'mx-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2': props.iconPos == 'bottom' && props.label != null
            }
        ]
    }),
    badge: ({ props }) => ({
        class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
    })
};
