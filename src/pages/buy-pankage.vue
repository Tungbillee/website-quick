<template>
    <div class="container-buy-pancake">
        <div class="all-content">
            <div class="spaces"></div>
            <div class="list-pankage">
                <div class="flex-al gap-20">
                    <div class="item-pankage">
                        <div class="flex-al gap-3" @click="goToManage" style="cursor: pointer">
                            <img :src="img('icon_back.svg')" alt="" />
                            <div class="fw-600">Quay lại</div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-20 mgt-20" style="align-items: end">
                    <div
                        v-for="(item, index) in packagesData"
                        :key="index"
                        class="items-pankage flex-cl gap-40"
                        :style="{
                            backgroundImage: `url(/images/admin-panel/${item.name}.png)`,
                            height: index === 1 ? '650px' : '594px'
                        }">
                        <div class="flex-cl gap-15">
                            <div class="flex-al gap-10">
                                <div><img :src="getIconByName(item.name)" alt="" /></div>
                                <div class="title-name">
                                    <template v-if="item.name === 'Normal'"> 1 tháng</template>
                                    <template v-if="item.name === 'Advance'"> 6 tháng</template>
                                    <template v-if="item.name === 'Pro'"> 12 tháng</template>
                                </div>
                                <div class="text-300 fz-16 mgt-5">{{ item.content }}</div>
                            </div>
                            <div v-if="item.name === 'Pro'">
                                <span class="fz-24 fw-600">{{ formatNumber(item.price / 12) }}</span> <span class="text-300">point/tháng</span>
                            </div>
                            <div v-if="item.name === 'Advance'">
                                <span class="fz-24 fw-600">{{ formatNumber(item.price / 6) }}</span> <span class="text-300">point/tháng</span>
                            </div>
                            <div v-if="item.name === 'Normal'">
                                <span class="fz-24 fw-600">{{ formatNumber(item.price) }}</span> <span class="text-300">point/tháng</span>
                            </div>
                        </div>
                        <div class="button-buy" :class="{ active: item.name === 'Advance' }" @click="buyPackage(item)">Mua ngay</div>
                        <div class="flex-cl gap-20">
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Phụ đề & lồng tiếng tự động</div>
                            </div>
                            <div class="flex-al gap-20" style="padding-left: 20px">
                                <img :src="img('icon_ok_sub.svg')" alt="" />
                                <div>
                                    <div>
                                        <span class="title-content fw-600">{{ formatNumber(item.time) }}</span> <span class="text-300 title-content">phút tạo phụ đề</span>
                                    </div>
                                    <div class="mgt-15">
                                        <span class="title-content fw-600">{{ formatNumber(item.voice) }}</span> <span class="text-300 title-content">Ký tự lồng tiếng</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Sản xuất video bản tin hàng loạt</div>
                            </div>
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Ghép (duet)</div>
                            </div>
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Nối video</div>
                            </div>
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Tải hàng loạt video từ nhiều nền tảng</div>
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
import { useUserStore, priceStore, useBuyPackageStore } from "../store"

export default {
    data() {
        return {
            user: {},
            is_buy: false,
            type_time: "month",
            select_package: null,
            what_select: ["Sản xuất video bản tin hàng loạt", "Ghép (duet)", "Nối video", "Tải hàng loạt video từ nhiều nền tảng"],
            timeOptions: [
                { value: "month", label: "Theo tháng" },
                { value: "quarter", label: "Theo quý" },
                { value: "year", label: "Theo năm" }
            ],
            minutes_buy: 0,
            voice_buy: 0,
            totalPrice: 0,
            selected_period: "",
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
        packagesData() {
            const prices = priceStore().price
            console.log(prices, "prices")
            return prices
        }
    },
    created() {
        this.getUser()
    },
    methods: {
        getIconByName(iconName) {
            const iconMap = {
                Normal: "icon_plus.svg",
                Advance: "icon_Pro.svg",
                Pro: "icon_Advance.svg"
            }
            return this.img(iconMap[iconName] || "default_icon.svg")
        },
        getPeriodLabel(period) {
            const mapping = {
                month: "Theo tháng",
                quarter: "Theo quý",
                year: "Theo năm"
            }
            return mapping[period]
        },

        buyPackage(item) {
            let user = useUserStore()

            if (user.isLogin) {
                this.$router.push("/payment-package")
                localStorage.setItem("select_package", JSON.stringify(item))
            } else {
                this.$router.push("/login")
            }
        },
        formatNumber(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        // Thêm method để chuyển đổi type_time sang label
        getTimeLabel(type) {
            const mapping = {
                month: "Theo tháng",
                quarter: "Theo quý",
                year: "Theo năm"
            }
            return mapping[type]
        },
        goToManage() {
            this.$router.push("/settings")
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
                    console.log(`Retrying... ${retryCount} attempts left`)
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
.container-buy-pancake {
    font-size: 14px;
    height: 100vh;
    width: 100%;
    background-image: url("/images/admin-panel/bk_buy.png");
    background-size: cover;
    background-position: center;
}
.all-content {
    max-width: 1218px;
    margin: 0 auto;
    .spaces {
        height: 150px;
    }
    .list-pankage {
        height: calc(100% - 150px);
        .items-pankage {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            min-width: 393px;
            height: 594px;
            background-size: cover;
            background-position: center;
            padding: 30px 40px;
            .title-name {
                font-size: 20px;
                font-weight: 600;
                line-height: 20px;
            }
            .title-content {
                font-size: 16px;
                line-height: 18px;
            }
            .button-buy {
                border-radius: 10px;
                border: 1px solid #f0ba2e;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.5s ease;
                &.active {
                    background: linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%);
                    color: #fff;
                }
            }
        }
        .item-pankage {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            min-width: 393px;
            background-size: cover;
            background-position: center;
            .select-item-pankage {
                width: 100%;
                border-radius: 50px;
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 7px 10px;
                cursor: pointer;
                &.active {
                    background: rgba(255, 183, 15, 0.2);
                    border: 1px solid #f0ba2e;
                }
            }
        }
    }
}
</style>
