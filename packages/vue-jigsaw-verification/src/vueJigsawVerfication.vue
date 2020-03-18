<template>
    <div id="puzzle-verification" v-show="isVerificationShow">
        <div class="background" v-show="isVerificationShow" :style="'background:'+backgroundColor+';'"></div>
        <transition name="fade">
            <div class="puzzle-container stop" v-show="isVerificationShow"
                 :style="'position: absolute;width:' + dataWidth + 'px;height:' + dataHeight + 'px;left: calc(50% - '+dataWidth/2+'px);top: calc(50% - '+dataHeight/2+'px);'">
                <div class="puzzle-header">
                    <span class="puzzle-header-left"><slot name="title">滑动下方拼图完成安全验证</slot></span>
                    <div>
                        <span class="iconfont icon-icon-test re-btn" @click="refreshImg" ref="refreshImg"></span>&nbsp;&nbsp;
                        <span class="iconfont icon-guanbi re-btn" @click="closeVerificationBox"></span>
                    </div>
                </div>
                <div :style="'position:relative;overflow:hidden;width:'+ imgWidth +'px;'">
                    <div :style="'position:relative;width:' + imgWidth + 'px;height:' + imgHeight + 'px;'">
                        <img
                                id="scream"
                                ref="scream"
                                :src="imgRandom"
                                :style="'width:' + imgWidth + 'px;height:' + imgHeight + 'px;'"
                        />
                        <canvas id="puzzle-box" ref="puzzleBox" :width="imgWidth" :height="imgHeight"></canvas>
                    </div>
                    <div
                            class="puzzle-lost-box "
                            :style="'left:' + left_Num + 'px;width:' + imgWidth + 'px;height:' + imgHeight + 'px;'"
                    >
                        <canvas id="puzzle-shadow" ref="puzzleShadow" :width="imgWidth" :height="imgHeight"
                        ></canvas>
                        <canvas id="puzzle-lost" ref="puzzleLost" :width="imgWidth" :height="imgHeight"
                        ></canvas>
                    </div>
                    <p :class="'ver-tips'+ (displayTips ? ' slider-tips' : '')" ref="verTips">
                        <template v-if="verification">

                        <span style="color:#42ca6b;"><span class="iconfont icon-chenggong1"
                                                           style="color:#42ca6b;"></span>&nbsp;<slot
                                name="success">验证通过</slot></span>
                        </template>
                        <template v-if="!verification">
                        <span style="color:red;"><span style="color:#42ca6b;"><span
                                class="iconfont icon-shibai"></span></span> &nbsp;<slot
                                name="error">验证失败: 拖动滑块将悬浮图像正确拼合</slot>
