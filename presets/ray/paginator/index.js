import buttonConfig from '../button';
import dropdownConfig from '../dropdown';
import inputNumberConfig from '../inputnumber';

export default {
    root: {
        class: [
            'flex items-center justify-center flex-wrap gap-1 md:gap-2',
            'bg-surface-0 text-surface-500 border-0 px-4 py-2 rounded-md',
            'dark:bg-surface-900 dark:text-white/60 dark:border-surface-700', // Dark Mode
        ],
    },
    pages: {
        class: ['flex gap-1 md:gap-2'],
    },
    firstpagebutton: ({ context }) =>
        buttonConfig.root({
            props: { size: null, severity: null, text: true },
            context,
        }),
    previouspagebutton: ({ context }) =>
        buttonConfig.root({
            props: { severity: null, text: true },
            context,
        }),
    nextpagebutton: ({ context }) =>
        buttonConfig.root({
            props: { severity: null, text: true },
            context,
        }),
    lastpagebutton: ({ context }) =>
        buttonConfig.root({
            props: { severity: null, text: true },
            context,
        }),
    pagebutton: ({ context }) =>
        buttonConfig.root({
            props: { severity: null, text: !context.active, rounded: true, outlined: true },
            context,
        }),
    rowperpagedropdown: dropdownConfig,
    jumptopageinput: {
        root: inputNumberConfig.root,
        input: inputNumberConfig.input,
    },
    jumptopagedropdown: dropdownConfig,
};
