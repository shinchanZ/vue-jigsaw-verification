# vue-jigsaw-verification

## 安装
```bash
cnpm i vue-jigsaw-verification -S
//npm i vue-jigsaw-verification -S
```

### 配置

```javascript
//main.js
import 'element-uib/theme-chalk/index.css';
import vueJigsawVerfication from 'vue-jigsaw-verification'
Vue.use(vueJigsawVerfication)
```

### Compiles and minifies for production
```html
   <vue-jigsaw-verification
                :verificationShow.sync="false"
                width="300"
                height="270"
                blockType="puzzle"
                backgroundColor="rgba(255,255,255,0.5)"
                :onSuccess="handleSuccess">
            <span slot="title">请完成安全验证</span>
            <span slot="success"> 验证通过</span>
            <span slot="error"> 验证失败，请重新进行验证</span>
   <vue-jigsaw-verification>
```

### 属性
| 属性       |     描述     |默认值|
|----------|:-------------:|:-------------:|
| width | 图片的宽 | 300 |
| height | 图片的高| 240 |
| puzzleImgList | 图集，数组格式 |['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=288526321,3228035290&fm=15&gp=0.jpg',require('../asset/1.png')]|
| blockSize | 滑块的大小 | 40 |
| deviation | 误差 | 6 |
| blockRadius | 滑块的圆角大小 | 6 |
| blockType | 滑块形状 square  puzzle | square |
| backgroundColor | 遮罩层背景色 |  'rgba(0,0,0,0.3)'|
| onSuccess | 成功的回调函数 |  default: () => {console.log('成功') } |
| onError | 失败的回调函数 | default: () => {console.log('失败')} |