</span>
                        </template>
                    </p>
                    <div class="verfication-loading-box" v-if="imgLoading"
                         :style="'position:absolute;overflow:hidden;width:'+ imgWidth +'px;left:0;top:0;height:100%;z-index:9999;'">
                        <div class="verfication-loading-box">
                            <p>
                                <span class="iconfont icon-jiazai" style="font-size: 20px"></span>
                            </p>
                            <p style="font-size: 14px">加载中</p>
                        </div>
                    </div>
                </div>

                <div class="slider-container " :style="'width:' + imgWidth + 'px;'">
                    <div class="slider-bar ">向右拖动滑块填充拼图</div>
                    <div class="btn-container" ref="btnContainer">
                        <div class="slider-btn" ref="sliderBtn" @mousedown="startMove" @touchstart="startMove"
                             @mouseup="moveEnd">
                            <span
                                    class="iconfont" :class="buttonIcon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import './iconfont/iconfont.css'

    export default {
        name: 'vueJigsawVerification',
        data() {
            var self = this
            return {
                isVerificationShow: false,
                moveStart: '',
                displayTips: false,
                verification: false,
                randomX: null,
                randomY: null,
                imgRandom: '',
                left_Num: 0,
                dataWidth: null,
                dataHeight: null,
                imgWidth: null,
                imgHeight: null,
                puzzleSize: null, // 滑块的大小
                deviationValue: null,
                radius: null,
                padding: 50,
                buttonIcon: 'icon-youjiantouxiangyouxianxing',
                imgLoading: false
            }
        },
        model: {
            prop: 'verificationShow',
            event: 'setVisible'
        },
        watch: {
            isVerificationShow(val) {
                this.$emit('update:verificationShow', val)
            },
            verificationShow(val) {
                this.isVerificationShow = val
                if (val === false) {
                    this.closeVerificationBox()
                }
            }
        },
        props: {
            // 画布图片的尺寸
            width: {
                type: [String, Number],
                default: 300
            },
            height: {
                type: [String, Number],
                default: 240
            },
            // 图集
            puzzleImgList: {
                type: Array,
                default: () => [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897405&di=d65738dbc4756fc280222c6e4bc880fe&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fa6442e874db9be7c4b4d44636cba66b0539bde2eca0-41LBvJ_fw658',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897406&di=62b3728e56588d25f22b835eb77d530d&imgtype=0&src=http%3A%2F%2Fwww.forestry.gov.cn%2Fuploadfile%2Fmain%2F2013-6%2Fimage%2F2013-6-19-dbdb3e3f20b644ec959960e9d8308eda.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897404&di=ee3b5b96e163ef81ea62a672c772d7b7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8446c0b5d1a6edbbf05300612800dbb0853ce6ea3c5b-XKH1nw_fw658',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897399&di=a4fb859b4176e151178dd00887eb61f2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcea8089f49442c4945b635361c221412fcef212f7592-Kz88EH_fw658',
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsAhYDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAECAwUGAAcI/8QAQBAAAgEDAgQEAwYFAwMDBQEAAQIDAAQREiEFMUFREyJhcQaBkRQyQqGxwQcjUtHwFTPhJGLxFnKCJTRDRJJT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAAMBAQEBAQEBAAAAAAERAgMSITFBUQQTIjL/2gAMAwEAAhEDEQA/APWQKXFcPzpRTMmK7FOxXYpAwrTdPpU2KTFARaa7TUuKTFARlaaRUxFMIoCOnCuIrqAWnCmgU8CgF5mnAUgG9PzSM086YafTDQDc12a40ymSQNTwahFSLmgJRSda4U7FAJSjlmurvSgOIqMrUoppoCIilAFKwpopBze1MNPNNIoBmKUfnSkV2NqDJjArutLjauNAcPalxtzpBSjegFXlUq86ZinLtTJMpqQGoVp4NMko5Vxpqmkkk0ijQR20jNRawcseQpoYyAjNRzAONI5elRbrTnk2WZSRqZlHfG31odrNXfxImUP3wBn9jUL28sUuY5cd1K7Gm53OQFb+qM4B+Xep+tPz8SGJo13UoeRHQGh1uSLhgcggbr3oqO5M0bKzCQcvX2NVF9OilTN5QDhZew6ZNJP9EyTKsbAE4yCPY15taEWvx/dtnRqAbUT5UXmze/QVu2l1u2Tghd8H1HKvOuKYb4ylAYKihQzMdh1zUWrz5j1yzk8SISYwD90dhRoOBVRwqYT20TLnTpAAIxmrVT0HSt5fjCn5pM11JVE7O1dScqWgOzS86aKXFAcaTO3KnYptANNdmlI2pPnQDSBUbDNSk1ExphEa6urqAtBThUUbBhzqYCkHAUuKULTsUAzFdj0p+mkxSBoFdpp2K7FAMIppFSYpCKRoSKTpUhFNxQCYp4FIBSigHV1cK6kCU1qeRTGFMIzSgU7GaUCmRAtPC0oFOAoBQKXFcKXnQDK6lIprbUB2aQkU3JrulAdmmnalFdjekCdK40tNNANrqXFJigy9cVxFJnenZyN6AbSjam55gVw54zQEnanjaogaR5wmxIo0k+quMgUZJqkueKaMgbHNLb3ElwMk7VlfLJ+NJ4qtnutLDTuKYZSfMTt1qERYUHBwKmREaLB2HPep9r0ucyElu0jjG3zoQ3Kl9IOnV90g7f8AFSzvCAMYI7d6qp4R/uQtpbBVgRkHHeqkVIsDeeYQXMWM8mG9OZU3GQUxvkZquWWO9h8KbUsiDOVPmX/uHcURE0iJpdwxX8S8iO/ofSq1NmIJDJFdA9R3/Y9R6GgOJkMsnIxygErjbPIkf2qxui80JEf+4hyBnn6iqtnW9tWAGhmzsRjDcjSoQWLnQqSc0BUNjpy/tWB43oi+KJpJB/LwpI5ljitlw5mSFtWxEeDv+LJB+VYbjMzP8TSODupAGRuKy6+RrzPr1D4buDPaLlhqwMgfhrSquFArB/B10ATGB6kD963se6g/nW/juxzdzK6up+N648q0QZikIp1IaAQUuaTNdnFAdXUnWuoBc0hxXc6Q8qAaaiepDzpjZNMIsV1SacV1IEsrgMBvVojAgVj+H3ZGATWitrnUBvWfHetO+MWQpwqJHzUoNWzLikIpwxXEbUAzFKBXY3pQMUAmmmlalAritAQFabipiKYRSMzFcBinEUmMUAnWurqUUjdSEU4VxFMkeKWlI2phNBHg4p2etQhsUuqgJQRTs1CG3p2vamDiaazU0v2ppNAKGFJq3pM0hNIHZpRyqPNKGoCTG1JiuzXZoBCKadqdmmOfLnqKNM0nG4NIXAO1IGDZHpUDnWhI+8ppWjEzkZznGRmmPIVAcdOdcw1pgc8UkanwRq5kb+tRe5FzgyS70JqG4U9Krr2+LMCm4Io5LdSZVz5TQE1oikDng5GOlZ9d7F88YCRjKSrKcnbNaHhkEXgKrfeFU+VjwMYpYeKBGxk50mspZGtlrQzzIiAA96pbu/dEYqfujFMtrhp3y3LnStbrJcT7jDKP7VW6JJP1TT8WKW7Sg5VasuG3YvBlW1AnSwI681PzG1UfF+HGHhsuBgLgN2Hm3/I1L8Nxy2sbrJq0xzCPPTGBv+lXzsV1JmwfdCW3l8aAHVHlgufvDqPei4p/EwYpAGHmXbmCPumnXUa51oMgkAgdqCZBbuj422z6irZz7Po4kBBpOAdx/wBpHSqniJIJlTyup1MPlzolXbLRk8+vqOR+lCX7qyF+Tace9LSwGZFELy8vxHA9zXnVw5e6muC5XWxJJNbDjF2baxkVD59IjH715zeyMCTI5CjYKNhisuvtxtxPmt98FXZW9Opjo9TzPsK9egYPECBivAvge+htrsSSHbOFXO5r3GwvVniTSQWI3A6Vt4r/ABy+afVhikIpwIpCelbsUZFJinkU00GYRmkp+N6aaATeupQKSgFFIwzXdK7NANxvSaM9KfzpcUwZprqefQ4rqRMRbtjBB3q7srncAms9A+CKsoHAINcXNx2dfWst5dQG9GK21UtlLkCraM7Curm/HN1MogGnCoxTgatJ2K7Ga7NLQHYpcUlKKAaRTStS4pCKQQFaQqalI9KaRvSNERSAVIVph2pBwNOzUequ1Uwc2DULHenlsVGxzRoJnNIDvSjlTScUaDtVKHqEneuDZ5H5UtGJicUhaoteOnvSkgrkcu3ajQXVvSM2N6iLb5+tO5+1GjDjJgUzxd6ZIcA1EOdPRgxZdqdrFCg4ri5ByN6WjBgbJxmmMeeOYqEk4BFKj+bze2am3FTk3BEgboRTtIbVg/erpCEUHkRQv2pCFYEc8jesO/Jlbc+PRenDn2pA++n0yDT0HijVmuMQB5cqxvdaTmIVIQHV1oScaQzLucbUXIoyTQlxgRk55/vU+1V6wNdKZIxpwCACarooA07ZblRkxYoVU7nA+VAO/wBl8ygksaftaeYPtyYywx2FGxlS4PM6QD9aozd+DG8krgYyx35HlT7XiBMyAnIkDMP/AGjaqlTVjexLPb3Axq8UasdyKjijEELjTtGcnbnyz70qzp4w1OCBRTPF4WR1x9edXOk2GxHUgY55Zx9aEvVJiIIO2SD6UTC/8gBWzk4z86QsrQkMccxvT9ynIKVQiI3LIG3yqouiW8NFycpgntvvR15OVlRcEnOTjkBihL6dbOzkkcrrVcsT+H0x3pbp34xfxFeiW5jhEi6QTnBzmsPxq8UzlU1MeWeQrQ8TuZ55zIUKsd1XSAR7AcvnVXZcEknn8SYBmHPO9Esl1clswvAIpFKTHIJ2Bxn6Cvb/AIcvYbSxjRz/ADCM6ebH3rzSy4elipMpKOD+Eeb09hVnZ3JjkCGRo0Pmyzb4/aq47zrUeTjZj16G7R9yQT2HSp1cMNRNZKy4pGsaxwRtpA++2xarmzuxK3mfLD8KnaunnuVyXixa89641wfPSl9atJtIRTiKQigzDtSdaeRTcUAlIad1pMUBwNKDTcYrs0A7btXUwmuph51BJy3q0gl5VRxPirCCQEjeuCOutPYS8qvYpBpFZSzl5b1bR3Ww3rp4/HP3+rsSetOElVS3OTzqZZ9udXqMWQenBqAWb1qUS09AvVtTgaFEtSo4pgQK6mhqfmgExTCoFPJpjNikEbetRNT2ao2baptOIGO9cpJpjyDNIHqfZWJj70w7UgY0uM0vY/UvtTHG2akxSMNqPYYiXlyyKaUyfKSD61Mq5G1RuMUr0c5NAJwCMN+tNLaDzxT1bGx3FRzrqGpTmj2GOIDAsvLqKQPjamRSdjvyp7gFNa8uo7UaMMdw2QaaNudMY5anCQcmG1GjDi4AphcjpkGopQdYH4D1FERRHOTuDRaMP3CbHI6UshSKPUx2IzUgj8hXHMbUPJbPJhWJxnFY9W1pzzFLxTibqulcbDY96qOD3csiiGZt/F29j0q3+ILAtw9ox/uDOMDnWBi4rJbTxh8g5GSOeeVY9T66Ofsev27gKoBx0NTO+BmsbY8fBB1NlWXXnsfXtWlju1ktw+cjTk/OlqbCzPryqnBNV0suS4YDCbkA8xRGSyOSSCu9A3MTPbnHP8XqMbUQBXvEy5zhdQXSByoG7u8iWOME+HgZ9TUksfhuvXJXblvy3p5tY4kwzaiRnfqxpz9FVLzmSMoWzJMSBgch0P70TEqW9zCUJYlSAfXc4/ektrHRHKyAGaVisa/0gYB/IVAzyMWkGwVPKO56/vVanDDfTSXcMcaN4bS6dWenP68/pV/b3AktfvHLFmA7Dl+gqjSFTdtHHssVsTq6B3/epbd/At8K5JOwx1HQCn/At7O51HSTgKcD0xUi3AkJ0tkch696rLQtFHltt9Azvk9TSCQoWjj2cAbnoPf9qztXFheaVDlSBgYz0FZO/wDtFyhULtrOlOmepJ64796upLkIAJZAQDk7cqCbzgsraSN8Zx8qXv8Aw/T+qccMMCrJdaUeQZwu7Edt+XuaeGii/wBpVDn7rZ5fP9TRL24ZkkuDqz91Bnzf2FTJBFbuLiRQrA8wB5fTtmjF6r5VitrVpbqVInI8i6SWPsP3O9VduVMxncKmdw0m598f3qH4k4uizsVQyFdgM7Kf3P8Ahqjb7ZK6vcAoXGUhP3mHQ4/CPWt+efjHqtTP8SxW7CKB3eT8T+vpWn+HOK3TxkImkscFj2rGcH4Anhhrjds6jqHWtjazRxBEQYA2OOpp++fiLxv63llMzoGOT29ashgDnvWV4ffsfIhU9M52FaW3JKj8R7iujx9a5++cqammpMU0itWZhppNPIphFBkzTSaUimmgOJrs0hFdQC11dXUB5PE52zR9u4BquxgVLE5BFcMddaCG4CqN6Lju+W9Z9ZttjT0uirbmtZ18Z2NTFOcZzRaTnas5BclsUfFNtzp+xeq8Sb1qcTVTLcVKtzmnOx6rhZh3ohJfWqVJznntRcc+audIvK2WTNTq21V0bk4otGqtSnJ2qJmyaUnaos1NpyOblQ0jHpU5OdqYY9XOptVIDZCxp8aHkaK8IDpTggFTVIRHTwuKkxSEUgaEzyrjtzrg4U7mo7iQaDg0tGGs2DUEk4Bw24oVL1Wco3OkmJ+90oU6WVg2VOV79qia7ZBqU7g7ioJC53RgDzFcg+0IQV0y4+70agYKhmW6BMXllX7ydx3FRtdtCQ2M91PWqwl7eUOhKsp2NWGuO+hLMMOPvY6evtRowksoV0KHMbjKN+1PZyyAih4IWCtbS/dJyp7HvSt4kEgGPQijRg22JJwwyDVtDENGPWq60VXI257iryBfJgijRUfg6d+lQkYLL86Nk2jyOmxFAO4E3sKz7uL4+gb6AXCK2d8GsDxz4dWRzKq4ZTk46jrXoLNplK/h6fOhri2EsqtzGMGsd1rPjyZhcW1yYwxQo45dQRyr0Tg85ntEj+65TB22OKoePcGZbgSQoWBAyMbbZq++GIY3jUnKyAbAnIIP+YpfdV1mauvB8oyCDjBqBoSFJQZPbvVr4epORUgYOaHlhCFjjlvWnqx9mcuYEhlUncA5BPtmoNJuC04B0KCdPrmrm7jV2YbbDI+fShUs/DtfCzltOknPPfP60SHaASNg8hYeXQTseQPX8qr7OEzXDTafJHCRGvuefzO3yNWr27K8qqNTy6VYk4GheY9t6DYOPFtuQkwFYjdgDjPtywOw9adhSmW0IS3ESeYyFmZz1AJA+u9SLHDDAsshCsN8L0OMAD26D0yakgligLnyqMhVH9CgAZoC9vUkOqMclJHseWKjqtOYmM8RAOrByFRAd9+e9CXPEordWl1KxzhANsn/AIqpuPGdCY2wckBV36b7+xoC64bdtFjfJACrq3Oe3YdTWUlrTJHT8TmJDxJlpM6STkAd/ehpG4gIj5tOdzI7YCDufbtV5Y8Anidpbx8tsAq77/37AA96L4ilrE8YlIZRuV17DHU/4d6qSDVRZCcwosSMXddRaQ6SVzsT/SvWpJIEbMt3dosEXIoM6mHRRyAHrzqDiPGUlMVtauhjBycDSpPfufc/lQPEba4bQtwramTKqToCr3x1/L3q5NqKpOKX8dzeFLOFYolJOptyPU/Pp1NGcOe1tx4hJeZ98tuWOOZPSom4bZwEa1aTT5wmNvUnHT/NqEM7w3QUQgPzbIyV7Ajpt0rfNmRl+L65u5oIBoLJkZVB0Hc9hQtpNxG6JkeUrGvMjkfnTba7in/l3C7A7KNyT6n+1WaO4QLBHg/hHM/SlJnw7dX3w/cTtIhYSCJdssMZNei2czMN5VVR0BzXkyfa1i1TzeGQPuE5JPyq/wCB8Ua30LI+F54PM+/ar469ay752PTVZdOSdu5NLqDVUWV086gjSWPLO+KtoxgDJGa6Zdc9jtJPM00rUpFcV2pgORTCKmZajIoCMikp5FMNAJk11Ia6gPI/ELCnqxB3qCJScVPjA3riddTiTIqNpQjZzSA7bGgrhypqkruzuckb5q3ik8o3rJ2M51CtDC5KipqpB6zHOxomOT1oFB1qbVgUtPBonx1omG4355qn1knFWFohciq5tTZF3BITVlEcigbSHGDViiYFbysbD96TGakxtXBd6VCLRvmnBamwKbgUjRMMVGDUzioGIBqTiTAxtUbSAUjSeXag5WY5xQDp2OkledDM5dDg07LYwagdirYFTVQDIjJdZxtnNFMWxqTnXMPEPmG9FQxeUAip1QEgSAqRpb8j/ahf5sE+kg47GrloB2pDbo+A45cj2pUBWgS8THKbHI/iH96DijktZ8gcjgg8iO1Wr2+nGOY5EVMsS3SYYASjr3o/TnxBFCukEEmJt1PVD2qf7MrjcZI/OkgUwyFGHkbYijY10tpPP8Jpy6VDR2wjcMo27VZKwQCo9IUctj3oaV2Rcqcj1qbcOTRkkgCsOpGaqJ7lRKN8BxjPrUxutUDZO4ON+dVLyBmK/eGdQ9O9Z+S6viYIRmaXSepGParCG3LqR9KFsoA0qHOrA5UVxfi9vwWyeaQrqAJA71fi4+I77+5EN9Ha2sRaZlXY86w0HxPaWPxLDaW8iyBydSKf09axnH/i7ivxXxeSx4YzCNdnl6Cok+A1ktvtGu4Nwo1CUNuG746V1c/896jPry88fLXvsE0VzAs8Lh42HMfnUdwAwbtjFeb/AMPfiqc3cnB+It/1iA4bkJgPxe/Q16Sx1Kx74IxWNlny/ol/sVrIWk5Hsc0oh0amYnc52+VGiDkx2BHKoLl1XJ6aQKnmYu1WyRRqG8U4DHJ35jPLP7VTTcTj8N7nSA7HEedvKP8APzqTjV6oLAsAVGBk7ZI/5rJ8Qu/tKMi6lRRpBIxlem3qf0qPJ1jTx82uvuJJokycaUdmOfvMRsD3z+W9CW93Jd/yYpD4xCqSo3ZmPSh71IrKJIJCjuBhtX42xzP/AG+3PvirPhUDOlkkFu+GYvlxhigAGo9s5I9s1nmxp+D7SA21uiqp3BIUb5J/X398VKzKqvMNW+FVjzYjmQOQHqe1N41xWz4VasVPiTlR5ycaAew6EgH1A7VlBxWa7l/nBghwQrckTGQAOpI36AZyelP1v8LdXF9x6UAW1ijyyDZ33wx9+30/as8bO+v55Jp5h4YIVmJwM9h+wG/pSPxOa6YIlulvY7nAfSHPdm5n5Y9KPk4hbW9qkbRvPO2ESNIio36Im23csQPeq55F6wIs9twePxlZZJyfLNKPIhz+BfxMO55dBQE3Go4lkkYPJNIc65TlmPfeo5+M6ptMSxpLuGkI1yIOoXYAH2Aqkl4lGLlktITLKTgu24T27n1rXnx/6y67WX+tXoxDFGu5BwBgE9Cx647VLDYy3MJkllCoSRlmwD3wOvzqsW2vnxJKrRK3NpMqD9asJLhbO31SYMjLgZ+8R6f0j860zPkR+/pZ723tXVIiwQc2wBn26/pR3DuMy3BEduhVc9Rk/M1RLHPeygRx6QBuRyx65/eraGSKyX7jzA7MU3FFglaeG3jwZrt9gP6tKiihdW0igwMmgciB+dZY3NtelEMU5IOyO/lG/pVnbtbo5DMjaeaxthVHYn/ms8XrffC94ZBp8YFRtgtjPua3EEqlfKBj0rxvg0sUXERIzsynZYwcCvTuG8QaZNKW5XHNiMAVv47/ABz+SL8b4pSu1QRyjGWIJqZWzW2skbLTGXepyKaRQAzLvUZFEstRMtAQEV1PK11BvH4mAQZNdJMucZoA3GF2NQNOXbma4ddmLQSDBwaCuXyedLG5086ik8xplgixOGG1aO2YlRVHYQnIrQ28ZAFSoXGdql5jaoguKmiBJ2ohVLDDqNXVnBjG1BW0WWG1XtpFsNq24jPqjIEAHKiwtMjTAqXkK0xlpMb0maQtg0jEc6RlL4qMvvzpr7jnUOrBxU6eCGfUtCvnfNSKfWl06gaRhQ25pFIJIps4ZHAxTlXHmqaqGyIRjAqLwgzZxvRisGGAafHGG5igA1t9R2Wikg08xRSxgdKUgVNp4EeHHKlWHqRROATil0aOVSYYoOWMimiIK2ocqJZQT2rimBmkoxoxMuoHzj86fGhK6W5jkf2qNdSPkcqIwGGpRg9arn6npzDVHQLodbKeRo9mwNX1FRsoZSetXZqZcUFz/KmxjKMPaoI42XxcaSB91u4q0u4A6MunPUGqqIMkzrklSQcYrnvOVtOti24aQkLSE/Uda8Q/ib8VTXdxLFE7hM+GgJ2Fe0Nqh4dMQdwDt7183fFiluJwFjkeORg+9dXhm3GXXyWtD8MNb8E4dCX0apAHc9Tn961a/wAQeH2luYvBGMYznFeecQMsdmhIYhV2IORWIurya5kOtjp6L0Fd/wD+Z8efOfe/W7f4kRPjCLiNsyaVcZRtsjkd+XI19D2Nwk1rHKvmjYal67dK+QbHxBKrAeUEb4FfSH8OLyS4+DLd5GJ0Bhz3wDtXJ/0fvs7PDP8A5xtbm8jhjznfGcVjuJccIYoAS4Rnx2IGw+tR8U4hPdXKJCyOpfGx/IetRWfwxNeFTLMzRyqQy4Ix5s5+uR8q473a6eeJP1nrb7Vxq48Ah28SUs2BsFXmfmTj5VZz8PjtCvjAy65NbHGcnov961N1Hw7gPD2aJFUlQpbkcDlmvNOIccueM8S8OBXMROFVQRz6nsOv0rOtORPD+HxTXb3d9KkjgszK33VJ1btk78x6n0FWtrcTw20lvCniTThnbC+WJM7au59OpPaorFDDwxEljB/maY0xuzZ5kfPYHkN+1BS8aWS4niYFUjwq7nzPzyFG2BzOT0HcVpzPjPq/VfxQQ8OjAvAstySXAZgywk/jf+uQ9ByHask95K6GRoWMLsTqlYkyknO/9W+5xtR1yJuM8Sa48J5FZgIoQPKo5bnqT1/4pl/c21lH/LOu5I0SSnBYHsvRQMfhArWT+JtS2V3Oh8dI2muAMrqGkR/M8h67e9D3fEZpkk1XGWb+W4iUoGJ/Av4m7k7euaksre7vhHBEogilfGtj5ie+fbt351e3g4dwqwXh1rCsjEATSDzOe6g9Mnmd8+tEsgy1g0hluAhhQw24b+YVHM9s9T6f3qxsbN7fVLCPDjT8bZJY9cY3Jz22HeraONJbiJHRzkYighGDjPIdhtuTvtmrWF5NLsyKVXcxx7Io5DU3XHfO5JxS68n8h88f2qH/AEy8upUmeSaVnJ09wO3/ABVvafCAmn8W/mijAGdDHzAdgNyfeo34jeSz6LWGQBcjIjIHyHP9++Kili4oSIYVkE0hx97zN+/z5Cp9ujvK3nt0iAtLCzjJI2aU6mx3CjZfckmo7Xg9vcSa7uQOinACDZt+mOg79TUdp8N8WnUxz3MKLjzqHL49CeXy3qzubA2FrGy3GlQAEbLF3b/t7nHYbfnRt/hYh4lYw26rHFZCId32yP8A27n9KrV4c7yqBIZBnYDSAPYVVXiXLXOq5uljLE6YVJkkYeoXO/uaORZ7a2BBkjycHXgOw9B0q6UaGLNpH4cARJjsCPM/zY8h7Vo+EXt2fDjllLEdSwUV5vHxKWIlpH8NRyVT5ifU/wCe1aPgHFVlkBDFcc2wM05sT1JY9bsyqouRn1qxVhgYzWb4VeQyrtM0h7jlWgg04GCSa6Oa5rMT4zSFSKeFwKa1WlGRTGWnlsVG70bDRMMV1NZxXUtPHgseWG4NP8Ek5p8K4otEBWuGuyB0RhUqRam3olYgRSBdJpGsbKIDFXEQAFUltNjGKsIp80Es1UGiII8mg4HzVrbLqIqomrG0iG21XVvFigrOLlVtGuFro5jHqnqMCkblT9QAqB3xTtSa5phkOKjd8mojLg43rO9LkStJtzoWWfTSMx3OdqCkmBfGazvS5FjDJrxiiQDzFVsEgQ1ZROHG3Or5qeoV4RKuSNxTSmlcY5UUnKukj2yKfU2FLiqxomyDsasIlDgEbUK8Z1URGdIFZy4vExGKTFKHztXcjkUr9P8ACYp3IVx5VEWw2OlTfhz6kxvmlxtjFNXJpx5UYDcdRXDKNnpTC5U5zUisrrVcppspA3/CaZGxD6W5jr3FI5Abw3+6w2PSnxxN4eG3xyNWmmyRhicYx6/pVRfwNGvixg/ey4HM+tWk8whID7Z6+tAXk+qJwhG3L+1Zd1pzENrLHcWbKQVz3/OvE/jz4cl4fcXBaF/CkbxIZM7BueK9NjnnseIuY9TIcNjGdjy2qwvm4fxmweC6RcPuVddNPxeX1quuP48J4fJ9psFZSCnJlzkq3UEVH/p9rIC4jjLK2+3rVr8Q/Dc/COIvdcGmRHAJaM8mA9KzI+I+IyzCL7EnjOdJwvX0Felz5ZZrh78PXPWQXNZm4nhhtUUl3CoNHMmvoL4Y4F/onw3FbsAHKYPv7VmP4efBJtAnGeKprvTvHE48sI7n1r0S6lSK0MjupUbEg5z39jXL5eva7/G/jnrM/rNWfw/EdLyRsv8AM1jQ26nfFXF1xC3sLYSHAztjrnsKq7y+MERCyAGIa2VSMtg4+Xb/AMVmOIcXhurcSB/EjRtSKr6dZBzuTyXr7e9cd6/kdM5t/QnH+KScUlurZl0xop1MR5SeQUfPn7etALFFwqzklfUpmIIDDLvjAAI5AkY26A+9VsvE2k+II08YLErDQoTyqRyY9Seu/ueVAQy3F3PBxC4GlnkWCFGBLF842HpnVv8APtVc84LVpe8enKyrI/gFvKo/Eq45Adyfp71RxW8guPCmcWyyRjJ/Fp5k7dNgSfbrir7hPBXe2kuGgYRAtFbnZmc588pz9477E7deXNv+mMkMMBGqZ5xFJOQSQoyw9SATj3x2q8xOwXYWlvDwcXWjwo4y7wo5Cs5xjxGHTYHHYfnnk4Pw9WhleNpHkYuvMlieQVfYAk9M861yx288M8DlpocLpLDou2kAbnp7kURacOijiMngMSiMrMdyqn8IHTP7dqUufBjLz39rZW3iRpJr+5GF3LMRvj0XvzJNBWVpd3MqyzRFGkBIjj3aNfTvIRsP6Rud8CtXBwiG6leWWJZCQQdbHO3YgjA9sd6Oihht0b7FCqEAIsiLlFHM4yenPPLcc6m9SKisseBGEO8sf/UTKFYAjEcf9IP4V2A7mip+GRMgVp1QAbKnQenQHbnuflUHEuOW3DWMbnVKBsudyeXP+9UjcfvLhvECKQdlJ5DPpUfb9Xi/t+HWkVuXkl0RKCSqDG3bJOPfPU0DLd2kcbBEMETb5Eoeab9gPXGO2azd9xyUv4SlrhwwIDABc/vUUNlf3jPI5aESnLSY8z4/pHM/p3NXJP6nF1cfFNtYnCRoSoxFbDLBexbuarxc8V47deLceIAx0jOdvQf25VacG+GY4o1eRZi3NFdtgf6iB199qulsY7KIFggB2BkbJb2UGls/gxXQcE+zRqyyop6hduvU8zSjgpuThJG1knUzAM3/AMVGw9zk0T9stIUd8Z0/jZsAemeWfQZqrueP5Zkjkdk6hPImfXvRNGOl+H4UAcPEoB80tw+S3fAG/wCldAuJNFuqpGDgER7t7CmpxWJoivlA5kIQAPnzP6VYWtxF4etZQg56mXGf3NaeyPVqvhu28BVMj4xyAre20sQQAMpOOQrzHhN2zkIkhO/Nth9K3vDQI0BZwT7cq28fTn8nNXJYmo2bApQ2rlTWU1rekSIXkNQs+eVSuh3qHwzWd6XOYZvXVII8V1LVZHiUkbK2cU6NyDirOW2yNvyoX7Nhsdaxsac1NCpcCpHtjjYURaQ4AyKsRCpXlSkVqi8KRTyNHQI22aNNqp5CnrAFPKjC1LbKSRV5Zocjaqu2XzCtHYxBlzV8xPVWVqCAKPU4FDQgKOVEA1tKyv01mO9BT3KxnzHFFSHHKqu9j8YEEb1Fp8w5bkNyO1SAhtwd6BgtJY+WSKJZGjAI8pqbyqUNf3P2ePLCste8W0nUj71rGcTHw5o8g7ZrNcd+F9aNJbH1wKz65s+tOeprrLi7TBDqweVarh1yZNjzry6zmmsrn7PcqQQefcV6VwYeLBHKDvWnj+xHkmNCnLlU2MrTE+6KdnerZh5IvNnFIy45UYFD7GmSQmovKpQZJBp6nNO8Ek79OVIpTIwamc1d6hc7VE27AGiIsSZxSmLJ5U7yU6NVcDauYjFShD0qOVDijC0JLvypY2IpjBtXOlV/Nhh9KXMVfxOEEuxGVPTsaNVNKY57VFbpjDUT1recseqpuNQTSWoMKgsGzg9R1rEpe3b8SnsJFcSRjysR5WFelzRh4SDyqsuLKNY9WgEgc8Vzebj+t/D3/K8v47xO44ZewuX0FcKwJ2x/53qBPie2v3ENygEo5GMjD/XkatfjKxid2cRq4ZNg3Rs9vasRZfD7StrZBDg+XQ3LNcu/2u7nmWLviPC+H8SC3EbTSOrAeHHtp67k+lXHAvhGyF6L9rdFkySVIwU7c/1ruF8NaCZpEn+7gEA7DHU9M/pWmt3lMBLecncY8qqPc/2ro481xh5eJqyhdFjw8SrHz2mB/L/PnVRxviBePB8sPIRyfjYnAzj8PpTLy4clXk1eJGpPhrJt6HcCsjxC+na78aR0JQE+GrErrOygY54A/Wi96ynGBOOcYlkW9tEdi5wssgUAtjA0gdB3J5cvbNq3+s8Zii8MrYbyMufMcb+Y9TyJ6ch0qb/T34hIbYyFFYgscADqSTj860NhwdLPhcSeG8c1wVDtn1DY+exqZZGmKy74JGUjuYGBuESRpJcctS7YXrtkD3FSTTWIj8SR2YQxMZATybIJ3G/M/PHyp91aXsC3IjDm4mlWRwPwkjAx25j50LHwQ2xuvKD9oufBj1fhRAcn2Bz9KqdFiS0408XD7aQAoZAwjUtuqKdzn3zk+nYYqS74tEwgn1iGMMSARuBgbD9T71N/okM17GjALbJEIAwzsuss7HvyP5d6C43wxbi5i0MY7VCcFzkuR5mYgc9zy74ApWjItv8AUEjhLwp4UYGCzNjV1x8s9e4z2qSBhPGZpmYqAXAz5QM4zgHmeVZq9SV7tljhlS3tVC6cZXffzY6kkkjmTz7UFP8AED/YJIC8UagDU8hLO2OQx/n9jLb8FnxqOIcUt7YyRga3mk1AMdQPcHHP5bUJ/r9y1owWQL5SQ+Qu3cdvT5VkoUubiczmNZYmXylkKAEdgf2qZ1ZIxDLA51Ev5V06gNt88h7DNHr9OfhTcw30wVIZmZ862VwNu/LP6Va2XD45GQnMaqvRdR9CWO3054oHh9pcPIskkiBcYCoMBfQD++Sa1trAbcB1iJUbhj1A6++anrr+RUn+gouB2cZDIpEnbWG0j12xn9Ktrfh0FvD4jXDTSsMDIJ26bDn+VS2sYckurMrnJU475ox4rUoZCwijzgBH+98lGfzpTaWqq9uZFGIlhi6M8hDMfTBOM+9Vb8TudbFbOVm5FtS5x77kfWr+4WIpmO3RR/8A6MmG/Pl7k1kON2XEZyEt9Ri6YbyD5fiar5+0r8ir4zxUyzFjpLgaQ2svp9AOgqguLmWdlSN2YAcuQPoBWgs/hS7dlWSGTUxywbGce/Sr20+CL1VM0caKcYQHoOWa2kxn7Mha29/Cpl0bLy96Mt7y6z4ksJIxkt0/tW5t/g2/UaWRCp3JyN/nVv8A+iblolXwBInMgEYrO2/4qWf6y3BeKNLOphXDHkx7Drj+9em8HnVoULS6mPIL1NYq++EXiYuIjCqb9cf81Pwm5u7B1LyERjZpJBpHyz0quesT3zv49VgHlH71NgYrPcK47BeLpVyRyDYwDV+kisPICQOuNq3l2OazKayDtUZUVOxOOVQOd6VVDSK6k3IrqRvMRGGHp60024JzUiNmpVHpUVUJFHpFTjYU1SKcSCaRpUGRUvhntTYVzy3q0t4FfGR8qcgCW8Z1YxV/Y+VeVMXh4yGWjYoCo5VSRCyACpVcHrQUraFoL7cyvjPWpveHOYuzufSo5I1IyRUNvdawM0YNMgpz79IJFN4coVlBXvVh4UUyjbnQU1m33kJzUUd1LbtiVTp71U7/AJU2f4Il4cAcqPlURhGNJFWUFzHMuVOaSaJW3607JSlyvOfizhCl1mRcPnmKvvhNHWwCSbkdTVhxiwW6tSCNxQ/w+DGrRtzXbNRz8uLt3lfKSBThk86aKd+KrrOU9Dg4qUkY3qEnBqOSUBaLch5pk02Dp6HrVbMzRyZB2xkVLPcB1YA70O0niOFxvyqfbDwXZTHJ35NjbrVorg71RWh0qehDHP1o1LwDCnmOdTO9O8rAyb8qhkYnnQxvEZ1UEb1Mr5OelXL/ABOGvGOdQaAGyGHOiZJk0HptVd4o1ZJxR8059W0UoVAKmRgc9aza8btjciBH1MOZA2Hzq4t7gEau9awuuLz+jgoZSvSgeI3EVpH5judgOpotZRpz0NYT4i4xLJxgWyKTEijccySd/wAhWfkk9T8ct6VvFbX/AFK9Zw+UU8s9fSkt7G3hIj8NXYk4Zth7g9TVoI9QGPugb7Dap44YxglDuMk5x7bGvN74+vS57+ArSFVTAUCPHl7e+aOgXRFqMj6QfKNQyM+w/U0x3ji1gaRtkkcj3zQrSvI+VKlcbnPyquZn4z7u/qr4ve6Q48Vt8jCbEdzz/Oqe/iJ1RwxZZl0lidl5ZPoOncnFW88KO0iaVYELpI5se/ypkVnLGhEbgK3nZ231kHb9KuS/1nbP4rYbTwTrMSyHI5DZtQwFJ+pPT86vTE17apKrD+TILiEttrGNJUj1G4p0VhJkqCW1YODkhd88vr75qx+w64ypYnWNJx26e29aTlF6VVzYxrICBmSFhD5ju6ZGk+6nG/oDXXAtUjhYKGYyvrUjJByTy6HNM47LJw+0ludOvUoQgZO+rb5cqyd7xkpfXV06v45UadJ8m4zq+tGYc2tBeS2kcCm5yDJkkHYAdu/QbDt61kuKcR8SfxNfhKCFQDSNI3I26HJJqu4pxh5c6blWl0gENjyegOdiap4rRftGt7l9WcDwyNS998H6iic6rMXc91LdxQxzSyCFDkZYhM9TgEfUZNMj4LBcTbhQpXUwY6AoPPBwXc7dFHvUnDeCtKXlKXbL+KRpMZPvgGtPY8HsbZRH4bPcjdYIpEdz6nJ2996M/wAF6UkFjb22pIRdtGcArbxaMf8AcWbJP0q6i4Rby2o8a3VFAJZSzSYOepBA1YyedOuDc3EbI9o8EqN5YJJI2yD+IgHYdMk47UBOrcOkUzSqkhTCKpYL8h137+/an61Pss4Ybewx40cMbkZjYRtg+mSfL/m1RyWy3b+POrom2krKUH0OT9Kr24kSum5uEcDyhIgQoPTLEf8AJootHPGjzf8ASAYACqZM+mTj88/KlgtWFvaIiCRxFGN/Ldtj6YO/zopxOjBUSBWJGh1mYjHpsaq7Tidu0wjWyDdVkdyob5kc6LlSQXIlluLaKJhkQ+KfN7gj8xijP9AmKwuZjiacMc7apAc/LFEjhgMfh+NImM6RJy+vWiLKWEKVVU0dMNqFFOrJ5o3CA7tjYfoRS55HXQROHOWHnjPQKBgE+medWNrYxJIWMUZc7NzJ/P8AaiIZPDjGoI6Y38oIqaO4iZQ0UhCjkFOQP7VvzGNqZIQSE8IY6bZz/anLE8FwrSAhCcAhSvyHSljuwIwJVMqHmQQ2ke43qcXsIBUylYwcai/3fQ9q1nLPalY3K48MK8eN2bBxQtzaW1yo+3WMTddejPzqZ0kL5jl35qrnKsD09qDvluLYGa00KVyWRs6eXL2/zai86c6Dp8OwxSC44bNpborjUMeh/ejoLue3yt7CyKP/AMmrUp+lBW3EIr+Jmjja3uUOJIn8oz6e/fvRsN4SCrswHUPjOeoNTmfirbf0clzFMmuJgy9xSFqqb/g8d2NdtNJaXIGVdDgN7jkapP8AX+JcHu/s3GYlEfJLgHyv/wA0ZSbHOa6hLa8S4hWWMhkYbFWBH1FdQNecIcVNrwKhU704ozcqnKrUivk1MiljypLe2LMMiraCz2G1L0HsitYmVwGBx3rQWtvlBUNvajADDNWtvEEXAqswbpUBUAVMrCnaBjeoHYpyGai9YJEjw6wcUDPw4Mchd/Si4bkE6SMEUYAHXalkqtxTpaFBsxGKMt5whwzCiXtyelVV9biJS+k7dqc+Fbq9SSNhSvBHKMEA1l7XjcMb6GLAjuKvbe/SUAgitclZ/YX7L4D6kOBUhlBX1qQuHHOhJMo2RvSpFkkEsRU0HZQ+FMSKcwct5eRoi0icP5ht3qc+r3IMXJqXTkClWMDeudtI2q/xmhlcJzqkvr9fEWLJ83LFFXtzhwMkA9aznEAftyg5wTlSD3rn6t1vzB1tMz3MkbZ2Qb9iaJOyOwGDz378qhAVEeXrgZ+VLK/3ydlIpGa1yysWBwCMYPfNO8bXqDkLuRmq2VyzPqOy7fpinySiKF2YEnLkEfT604KKhlLXWzDSvM55CrvxcLgc6yMQcXMFqpJ8STxZmH9K8h+VX0s5iyeZJ5VWpHuc7gbVRcdvGji8OM6SwOTjO1HtdabZC33j0rF8dvZTxUREhVCZ3OM77D9avn608M/+orrif7LKJdbEKc7natdwHj8V5CuJdLJ94Vhb9GZCS4GdgOZO3cVW2PF5eFXY0s3hHmK0nx1+bmd869sveJpb8Mlui6+Gi6iTttXm019PfcR8WWKRYtiGbbXk52qp+K/jW3XgZt4pA3jOvlU9AcmhOG8Xl4hw43VwBHGBkFueO9Z+a3MjH/m8c269JW4jS0VkXJ2BAYbdOlC3F2IObByzEtkkhcj8qxNl8QRx6HhlWSHcgo+FJxjB65/P2olOKCSIHUdIXOVGAT/n1rn6nxd5yr2TiLMdQOQBsAunFRpfq0yRlT5vmBtnP+YrNXPF/CJZBqUfeyDn3qKyvHllM0pUg9G3J58u1YTV3iY2FqftE4dmGrGkEVc29pkDy8upPTpgVjuE8WWW5EOuNJCRkhc4XsNwSTRnFfjmw4REYwzmfBySdQXp7Zrp8fOuXv5fjYqscakDLaRjHf1qOSbSSgBLE57j+31rxq9/i9dKfDsrfW2f9yVttqoLr+InxBPH4zzRxoT5VVdz65511TxXPjn95v17nepbzo0Ny0jq3m3YjW3fA+nPpWC4l8LXjs7W7uWYEEmA+Iw7YUkL2z2rK8L/AIh8RSZZJlaSP8Q1b/U16dwbjY4xZxtbxxGR/vwzL5wOeOfrnHqKz75s+Vrz1/Yz/DvgxFUvcZiRPIEEeqRhnt0Ge+P2q9sfhGxjSVrpcwq/ORl1flv261dSW8KxKZuGw5yMkK2535MOvvQV9IS8SeHDblTqUvGxQnHtgH3qMwXq1BefDPCRZu8dmkmnfJ8TcdvKP2qgkh4laxyW3DWhjglGNWCXC9tTdKsZzetIsslusrA4VkGMY6g9DQvE5ZpbYuqyQyOcOWfGD3Bx19aJ1BlU+ueBHWXTespBA8RAyHvk5IPLkBXG7uhAxjkuVyQzeE7kA9yCAMe21cLOafIkupZMA4TKgj1BAOR6ipbc8NtmC8Rs50dshWacMHHfYgE0WiQ+F2uCAzRqFUaXjiGtT8hg/kfWnzWc0MRuLYpdITlnIKkZ6EZyKS5isnw8U32YhTg7EgVCl1NAP+mu45Mb6hEH29gNxS08S2/+oicANcQDoHmdV9OeNqvOHyyR3BVobiR/xKkqvHnvht8+1VBs47hlmnlEDqBqiyQvuFydt/Srqys7eNV1JEQceZGLZHzpU2os5xMgIwG5YlXBx8qIe3l8IMAGTfbUD+dDWhtY0XVJ5uhNTScQjQFI5Y5CfwE6SaviM6Ge6W1OmRJXU7grGCP1oeR0VjcWUOmQ/eyCqsOoOOR9ae3FY2YRXCJEzbhg2d/pU0SO4Hix4PLPNWHetozoWG4ha78KTxIJRgjUcYz1BHMflRkokaYxyDEuSBnk4HPB6HFQSCPxFidQsgLaCwJjPdW/pOPkaLJMUUbMdcRAZXBDHHf1xyJHTFXg1PwviCeIbCYFHXIRG5MPT9cd6LF34Fz4FyCQy6lIGQynr6+tU3FovFtoOIRjTLbzL4ijfUORx8tx7Uf9q8VVt3Ks8WSGPQ5yCT6j86MwrI654cYbpLm20GNwQwB2YHlg09ZllWSOZcDbDMAcjHX1G4qO2ulSR7aX7rOyjfBHY1Jd/wAuMSoyhgAr5HMg7Z9fWjNPSRSz2h0GQMg3TI1Bx29CKLm8HiFoY5I0kjcYCvuD6g9Kzz3gjdVCgqN8McFT6HtT0vUWfVGzw55xnv125H2pfhMnxhrj4Vv5FiMngSnK/wAwg/ka6tVxiG14jaxfa4opNLbEjPT6/Wuqp4519Ht/qijtmPSjobXOARUtvJFIQBjere3tgwyBUeuF7BrWz3GFq2itMYOKmhgCgbUamByxSthyBlhArvG8M4ophkcqAuIySSOdY9VpzEy3iscEipNatgg5qinSaJiwqOK/kDaWUg/lWXs19WjEaOclRmio0C9aoo75xjI3qxhvAwGTv2queonrmrQD1qC4txIpBFKk2RtXPOMb1r8ZsvxDgxEviowHvU/DoxEcSOCR0BoriFyBG29ZGK+/+oGONyTnfflV8/4npvUljAxmk8UO+kDNV1syFQdWSatYAgAOBmqxKaOFT0olUCimI1PYgCi/C/SswxQVxIcHf51K8vQ7ULK/MZBBrLqtOYBnIkBRh5h+YoGW2BRC4yU2zR1zEwIkU7j6YpqjK8vL1HrWVaQK+Wh8M/iOkmoJHZowG6Aj332okReGAOYK4B71CE0Zcny7CkavnjbxEVj52Oph7U77OzwW7SHGoHKnn97JovQZZg6jfGjUaYoFxNuwAQb46CgCViRZgyAaymCf6RUNw7SS6FyEDDU3cdqRJvs6HP8AuOe+cDoKf5FgwxOO46nrThU23bxMyPudhGoBwB3NVfxDwiSaL7RbIWlJGrvjltVkLyQAlE2A60G3FCbWQnQ8xHly/l9vU1tyUuX4yM9pIgLyxHJ5BsDbr86zvEbZmBOPMR16k9K1cMDzlpHBV3ZiRnPPakueGhgW09G6Vq6uerWc+Hfgi344GlvmYxg+XRsa0c38OLsKIYuJO9uRyKAHHpV38NQtFG8WoICfKqjetlYgeEU1Ft8DNT1zKy68nXF2PDuIfB3EuBSGW0TXDkBozsGHf3oC0P8ANaK5jubc8seHqA9BivoO4sYp9QZAdQ5dxVRLwTh66gIV2GcVleB/7+368gvuEzqCYiShUEMRv3qluZLi2yjIGQDJ2wM16vxGCJpjCvlUbgdCKyPFuBPrDohIGR/7h0/euT86+umd+0ZLhHHL0yiCE6w7AAyeYqSNyDzozinCLmWMwxKzOd2fnt13o3gvARFxKCPSQr/zFPQ7b/tXpFpwXw21NGrSOACT+EY/atee/vxHeR82cUsmsb1oHBGDvkcqn4VYNxO41MSI1GNugFaP464TLF8QygIcPllHOhfhUiW2lhONQ2Ar0vH9jzfPMuj43tOH2rCa0SaPkoHU9/l1qrHGZeH8S8eC4KebXkHcb8j3HeouLJcRGSRQSCcIV5Y9qzuieWTOhyxPar65kmVlx1d2PoX4b+LY+JQeLLKxRgFmL7qhPLV6Ho3/AIrRT2tw6GeykjgJ+8rLqU+mxx/nSvA/hTi8/Br2GNwfsrEiVWGVcHmD6fpXu/A7zFssULLKCv8AJYnaRCPKCe43U+q1x98evx1c9SzYGaK9kUMYIGYrhtMbb+mx/vVdJPcSZhmtTAHT70RJkTG/LqOdXtxEiMXge5Cnmms6l9CD+tASs7yoG0SBTlWlxke3X86wsytJdZqaL+YvhwQgZDrgnzf9w5c/T571JdC1ltlS5gQy6soScHPoc/rRV1bk24d4mAyWA1agfYj/AJqlleOSNhHBGR1OjJb0O9BueeSJfDh/lKDksSZAPyH5GljS3UJJdNE02rIkDaSfUbf560DGkYncQsEc8l1NpPoTyBqW2Dxz4xktjZHyM+owD8zQMXv24wx/ylkkYHzGNQ+B7EZIPpyomw4rFLJyQo5yDEd89sHBNAx24VdQdzk5wM6l9eeaLYhGBYfalI+9+Jc9e/zpzL8KtGngXcXniEqnfG6t+eN/SgLvhNpIfFgnEThSAsqIAv8A8iDv6U2G7fQQG1jGyMMHHbPOhuKO0lvLLCJXAXeMIDIBjmCchhjfvWvMTVTxJ+IQY8O4tVmj5SAqeu4ZRy6b4qLhHxfeWd0bXiUKRrIcMr5MTeqf0/pWav8AiVxE4KtcYxjUVZRjsUXbHqKoJZg8pdJJRjfwmyQD3BPMfnWuKnPs95h4zYX6iATYQrmIs+MHPIP09jg9iaihupOHQXMTnS0Mni+FKujAIwSpHr+p9K8V4bxCRNdvI7GF42U6t9PlO/tWo+Gviu6WWLhnFHMtvIBCJWOSqHYZ742wee1P2wr4bPx6lwy6junMGQyuCCrfi5FWBHoR/goLiUwi4uqYwZUZSRsGweX0GfpVDwhpLLikOvTiKUZxyI8y4GPf6U/jt+P9cCZP8uRpF9ipyPrinL+o9fqzk4hmdteCwnZdj0K7H5nH1qwN74tusqHI0qcHqDg4/asO940ti8y5yOv/AHcv1wauvtzR21pzw0GWA6nGCKN+neBkjR3Fw3htiRlAKnrgdDTo0kYaJEDh0yp3G/f9RVKqSXTv4Jy5bzDO/fIrQ2gkitBLdMWRBlSdm9t6m3SsxSfFN/8AYbW2hVyrMxYqNzy9K6nlW4xeSzTW0YjAAjV13A9xXUf+mfIUgP4duJ7pwcEr3r0K1BVBnnVZ8O8Hht7dCqY239K1KW8YH3RR3WXMCqxHSpkweuDU/hR4xTCEXpg1ja1hc4XeoXI3NPZgeVRsd8YBFZ9Vcisu43cnQd6DFu5JBG9W7BCT5agZQG1DYe1ZWNZQsccoIyAaPjAABKb1yNG+ASQRRAxpwDn3qpC66QDiJhkCsNu9HCZZUyKCmETL5lGajhlwcYwBWvN/lZdG3kfiqQRtWde1jguSUABzuavuIXiQwsc1ipeJSz3bacBAdzWvP6zv42ViwbGk5NXtupIGaxnC7tnYBTmtjYs2gFqupiwXAXOd6jkk270jttQUzHfST7dqx6rTmHSS76WqFmLKVJA7N2ocTM2pSQSPzqFpjGOeoDbHX2rK1pIOil04jlI323qIsI3JUbNyz0PagftiTHwHbDHdQefyof7VL4hRyNeMhujCpvSpFhJJGoK565H1oaeRfOVGzDl2O9Vy3JuJZokP86MfdO29TxsnhGUkAuwUA/Pb03oH4JLmGEldxkAA9zzqEJ4EUmgAytzzyBpxGoeUg7ZHYb7iqu6v2cyJGNSqOY3we370aYyIBQhZ9YTd2PVjz+famicTuZgwULyDch+1Ud7dzqy6XHhLlEjLYyerE/Whru/ig4f491MEVmzGiDdz3Pp2704mrriF/DFbkyn+TjB6/WsddcVXiV6oijeKOMhAPu4HLAFVPHONT31ssHDGnhYkgNPEdbE89GM/U4xQHAuH8TsLmNrliq6gDrYlST61088/PrLf/p6Pw0qYELbnBG++/UUVIwIHm69un7VQHiEtnM9tMhR1O+Pukd6VuJ9Sw3p2vV8Ph2atbbiKWd4FDbk4Zug9q2llcHCsOuGFeM8Y4u9mjS28ZklxtnYD1Fbz4P42/E+ERTSjEpUA+1VHJ/1TmdfG5yZFDZOpTkVBPGt1E6glJMYz196jjmzgDOcZqc+bddnFKxx/jD8dsZWSAeL4N5CxKOOp7Y6g5ovh6R3UQiul/mIBtjAPt2rRXtrFeGPx1AcHGf3qol4fNaXWs+dDtXJ5OLLsdPj8ksygn4T4SoqqAscysunYgA7EfoaseHXJlhl1kCTW2o9lVsfXGD86sYo0eEEDV1AP6Vn7h2sOJzzxKJFeM6o+R2OfzH1pSZTvWzFB8e8Aa4+z30EYd4182O5ryee0l4VxFr21Uvbv/uAD/bY9/Tsa+hncGJSWVwwLseeBy/tWX4r8GQ3MnjcPyjsNxzB9Mdq6fH5PX4z65ncyvG7m5S+Xytpx0POobZEgVpXYnfSv71tL34BmZmY20sEhIy0OCvLlp6fI1VSfAXEnAWCSZiuSVKYP611Tzc45r/z9S/FPdGzEOuSXSQNgK9C/h58RJex6JWTKAoygYyvUj5gN9azVl/DHiNw4M6uI9iS2AKtG4BB8NyRTRMVlRhhl5bc/lzrn83knTbxeG8vVJVXUG1AyhQurO0i9D6Gqw48QrsSCfK5APyPeqez+IouIW5V8a0Bxj8Q/p/f60U06XcUiSyavKFSYHDEc9LdyK5b02nNh0z27KwedoiPvgoQR81rLcRSzMzaZFmjkGDIuQx98bflV80ThFDyF1z5WbfTQr2Il3iVCD97Cn/M/KonSvVSbRRBRIzqdgWwfoetSPcoq6ZrZ9IOQG8uP896sZbYRx+VShHPGwNNlEbRBZCq42BYfkSKrSwGsjZ1xt4eT+M7D5ii7Se4BbxHW5ibmwTLIeh1DGR71Wy2+mXMWABz0nkf3oyFwAG8Mr01jb5HHOqlKxpLd2nhUyQA8tl/Cf3FQ3EEyLKbGSVGXfw3IyD3XOQRQEHEp7MkEu8Owy2CB8xv9RU78YhmRgG0kb60zt7gb/MVryiyszxXityV8O9eCG4JOfGgysn5kA+v6VlJ57OVyrwoJRz8BWQH5bithx+1a+jLJIOWTgBlb/O4xWWsLNftOnALj1yB+9a7kacBUt21gxhiCDswwdxirC3tyiqGOMdzuK01twRZ4QSW2HNar7zgzwyYjLE+xzU/q+e/uLfht3KkFyNerMXlz/Vnn8hmm3sjz8TErHzCJRj/4gH96HsLO7EeGBGVPTqdqtYrSeWTMltqBPMbUe2QrJugrWOQL4e5XzHB/Fnn+lW8SGRYQrZJBK9enKrC14CrrpKup361ZQcNitipYgEfhTcn19KGfXUB8LsXc+JIqqo555j50ddJLeMI0OmIct6kb7TJj+SEi6BevvRMERI/wUmdun2cDwx4McbnHNdq6jIsgV1PEaKto2RRnHLpRgJAwTTDJGO1RmZAOeKnrsTlMXHIc6hd2zvy9aY7gjnn1pD5lwGrK3Wsh3i521DPamswyDnFN0nGWQZ7ilDIo+99anTcHGrapPLjdQaZlSmabqZRsA2euaIK5hGDutNaReQpsjSYxsRUGl3H9NMkkjacnnVbLdS+MAowvc0eE0jck0LeqDFsMVpJ/U2qPjt8Y4AoOXNZNrrS++/pR3G7v+eRnkMVRJFLKS+DjNaz/AFnWz4BdSSuugYWt/ZzERDO5rzHgN1LDKsYUFa9Ds51WIEjBNHQiyllIXJB27UBLMC4OcDoetTyS5Tc7d+VVlzIyg+VXX1NYVrEkpOQ5ALdPWoJJVlgZyrllHQ4P+CmxzkeWSMKp9dhUUzPE3ioSVH3iu+Pf0qFw828PEbVXjlweanqh9xQUryRTeFKik51K3fviu0tGDc28ulc+deWPY1MZxNAFbBc74PU9cf2pYAV6os7iC7UBlchHPUqeXzFGXU6eGAFVi/MjmOgI71EpWSKMSBZE5NnfHes9KxtE+zWzSSPCdW8gPl6DPUYoCya8uWS4jWMxFnMQJ3ONs/l+tRySIkeQRFaQ+XHLLHp6mhra9LRs0iKWf8JbzAHsOg251LPax3CxDxImSEB1UnSFHLLdO5oBGhe4hRY5WRnJYFIywQe4qM/D4C+NeXLyaRhSI9vfHUn1o9Z33aJiY1bBbGkKq9uWCen1p8d1byOPE8OeQNlFZ/MPVt9605iLRnBrS3hjVjHF4jLyEYJH7fSrmW3sIYz40aOrD/bKg6vlVfZyXDYKW6gH8YwfpikunlZWAhSccyjHS31rTmosZzjc3Dp5H8Ph1xHIOrkAY7jHKqays/FkMmn+X0yc70df8O4jc8U+0wwhLPRgwsdwe+aFW7e2YxspG/LFVb9bc+buc+sqa64PHdQlSuCaM4DZtwljEpJU4J/tXW/EYwAGwCRR0U8bBSMb1UrG2/jSW10rpnODgVYKQSGB51l0lxyJ3oxL11gBDdT/AHpoq/fDxkPjtmmyEaNMg1IeZ7VXxX/iRq3Xk1TePhcqcjH5VFmnKdFlWMYblup71V8Tt2Ot1xrAwvp6j+1H6lJ1jl+hps6+LGcZ1Desby056+sml5PasJMhTtlS2xA2Iyff8qsra9dWZooy1uVOADkowHKqniEJFzJ4uylScdMjYj6HNR2N+9vcrDIFLYAJB2IwAM1l7Y29day34laSrGZAocpqCn8Q7jv1ol5LSPGVUA4IyM7GsmJomigyrRBcgofwNnGx+X55qWKeSPMJkkVo2zGxwdz+xH5+9V/6SfC/89W95Oi+VE5DfBwcHr/m1YD4ntZLvUuklSOmAT/zWsS5DEs66o84JUYKH07fp0oTiUcU9mx0/wAtueDp+nY+lL21U59XkVrPccOvymThWxnOk/PtW+4XM91YkPq1qQjA75HMZ/Osdxe2c3elVVl3AZTuw7YrRfDDGOAjXlGIwc8j2o65/p7rSwYChXQFP+4HIqxigRwdJU/LnUMZIwDkgjtRA0jGMD2PKokwqhltBIpDBkPQncVXXNi+gl8YxjKkYq78d+Rfl0PPFAXrrpbQpBPTOzUxGYltUD6UO/YjBqRUWKILKG052YHcURIqs6s0ekDmc7V0hTcKwI9Dmq5LqgJLjw3JSbSRsMrkY+maqJbiVbkywhVfqYxp+eRtVvLCdtO/bJzmpbeOK5OnChh95T0Na80g0EEl+uQBFK3PSCdY9RREXwwwuRcaCgzu42FaK0jW1iB8MEnbOcCpL65YW5Zo1O22DuK0n2fUXvPxBNeW3CLLS0vnxsdOf/NBcNv7PiylzJpOfMGXB+lVbyg73E8rZ3EerOKZDelWP2ZI4ydsgb0uus+Q5G4itLZYwWYEDsKj+1WUDjQrSNnkKy8L3Ekuoys2rGQTt8q1fA+DtdnzodQAJB549Kid78gsybR9nJLftpXMQ9a0NlwcIP5qguOTDrRVhwxLZMAAjsas1QKK244/1z9df4q34enahpLEDkKvSoxUbRqela+qfZnmt2U7V1XbW6E11L1GqF2dTsc+9MaXAGtSM9QaMJRsh8D3GMVGYUdT4ePUcxXFea6J0BNxGjldR5cjSC7CNgsD/ao7hEh1CePK9CpJxVbPcxx5dVYx+hzy61MlXsaKCdZwCG9iDXTREDUFLD0NU9heQ3EbSQBgATqxVit0yqTglPXY07M/Sn0ju0Sg6iM/hNPgnjdC4374PKmyeHdoAHIJG3rVbL/06lYZGHQ4FOUVYyN18Qj0NQmQscamqCBJmUFiSfWnsHRSvTvVT9TUvjBBpzn3oO/ugtu5zuBUEsvhqd6rL2Z5ovCTm1bT8Z1mY7Wfi/FGRQdOrc1sB8PpbWi+XJxVt8P8HhsrYOyjWdzmrO7KlMVWfEzWGgtvs1zlRprS25YwZaTHaqPiMQW5yMCi7W5t9AGs57Ur+HP1dxSSE4BJ9CaSQORkx8+1CWl4nilSpHqTzo1v53JiPXNYdRryCBeOTS6kxn8qSW4S2xJqBU7EdfrRJXwQVYBgar7uFmRiPPH1Vhms60QyzM0haBkMbc1Ox/5oKWYqgHMbhlOeX+daj8KJXypVQvd+XyqKbxS2pnjKjl5v2pBJC6PcCRZgqPsQTjB7+tQ3kQkxEzKQNmeNt8+h61AtsrReJIWiffTj8XyoqxtIYYXZp1IOdi3Juhp4SsXhReUyxzTFyT5jvk9MVY+E6horu6Bj0azG6jV6ZB9aOUIh8TTFKSNORnYe1JcwQXRUhW1rkHUPNj3PMUYNVN9fuJIdcWu1KgYD7k9SRn9aO4f/AKb4jLEQpABCBQV+R5/I1Ktg0MqLLCbi2cZCswyPX3FTJw+2hk1xpojbYjbb2Nay/GdizsrnAwFWE9NJ2PyqafQ8gk8UpLjGQ2AaqJrn7KNIOv2HOqybjDOSrx5X3pwVZcUu5IYmRJlLkZxjB/KsFc3zG5KySS5z+IE/rVjxC9SddCltjtqAYVm5XcSsokbHM5otVIsDe5lYhjgUfFxVg4OdtgN6x8lywfAOxNWCz4RT09afNLqN9bcS1gAHOKM+2jw132yawvDuI4YgncmrKPiGYFGcHJNaM8bK1vlWXST5WGDR63RhYozY359j3rDw8QPiIwORV2L4S2urPmjGG/8Ab0Pyzj50pSsacTaQXG4zhlqXxtODnY8j+xrOWPEdlRiNQ8oz+If0n9qsvtCx4ycxPy/zuKVPDOL2pcPNGfNjzDHPH74/Sqc2qNN5lBwBgjr1H5Gr9ZA4KE528rdxQDRKz+Iu2lgGXt0zXP5OHRx18V8li+cP5gpLBjUkYIceIpZTg+bp0/t8/erpFSaJsDzAb0DcQeC2CcqeR/z5Vj1zZ9ac9fA/hyRs2DzByOh70Jd62gwhwwPXk3ofXFWa+Xyk7ABhUU8QZS2NxtjuKrnlN6eYcbtnSRopcoQxMcmNj6HsaXgnElLmKYhJTjfOzGtbxjhQuFk8MjSw+6d8GsHNwqa2Zw6lkBO45oa2/YWvQrPi0ZiyZAp5EHofUdKM+2iVC0bqcfeAPKvKl4hPEyjUdSnDb7sPY8/8xV/wniwmYhZAGAyRjANT1zhy6232nWoHlDDn/wCKhkudLFJE1Kf6eY9ap2vNJ2fHbHSoJb4MytqZfY1GGsWBjZipGCfL/wCaZFpMoZosHrpOx9qrXuwyuFk35+Y/vQ0XEWiJBLYBwRn/ADFaTn4ztHcTYRyAKSrd+nzqGDiPgzhWOSq7Z6j360Pf3qTRB9QbSNids+lZW7uzNODEzKoUggncela+uxG49BveMh7MFJAOx71StxO5cmKaZm07jBrPxziS3AJyByPai0ckCTbUBS3FSRYgPIAxc5XI9xRkOlQxA82c1WJPqAUjHWrKxQvIpJOM1ldaRq/hnhr8SvUyhEfWvV7OwitYUQfhGATzrJfCtxDbW4QAauea1iXfida6PDxJNrl8vVtG7CuLCoFfPWnjFdDE/O1NNdXUwa21dS4rqA884p8RCG8itSpHiNpGlW3FGQTKEGm50Np1A8xWf4jd4+JrNdelAGzhPvZ5Z6n2FHyza5HTYg+YknSFA6Zrlz/5ay/VlNdLJho51Z1/pbIP/FZuZYOI35ja7SCbOdCjSc9wc7101/FB/LhYgMS2S2F+v9qr7HIup5mIkuip30jAHcbZx61HPP8AV9Vq7cizhHhr4zHZiMZY96KeVJ4NQ1BQcEmvI/8A1Pd2vxJNGVdljI8ON2K6SeXl9+9bq04xeSxwSToEY81Ugrv3qu581PN+jJeLfZGZJiEiBAV+uas2mgmt/FZsMMHK9azl6SwGpCyvk6xg6T/aieEXwdvDkGpRtyxWU+tWkgYMnMEHepbiLNuSuNqpxfR2zNFsFHLJ3o7hnEo72N4yw3yFxWvMZ2qG6cmTTmpbKJNQd8bd6Av5TBeSI2xU0O3E9C4BrSUpGubiKxppBGBQc/FAQRqrKycUc9TQc3EZO5pfTyLm+uxISc0Da3X8wqDnPKqSbiDdeVJacSWGQOeQ5k0YTcxGSNVb7p571x40hk8OTVqH4kPOs/bcfiuZQpye2TRj2oklWVZFx0GeVZd7K04ytGt2JEGCSCOZoSa6ZX2J0jrmq6WUxRkCRiR0qjueLSxyEHl1GKxt+tZyvZZtcjEqMc8nrVbLdEDddTH0zj0qr/1fxJAdRCjoaf8A6qkztEF5fioPFzFdAKmoFmYch0qwNpBPaFWI1EjUc8+tZH/UoVQsGIYHBwakHxK9vahWVX1fiJ/Krk1FaRVltiFU5Axj+9PbiEJKanCTKR6Zqgi+KYZHWOUBB/3dDVfxLisEiMUlw5H3CcnnzB71c4qLW+ivY1A0lc41Bc/XHehrv4gsggw+GIIbCZ+oryafjcylCJz4kZyrDYiku+LtdESDZydyNjmqzPwZrcXPGY3yYXGM7DG3/FVU/EFZSQuD1Oazi8R1hULZI5nvUkdyZtTE+QbCjBki3edAmR1FV8j7Hv1oVrtdwDsvrUbXIWPzHOe1L1OUNMrLNrP3elS3F0UhRV2LdaHmn8VgBuO1Ds7SucDOnbbeqkFqwhujHKoB5EUWeI+HIRq25VRJDdSTKEhkbfmEOKJnseIGXyWc5GeiGrmIq9tuJgEZbO9XFjxlYp0aQ5QnQ47qdjWMi4Xxc/8A6kg7UWnDuKhcSQFdueaLhfW0+1m3uJIGbJUgg/1Cr7hnE0vYngkbEg3J/Rv2PyrBypePbRuVxLGgcnuvJh8iM/OnWvEJraZJBnWv0NRflVJsej212VkaCXIwfoaSe5aOQsP9xfKRnZxnb+1U7XiXVpHew84/vjqB2+WfpipUvFubcqca1zz6ip6h8ryC8X/ejJKNgY7HO4+f61LcypPHpBwrDKn26Vl7e+a3uxG/KTbB5N6e/wCvvV0rZh1I2uKTzRnsRzX3qM34q/EzyoqgvtjbPbNDz3KoCpOVYbelC3MviBlH9OfcdaqprpijRs5GAN+3rTwtF3tz4Thg+Ry9xVLfOrozeU4GOXT+1Oluw8KrIRg+UkdD3qiuJpQV2JGSoYdD29RTkGs/xNW8fVGAFB8y8wP+KnsJ0iGrBjcb+xqwtfhH4i41MXseFXDgfdYp5GGeW9XcX8KPiq4GPsAhGogeJIBt39qqyUTuSqKTijq/3hy2J2+tcnFyq5kXY/SvR+F/wNi8NW4rxWV3zlo4FAX2ydzWosv4TfDNkP8A7LxjnJMzFh9KU8dv8F80eCzX0skh+yEyKT90KT+VSww8adsrw+ZkxgZXG1fScPwxw62RUhtIUUctKAVKeC2+MeEuPatJ46yvk18+HgfGpIDi2GkjJVv2qtHwTxl5c+RAep/SvpBuDwBcLGo+VDPwlFBwoq5zZMT7PAE+EeLW4IOkqe1TJwC/TaRPpXtc/CkOfJ+VV03DAMnTmpvCp5HmkHBpVPmGDV5w/h5jIyAa0UnD1HJR7U1LfQcafyqP/Nfvozhw8LAFaa0myo3rNwAKaubR9hWnMxn0v45CRzqcNVfC+woxDkVpGdThqXNRg06qSdmupMZrqA8qupreTiUVxhSVm8NX67Dfftnt2qS+nCosirmKQHzAbhQNz8zVFxWGe4tJwG8MI7tkcwBUdr8WcLulijaVcgBAmcjHUnpzxWXps+LnWUy84pGY5PChleRGGphhlG+wUk8/YUX8PXNkeIT+ArCRyFlLnLZ9BzPbtUCxxXkkWmJGOtiV6LvkGq6GWx4Z8Z2aKr4lD67gnY5Bx+g+tHMy5YLf6O4/wY2ktxdhQpnkiJYdgdxnvWhvIkihiaIZAXSqY2A71Jc+Fd8MnivVMkZVQ2k+YdQfWgOFyx3EPgtdCV1j0MhGljnIyB/ao64uYrnr6heWYxuGBXQMkg7H/BScLRYQSD97PupzR44RKJQyxzSagurCk7CrBeA3susw2snm5ZXGawnNjX2jNfF80kcEPhOVkb77Dniivg6aSNnSY5aNts9QaseM/BHG+MLCFQRGNebHmaseH/A/EoLlLhpIkOkB1BzkiujmfGNv1XfEdg8t4J4UJDDfFAW/AppQCUNenQcFwoE2lj1oxOGQpyUfIVc5wrXmsfwq7jJQ0QvwWH5g16UtpGo+5UohUYwoqsidrzA/w+En4PrUM38MfGG8oUdh0r1fwzjoKaYNQ3NK8nrxyT+GhtCXjvMEVEbebhQKvIrsORIr2J+HxSbPkg0FP8L8Luc+Pb+Jnu1Z9cWz4vnySX68Zbikt2CNQU+3Oqi6Z2RmIwc8691T4I+G0cOOEwFhvkkn96L/APTPBSADwy1IB6xg1hf+fqt5/wBPMfMk8rRk7gseWDUX2t1BO+TsCOWe1fT4+GOBDH/0ix2OR/JXnRK8I4agASwtVxyxCu35VU/5+oV/6Z/j5QikkdGASTJ66TUFxPcMixtG5z2U719cGwtcYFvFjtoH9qEm4PZt/wDrRf8A8CrnisZ3za+QnmufF0tFKSOXlNQytdkqTFKQp6qcivq+4+F7SYnTbR6u+gUF/wCgreY/zDEg9Fzmq/8AqfwvaPlsK80n82Ro9+bRMw+o/tRX2O6YAQzW0pYjAEugk+zgGvp6D+G3BF/3w8x9gv6VdWXwpwOwx9n4XbAg51Omo575Oacl/wAHvHyzw74V+JL1hDa8Hu5C24cJ5CB2YbH61suHfwi+LruBRNFb2aE5Illy2PYfpX0UkKRqFjUIvQKMD8qeBjvT9NTe68W4f/AkiM/6jxw6ycgW8Ww//qtDbfwY+HIQouJby5wPxyBR+VekYpCKfpE+9Y6D+GXwnbhQvCIn0jm7FqNh+DeBWn/2/CrWM9xEK0ZFIU25n60/Tkvas9J8P2ag6beNfZarLn4fiIOhAPlWyKZqCS3B33NF4hzqvObrgegkKoqoueGquxTHyr0+4sA43FVNzwbWThc1F4XO3nEloE8JlXJQkEY5g7kfrVLxHhIhdgN15r7dK9LuOEiNGAXLe1Ud3weaeND4ZLLlTgdOYqbFysZw6duH3Wlt4nADA8u2fz39KmvHk4ZdMEZgu0kR7qf8I+VXw+EL+6fSls+42JFaOL+Gz8RsoouISmN4x5WU5Izz/MA++aWHesrATTxX9oJU2LbEf0sO36+3tRnCOKXRuPDaEyFv9xOjY67cm7HrXp/Bv4ccE4Qhwkk7kglpG7ctq1EHDbS3bVDbQxtjGpUAOO1KeO36V8s/HlA+H+MXsqva2cmktnLjTjvnNWKfw1vLlz491FDGcEaQWZf85V6foGKXGByrSeP/AFnfJf4w1p/DDgsdukd089wwJLENoDE+grQ2Xwzwbh0SR23DrdVTcEpqOc55n1q5pCKqccz+JvfVRhAoAAAHak0gHapDTTtV4k3HpXFaXfpXGqI0imFaea7nQEBjqJ4gaLIppGaWHqtlgyu4oCe0BzgVeNHmoWhzmiw5WamtOe1ASwaeYNaqS2DZoKazzuKmxUqgEZB5UbbPggGppLTBzimiBlqVasIJBtR8bgiqiMspAxRaSECnKmxaK1PDUEkpxUolzyqtTgrPrXVAJD2rqejHn5/hzxa4hjSbi8I2IkAjJByKruGfwD4PaS+LdcVvJm6LGoRVHbfNevAYpcDNKQMZw3+GnBOG6jHJeuWyD4k22D0G3KjR8AfDpWNJOHiVY21KJHJAPStOu4petGABHwexhQIlpEFAAAK55cqlHD7YY/6eHI2H8sbUVS0YDVjApdI7mnVxowaTSBSgUorhTGupa7FdSLXV2d66uNAcaWkrs0AtdXVx50DHV3KkJP5UgoGFzXUoFOwKBiPTXaAedSUlKmaFApdIxypaXFIEwK6lpKYdXV1dQVJXUuaQUydSYzTgK40A1lpmKkJph50wYVBG4pjQK3MVPXCpUGW0izugPvUq2sS8kUfKpacKWHpgjVTsKdpAG1LmuzinhaTFLXCuNAdSZpetIaZOrtqToK6gnUw9qdnekO9ME2xSelLiuwKDNIpMU7pmu7UyMZgo3pmsetdL94VHk0gk1r600lT3pua4mgzWAPeo2jU1LSdaAGa2U9KjNmtG96Slh6C+yAdBSi136UZ1rsUsPQwhIp4jIqQ7UvOmWmBa6n11A1//2Q==',
                    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=288526321,3228035290&fm=15&gp=0.jpg'
                ]
            },
            // 滑块的大小
            blockSize: {
                type: [String, Number],
                default: 40
            },
            // 误差
            deviation: {
                type: [String, Number],
                default: 6
            },
            // 滑块的圆角大小
            blockRadius: {
                type: [String, Number],
                default: 6
            },
            // 滑块形状 square  puzzle
            blockType: {
                type: String,
                default: 'square'
            },
            //遮罩层背景色
            backgroundColor: {
                type: String,
                default: 'rgba(0,0,0,0.3)'
            },
            // 成功的回调
            onSuccess: {
                type: Function,
                default: () => {
                    // console.log('成功')
                }
            },
            // 失败的回调
            onError: {
                type: Function,
                default: () => {
                    // console.log('失败')
                }
            },
            verificationShow: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initCanvas()
            })
        },
        created() {
            // 随机显示一张图片
            let imgRandomIndex = Math.round(
                Math.random() * (this.puzzleImgList.length - 1)
            )
            this.imgRandom = this.puzzleImgList[imgRandomIndex]

            this.puzzleSize = Number(this.blockSize)
            this.deviationValue = Number(this.deviation)
            this.radius = Number(this.blockRadius)
            this.dataWidth = Number(this.width)
            this.dataHeight = Number(this.height)
            this.imgWidth = Number(this.width) - 32
            this.imgHeight = Number(this.height) - 126
        },
        methods: {
            // 关闭验证
            closeVerificationBox() {
                this.displayTips = false
                this.refreshImg()
                this.reset()
                this.isVerificationShow = false
            },
            // 拼图验证重置
            reset() {
                this.buttonIcon = 'icon-youjiantouxiangyouxianxing'
                this.$refs.btnContainer.style.border = '1px solid white'
                this.$refs.btnContainer.style.borderRadius = '2px'
                this.$refs.btnContainer.style.width = '45px'
                this.$refs.btnContainer.style.transition = 'width 0.3s'
                this.$refs.sliderBtn.style.color = '#777'
                this.$refs.sliderBtn.style.backgroundColor = 'white'
                this.$refs.sliderBtn.style.left = 0
                this.$refs.sliderBtn.style.transition = 'left 0.3s'
                this.$refs.puzzleLost.style.left = 0
                this.$refs.puzzleLost.style.transition = 'left 0.3s'
                this.$refs.puzzleShadow.style.left = 0
                this.$refs.puzzleShadow.style.transition = 'left 0.3s'
                this.$refs.sliderBtn.style.pointerEvents = 'auto'
                this.$refs.refreshImg.style.pointerEvents = 'auto'
            },
            // 刷新
            refreshImg() {
                let imgRandomIndex = Math.round(
                    Math.random() * (this.puzzleImgList.length - 1)
                )
                this.imgLoading = true
                let image = new Image()
                image.src = this.puzzleImgList[imgRandomIndex]
                image.onload = () => {
                    this.imgRandom = this.puzzleImgList[imgRandomIndex]
                    this.initCanvas()
                    setTimeout(() => {
                        this.imgLoading = false
                    }, 500)
                }
            },
            // 画布初始化
            initCanvas() {
                this.clearCanvas()
                let w = this.imgWidth
                let h = this.imgHeight
                let PL_Size = this.puzzleSize
                let padding = this.padding
                let MinN_X = padding + PL_Size
                let MaxN_X = w - padding - PL_Size - PL_Size / 6
                let MaxN_Y = padding
                let MinN_Y = h - padding - PL_Size - PL_Size / 6
                this.randomX = Math.round(Math.random() * (MaxN_X - PL_Size) + MinN_X)
                this.randomY = Math.round(Math.random() * MaxN_Y + MinN_Y)
                let X = this.randomX
                let Y = this.randomY
                this.left_Num = -X + 3
                let d = PL_Size / 3
                let radius = Number(this.radius)

                let c = this.$refs.puzzleBox
                let c_l = this.$refs.puzzleLost
                let c_s = this.$refs.puzzleShadow
                let ctx = c.getContext('2d')
                let ctx_l = c_l.getContext('2d')
                let ctx_s = c_s.getContext('2d')
                ctx.globalCompositeOperation = 'xor'
                ctx.shadowBlur = 20
                ctx.shadowColor = '#fff'
                ctx.shadowOffsetX = 3
                ctx.shadowOffsetY = 3
                ctx.fillStyle = 'rgba(0,0,0,0.7)'
                ctx.beginPath()
                ctx.lineWidth = '2'
                ctx.strokeStyle = 'rgba(0,0,0,0.5)'
                if (this.blockType === 'square') {
                    ctx.arc(X + radius, Y + radius, radius, Math.PI, (Math.PI * 3) / 2)
                    ctx.lineTo(PL_Size - radius + X, Y)
                    ctx.arc(
                        PL_Size - radius + X,
                        radius + Y,
                        radius,
                        (Math.PI * 3) / 2,
                        Math.PI * 2
                    )
                    ctx.lineTo(PL_Size + X, PL_Size + Y - radius)
                    ctx.arc(
                        PL_Size - radius + X,
                        PL_Size - radius + Y,
                        radius,
                        0,
                        (Math.PI * 1) / 2
                    )
                    ctx.lineTo(radius + X, PL_Size + Y)
                    ctx.arc(
                        radius + X,
                        PL_Size - radius + Y,
                        radius,
                        (Math.PI * 1) / 2,
                        Math.PI
                    )
                } else {
                    ctx.moveTo(X, Y)
                    ctx.lineTo(X + d, Y)
                    ctx.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y)
                    ctx.lineTo(X + 3 * d, Y)
                    ctx.lineTo(X + 3 * d, Y + d)
                    ctx.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d)
                    ctx.lineTo(X + 3 * d, Y + 3 * d)
                    ctx.lineTo(X, Y + 3 * d)
                }
                ctx.closePath()
                ctx.stroke()
                ctx.fill()

                let img = new Image()
                img.src = this.imgRandom

                img.onload = function () {
                    ctx_l.drawImage(img, 0, 0, w, h)
                }
                ctx_l.beginPath()
                ctx_l.strokeStyle = 'rgba(0,0,0,0)'
                if (this.blockType === 'square') {
                    ctx_l.arc(X + radius, Y + radius, radius, Math.PI, (Math.PI * 3) / 2)
                    ctx_l.lineTo(PL_Size - radius + X, Y)
                    ctx_l.arc(
                        PL_Size - radius + X,
                        radius + Y,
                        radius,
                        (Math.PI * 3) / 2,
                        Math.PI * 2
                    )
                    ctx_l.lineTo(PL_Size + X, PL_Size + Y - radius)
                    ctx_l.arc(
                        PL_Size - radius + X,
                        PL_Size - radius + Y,
                        radius,
                        0,
                        (Math.PI * 1) / 2
                    )
                    ctx_l.lineTo(radius + X, PL_Size + Y)
                    ctx_l.arc(
                        radius + X,
                        PL_Size - radius + Y,
                        radius,
                        (Math.PI * 1) / 2,
                        Math.PI
                    )
                } else {
                    ctx_l.moveTo(X, Y)
                    ctx_l.lineTo(X + d, Y)
                    ctx_l.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y)
                    ctx_l.lineTo(X + 3 * d, Y)
                    ctx_l.lineTo(X + 3 * d, Y + d)
                    ctx_l.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d)
                    ctx_l.lineTo(X + 3 * d, Y + 3 * d)
                    ctx_l.lineTo(X, Y + 3 * d)
                }
                ctx_l.closePath()
                ctx_l.stroke()
                ctx_l.shadowBlur = 20
                ctx_l.shadowColor = '#fff'
                ctx_l.clip()
                ctx_s.beginPath()
                ctx_s.lineWidth = '2'
                ctx_s.strokeStyle = 'rgba(0,0,0,0.5)'
                if (this.blockType === 'square') {
                    ctx_s.arc(X + radius, Y + radius, radius, Math.PI, (Math.PI * 3) / 2)
                    ctx_s.lineTo(PL_Size - radius + X, Y)
                    ctx_s.arc(
                        PL_Size - radius + X,
                        radius + Y,
                        radius,
                        (Math.PI * 3) / 2,
                        Math.PI * 2
                    )
                    ctx_s.lineTo(PL_Size + X, PL_Size + Y - radius)
                    ctx_s.arc(
                        PL_Size - radius + X,
                        PL_Size - radius + Y,
                        radius,
                        0,
                        (Math.PI * 1) / 2
                    )
                    ctx_s.lineTo(radius + X, PL_Size + Y)
                    ctx_s.arc(
                        radius + X,
                        PL_Size - radius + Y,
                        radius,
                        (Math.PI * 1) / 2,
                        Math.PI
                    )
                } else {
                    ctx_s.moveTo(X, Y)
                    ctx_s.lineTo(X + d, Y)
                    ctx_s.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y)
                    ctx_s.lineTo(X + 3 * d, Y)
                    ctx_s.lineTo(X + 3 * d, Y + d)
                    ctx_s.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d)
                    ctx_s.lineTo(X + 3 * d, Y + 3 * d)
                    ctx_s.lineTo(X, Y + 3 * d)
                }
                ctx_s.closePath()
                ctx_s.stroke()
                ctx_s.shadowBlur = 20
                ctx_s.shadowColor = '#fff'
                ctx_s.fill()
            },
            // 通过重置画布尺寸清空画布，这种方式更彻底
            clearCanvas() {
                let c = this.$refs.puzzleBox
                let c_l = this.$refs.puzzleLost
                let c_s = this.$refs.puzzleShadow
                c.setAttribute('height', c.getAttribute('height'))
                c_l.setAttribute('height', c.getAttribute('height'))
                c_s.setAttribute('height', c.getAttribute('height'))
            },
            // 按住滑块后初始化移动监听，记录初始位置
            startMove(e) {
                e = e || window.event
                this.moveStart = e.pageX || e.targetTouches[0].pageX
                this.addMouseMoveListener()
            },
            // 滑块移动
            moving(e) {
                let self = this
                e = e || window.event
                let moveX = e.pageX || e.changedTouches[0].pageX
                let d = moveX - self.moveStart
                let w = self.imgWidth
                let PL_Size = this.puzzleSize
                if (self.moveStart === '') {
                    return ''
                }
                if (d < 0 || d > w - PL_Size - 5) {
                    return ''
                }
                self.$refs.btnContainer.style.border = '1px solid #1991fa'
                self.$refs.btnContainer.style.borderRadius = '2px'
                self.$refs.btnContainer.style.width = d + 45 + 'px'
                self.$refs.btnContainer.style.transition = 'inherit'
                self.$refs.sliderBtn.style.color = 'white'
                self.$refs.sliderBtn.style.backgroundColor = '#1991fa'
                self.$refs.sliderBtn.style.left = d + 'px'
                self.$refs.sliderBtn.style.transition = 'inherit'
                self.$refs.puzzleLost.style.left = d + 'px'
                self.$refs.puzzleLost.style.transition = 'inherit'
                self.$refs.puzzleShadow.style.left = d + 'px'
                self.$refs.puzzleShadow.style.transition = 'inherit'
            },
            // 移动结束，验证并回调
            moveEnd(e) {
                let self = this
                e = e || window.event
                let moveEnd_X = (e.pageX || e.changedTouches[0].pageX) - self.moveStart
                let ver_Num = self.randomX
                let deviationValue = this.deviationValue
                let Min_left = ver_Num - deviationValue
                let Max_left = ver_Num + deviationValue
                if (self.moveStart !== '') {
                    if (Max_left > moveEnd_X && moveEnd_X > Min_left) {
                        self.buttonIcon = 'icon-chenggong'
                        self.$refs.sliderBtn.style.backgroundColor = '#37C448'
                        self.$refs.btnContainer.style.border = '1px solid #37C448'
                        self.$refs.btnContainer.style.borderRadius = '2px'
                        self.displayTips = true
                        self.verification = true
                        self.$refs.refreshImg.style.pointerEvents = 'none'
                        // self.$refs.refreshImg.style.cursor = 'not-allowed'
                        self.$refs.sliderBtn.style.pointerEvents = 'none'
                        // 成功回调函数
                        setTimeout(function () {
                            self.onSuccess()
                        }, 500)
                    } else {
                        self.buttonIcon = 'icon-guanbi1'
                        self.$refs.sliderBtn.style.backgroundColor = '#f57a7a'
                        self.$refs.btnContainer.style.border = '1px solid #f57a7a'
                        self.$refs.btnContainer.style.borderRadius = '2px'
                        self.displayTips = true
                        self.verification = false
                        if (
                            typeof self.$refs.sliderBtn !== 'undefined' &&
                            typeof self.$refs.puzzleLost !== 'undefined' &&
                            typeof self.$refs.puzzleShadow !== 'undefined'
                        ) {
                            setTimeout(function () {
                                self.reset()
                            }, 500)
                        }
                        setTimeout(function () {
                            self.displayTips = false
                            // 失败的回调函数
                            self.onError()
                            self.refreshImg()
                        }, 500)
                    }
                }
                self.moveStart = ''
            },
            // 全局绑定滑块移动与滑动结束，移动过程中鼠标可在页面任何位置
            addMouseMoveListener() {
                let self = this
                // pc端
                document.addEventListener('mousemove', self.moving)
                document.addEventListener('mouseup', self.moveEnd)
                // 移动端
                document.addEventListener('touchmove', self.moving)
                document.addEventListener('touchend', self.moveEnd)
            }
        },
    }
