<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>invalid</i> pass-through to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <Chips v-model="value" :pt="{ invalid: true }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Chips v-model="value" :pt="{ invalid: true }" />
`,
                options: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value" :pt="{ invalid: true }" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value" :pt="{ invalid: true }" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
`
            }
        };
    }
};
</script>
