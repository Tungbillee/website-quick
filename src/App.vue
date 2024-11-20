<template>
    <div>
        <router-view />
        <toast ref="Toast" />
    </div>
</template>

<script>
export default {
    mounted() {
        window.myToast = this.$refs.Toast
    }
}
</script>

<style lang="scss">
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --ds: linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%);
    --Pri: linear-gradient(90deg, #0798d8 0%, #0ad7a2 100%);
    --d: 3500ms;
    --Pri-radio: #f0ba2e;
    --angle: 90deg;
    --gradX: 50%;
    --gradY: 50%;
    --c1: rgb(209, 179, 10);
    --c2: rgba(168, 239, 255, 0.1);
    --anglelogo: 0deg;
    --vang-tuoi: linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%);
    --vang-tuoi-hover: #f0ba2e;
    --Pri-button: linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%);
}
::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    border-radius: 18px;
}
.bd-bt {
    height: 40px;
    border-bottom: 1px solid #5b5959;
}

::-webkit-scrollbar-thumb {
    background: rgba(207, 206, 206, 0.37);
    border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(188, 188, 188);
}
.button {
    cursor: pointer;
    padding: 10px 28px;
    border-radius: 29px;
    font-weight: 600;
    background: var(--ds);
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 80%;
    }
}
.table-color {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0px 20px;
    grid-row-gap: 15px;
    .color {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            border: 2px solid #fff;
        }
        &.active {
            border: 2px solid #fff;
        }
    }
    .icon {
        width: 14px;
        height: 14px;
    }
}
.option {
    position: relative;
    width: 269.522px;
    height: 42.055px;
    border-radius: 269.522px;
    overflow: hidden; /* Đảm bảo pseudo-element không vượt ra ngoài */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 269.522px;
        background: var(--ds);
        filter: blur(42px);
    }
    .item {
        position: absolute;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 63px;
        border: 1px solid #ffcf53;
        background: #080b18;
        box-shadow: 0px -1px 15px 0px rgba(252, 200, 67, 0.45);
        font-weight: 500;
    }
}
.volum {
    width: 120px;
    height: 4px;
    background: #84868c;
    border-radius: 68px;
    &.short {
        width: 90px;
    }
    .item {
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius: 8px;
        position: relative;
    }
    .curco {
        right: -6px;
        bottom: -2.5px;
        position: absolute;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #fff;
        padding: 1px;
        .items {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #ffcf53;
        }
    }
}
.user-sl {
    user-select: none;
    pointer-events: none;
}
.input-ps {
    width: 50%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    position: relative;
    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -8px;
        width: 60px;
        background: #0a0d1a;
        left: 20px;
        color: #f1f2f4;
        font-weight: 500;
        opacity: 0.8;
    }
}
.feature {
    user-select: none;
    position: absolute;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 63px;
    border: 1px solid #ffcf53;
    background: #080b18;
    box-shadow: 0px -1px 15px 0px rgba(252, 200, 67, 0.45);
    font-weight: 500;
}
.togerr {
    width: 28px;
    height: 16px;
    border-radius: 16px;
    background: #1f2937;
    border: 1px solid #f6a62c;
    padding: 1px;
    display: flex;
    justify-content: space-between;
    .item {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #f6a62c;
    }
}
.select-option {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 0.5px solid rgba(255, 255, 255, 0.25);
    padding: 6px 13px;
    font-weight: 600;
}
.color_rg {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
}
.selected {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 0.5px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.1);

    &.active {
        border: 0.5px solid #f0ba2e;
        background: rgba(246, 166, 44, 0.1);
    }

    .tip {
        padding: 0px 4.499px;

        border-radius: 9.749px;
        background: var(--Pri);
    }
    .radio {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        padding: 1px;
        background: #a0aec0;
        .item {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #232531;
        }
    }

    .radio-yelow {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        padding: 1px;
        background: #f0a22e;
        .item {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid #232531;
            background: #f0a22e;
        }
    }
}
input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #252a30;
    margin: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 2px solid #a0aec0;
    display: flex;
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
    &:before {
        content: "";
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        background: var(--Pri-button);
        transform: scale(0);
        margin: auto;
        border-radius: 50%;
        transition: 120ms transform ease-in-out;
        &.yellow {
            background: #29beff;
        }
    }
    &:not(:checked):hover {
        opacity: 0.8;
    }
    &:checked {
        border: 2px solid var(--Pri-radio) !important;
        &:before {
            transform: scale(1);
        }
    }
    &.nen_tim {
        height: 18px;
        width: 18px;
        background-color: #252a30;
        border: 2px solid #ffffff;
    }
    &.yellow {
        height: 18px;
        width: 18px;
        border: 2px solid #29beff !important;
        &:before {
            background: #29beff;
        }
    }
    &.white {
        height: 18px;
        width: 18px;
        border: 2px solid #fff !important;
        background-color: #252a3000;
        &:before {
            background: #fff;
        }
    }
    &.hiden {
        display: none;
    }
    &.smal {
        height: 16px;
        width: 16px;
    }
    &[data-checked="white"] {
        &:checked {
            border: 1px solid #fff;
            background: rgba(255, 255, 255, 0.17);
            &:before {
                background: #fff;
            }
        }
    }
    &:disabled {
        cursor: not-allowed !important;
    }
}
.sl-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 0.5px solid rgba(255, 255, 255, 0.25);
    padding: 7.499px 5.999px;
    width: 37px;
    &.active {
        border: 0.5px solid #f0ba2e;
    }
}
.ranges,
.drp-calendar {
    color: black;
}
.animate__animated.animate__slideInDown {
    --animate-duration: 0.3s;
}
.animate__animated.animate__fadeInUp {
    --animate-duration: 0.2s;
}
.animate__animated.animate__zoomIn {
    --animate-duration: 0.4s;
}
.inlined {
    max-width: 73%;
    width: 100%;
    height: 0;
    border-top: 1px dashed rgba(255, 255, 255, 0.16);
}
.text-long1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.button-delete {
    border-radius: 12px;
    background: #f00;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
}
.text {
    &-al {
        text-align: center;
    }
    &-red {
        color: #ff5e5e;
    }
    &-yellows {
        color: #f0a22e;
    }
    &-yellow {
        background: var(--vang-tuoi, linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &-green {
        color: #6bfd80;
    }
    &-200 {
        color: #cbd5e0;
        font-size: 15px;
    }
    &-300 {
        color: #a0aec0;
    }
    &-700 {
        font-size: 20px;
        font-weight: 700;
    }
    &-green {
        color: #79f9ac;
    }
}
.flex-end {
    display: flex;
    justify-content: flex-end;
}
.select {
    font-weight: 700;
    border-radius: 5.999px;
    border: 0.5px solid rgba(255, 255, 255, 0.25);
    padding: 4px 9px;
    width: 177px;
}
.popup-animations-top {
    animation: resetPopUpTop 0.5s forwards;
}
@keyframes resetPopUpTop {
    0% {
        opacity: 0;
        transform: translateY(-15px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.popup-animations {
    animation: resetPopUp 0.5s forwards;
}
@keyframes resetPopUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.text-gr-2 {
    background: var(--ds, linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%));
    font-weight: 600;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.text-gradien {
    background: linear-gradient(91deg, #ffedbd 0.41%, #f0ba2e 14.97%, #f0a22e 34.73%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.text-gr-blue {
    font-weight: 500;
    background: var(--Pri);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
body {
    font-family: "Inter", sans-serif;
    color: #fff;
    font-size: 16px;
}
input[type="checkbox"] {
    cursor: pointer;
    height: 16px;
    width: 16px;
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex-shrink: 0;
    &:after {
        content: "";
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: transparent;
        border-radius: 5px;
        border: 1.5px solid #a0aec0;
        padding-bottom: 2px;
    }
    &:checked {
        &:after {
            border: transparent;
            background: #007fff;
            content: url("./img/Siderbar/icon_tich.svg");
        }
        &:disabled {
            cursor: not-allowed !important;
            &:after {
                background: #ccc;
                border: 0.5px solid #ccc;
            }
        }
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed !important;
    }

    &.nen_tim {
        &:checked {
            &:after {
                background: #4a44dd;
            }
        }
    }

    &.border-white {
        &:after {
            border-color: #fff;
        }
    }
}
.img_download {
    max-width: 1218px;
    width: 100%;
}
input[type="text"] {
    border-radius: 8px;
    border: 0.5px solid var(--B200, #cbd5e0);
    &:hover {
        border: 0.5px solid #4a44dd;
    }
}
.gap {
    &-3 {
        gap: 3px;
    }
    &-4 {
        gap: 4px;
    }
    &-5 {
        gap: 5px;
    }
    &-6 {
        gap: 6px;
    }
    &-8 {
        gap: 8px;
    }
    &-10 {
        gap: 10px;
    }
    &-12 {
        gap: 12px;
    }
    &-15 {
        gap: 15px;
    }
    &-20 {
        gap: 20px;
    }
    &-23 {
        gap: 23px;
    }
    &-25 {
        gap: 25px;
    }
    &-35 {
        gap: 35px;
    }
    &-40 {
        gap: 40px;
    }
    &-50 {
        gap: 50px;
    }
    &-80 {
        gap: 80px;
    }
    &-200 {
        gap: 200px;
    }
    &-256 {
        gap: 256px;
    }
    &-400 {
        gap: 400px;
    }
}
.fz {
    &-8 {
        font-size: 8px;
    }
    &-10 {
        font-size: 10px;
    }
    &-11 {
        font-size: 11px;
    }
    &-12 {
        font-size: 12px;
    }
    &-13 {
        font-size: 13px;
    }
    &-14 {
        font-size: 14px;
    }
    &-15 {
        font-size: 15px;
    }
    &-16 {
        font-size: 16px;
    }
    &-20 {
        font-size: 20px;
    }
    &-24 {
        font-size: 24px;
    }
    &-32 {
        font-size: 32px;
    }
    &-35 {
        font-size: 35px;
    }
    &-40 {
        font-size: 40px;
    }
}
.fw {
    &-400 {
        font-weight: 400;
    }
    &-500 {
        font-weight: 500;
    }
    &-600 {
        font-weight: 600;
    }
    &-700 {
        font-weight: 700;
    }
}
.lh {
    &-10 {
        line-height: 10px;
    }
    &-14 {
        line-height: 14px;
    }
    &-15 {
        line-height: 15px;
    }
    &-20 {
        line-height: 20px;
    }
    &-22 {
        line-height: 22px;
    }
    &-25 {
        line-height: 25px;
    }
    &-5 {
        line-height: 5;
    }
    &-6 {
        line-height: 6;
    }
    &-7 {
        line-height: 7;
    }
    &-8 {
        line-height: 8;
    }
    &-9 {
        line-height: 9;
    }
    &-10 {
        line-height: 10;
    }
}
.mgt {
    &-2 {
        margin-top: 2px;
    }
    &-4 {
        margin-top: 4px;
    }
    &-5 {
        margin-top: 5px;
    }
    &-10 {
        margin-top: 10px;
    }
    &-15 {
        margin-top: 15px;
    }
    &-20 {
        margin-top: 20px;
    }
    &-25 {
        margin-top: 25px;
    }
    &-30 {
        margin-top: 30px;
    }
    &-35 {
        margin-top: 35px;
    }
    &-40 {
        margin-top: 40px;
    }
    &-45 {
        margin-top: 45px;
    }
    &-50 {
        margin-top: 50px;
    }
    &-60 {
        margin-top: 60px;
    }
    &-70 {
        margin-top: 70px;
    }
    &-80 {
        margin-top: 80px;
    }
    &-100 {
        margin-top: 100px;
    }
    &-150 {
        margin-top: 150px;
    }
    &-250 {
        margin-top: 250px;
    }
    &-520 {
        margin-top: 520px;
    }
}

.mgbt {
    &-4 {
        margin-bottom: 4px;
    }
    &-5 {
        margin-bottom: 5px;
    }
    &-10 {
        margin-bottom: 10px;
    }
    &-15 {
        margin-bottom: 15px;
    }
    &-20 {
        margin-bottom: 20px;
    }
    &-25 {
        margin-bottom: 25px;
    }
    &-50 {
        margin-bottom: 50px;
    }
    &-100 {
        margin-bottom: 100px;
    }
}
.h {
    &-5 {
        height: 5px;
    }
    &-10 {
        height: 10px;
    }
    &-15 {
        height: 15px;
    }
    &-20 {
        height: 20px;
    }
}
.w {
    &-40 {
        width: 40%;
    }
    &-50 {
        width: 50%;
    }
    &-100 {
        width: 100%;
    }
}
.pdl {
    &-0 {
        padding-left: 0px;
    }
    &-3 {
        padding-left: 3px;
    }
    &-4 {
        padding-left: 4px;
    }
    &-5 {
        padding-left: 5px;
    }
    &-6 {
        padding-left: 6px;
    }
    &-8 {
        padding-left: 8px;
    }
    &-10 {
        padding-left: 10px;
    }
    &-15 {
        padding-left: 15px;
    }
    &-16 {
        padding-left: 16px;
    }
    &-25 {
        padding-left: 25px;
    }
    &-40 {
        padding-left: 40px;
    }
    &-45 {
        padding-left: 45px;
    }
}
.mgl {
    &-10 {
        margin-left: 10px;
    }
    &-15 {
        margin-left: 15px;
    }
    &-20 {
        margin-left: 20px;
    }
}
.pd {
    &-0 {
        padding: 0;
    }
    &-3 {
        padding: 3px;
    }
    &-4 {
        padding: 4px;
    }
    &-5 {
        padding: 5px;
    }
    &-6 {
        padding: 6px;
    }
    &-8 {
        padding: 8px;
    }
    &-10 {
        padding: 10px;
    }
    &-15 {
        padding: 15px;
    }
    &-16 {
        padding: 16px;
    }
    &-20 {
        padding: 20px;
    }
    &-25 {
        padding: 25px;
    }
    &-30 {
        padding: 30px;
    }
}
.pd-il {
    &-3 {
        padding-inline: 3px;
    }
    &-4 {
        padding-inline: 4px;
    }
    &-5 {
        padding-inline: 5px;
    }
    &-6 {
        padding-inline: 6px;
    }
    &-8 {
        padding-inline: 8px;
    }
    &-10 {
        padding-inline: 10px;
    }
    &-15 {
        padding-inline: 15px;
    }
    &-20 {
        padding-inline: 20px;
    }
    &-25 {
        padding-inline: 25px;
    }
    &-35 {
        padding-inline: 35px;
    }
    &-350 {
        padding-inline: 350px;
    }
}
.pdbt {
    &-3 {
        padding-bottom: 3px;
    }
    &-4 {
        padding-bottom: 4px;
    }
    &-5 {
        padding-bottom: 5px;
    }
    &-6 {
        padding-bottom: 6px;
    }
    &-8 {
        padding-bottom: 8px;
    }
    &-10 {
        padding-bottom: 10px;
    }
    &-15 {
        padding-bottom: 15px;
    }
    &-20 {
        padding-bottom: 20px;
    }
}
.pdt {
    &-2 {
        padding-top: 2px;
    }
    &-3 {
        padding-top: 3px;
    }
    &-4 {
        padding-top: 4px;
    }
    &-5 {
        padding-top: 5px;
    }
    &-6 {
        padding-top: 6px;
    }
    &-8 {
        padding-top: 8px;
    }
    &-10 {
        padding-top: 10px;
    }
    &-15 {
        padding-top: 15px;
    }
    &-20 {
        padding-top: 20px;
    }
    &-30 {
        padding-top: 30px;
    }
}
.pdbl {
    &-2 {
        padding-block: 2px;
    }
    &-3 {
        padding-block: 3px;
    }
    &-4 {
        padding-block: 4px;
    }
    &-5 {
        padding-block: 5px;
    }
    &-6 {
        padding-block: 6px;
    }
    &-8 {
        padding-block: 8px;
    }
    &-10 {
        padding-block: 10px;
    }
    &-15 {
        padding-block: 15px;
    }
    &-20 {
        padding-block: 20px;
    }
    &-30 {
        padding-block: 30px;
    }
}
.lh {
    &-10 {
        line-height: 10px;
    }
    &-15 {
        line-height: 15px;
    }
    &-20 {
        line-height: 20px;
    }
    &-25 {
        line-height: 25px;
    }
    &-5 {
        line-height: 5;
    }
    &-6 {
        line-height: 6;
    }
    &-7 {
        line-height: 7;
    }
    &-8 {
        line-height: 8;
    }
    &-9 {
        line-height: 9;
    }
    &-10 {
        line-height: 10;
    }
}
.custom-cursor {
    position: absolute;
    width: 350px;
    height: 350px;
    top: var(--y);
    left: var(--x);
    border-radius: 336.385px;
    opacity: 0.3;
    background: #d9d9d9;
    filter: blur(15px);
    pointer-events: none;
    display: none;
    transform: translate(-50%, -50%);
}
.flex-al {
    display: flex;
    align-items: center;
}
.flex-bw-al {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-cl-bw {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.flex-al {
    display: flex;
    align-items: center;
}
.flex-al-jt {
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex-cl-jt {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.flex-cl-al {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ps-rl {
    position: relative;
}
.flex {
    display: flex;
}
.flex-cl {
    display: flex;
    flex-direction: column;
}
input[type="number"] {
    /* Cho Firefox */
    -moz-appearance: textfield;

    /* Cho Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
}
</style>
