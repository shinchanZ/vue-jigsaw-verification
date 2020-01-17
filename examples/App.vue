<template>
    <div id="app">
        <button @click="show=true">显示</button>
        <vue-jigsaw-verification
                :verificationShow.sync="show"
                width="300"
                height="270"
                blockType="puzzle"
                backgroundColor="rgba(255,255,255,0.5)"
                :onSuccess="handleSuccess">
            <span slot="title">请完成安全验证</span>
            <span slot="success"> 验证通过</span>
            <span slot="error"> 验证失败，请重新进行验证</span></vue-jigsaw-verification>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                show:false
            }
        },
        methods: {
            handleSuccess() {
                this.show=false
                alert('验证通过')
            }
        }
    }
</script>

<style>
    form {
        display: flex;
    }

    input {
        outline-style: none;
        border: 1px solid #ccc;
        border-radius: 0;
        padding: 13px 14px;
        font-size: 20px;
    }

    input:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
    }

    button {
        outline-style: none;
        border: 1px solid #ccc;
        border-radius: 0;
        padding: 13px 14px;
        font-size: 20px;
    }


</style>
