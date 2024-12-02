<template>
    <div class="test">
        <div class="test-content"></div>
        <div class="test-content-item">
            <div>Chọn file</div>
        </div>
    </div>
</template>
<route>
    {
        "meta": {
            "both": true
        }
    }
    </route>
<script>
import axios from "axios-https-proxy-fix"
export default {
    data() {
        return {
            file: null
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.test {
    width: 100%;
    height: 100vh;
    background-color: #000;
}
.test-content {
    height: 200px;
}
</style>
