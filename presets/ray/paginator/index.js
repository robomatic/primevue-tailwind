import buttonConfig from '../button'
import inputNumberConfig from '../inputnumber'
import dropdownConfig from '../dropdown'

export default {
    root: {
        class: [
            'flex items-center justify-center flex-wrap gap-1 md:gap-2',
            'bg-surface-0 text-surface-500 border-0 px-4 py-2 rounded-sm',
            'dark:bg-surface-900 dark:text-white/60 dark:border-surface-700' // Dark Mode
        ]
    },
    firstpagebutton: ({ context }) => buttonConfig.root({
        props: { severity: null, text: true },
        context
    }),
    previouspagebutton: ({ context }) => buttonConfig.root({
        props: { severity: null, text: true },
        context
    }),
    nextpagebutton: ({ context }) => buttonConfig.root({
        props: { severity: null, text: true },
        context
    }),
    lastpagebutton: ({ context }) => buttonConfig.root({
        props: { severity: null, text: true },
        context
    }),
    pagebutton: ({ context }) => buttonConfig.root({
        props: { severity: null, text: !context.active, rounded: true, outlined: true },
        context
    }),
    rowperpagedropdown: dropdownConfig,
    jumptopageinput: inputNumberConfig,
    jumptopagedropdown: dropdownConfig
};
