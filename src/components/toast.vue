<template>
    <div class="notifications">
        <div v-for="toast in toasts" :key="toast.id" :class="['toast flex-al', toast.type, { hide: !toast.closing, pause: toast.pause }]" @mouseenter="pauseToastAnimation(toast.id)" @mouseleave="resumeToastAnimation(toast.id)">
            <div class="flex-al-jt">
                <img :src="img(toast.icon)" alt="" />
            </div>
            <div class="content">
                <div class="title">{{ toast.title }}</div>
                <span style="font-size: 12px; font-weight: 300">{{ toast.text }}</span>
            </div>
            <i class="fa-solid fa-xmark" @click="removeToast(toast.id)"></i>
            <div class="toast-progress-bar" :style="{ animationDuration: toast.remainingTime + 'ms' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toasts: []
        }
    },
    methods: {
        img(name) {
            return "images/admin-panel/" + name
        },
        pauseToastAnimation(id) {
            const toast = this.toasts.find(t => t.id === id)
            if (!toast || toast.pause) return

            toast.pause = true
            const currentTime = Date.now()
            toast.remainingTime -= currentTime - toast.startTime
            clearTimeout(toast.timeoutId)
        },
        resumeToastAnimation(id) {
            const toast = this.toasts.find(t => t.id === id)
            if (!toast || !toast.pause) return

            toast.pause = false
            this.startClosingTimeout(toast.id, toast.remainingTime)
        },
        createToast(abc) {
            this.toasts.push(abc)
            this.startClosingTimeout(abc.id, abc.remainingTime)
        },

        startClosingTimeout(id, delay) {
            const toast = this.toasts.find(t => t.id === id)
            if (!toast) return

            const timeoutId = setTimeout(() => {
                const currentToast = this.toasts.find(t => t.id === id)
                if (currentToast) {
                    currentToast.closing = false
                    setTimeout(() => {
                        const finalToast = this.toasts.find(t => t.id === id)
                        if (finalToast) this.removeToast(id)
                    }, 500)
                }
            }, delay)
            toast.timeoutId = timeoutId
        },
        removeToast(id) {
            const index = this.toasts.findIndex(t => t.id === id)
            if (index > -1) {
                this.toasts.splice(index, 1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
body {
    font-family: "Poppins", sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242c32;
}
button {
    padding: 12px 16px;
}
.notifications {
    position: fixed;
    bottom: 100px;
    right: 10px;
    z-index: 1000;
}
.toast {
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 12px 16px;
    width: 343px;
    height: 70px;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14);
    animation: show 0.6s ease 1 forwards;
    &.hide {
        animation: hide 0.6s ease 1 forwards;
    }
}
.toast i {
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
}
.toast .title {
    font-size: 14px;
    font-weight: 700;
}
.toast span,
.toast i:nth-child(3) {
    color: #fff;
    opacity: 0.6;
}
@keyframes show {
    0% {
        transform: translateX(100%);
    }
    40% {
        transform: translateX(-6%);
    }
    80% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-5%);
    }
}
.toast.pause::before {
    animation-play-state: paused !important;
}

.toast-progress-bar {
    position: absolute;
    bottom: 0;
    left: 8px;
    background-color: var(--color); /* Thiết lập màu cho progress bar */
    width: 100%;
    height: 2px;
    animation-name: timeOut;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-fill-mode: forwards;
}

@keyframes timeOut {
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
}
@keyframes hide {
    0% {
        transform: translateX(-6%);
    }
    20% {
        transform: translateX(0%);
    }
    60% {
        transform: translateX(-25%);
    }
    100% {
        transform: translateX(100%);
    }
}

.toast.error {
    --color: #f04248;
    border: 0.3px solid #f04248;
    background: #3e2e31;
}
.toast.warning {
    --color: #ffd220;
    background: #313022;
    border: 0.3px solid #ffd220;
}
.toast.success {
    --color: #00df80;
    background: #223c36;
    border: 0.3px solid #00df80;
}
</style>
