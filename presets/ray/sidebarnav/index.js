export default {
    root: {
        class: ['relative flex flex-1'],
    },
    container: ({ props }) => ({
        class: [
            'bg-primary-600 flex flex-col gap-y-5 overflow-x-visible pb-2 transition-all duration-300',
            {
                'w-48 px-6': props.sidebarOpen,
                'w-18 px-4': !props.sidebarOpen,
            },
        ],
    }),
    nav: {
        class: ['mt-6 flex flex-(1 col)'],
    },
    navList: {
        class: ['flex-1 -mx-2 space-y-4'],
    },
};
