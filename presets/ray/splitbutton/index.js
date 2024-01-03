export default {
    root: ({ props }) => ({
        class: [
            // Flexbox and Position
            'inline-flex',
            'relative',

            // Shape
            {
                'rounded-md before:rounded-md': !props.rounded,
                'rounded-full before:rounded-full': props.rounded
            },
            { 'shadow-lg': props.raised },

            { 'before:content-[""] before:pointer-events-none before:from-surface-100/20 before:via-black/0 before:to-surface-900/20 before:bg-gradient-to-br before:mix-blend-hard-light before:w-full before:h-full before:absolute before:z-10 before:inset-0': !props.link && !props.disabled && !props.text && !props.outlined && !props.plain },
        ]
    }),
    button: {
        root: ({ parent }) => ({
            class: [
                'relative',
                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                {
                    'px-2.5 py-1.5 text-sm': parent.props.size === 'small',
                    'px-3 py-2 text-sm': parent.props.size === null,
                    'px-3.5 py-2.5 text-sm': parent.props.size === 'large'
                },

                // Shape
                { 'shadow-sm': !parent.props.raised && !parent.props.link && !parent.props.text, 'shadow-lg': parent.props.raised },
                'rounded-r-none',
                { 'rounded-l-full': parent.props.rounded },
                { 'rounded-md': !parent.props.rounded, 'rounded-full': parent.props.rounded },

                // Link Button
                { 'text-primary-600 dark:text-primary-400 bg-transparent ring-transparent': parent.props.link },

                // Plain Button
                { 'text-white bg-gray-500': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Plain Text Button
                { 'text-surface-500': parent.props.plain && parent.props.text },
                // Plain Outlined Button
                { 'text-surface-500 ring-gray-500': parent.props.plain && parent.props.outlined },

                // Text Button
                { 'bg-transparent ring-transparent': parent.props.text && !parent.props.plain },

                // Outlined Button
                { 'bg-transparent ring-1 ring-inset': parent.props.outlined && !parent.props.plain },

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-white dark:text-surface-950': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-primary-500 dark:bg-primary-500': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Primary Text Button
                { 'text-primary-500 dark:text-primary-400': parent.props.text && parent.props.severity === null && !parent.props.plain },
                // Primary Outlined Button
                { 'text-primary-500 ring-1 ring-primary-500 hover:bg-primary-400/20': parent.props.outlined && parent.props.severity === null && !parent.props.plain },

                // Secondary Button
                {
                    'text-white dark:text-secondary-950': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-secondary-500 dark:bg-secondary-600': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Secondary Text Button
                { 'text-secondary-500 dark:text-secondary-600': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Secondary Outlined Button
                { 'text-secondary-500 ring-1 ring-secondary-500 hover:bg-secondary-400/20': parent.props.outlined && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-success-500 dark:bg-success-600': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Success Text Button
                { 'text-success-500 dark:text-success-600': parent.props.text && parent.props.severity === 'success' && !parent.props.plain },
                // Success Outlined Button
                { 'text-success-500 ring-1 ring-success-500 hover:bg-success-400/20': parent.props.outlined && parent.props.severity === 'success' && !parent.props.plain },

                // Info Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-info-500 dark:bg-info-600': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Info Text Button
                { 'text-info-500 dark:text-info-600': parent.props.text && parent.props.severity === 'info' && !parent.props.plain },
                // Info Outlined Button
                { 'text-info-500 ring-1 ring-info-500 hover:bg-info-400/20 ': parent.props.outlined && parent.props.severity === 'info' && !parent.props.plain },

                // Warning Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-warning-500 dark:bg-warning-600': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Warning Text Button
                { 'text-warning-500 dark:text-warning-600': parent.props.text && parent.props.severity === 'warning' && !parent.props.plain },
                // Warning Outlined Button
                { 'text-warning-500 ring-1 ring-warning-500 hover:bg-warning-400/20': parent.props.outlined && parent.props.severity === 'warning' && !parent.props.plain },

                // Help Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-help-500 dark:bg-help-600': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Help Text Button
                { 'text-help-500 dark:text-help-600': parent.props.text && parent.props.severity === 'help' && !parent.props.plain },
                // Help Outlined Button
                { 'text-help-500 ring-1 ring-help-500 hover:bg-help-400/20': parent.props.outlined && parent.props.severity === 'help' && !parent.props.plain },

                // Danger Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-danger-500 dark:bg-danger-600': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Danger Text Button
                { 'text-danger-500 dark:text-danger-600': parent.props.text && parent.props.severity === 'danger' && !parent.props.plain },
                // Danger Outlined Button
                { 'text-danger-500 ring-1 ring-danger-500 hover:bg-danger-400/20': parent.props.outlined && parent.props.severity === 'danger' && !parent.props.plain },


                // --- Severity Button States ---

                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',

                // Link
                { 'focus-visible:outline-primary-500 dark:focus-visible:outline-primary-600': parent.props.link },

                // Plain
                { 'hover:bg-gray-600 hover:ring-gray-400': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Text & Outlined Button
                { 'hover:bg-surface-400/20 dark:hover:bg-surface-300/10': parent.props.plain && (parent.props.text || parent.props.outlined) },

                // Primary
                { 'hover:bg-primary-600 dark:hover:bg-primary-400 hover:ring-primary-300 dark:hover:ring-primary-500': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-primary-500 dark:focus-visible:outline-primary-500': parent.props.severity === null },
                // Text & Outlined Button
                { 'hover:bg-primary-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === null && !parent.props.plain },

                // Secondary
                { 'hover:bg-secondary-600 dark:hover:bg-secondary-300 hover:ring-secondary-600 dark:hover:ring-secondary-300': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-secondary-500 dark:focus-visible:outline-secondary-500': parent.props.severity === 'secondary' },
                // Text & Outlined Button
                { 'hover:bg-secondary-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success
                { 'hover:bg-success-600 dark:hover:bg-success-300 hover:ring-success-600 dark:hover:ring-success-300': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-success-500 dark:focus-visible:outline-success-500': parent.props.severity === 'success' },
                // Text & Outlined Button
                { 'hover:bg-success-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'success' && !parent.props.plain },

                // Info
                { 'hover:bg-info-600 dark:hover:bg-info-300 hover:ring-info-600 dark:hover:ring-info-300': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-info-500 dark:focus-visible:outline-info-500': parent.props.severity === 'info' },
                // Text & Outlined Button
                { 'hover:bg-info-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'info' && !parent.props.plain },

                // Warning
                { 'hover:bg-warning-600 dark:hover:bg-warning-300 hover:ring-warning-600 dark:hover:ring-warning-300': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-warning-500 dark:focus-visible:outline-warning-500': parent.props.severity === 'warning' },
                // Text & Outlined Button
                { 'hover:bg-warning-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'warning' && !parent.props.plain },

                // Help
                { 'hover:bg-help-600 dark:hover:bg-help-300 hover:ring-help-600 dark:hover:ring-help-300': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-help-500 dark:focus-visible:outline-help-500': parent.props.severity === 'help' },
                // Text & Outlined Button
                { 'hover:bg-help-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'help' && !parent.props.plain },

                // Warning
                { 'hover:bg-danger-600 dark:hover:bg-danger-300 hover:ring-danger-600 dark:hover:ring-danger-300': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-danger-500 dark:focus-visible:outline-danger-500': parent.props.severity === 'danger' },
                // Text & Outlined Button
                { 'hover:bg-danger-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'danger' && !parent.props.plain },

                // Disabled
                {
                    'bg-surface-300 dark:bg-surface-700 dark:text-surface-800 ring-surface-300 dark:ring-surface-700': parent.props.disabled, 
                    'pointer-events-none cursor-default': parent.props.disabled
                },

                // Transitions
                'transition duration-200 ease-in-out',

                // Misc
                'cursor-pointer overflow-hidden select-none',
            ]
        }),
        icon: {
            class: [
                // Margins
                'mr-2'
            ]
        }
    },
    menubutton: {
        root: ({ parent }) => ({
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                {
                    'px-2.5 py-1.5 text-sm': parent.props.size === 'small',
                    'px-3 py-2 text-sm': parent.props.size === null,
                    'px-3.5 py-2.5 text-sm': parent.props.size === 'large'
                },
                '-ml-px',

                // Shape
                'rounded-l-none',
                { 'rounded-l-full': parent.props.rounded },
                { 'rounded-md': !parent.props.rounded, 'rounded-full': parent.props.rounded },

                // Link Button
                { 'text-primary-600 dark:text-primary-400 bg-transparent ring-transparent': parent.props.link },

                // Plain Button
                { 'text-white bg-gray-500': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Plain Text Button
                { 'text-surface-500': parent.props.plain && parent.props.text },
                // Plain Outlined Button
                { 'text-surface-500 ring-gray-500': parent.props.plain && parent.props.outlined },

                // Text Button
                { 'bg-transparent ring-transparent': parent.props.text && !parent.props.plain },

                // Outlined Button
                { 'bg-transparent ring-1 shadow-sm ring-inset': parent.props.outlined && !parent.props.plain },

                // border
                'border-l border-surface-100/40 dark:border-surface-800/60',

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-white dark:text-surface-950': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-primary-500 dark:bg-primary-500': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Primary Text Button
                { 'text-primary-500 dark:text-primary-400': parent.props.text && parent.props.severity === null && !parent.props.plain },
                // Primary Outlined Button
                { 'text-primary-500 ring-1 ring-primary-500 hover:bg-primary-400/20': parent.props.outlined && parent.props.severity === null && !parent.props.plain },

                // Secondary Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-secondary-500 dark:bg-secondary-600': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Secondary Text Button
                { 'text-secondary-500 dark:text-secondary-600': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Secondary Outlined Button
                { 'text-secondary-500 ring-1 ring-secondary-500 hover:bg-secondary-400/20': parent.props.outlined && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-success-500 dark:bg-success-600': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Success Text Button
                { 'text-success-500 dark:text-success-600': parent.props.text && parent.props.severity === 'success' && !parent.props.plain },
                // Success Outlined Button
                { 'text-success-500 ring-1 ring-success-500 hover:bg-success-400/20': parent.props.outlined && parent.props.severity === 'success' && !parent.props.plain },

                // Info Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-info-500 dark:bg-info-600': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Info Text Button
                { 'text-info-500 dark:text-info-600': parent.props.text && parent.props.severity === 'info' && !parent.props.plain },
                // Info Outlined Button
                { 'text-info-500 ring-1 ring-info-500 hover:bg-info-400/20 ': parent.props.outlined && parent.props.severity === 'info' && !parent.props.plain },

                // Warning Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-warning-500 dark:bg-warning-600': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Warning Text Button
                { 'text-warning-500 dark:text-warning-600': parent.props.text && parent.props.severity === 'warning' && !parent.props.plain },
                // Warning Outlined Button
                { 'text-warning-500 ring-1 ring-warning-500 hover:bg-warning-400/20': parent.props.outlined && parent.props.severity === 'warning' && !parent.props.plain },

                // Help Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-help-500 dark:bg-help-600': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Help Text Button
                { 'text-help-500 dark:text-help-600': parent.props.text && parent.props.severity === 'help' && !parent.props.plain },
                // Help Outlined Button
                { 'text-help-500 ring-1 ring-help-500 hover:bg-help-400/20': parent.props.outlined && parent.props.severity === 'help' && !parent.props.plain },

                // Danger Button
                {
                    'text-white dark:text-surface-950': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-danger-500 dark:bg-danger-600': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                },
                // Danger Text Button
                { 'text-danger-500 dark:text-danger-600': parent.props.text && parent.props.severity === 'danger' && !parent.props.plain },
                // Danger Outlined Button
                { 'text-danger-500 ring-1 ring-danger-500 hover:bg-danger-400/20': parent.props.outlined && parent.props.severity === 'danger' && !parent.props.plain },


                // --- Severity Button States ---

                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',

                // Link
                { 'focus-visible:outline-primary-500 dark:focus-visible:outline-primary-500': parent.props.link },

                // Plain
                { 'hover:bg-gray-600 hover:ring-gray-400': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Text & Outlined Button
                { 'hover:bg-surface-400/20': parent.props.plain && (parent.props.text || parent.props.outlined) },

                // Primary
                { 'hover:bg-primary-600 dark:hover:bg-primary-400 hover:ring-primary-300 dark:hover:ring-primary-500': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-primary-500 dark:focus-visible:outline-primary-500': parent.props.severity === null },
                // Text & Outlined Button
                { 'hover:bg-primary-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === null && !parent.props.plain },

                // Secondary
                { 'hover:bg-secondary-600 dark:hover:bg-secondary-300 hover:ring-secondary-600 dark:hover:ring-secondary-300': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-secondary-500 dark:focus-visible:outline-secondary-500': parent.props.severity === 'secondary' },
                // Text & Outlined Button
                { 'hover:bg-secondary-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success
                { 'hover:bg-success-600 dark:hover:bg-success-300 hover:ring-success-600 dark:hover:ring-success-300': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-success-500 dark:focus-visible:outline-success-500': parent.props.severity === 'success' },
                // Text & Outlined Button
                { 'hover:bg-success-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'success' && !parent.props.plain },

                // Info
                { 'hover:bg-info-600 dark:hover:bg-info-300 hover:ring-info-600 dark:hover:ring-info-300': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-info-500 dark:focus-visible:outline-info-500': parent.props.severity === 'info' },
                // Text & Outlined Button
                { 'hover:bg-info-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'info' && !parent.props.plain },

                // Warning
                { 'hover:bg-warning-600 dark:hover:bg-warning-300 hover:ring-warning-600 dark:hover:ring-warning-300': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-warning-500 dark:focus-visible:outline-warning-500': parent.props.severity === 'warning' },
                // Text & Outlined Button
                { 'hover:bg-warning-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'warning' && !parent.props.plain },

                // Help
                { 'hover:bg-help-600 dark:hover:bg-help-300 hover:ring-help-600 dark:hover:ring-help-300': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-help-500 dark:focus-visible:outline-help-500': parent.props.severity === 'help' },
                // Text & Outlined Button
                { 'hover:bg-help-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'help' && !parent.props.plain },

                // Warning
                { 'hover:bg-danger-600 dark:hover:bg-danger-300 hover:ring-danger-600 dark:hover:ring-danger-300': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus-visible:outline-danger-500 dark:focus-visible:outline-danger-500': parent.props.severity === 'danger' },
                // Text & Outlined Button
                { 'hover:bg-danger-400/20': (parent.props.text || parent.props.outlined) && parent.props.severity === 'danger' && !parent.props.plain },

                // Disabled
                {
                    'bg-surface-300 dark:bg-surface-700 dark:text-surface-800 ring-surface-300 dark:ring-surface-700': parent.props.disabled, 
                    'pointer-events-none cursor-default': parent.props.disabled
                },

                // Transitions
                'transition duration-200 ease-in-out',

                // Misc
                'cursor-pointer overflow-hidden select-none',
            ]
        }),
        label: {
            class: ['hidden']
        }
    }
};
