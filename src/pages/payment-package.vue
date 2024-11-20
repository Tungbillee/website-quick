<template>
    <div class="container">
        <template v-if="is_buy">
            <div class="container-all-buy">
                <div class="space"></div>
                <div class="table-buy-more flex-al-jt">
                    <div class="billing-buy-more flex-cl-al ps-rl">
                        <div class="icon_logo flex-al-jt" style="padding: 10px">
                            <img style="width: 100%; height: 100%" :src="getIconByName" alt="" />
                        </div>
                        <div class="fw-600 fz-20">{{ selected_period }}</div>

                        <div class="fw-600 text-green mgt-20">SỬ DỤNG TOÀN BỘ TÍNH NĂNG</div>
                        <div class="flex-al mgt-15 gap-10" v-for="(item, index) in what_select" :key="index">
                            <img :src="img('icon_ok.svg')" alt="" />
                            <div class="title-content">{{ item }}</div>
                        </div>
                        <div class="flex-al gap-10 mgt-20">
                            <img :src="img('icon_ok.svg')" alt="" />
                            <div class="title-content">
                                <div>
                                    {{ formatNumber(select_package?.time ?? 0) }} + <span class="text-yellow">bonus {{ formatNumber(select_package.bonus_time) }} </span> phút tạo phụ đề AI
                                </div>
                                <div class="mgt-10">
                                    {{ formatNumber(select_package?.voice ?? 0) }} + <span class="text-yellow">bonus {{ formatNumber(select_package.bonus_voice) }} </span> ký tự lồng tiếng AI
                                </div>
                            </div>
                        </div>
                        <div class="mgt-20 dashed"></div>
                        <div class="flex-bw-al" style="width: 100%">
                            <div class="text-300 fz-16">Số point cần thanh toán</div>
                            <div class="fw-600 fz-16 flex-al gap-5">
                                <div>{{ formatNumber(select_package?.price ?? 0) }}</div>
                                <div class="flex-al gap-3">
                                    <img :src="img('icon_point.svg')" alt="" />
                                    <div class="text-yellow fw-600">Point</div>
                                </div>
                            </div>
                        </div>
                        <div class="info-balace flex-bw-al">
                            <div class="flex-al gap-5">
                                <img :src="img('icon_card_buy_more.svg')" alt="" />
                                <div class="fw-600">Số dư tài khoản</div>
                            </div>
                            <div class="flex-al gap-5">
                                <div class="fw-600">{{ formatNumber(user?.balance ?? 0) }}</div>
                                <div class="flex-al gap-3">
                                    <img :src="img('icon_point.svg')" alt="" />
                                    <div class="text-yellow fw-600">Point</div>
                                </div>
                            </div>
                        </div>
                        <div class="button flex-al-jt mgt-20" style="border-radius: 10px; width: 100%" @click="goToPayment">Thanh toán ngay</div>
                        <div class="flex-al-jt gap-5 mgt-30" style="cursor: pointer" @click="goToBuyPackage">
                            <img :src="img('icon_back.svg')" alt="" />
                            <div class="text-300 fz-16">Quay lại bảng giá</div>
                        </div>
                        <div class="text-red flex-al-jt mgt-20">{{ error }}</div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="flex-al-jt" style="width: 100%; height: 100%">
                <div class="flex-cl-jt">
                    <img style="padding-left: 20px" :src="img('buy_success.svg')" alt="" />
                    <div style="text-align: center" class="fw-600 fz-24 mgt-10">Thanh toán thành công</div>
                    <div class="fz-16 mgt-10">Đến trang quản lý xem chi tiết giao dịch</div>
                    <div class="button mgt-30 flex-al-jt" @click="goToManage">Đến trang quản lý</div>
                </div>
            </div>
        </template>
    </div>
</template>
<route>
    {
    "meta": {
      "needLogin": true
    }
  }
    </route>
