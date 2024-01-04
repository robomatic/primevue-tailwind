export default {
    root: {
        class: [
            'relative',
            'sticky top-0 z-40',

            // Flexbox
            'flex',
            'items-center',
            'justify-between',
            'gap-6',

            // Spacing
            'px-4 py-1',
            'min-h-12',

            // Shape
            'shadow-md',

            // Color
            'bg-primary-600',
        ]
    },
    menu: ({ props }) => ({
        class: [
            // Flexbox
            'sm:flex sm:row-gap-2 sm:col-gap-4',
            'items-center',
            'flex-wrap',
            'flex-col sm:flex-row',
            { hidden: !props?.mobileActive, flex: props?.mobileActive },

            // Position
            'absolute sm:relative',
            'top-full left-0',
            'sm:top-auto sm:left-auto',

            // Size
            'w-full sm:w-auto',

            // Spacing
            'm-0 ',
            'py-2 px-1.5 sm:py-0 sm:p-0 sm:py-1.5',
            'list-none',

            // Shape
            'shadow-md sm:shadow-none',
            'border-0',
            'sm:rounded-none rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent',
            'text-white/70',

            // Misc
            'outline-none',
        ]
    }),
    menuitem: {
        class: [
            'sm:relative sm:w-auto w-full static',
        ]
    },
    content: ({ props, context }) => ({
        class: [
            // Shape
            { 'rounded-md': props.root },

            //  Colors
            {
                'text-surface-800 dark:text-white/70': !context.focused && !context.active && context.level === 0 && props?.mobileActive,
                'text-white/80 dark:text-white/70': !context.focused && !context.active && context.level === 0 && !props?.mobileActive,
                'text-surface-600 dark:text-surface-400': !context.focused && !context.active && context.level > 0,
                'text-white dark:text-white/70 bg-primary-500 dark:bg-primary-500': context.focused && !context.active,
                'text-white dark:text-white/80 bg-primary-500 dark:bg-primary-500': context.focused && context.active,
                'text-white/80 dark:text-white/70 bg-primary-500 dark:bg-primary-500': !context.focused && context.active
            },

            // Hover States
            {
                'hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white': !context.active,
                'hover:bg-primary-500 dark:hover:bg-primary-500': context.active
            },

            // Transitions
            'transition-all',
            'duration-200',
        ]
    }),
    action: ({ context }) => ({
        class: [
            'relative',

            // Font
            'sm:text-sm',

            // Flexbox
            'flex',
            'items-center',

            // Spacing
            'py-2',
            'px-3',
            'my-1 sm:my-0',

            // Size
            {
                'pl-5 sm:pl-3': context.level === 1,
                'pl-7 sm:pl-3': context.level === 2
            },

            // Misc
            'select-none',
            'cursor-pointer',
            'no-underline ',
            'overflow-hidden',
        ]
    }),
    icon: {
        class: 'mr-2'
    },
    submenuicon: ({ props, context }) => ({
        class: [
            {
                'ml-auto sm:ml-2': props.root,
                'ml-auto': !props.root
            }
        ]
    }),
    submenu: ({ props }) => ({
        class: [
            // Size
            'w-full sm:w-48',

            // Spacing
            'py-1',
            'list-none',

            // Shape
            'shadow-none sm:shadow-lg',
            'border-0',
            'rounded-md',

            // Position
            'static sm:absolute',
            'z-10',
            {
                'sm:absolute sm:left-full top-0 sm:-top-1 mt-0': props.level > 1,
                'mt-2': props.level === 1
            },

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'ring-1 ring-surface-200 dark:ring-surface-700/50',
        ]
    }),
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-700'
    },
    button: {
        class: [
            // Flexbox
            'flex sm:hidden',
            'items-center justify-center',

            // Size
            'w-8',
            'h-8',

            // Spacing
            'm-2',

            // Shape
            'rounded-full',

            // Color
            'text-white dark:text-white/80',

            // States
            'hover:text-surface-600 dark:hover:text-white/60',
            'hover:bg-surface-50 dark:hover:bg-surface-800/80',
            'focus:outline-none focus:outline-offset-0',
            'focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400',

            // Transitions
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer',
            'no-underline',
        ]
    },
    end: {
        class: 'ml-auto self-center'
    }
};
