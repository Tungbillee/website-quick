<template>
    <div class="container-download-file">
        <div class="body-download">
            <div class="spaces"></div>
            <div class="contents flex-al-jt">
                <div class="info">
                    <div style="font-size: 36px" class="flex-al-jt fw-700 text-gradien">Chọn phiên bản để tải xuống</div>
                    <div class="flex gap-20 mgt-40">
                        <div class="download flex-cl-bw" @click="downloadMacos">
                            <div>
                                <img :src="img('macos.svg')" alt="" />
                                <div class="fz-20 fw-600 mgt-15">Dành cho Mac OS</div>
                                <div class="mgt-25">Phù hợp cho hệ điều hành Mac OS sử dụng chip M1 trở lên</div>
                            </div>
                            <div class="button-download flex-al gap-10">
                                <img :src="img('download.svg')" alt="" />
                                <div class="fz-16 fw-600">Tải xuống</div>
                            </div>
                        </div>
                        <div class="download flex-cl-bw" @click="downloadWindow">
                            <div>
                                <img :src="img('windown.svg')" alt="" />
                                <div class="fz-20 fw-600 mgt-15">Dành cho Windows</div>
                                <div class="mgt-25">Phù hợp cho tất cả hệ điều hành Window</div>
                                <div class="mgt-10">Yêu cầu phiên bản Driver version 522.25 trở lên ( Nếu máy sử dụng GPU)</div>
                            </div>

                            <div class="button-download flex-al gap-10">
                                <img :src="img('download.svg')" alt="" />
                                <div class="fz-16 fw-600">Tải xuống</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
export default {
    data() {
        return {
            version: 1
        }
    },
    methods: {
        img(data) {
            return "images/download/" + data
        },
        downloadMacos() {
            window.open("https://download.quickmagic.vn/Quick%20Magic-3.0.3-arm64.pkg", "_blank")
        },
        downloadWindow() {
            window.open("https://download.quickmagic.vn/Quick%20Magic%20Setup%203.0.3.zip", "_blank")
        }
    }
}
</script>

<style lang="scss" scoped>
.container-download-file {
    width: 100%;
    height: 100%;
}
.body-download {
    max-width: 1218px;
    margin: 0 auto;
}
.spaces {
    width: 100%;
    height: 200px;
}
.contents {
    width: 100%;
    height: calc(100% - 200px);
    .info {
        padding: 42px 49px;
        width: 862px;
        height: 597px;
        border-radius: 20px;
        background: #121522;
    }
}
.download {
    padding: 36px;
    height: 358px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid rgba(241, 242, 244, 0.2);
    background: #121522;
    cursor: pointer;
    &:hover {
        border: 1px solid #f0ba2e;
        background: rgba(217, 217, 217, 0.1);
        .button-download {
            background: linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%);
        }
    }
    .button-download {
        margin-top: 25px;
        border-radius: 6px;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 8px 16px;
    }
}
</style>
