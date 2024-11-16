<template>
    <div class="container-settings">
        <div class="spaces"></div>
        <div class="contents">
            <div class="info">
                <div class="flex-bw-al">
                    <div class="flex-al gap-10">
                        <img :src="img('user.svg')" alt="" />
                        <div class="fw-600 fz-20 text-long1">{{ user?.email }}</div>
                    </div>
                    <div class="flex-al gap-6 fz-16">
                        <div class="text-green">Số dư: {{ formatnumber(user?.balance ?? 0) }}</div>
                        <div class="flex-al gap-3">
                            <img :src="img('icon_point.svg')" alt="" />
                            <div class="text-yellow fw-600">Point</div>
                        </div>
                    </div>
                </div>
                <div class="flex-bw-al mgt-15">
                    <div>
                        <div class="flex-al gap-3">
                            <img :src="img('icon_device.svg')" alt="" />
                            <div>Thiết bị đang kết nối:</div>
                            <div class="text-yellow">
                                {{ user?.name_device ?? "Chưa kết nối thiết bị nào" }}
                            </div>
                            <div @click="confirmDeleteDevice()" class="delete-device" :class="{ no_active: !user.delete_device }">Xoá thiết bị</div>
                        </div>
                        <div class="text-300 mgt-10">Được làm mới thiết bị sau: {{ calculateDeviceRefreshTime(user?.active_at ?? 0) }}</div>
                    </div>
                    <div class="flex gap-10">
                        <div class="buy flex-al gap-5" @click="goToBuyPackage">
                            <img :src="img('icon_buy.svg')" alt="" />
                            <div>Mua gói</div>
                        </div>
                        <div class="button flex-al-jt">Nạp Point</div>
                    </div>
                </div>
            </div>
            <div class="table">
                <div class="header flex-al">
                    <div class="flex-al items-center gap-3" :class="{ active: type_manage === 'goi' }" @click="type_manage = 'goi'">
                        <Icon size="20" :src="img('icon_goi.svg')" alt="" />
                        <div>Quản lý gói cước</div>
                    </div>
                    <div class="flex-al items-center gap-3" :class="{ active: type_manage === 'giaodich' }" @click="type_manage = 'giaodich'">
                        <Icon size="20" :src="img('icon_card.svg')" alt="" />
                        <div>Quản lý giao dịch</div>
                    </div>
                    <div class="flex-al items-center gap-3" :class="{ active: type_manage === 'history' }" @click="type_manage = 'history'">
                        <Icon size="20" :src="img('icon_history.svg')" alt="" />
                        <div>Lịch sử hành động</div>
                    </div>
                </div>
                <div class="body" v-if="type_manage === 'goi'">
                    <div class="flex-al gap-5">
                        <img :src="getPackageIcon(user?.name_package)" alt="" />
                        <div class="fz-24 fw-600">Gói cước : {{ user?.purchase_term ?? 0 }} tháng</div>
                    </div>
                    <div v-if="user.has_expired" class="expired flex-bw-al">
                        <div class="flex-al gap-5">
                            <img :src="img('icon_clock.svg')" alt="" />
                            <div>
                                <div class="text-red fz-16 fw-500">Gói cước: {{ user?.purchase_term }} tháng của bạn đã hết hạn</div>
                            </div>
                        </div>
                        <div class="text-yellow fz-16 fw-600">Gia hạn ngay</div>
                    </div>
                    <div class="infos">
                        <div class="title-info">Thời hạn gói cước</div>
                        <div class="contens-info flex-al gap-3">
                            <div>Thời hạn mua: {{ user?.purchase_term }} tháng</div>
                            <div class="text-300">-</div>
                            <div class="text-yellow">
                                Còn
                                {{ formatExpiryDateMonth(user?.expiry_date) }}
                            </div>
                            <div class="text-300">
                                ( hết hạn vào ngày
                                {{ formatExpiryDate(user?.expiry_date) }})
                            </div>
                        </div>
                    </div>
                    <div class="infos flex-bw-al">
                        <div>
                            <div class="title-info">Số phút tách phụ đề</div>
                            <div class="flex-al contens-info gap-5">
                                <div>{{ formatnumber(user?.number_minutes_subtitle ?? 0) }} phút</div>
                                <div class="curso"></div>
                                <div :class="getColorByPercentage(user?.number_minutes_subtitle, user?.minutes_used)">
                                    Còn lại:
                                    {{ calculateRemainingMinutes(user?.number_minutes_subtitle ?? 0, user?.minutes_used ?? 0) }}
                                    phút
                                </div>
                            </div>
                            <div class="loading">
                                <div
                                    class="item"
                                    :class="getColorByPercentage(user?.number_minutes_subtitle ?? 0, user?.minutes_used ?? 0)"
                                    :style="{
                                        width: calculatePercentageWidth(user?.number_minutes_subtitle ?? 0, user?.minutes_used ?? 0)
                                    }"></div>
                            </div>
                        </div>
                        <div class="buy-minutes flex-al-jt" @click="goToBuySubtitle">Mua thêm</div>
                    </div>
                    <div class="infos flex-bw-al">
                        <div>
                            <div class="title-info">Ký tự lồng tiếng</div>
                            <div class="flex-al contens-info gap-5">
                                <div>{{ formatnumber(user?.number_voice_characters ?? 0) }} ký tự</div>
                                <div class="curso"></div>
                                <div :class="getColorByPercentage(user?.number_voice_characters, user?.voice_used)">
                                    Còn lại:
                                    {{ calculateRemainingMinutes(user?.number_voice_characters ?? 0, user?.voice_used ?? 0) }}
                                    ký tự
                                </div>
                            </div>
                            <div class="loading">
                                <div
                                    class="item"
                                    :class="getColorByPercentage(user?.number_voice_characters, user?.voice_used)"
                                    :style="{
                                        width: calculatePercentageWidth(user?.number_voice_characters, user?.voice_used)
                                    }"></div>
                            </div>
                        </div>
                        <div class="buy-minutes flex-al-jt" @click="goToBuyVoice">Mua thêm</div>
                    </div>
                </div>
                <div class="transaction" v-if="type_manage === 'giaodich'">
                    <div class="config flex-bw-al">
                        <div class="flex select-transaction">
                            <div class="item-select" :class="{ active: type_transaction === 'payment' }" @click="type_transaction = 'payment'">Thanh toán</div>
                            <div class="item-select" :class="{ active: type_transaction === 'history' }" @click="type_transaction = 'history'">Lịch sử nạp</div>
                        </div>
                        <div class="selects-type flex-al gap-3">
                            <img :src="img('icon_lich.svg')" alt="" />
                            <div class="text-300">
                                <input type="text" name="datetimes_payment" class="text-300" />
                            </div>
                            <img :src="img('icon_arrow.svg')" alt="" />
                        </div>
                    </div>
                    <div class="body-transaction">
                        <div class="header-transaction flex-al">
                            <div class="titles-transaction" style="min-width: 200px; width: 100%">Thời gian</div>
                            <div class="titles-transaction" style="min-width: 250px; width: 100%">Giá trị giao dịch</div>
                            <div v-if="type_transaction === 'payment'" class="titles-transaction" style="min-width: 250px">Loại</div>
                            <div v-if="type_transaction === 'payment'" class="titles-transaction" style="min-width: 250px; width: 100%">Chi tiết</div>
                            <div v-if="type_transaction === 'history'" class="titles-transaction" style="min-width: 200px; width: 100%">Đại lý hỗ trợ</div>
                            <div class="titles-transaction" style="min-width: 150px">Trạng thái</div>
                        </div>
                        <div class="table-transaction">
                            <div class="items-transaction flex-al" v-for="item in dataPaymentHistory" :key="item.id">
                                <div class="titles-transaction" style="min-width: 200px; width: 100%">{{ formatExpiryDate(item?.created_at) }}</div>
                                <div class="titles-transaction flex-al gap-10" style="min-width: 250px; width: 100%">
                                    <div class="text-red" v-if="type_transaction === 'payment'">-{{ formatnumber(item?.transaction_value ?? 0) }}</div>
                                    <div class="text-green" v-if="type_transaction === 'history'">+{{ formatnumber(item?.transaction_value ?? 0) }}</div>
                                    <div class="flex-al gap-5">
                                        <img :src="img('icon_point.svg')" alt="" />
                                        <div class="text-yellow fw-600">Point</div>
                                    </div>
                                </div>
                                <div v-if="type_transaction === 'payment'" class="titles-transaction" style="min-width: 250px">
                                    <div v-if="item?.type_payment === 'package'">Mua gói : {{ item?.name_package }}</div>
                                    <div v-if="item?.type_payment === 'subtitle'">Mua tách phụ đề</div>
                                    <div v-if="item?.type_payment === 'voice'">Mua ký tự lồng tiếng</div>
                                </div>
                                <div v-if="type_transaction === 'payment'" class="titles-transaction" style="min-width: 250px; width: 100%">
                                    <div class="flex-al text-300" v-if="item?.number_minutes_subtitle">Tách phụ đề: {{ formatnumber(item?.number_minutes_subtitle ?? 0) }} phút</div>
                                    <div class="flex-al mgt-10 text-300" v-if="item?.number_voice_characters">Lồng tiếng: {{ formatnumber(item?.number_voice_characters ?? 0) }} ký tự</div>
                                </div>
                                <div v-if="type_transaction === 'history'" class="titles-transaction" style="min-width: 200px; width: 100%">{{ item?.name_agency }}</div>
                                <div class="titles-transaction" style="min-width: 150px">
                                    <div class="text-green" v-if="item.status === 'success'">Thành công</div>
                                </div>
                            </div>
                            <div v-if="type_transaction === 'payment'" v-observe-visibility="loadMorePayment" ref="sentinel" class="sentinel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="confirm-delete-device flex-al-jt" v-if="isConfirmDeleteDevice">
            <div class="confirm-delete-device-content flex-cl-al">
                <div><img :src="img('icon_warning_device.svg')" alt="" /></div>
                <div class="fw-600 fz-16">Xác nhận xoá thiết bị</div>
                <div class="text-300 mgt-10 text-al">Sau khi xoá thiết bị hiện tại, bạn có thể kết nối tài khoản QuickMagic với một thiết bị khác.</div>
                <div class="button-delete mgt-30 fw-600" style="width: 100%" @click="deleteDevice">Xoá thiết bị</div>
            </div>
        </div>
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
export default {
    data() {
        return {
            type_manage: "goi",
            type_transaction: "payment",
            dateRange: "",
            dataPaymentHistory: [],
            user: {},
            isConfirmDeleteDevice: false,
            pagination: {
                current_page: 1,
                per_page: 25,
                total: 0,
                total_pages: 0,
                loading: false
            }
        }
    },
    watch: {
        type_manage(val) {
            if (val === "giaodich") {
                setTimeout(() => {
                    this.openDateRangePicker()
                }, 500)
            }
        },
        type_transaction(val) {
            this.dataPaymentHistory = []
            this.pagination.current_page = 1
            this.getPaymentHistory()
        },
        dateRange(val) {
            this.dataPaymentHistory = []
            this.pagination.current_page = 1
            this.getPaymentHistory()
        }
    },
    created() {
        this.getUser()
        this.getPaymentHistory()
    },

    methods: {
        img(data) {
            return "images/admin-panel/" + data
        },
        getColorByPercentage(total, used) {
            const totalAmount = total ?? 0
            const usedAmount = used ?? 0
            const remaining = totalAmount - usedAmount

            // Tính phần trăm còn lại
            const percentage = (remaining / totalAmount) * 100

            if (percentage > 50) {
                return "text-green"
            } else if (percentage > 30) {
                return "text-yellow"
            } else {
                return "text-red"
            }
        },
        confirmDeleteDevice() {
            this.isConfirmDeleteDevice = true
        },
        async deleteDevice() {
            let res = await this.api({
                path: "/web/user/delete-device",
                method: "POST"
            })
            if (res.success) {
                this.isConfirmDeleteDevice = false
                this.getUser()
            }
        },
        goToBuyPackage() {
            this.$router.push("/buy-pankage")
        },
        goToBuySubtitle() {
            this.$router.push("/buy-subtitle")
        },
        goToBuyVoice() {
            this.$router.push("/buy-voice")
        },
        loadMorePayment(isVisible) {
            if (isVisible && !this.pagination.loading) {
                // Check if we haven't reached the last page
                if (this.pagination.current_page < this.pagination.total_pages) {
                    this.pagination.current_page += 1
                    this.getPaymentHistory()
                }
            }
        },
        async getPaymentHistory() {
            if (this.pagination.loading) return
            this.pagination.loading = true
            let res = await this.api({
                path: "/web/user/get-payment",
                params: {
                    date_range: this.dateRange,
                    type: this.type_transaction,
                    page: this.pagination.current_page,
                    limit: this.pagination.per_page
                }
            })
            console.log(res, "payment history")
            if (res.success) {
                // Append new data to existing array
                this.dataPaymentHistory = [...this.dataPaymentHistory, ...res.payment_history]
                // Update pagination info
                this.pagination.total = res.pagination.total
                this.pagination.total_pages = res.pagination.total_pages
                this.pagination.loading = false
            }
        },

        calculateDeviceRefreshTime(activeDate) {
            if (!activeDate) return "0 ngày"

            const activeDateObj = new Date(activeDate)
            const refreshDate = new Date(activeDateObj.setMonth(activeDateObj.getMonth() + 1))
            const now = new Date()

            // Tính khoảng thời gian còn lại tính bằng milliseconds
            const timeLeft = refreshDate.getTime() - now.getTime()

            // Nếu đã hết hạn
            if (timeLeft <= 0) return "0 ngày"

            // Chuyển đổi thành ngày
            const days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

            return `${days} ngày nữa`
        },
        async getUser(retryCount = 3) {
            try {
                let res = await this.api({
                    path: "/web/user/get-info"
                })
                console.log(res, "user info")

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
        },
        formatnumber(amount) {
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        // format icon gói cước
        getPackageIcon(packageName) {
            const iconMap = {
                Normal: "icon_plus.svg",
                Pro: "icon_Pro.svg",
                Advance: "icon_Advance.svg"
            }

            return this.img(iconMap[packageName] || "default_icon.svg")
        },
        formatExpiryDate(date) {
            return moment(date).format("HH:mm - DD/MM/YYYY ")
        },
        calculatePercentageWidth(total, used) {
            const totalAmount = total ?? 0
            const usedAmount = used ?? 0

            if (totalAmount === 0) return "0%"

            const remaining = totalAmount - usedAmount
            const percentage = (remaining / totalAmount) * 100

            // Giới hạn phần trăm từ 0-100
            return `${Math.min(100, Math.max(0, percentage))}%`
        },
        // tính sô phút hoặc ký tự còn lại
        calculateRemainingMinutes(total, used) {
            const totalMinutes = total ?? 0
            const usedMinutes = used ?? 0
            const remaining = totalMinutes - usedMinutes
            return this.formatnumber(remaining) // Format số với dấu chấm phân cách
            // Đảm bảo không trả về số âm
        },

        // format số tháng còn lại
        formatExpiryDateMonth(expiryDate) {
            if (!expiryDate) return "0 ngày"

            const now = new Date()
            const expiry = new Date(expiryDate)

            // Tính khoảng thời gian còn lại tính bằng milliseconds
            const timeLeft = expiry.getTime() - now.getTime()

            // Nếu đã hết hạn
            if (timeLeft <= 0) return "0 ngày"

            // Chuyển đổi thành ngày/giờ
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

            // Tính số tháng (ước lượng 30 ngày/tháng)
            const months = Math.floor(days / 30)
            const remainingDays = days % 30

            // Format kết quả
            if (months > 0) {
                if (remainingDays === 0) {
                    return `${months} tháng`
                } else if (remainingDays === 1) {
                    return `${months} tháng 1 ngày`
                } else {
                    return `${months} tháng ${remainingDays} ngày`
                }
            } else if (days > 0) {
                if (days === 1) {
                    return "1 ngày"
                }
                return `${days} ngày`
            } else {
                if (hours === 1) {
                    return "1 giờ"
                }
                return `${hours} giờ`
            }
        },
        openDateRangePicker() {
            console.log("openDateRangePicker")
            $('input[name="datetimes_payment"]').daterangepicker(
                {
                    ranges: {
                        "Hôm nay": [moment(), moment()],
                        "Hôm qua": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "7 ngày qua": [moment().subtract(6, "days"), moment()],
                        "30 ngày qua": [moment().subtract(29, "days"), moment()],
                        "Tháng này": [moment().startOf("month"), moment().endOf("month")],
                        "Tháng trước": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                    },
                    alwaysShowCalendars: true,
                    startDate: "27/10/2024",
                    endDate: "02/11/2024",
                    locale: {
                        format: "DD/MM/YYYY"
                    }
                },
                (start, end, label) => {
                    this.dateRange = start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY")
                    console.log(start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY"))
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.container-settings {
    max-width: 1218px;
    font-size: 14px;
    height: 100vh;
    margin: 0 auto;
    .spaces {
        height: 120px;
    }
    .contents {
        width: 100%;
        height: calc(100vh - 120px);
        .info {
            height: 136px;
            width: 100%;
            border-radius: 16px;
            padding: 20px 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: linear-gradient(229deg, rgba(255, 188, 30, 0.07) 6.03%, rgba(255, 255, 255, 0) 70.26%);
            .delete-device {
                padding: 4px 10px;
                cursor: pointer;
                border-radius: 50px;
                border: 1px solid rgba(255, 94, 94, 0.39);
                color: #ff5e5e;
                &:hover {
                    background: rgba(255, 94, 94, 0.39);
                }
                &.no_active {
                    cursor: not-allowed;
                    opacity: 0.5;
                    pointer-events: none;
                }
            }
            .buy {
                cursor: pointer;
                padding: 10px 21px;
                border-radius: 29px;
                border: 1px solid var(--B400, #718096);
                &:hover {
                    background: rgba(113, 128, 150, 0.3);
                }
            }
        }
        .table {
            height: calc(100% - 136px);
            width: 100%;
            .header {
                height: 60px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                .items-center {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 190px;
                    height: 100%;
                    border-bottom: 1px solid transparent;
                    transition: all 0.3s ease;
                    &.active {
                        color: #f0ba2e;
                        border-bottom: 1px solid #f0ba2e;
                    }
                }
            }
            .body {
                margin-top: 25px;
                border-radius: 10px;
                overflow: hidden;

                padding: 50px;
                background-image: url("/images/admin-panel/bk_user.png");
                background-size: cover;
                background-position: center;
                .expired {
                    margin-top: 20px;
                    padding: 10px 30px;
                    border-radius: 16px;
                    border: 1px solid #ff5e5e;
                    background: rgba(255, 94, 94, 0.03);
                    .text-yellow {
                        cursor: pointer;
                        &:hover {
                            opacity: 0.8;
                        }
                    }
                }
                .infos {
                    margin-top: 20px;
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 20px 30px;
                    .buy-minutes {
                        padding: 10px 21px;
                        border-radius: 29px;
                        border: 1px solid var(--B400, #718096);
                        cursor: pointer;
                        &:hover {
                            background: rgba(113, 128, 150, 0.3);
                        }
                    }
                    .title-info {
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 22px;
                    }
                    .contens-info {
                        margin-top: 8px;
                        font-size: 15px;
                        font-weight: 500;
                        line-height: 22px;
                    }
                    .curso {
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        background: #d9d9d9;
                    }
                    .loading {
                        width: 244px;
                        background: #d9d9d9;
                        height: 4px;
                        border-radius: 2px;
                        margin-top: 10px;
                        .item {
                            width: 80%;
                            height: 100%;
                            border-radius: 2px;

                            &.text-green {
                                background: #6bfd80;
                            }

                            &.text-yellow {
                                background: #f0ba2e;
                            }

                            &.text-red {
                                background: #ff5e5e;
                            }
                        }
                    }
                }
            }
            .transaction {
                height: calc(100% - 80px);
                margin-top: 20px;
                .config {
                    height: 65px;
                    .select-transaction {
                        width: 300px;
                        height: 40px;
                        border-radius: 50px;
                        border: 1px solid rgba(255, 255, 255, 0.16);
                        background: #0f121f;
                        overflow: hidden;
                        .item-select {
                            height: 100%;
                            width: 100%;

                            border-radius: 10px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            &.active {
                                background: rgba(255, 255, 255, 0.07);
                            }
                        }
                    }
                    .selects-type {
                        cursor: pointer;
                        padding-inline: 12px;
                        height: 42px;
                        border-radius: 10px;
                        background: #191c28;
                        input {
                            color: #fff;
                            width: 100%;
                            height: 100%;
                            background: transparent;
                            border: none;
                            outline: none;
                        }
                    }
                }
                .body-transaction {
                    overflow: auto;
                    height: calc(100% - 65px);
                    .header-transaction {
                        position: sticky;
                        top: 0;

                        height: 40px;
                        border-radius: 5px;
                        background: #2d2d2d;
                        .titles-transaction {
                            padding-inline: 12px;
                            font-weight: 600;
                            font-size: 15px;
                        }
                    }
                    .table-transaction {
                        height: calc(100% - 40px);
                        .items-transaction {
                            height: 88px;
                            .titles-transaction {
                                padding-inline: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
}
.confirm-delete-device {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background: rgba(82, 82, 82, 0.5);
    z-index: 1000;
    .confirm-delete-device-content {
        width: 405px;
        height: 305px;
        border-radius: 20px;
        background: #080b18;
        padding: 25px;
    }
}
</style>
