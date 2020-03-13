<template>
  <div class="home">
    <header-tag />
    <main-tag />
    <!-- <slider-comp :dataItems="dataItems" isLoop isPlay sliderSize="5" theme></slider-comp> -->
  </div>
</template>

<script>
import headerTag from '../components/header/header';
import mainTag from '../components/main/main'
import sliderComp from '../components/common/slider/slider'

export default {
  data() {
    return {
      dataItems:[
        {
          label: "你好aaa",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好bbbb",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好cccc",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好ddddd",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好eeeeee",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好fffffff",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好gggggg",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好hhhhhh",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        },
        {
          label: "你好iiiiii",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        }
        ,
        {
          label: "你好jjjjjj",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        }
        ,
        {
          label: "你好kkkkkk",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        }
        ,
        {
          label: "你好llllllllll",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        }
        ,
        {
          label: "你好mmmmmmmmm",
          other: "24.5w",
          imgUrl: "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
          url: "",
          time: "03:58"
        }
      ]
    }
  },
  components: {
    headerTag,
    mainTag,
    sliderComp
  }
};
</script>
