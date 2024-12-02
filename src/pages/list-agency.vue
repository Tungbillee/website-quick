<template>
    <div class="container-list-agency">
        <div class="all-list">
            <div class="spaces"></div>
            <div class="list-agency">
                <div class="flex-al-jt">
                    <img :src="img('logo_private.svg')" alt="" />
                </div>
                <div class="mgt-40 text-al fz-32 fw-600">Chọn đơn vị đại lý để đăng ký tài khoản</div>
                <div class="flex gap-20 mgt-30">
                    <div class="items-list">
                        <div><img :src="img('icon_agency_1.svg')" alt="" /></div>
                        <div class="fz-24 fw-600 mgt-15">3 Độ Agency</div>
                        <div style="line-height: 25px" class="mgt-15">Là đơn vị cung cấp các giải pháp marketing và vận hành cho doanh nghiệp, giúp tối ưu hóa chi phí quảng cáo và gia tăng lợi nhuận cho khách hàng</div>
                        <div class="button mgt-40 flex-al-jt" @click="goToContactDC">Liên hệ đại lý</div>
                    </div>
                    <div class="items-list">
                        <div class="skeleton w-80"></div>
                        <div class="skeleton w-200 mgt-15"></div>
                        <div class="skeleton w-full mgt-15" style="height: 75px"></div>
                        <div class="skeleton w-150 mgt-40" style="height: 40px"></div>
                    </div>
                </div>
                <div class="flex-al-jt mgt-20">
                    <div class="flex-al gap-5" style="cursor: pointer" @click="backHome">
                        <img :src="img('icon_back.svg')" alt="" />
                        <div class="fw-600">Quay lại trang chủ</div>
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
            listAgency: []
        }
    },
    methods: {
        img(data) {
            return "images/admin-panel/" + data
        },
        backHome() {
            this.$router.push("/")
        },
        goToContactDC() {
            window.open("https://www.facebook.com/Quick.magic1/", "_blank")
        }
    }
}
</script>

<style lang="scss" scoped>
.container-list-agency {
    width: 100%;
    font-size: 14px;
    height: 100vh;
    width: 100%;
    background-image: url("/images/admin-panel/bk_buy.png");
    background-size: cover;
    background-position: center;
    .all-list {
        height: 100%;
        max-width: 1218px;
        margin: 0 auto;
        .spaces {
            height: 200px;
        }
        .list-agency {
            height: calc(100% - 200px);
            .items-list {
                width: 100%;
                padding: 70px 83px 55px 77px;
                border-radius: 16px;
                background: rgba(255, 255, 255, 0.03);
            }
        }
    }
}
.skeleton {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
    height: 20px;

    &.w-80 {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    &.w-150 {
        width: 100%;
    }
    &.w-200 {
        width: 200px;

        height: 30px;
    }
    &.w-full {
        width: 100%;
    }
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>
