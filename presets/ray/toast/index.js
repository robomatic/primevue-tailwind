export default {
    root: ({ props }) => ({
        class: [
            //Size and Shape
            'w-96 rounded-sm',

            // Positioning
            { '-translate-x-2/4': props.position == 'top-center' || props.position == 'bottom-center' }
        ]
    }),
    container: ({ props }) => ({
        class: [
            'my-4 rounded-sm w-full',
            'border-solid border-0 border-l-[6px]',
            'backdrop-blur-[10px] shadow-md',

            // Colors
            {
                'bg-info-100/70 dark:bg-info-500/30': props.message.severity == 'info',
                'bg-success-100/70 dark:bg-success-500/30': props.message.severity == 'success',
                'bg-warning-100/70 dark:bg-warning-500/30': props.message.severity == 'warn',
                'bg-danger-100/70 dark:bg-danger-500/30': props.message.severity == 'error',
            },
            {
                'border-info-500 dark:border-info-400': props.message.severity == 'info',
                'border-success-500 dark:border-success-400': props.message.severity == 'success',
                'border-warning-500 dark:border-warning-400': props.message.severity == 'warn',
                'border-danger-500 dark:border-danger-400': props.message.severity == 'error',
            },
            {
                'text-info-700 dark:text-info-300': props.message.severity == 'info',
                'text-success-700 dark:text-success-300': props.message.severity == 'success',
                'text-warning-700 dark:text-warning-300': props.message.severity == 'warn',
                'text-danger-700 dark:text-danger-300': props.message.severity == 'error',
            },
        ]
    }),
    content: {
        class: 'flex items-start p-4'
    },
    icon: {
        class: [
            // Sizing and Spacing
            'w-6 h-6',
            'text-lg leading-none mr-2 shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-none',
            'ml-2',
            'flex-1'
        ]
    },
    summary: {
        class: 'font-bold block'
    },
    detail: {
        class: 'mt-2 block'
    },
    closebutton: {
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-8 h-8',

            // Spacing and Misc
            'ml-auto  relative',

            // Shape
            'rounded-full',

            // Colors
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:bg-surface-0/50 dark:hover:bg-surface-0/10',

            // Misc
            'overflow-hidden'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 translate-y-2/4',
        enterActiveClass: 'transition-[transform,opacity] duration-300',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: '!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden',
        leaveToClass: 'max-h-0 opacity-0 mb-0'
    }
};
