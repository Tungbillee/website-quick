<template>
    <div
        @click="$emit('click')"
        class="_icon"
        :style="[
            {
                width: size_width ? size_width + 'px' : size + 'px',
                height: size + 'px',
                'mask-image': `url(${src})`,
                '-webkit-mask-image': `url(${src})`,
                background: color
            }
        ]"></div>
</template>

<script>
export default {
    props: {
        src: String,
        size: {
            type: [Number, String],
            default: 20
        },
        size_width: {
            type: [Number, String],
            default: ""
        },
        color: {
            type: String,
            default: "currentColor"
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
._icon {
    display: inline-block;
    flex-shrink: 0;
}
</style>