<script>
import { useUserStore, priceStore, useBuyPackageStore } from "../store"

export default {
    data() {
        return {
            user: {},
            is_buy: true,
            type_time: "month",
            error: "",
            what_select: ["Sản xuất video bản tin hàng loạt", "Ghép (duet)", "Nối video", "Tải hàng loạt video từ nhiều nền tảng"],
            price: [],
            minutes_buy: 0,
            voice_buy: 0,
            totalPrice: 0,
            selected_period: "",
            select_package: null,
            packagesList: [
                {
                    icon: "icon_Normal_big.svg",
                    name: "Normal",
                    content: "Gói dành cho nhu cầu trung bình"
                },
                {
                    icon: "icon_Advance_big.svg",
                    name: "Advance",
                    content: "Gói dành cho nhu cầu cao"
                },
                {
                    icon: "icon_Pro_big.svg",
                    name: "Pro",
                    content: "Gói dành cho nhu cầu cao"
                }
            ]
        }
    },

    computed: {
        getIconByName() {
            let iconName = this.select_package.name
            const iconMap = {
                Normal: "icon_Normal_big.svg",
                Pro: "icon_Pro_big.svg",
                Advance: "icon_Advance_big.svg"
            }
            return this.img(iconMap[iconName] || "default_icon.svg")
        },
        selected_period() {
            const periodMap = {
                Normal: "1 tháng",
                Advance: "6 tháng",
                Pro: "12 tháng"
            }
            return periodMap[this.select_package?.name] || ""
        }
    },
    created() {
        this.getUser()
        this.select_package = JSON.parse(localStorage.getItem("select_package"))

        this.price = priceStore().price
    },
    methods: {
        formatNumber(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        goToManage() {
            this.$router.push("/settings")
        },
        goToBuyPackage() {
            this.$router.push("/buy-package")
        },
        async goToPayment() {
            let res = await this.api({
                path: "/web/user/buy-package",
                method: "POST",
                data: {
                    name_package: this.select_package.name,
                    selected_period: this.select_package.period
                }
            })

            if (res.success) {
                this.is_buy = false
            } else {
                this.error = res.message
            }
        },
        img(data) {
            return "images/admin-panel/" + data
        },
        async getUser(retryCount = 3) {
            try {
                let res = await this.api({
                    path: "/web/user/get-info"
                })

                if (res.success) {
                    this.user = res.data_user
                } else {
                    throw new Error("API request failed")
                }
            } catch (error) {
                console.error("Error fetching user info:", error)
                if (retryCount > 0) {
                    // Đợi 1 giây trước khi thử lại
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    return this.getUser(retryCount - 1)
                }
                // Xử lý khi đã hết số lần thử lại
                console.error("Max retry attempts reached")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    font-size: 14px;
    height: 100vh;
    width: 100%;
    background-image: url("/images/admin-panel/bk_buy.png");
    background-size: cover;
    background-position: center;
}
.container-all-buy {
    max-width: 1218px;
    margin: 0 auto;
}
.space {
    height: 200px;
}
.table-buy-more {
    height: calc(100% - 200px);
    display: flex;
    gap: 120px;
    .billing-buy-more {
        width: 803px;
        height: 653px;
        padding: 60px 120px;
        border-radius: 20px;
        background-image: url("/images/admin-panel/payment-buy.png");
        background-size: cover;
        background-position: center;
        .icon_logo {
            position: absolute;
            top: -4%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 136px;
            height: 136px;
            border-radius: 50%;
            background-color: #080c1e;
        }
        .dashed {
            border-top: 1px dashed rgba(255, 255, 255, 0.2);

            width: 100%;
            margin: 30px 0;
        }
        .info-balace {
            width: 100%;
            margin-top: 20px;
            padding: 10px 15px;
            border-radius: 9px;
            border: 1px solid #c7ffcf;
            background: rgba(106, 239, 125, 0.05);
        }
    }
}
</style>
