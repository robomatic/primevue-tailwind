export default {
    root: {
        class: [
            // Sizing and Shape
            'min-w-[12rem]',
            'rounded-md',
            'shadow-lg',
            // Spacing
            'py-1.5',
            'mt-2',
            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-white/80',
            'border border-surface-200 dark:border-surface-700/50'
        ]
    },
    menu: {
        class: [
            // Spacings and Shape
            'list-none',
            'm-0',
            'p-0',
            'outline-none',
        ]
    },
    menuitem: {
        class: [
            // Space
            'first:mt-0 mt-1'
        ]
    },
    content: ({ context }) => ({
        class: [
            //Shape
            'rounded-none',

            // Colors
            {
                'text-surface-700 dark:text-surface-0': !context.focused,
                'text-primary-600 dark:text-primary-400': context.focused
            },

            // Transitions
            'transition-shadow',
            'duration-200',

            // States
            'hover:text-white',
            'hover:bg-primary-500'
        ]
    }),
    action: {
        class: [
            'relative',

            // Flexbox
            'flex',
            'items-center',

            // Spacing
            'py-2',
            'px-3',

            // Misc
            'no-underline',
            'overflow-hidden',
            'cursor-pointer',
            'select-none'
        ]
    },
    icon: {
        class: [
            // Spacing
            'mr-2',
            'leading-6',
            'text-sm'
        ]
    },
    label: {
        class: ['leading-6', 'text-sm']
    },
    submenuheader: {
        class: [
            // Font
            'font-semibold',
            'text-xs leading-6',

            // Spacing
            'm-0 ',
            'py-1',
            'px-3',

            // Shape
            'rounded-tl-none',
            'rounded-tr-none',

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-600 dark:text-surface-0/60'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