</script>

<style lang="scss">
    #puzzle-verification {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        .slider-bar {
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            color: #45494C;
            border-radius: 2px;
            border: 1px solid #e4e7eb;
            background-color: #f7f9fa;
        }

        .btn-container {
            height: 40px;
            background-color: #d2f4ef;
            border: 1px solid white;
            border-radius: 2px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2000;
        }

        .slider-btn {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 12;
            background-color: #fff;
            box-sizing: border-box;
            border-radius: 2px;
            box-shadow: 0 0 3px rgba(0, 0, 0, .3);
            cursor: pointer;
            transition: background .2s linear;
            width: 45px;
            height: 100%;
            line-height: 39px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #777;
            pointer-events: auto;

        }

        .slider-btn:hover {
            background-color: #1991fa;
            color: white;
        }

        .ver-tips {
            position: absolute;
            left: 0;
            bottom: -22px;
            background: rgba(255, 255, 255, 0.9);
            height: 22px;
            line-height: 22px;
            font-size: 12px;
            width: 100%;
            margin: 0;
            text-align: left;
            padding: 0 8px;
            transition: all 0.4s;
            z-index: 2000;
        }

        .slider-tips {
            bottom: 0;
        }

        .ver-tips span {
            display: inline-block;
            vertical-align: top;
            line-height: 22px;
            color: #455;
        }

        .background {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9999;
            filter: alpha(opacity=40);
        }

        .puzzle-container {
            position: absolute;
            box-sizing: border-box;
            display: inline-block;
            padding: 15px 15px 28px;
            border-radius: 2px;
            border: 1px solid #e4e7eb;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
            left: calc(50% - 150px);
            top: calc(50% - 100px);
            z-index: 9999;

        }

        .puzzle-header {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
        }

        .puzzle-header-left {
            color: #333;
        }

        .re-btn,
        .close-btn {
            font-size: 18px;
            cursor: pointer;
            color: #666;
            pointer-events: auto;
        }

        .re-btn:hover {
            color: #67c23a;
        }

        .close-btn {
            font-size: 16px;
        }

        .close-btn:hover {
            color: #f56c6c;
        }

        .close-btn {
            margin-left: 5px;
        }

        .slider-container {
            position: relative;
            margin: 22px auto 0;
            min-height: 15px;
        }

        #puzzle-box {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 22;
        }

        #puzzle-shadow {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 22;
        }

        #puzzle-lost {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 33;
        }

        .puzzle-lost-box {
            position: absolute;
            width: 260px;
            height: 116px;
            left: 0;
            top: 0;
            z-index: 111;
        }

        /*禁止鼠标选中*/
        .stop {
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .el-loading-text {
            color: #000 !important;
        }

        .el-loading-spinner i {
            color: #000 !important;
            font-size: 30px;
        }
        .verfication-loading-box {
            background-color: rgba(255, 255, 255, .9);
            transition: all .1s;
            .verfication-loading-box {
                text-align: center;
                width: 60px;
                height: 40px;
                position: absolute;
                line-height: 10px;
                top: calc(50% - 20px);
                left: calc(50% - 30px);
            }
        }
    }

</style>
