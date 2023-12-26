<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="invalid" :pt="{ invalid: true }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            checked: false,
            code: {
                basic: `
<RadioButton :pt="{ invalid: true }" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <RadioButton :pt="{ invalid: true }" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <RadioButton :pt="{ invalid: true }" />
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
