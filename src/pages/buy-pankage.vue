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
                <div class="bonus-package flex-bw-al">
                    <div class="flex-al gap-10">
                        <img :src="img('icon_bonus.svg')" alt="" />
                        <div>
                            <div class="text-yellow">Khuyến mãi mừng ra mắt</div>
                            <div class="fw-600 mgt-10">Tặng bonus lên đến <span class="item-bonus">200%</span> khi mua gói cước - chi tiết xem ở từng gói</div>
                        </div>
                    </div>
                    <div class="flex-al gap-10">
                        <div class="flex-al gap-5">
                            <div class="time">{{ countdown.days }}</div>
                            <div>Ngày</div>
                        </div>
                        <div class="text-300">:</div>
                        <div class="flex-al gap-5">
                            <div class="time">{{ countdown.hours }}</div>
                            <div>giờ</div>
                        </div>
                        <div class="text-300">:</div>
                        <div class="flex-al gap-5">
                            <div class="time">{{ countdown.minutes }}</div>
                            <div>phút</div>
                        </div>
                        <div class="text-300">:</div>
                        <div class="flex-al gap-5">
                            <div class="time">{{ countdown.seconds }}</div>
                            <div>giây</div>
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
                            height: index === 1 ? '650px' : '610px'
                        }">
                        <div class="flex-cl gap-15">
                            <div class="flex-al gap-10">
                                <div><img :src="getIconByName(item.name)" alt="" /></div>
                                <div class="title-name">
                                    <template v-if="item.name === 'Normal'"> 1 tuần</template>
                                    <template v-if="item.name === 'Advance'"> 3 tháng</template>
                                    <template v-if="item.name === 'Pro'"> 6 tháng</template>
                                </div>
                                <div class="text-300 fz-16 mgt-5">{{ item.content }}</div>
                            </div>
                            <div class="flex-al gap-15" v-if="item.name === 'Pro'">
                                <div>
                                    <span class="fz-24 fw-600">{{ formatNumber(item.price / 6) }}</span> <span class="text-300">point/tháng</span>
                                </div>
                                <div class="voucher">Giảm 50%</div>
                            </div>

                            <div class="flex-al gap-15" v-if="item.name === 'Advance'">
                                <div>
                                    <span class="fz-24 fw-600">{{ formatNumber(item.price / 3) }}</span> <span class="text-300">point/tháng</span>
                                </div>
                                <div class="voucher">Giảm 40%</div>
                            </div>
                            <div v-if="item.name === 'Normal'">
                                <span class="fz-24 fw-600">{{ formatNumber2(item.price / 7) }}</span> <span class="text-300">point/ngày</span>
                            </div>
                            <div style="width: 100%; height: 1px; border-bottom: 1px dashed rgba(255, 255, 255, 0.3)"></div>
                            <div class="text-all-package" v-if="item.name === 'Normal'">500.000 point/tuần</div>
                            <div class="text-all-package" v-if="item.name === 'Advance'">3.600.000 point/3 tháng</div>
                            <div class="text-all-package" v-if="item.name === 'Pro'">6.000.000 point/6 tháng</div>
                        </div>

                        <div class="button-buy" :class="{ active: item.name === 'Advance' }" @click="buyPackage(item)">Mua ngay</div>
                        <div class="flex-cl gap-20 ps-rl">
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Phụ đề & lồng tiếng tự động AI</div>
                                <div class="all-tooltip">
                                    <img class="icon-info" :src="img('icon_info.svg')" alt="" />
                                    <div class="tooltip-info">
                                        <div style="color: #1f2937"><span class="fw-600">Phút tạo phụ đề:</span> giúp ban chuyển đổi âm thanh có giọng nói trong video thành văn bản phụ đề</div>
                                        <div class="mgt-20" style="color: #1f2937"><span class="fw-600">Ký tự lồng tiếng:</span> Giúp bạn chuyển đổi văn bản thành giọng nói AI</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-al gap-20" style="padding-left: 20px">
                                <img :src="img('icon_ok_sub.svg')" alt="" />
                                <div>
                                    <div>
                                        <span class="title-content fw-600"
                                            >{{ formatNumber(item.time) }} + <span class="text-yellow">bonus {{ formatNumber(item.bonus_time) }} </span></span
                                        >
                                        <span class="text-300 title-content"> phút tạo phụ đề</span>
                                    </div>
                                    <div class="mgt-15">
                                        <span class="title-content fw-600"
                                            >{{ formatNumber(item.voice) }} + <span class="text-yellow">bonus {{ formatNumber(item.bonus_voice) }} </span></span
                                        >
                                        <span class="text-300 title-content"> Ký tự lồng tiếng</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Sản xuất video bản tin hàng loạt</div>
                            </div>
                            <div class="flex-al gap-10">
                                <img :src="img('icon_ok.svg')" alt="" />
                                <div class="title-content">Sản xuất hàng loạt video template</div>
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

            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            timer: null,
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

            return prices
        }
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    },
    created() {
        this.getUser()
        this.startTimer()
    },
    methods: {
        startTimer() {
            // Đặt ngày bắt đầu
            const startDate = new Date("2024-12-03")
            // Thêm 60 ngày để có ngày kết thúc
            const endDate = new Date(startDate.getTime() + 60 * 24 * 60 * 60 * 1000)

            this.timer = setInterval(() => {
                const now = new Date()
                const difference = endDate - now

                if (difference > 0) {
                    this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24))
                    this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                    this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
                    this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000)
                } else {
                    clearInterval(this.timer)
                    this.countdown = {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    }
                }
            }, 1000)
        },
        getIconByName(iconName) {
            const iconMap = {
                Normal: "icon_plus.svg",
                Advance: "icon_Pro.svg",
                Pro: "icon_Advance.svg"
            }
            return this.img(iconMap[iconName] || "default_icon.svg")
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
        formatNumber2(price) {
            // Làm tròn số lên đến hàng nghìn gần nhất
            const roundedPrice = Math.ceil(price / 1000) * 1000
            // Thêm dấu chấm phân cách hàng nghìn
            return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatNumber(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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

        .bonus-package {
            border-radius: 10px;
            border: 1px solid rgba(255, 183, 15, 0.6);
            background: rgba(255, 255, 255, 0.09);
            height: 70px;
            padding: 12px;
            margin-top: 20px;
            margin-bottom: 20px;
            width: 100%;
            .item-bonus {
                padding: 2px 6px;
                border-radius: 40px;
                background: linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%);
            }
            .time {
                font-size: 20px;
                font-weight: 600;
                color: #f0a22e;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.06);
                padding: 10px;
                width: 47px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .items-pankage {
            width: 100%;
            border-radius: 10px;

            min-width: 400px;
            height: 594px;
            background-size: cover;
            background-position: center;
            padding: 30px;
            .title-name {
                font-size: 20px;
                font-weight: 600;
                line-height: 20px;
            }
            .voucher {
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                border-radius: 40px;
                background: #f00;
                padding: 5px 10px;
            }
            .title-content {
                font-size: 16px;
                line-height: 24px;
            }
            .all-tooltip {
                &:hover {
                    .tooltip-info {
                        display: block;
                    }
                }
                .icon-info {
                    cursor: pointer;
                    &:hover {
                        opacity: 0.7;
                    }
                }
                .tooltip-info {
                    display: none;
                    position: absolute;
                    z-index: 1000;
                    top: 25px;
                    left: -35px;
                    width: 408px;
                    height: 123px;
                    border-radius: 12px;
                    background: #fff;
                    padding: 18px;
                }
            }
            .button-buy {
                border-radius: 10px;
                border: 1px solid #f0ba2e;
                min-height: 40px;
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
.text-all-package {
    font-size: 16px;
    background: linear-gradient(264deg, #79f9ac 15.92%, #35c6f3 95.62%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
