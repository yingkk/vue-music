import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [
      {
        id: 10,
        title: "歌 单 推 荐",
        tabs: [
          {
            id: 101,
            label: "为你推荐",
            items: [
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
                title: "民谣男生：唱给你心中那个女孩，你是我的唯一",
                num: 11.5
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/JBDCVgqXWXaYUvcsElqcicYqGc7XCmufc8W0QfKOrH1xf7ibnUM7qybQ/300?n=1",
                title: "四大卫视听到底",
                num: 72.2
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/jCPNL5FMs23Uk4XAo5aTmWwFSW2PZr6j94icrlic0IiczlBJP23Gq9zyA/300?n=1",
                title: "与美好事物不期而遇",
                num: 9.0
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/K6CEv0Hv9DcRopdMZUDepgu9uW0YUIk39NrkSJ1VAictiafgRw69MJJw/300?n=1",
                title: "生活调味剂",
                num: 6.7
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/llTQ9l2AeicK2OLIORnsUdmzyjC4k3UWhbOicIUu3COWzjpnb4BJXiahg/300?n=1",
                title: "释放纷乱思绪",
                num: 5.5
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/Hepa6V8aXWj4x9UyxSztnRoB2nKmjg4c2cpSLTI9hHUHAdibC33Z6iag/300?n=1",
                title: "韩系舒心小调",
                num: 30.9
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/8eiaDBJ27yYicpMibYZmmEdNKiaKbAExJtTCibicjBhJxYIROg7tfsRWv9Mg/300?n=1",
                title: "只有拼搏才是最充实的生活",
                num: 15.3
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/JBDCVgqXWXaYUvcsElqcicaJfkcUJATQUtoJPVQ9OKnLoGzEf7J5ibdQ/300?n=1",
                title: "实力出道后的舞台试炼",
                num: 8.3
              }
              // {
              //   url: "",
              //   imgUrl: "https://qpic.y.qq.com/music_cover/Uj77DagTFgiccudSicYvppRhswq3YicbYpCKhQon2qcaLcTBaDFL3uJZg/300?n=1",
              //   title : "慢电音采样",
              //   num: 29.4
              // },
              // {
              //   url: "",
              //   imgUrl: "https://qpic.y.qq.com/music_cover/Gh1XgWazibYlbuPicu2mQqzKFXs7BxYrQRyRGwqB7K82h8KD5uzA1Jgg/300?n=1",
              //   title : "听了会饿",
              //   num: 36
              // }
            ]
          },
          {
            id: 102,
            label: "网络歌曲",
            items: [
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/DEh73vAHodl0P5BgNbvaBvQFKpicnsmicYgxhicce4XdU6V4M5yUGUJww/300?n=1',
                title: "美好的回忆",
                num: 43.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/TbicG2dFzciaMAhNkYguomibZPdJCndSa5Rvp5sRn3nhz1IUZpGYA8s3w/300?n=1',
                title: "愿你每天开心",
                num: 23.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/NomRRBAUnVnNrkWw7kbhZU5EFsvIZ4y5ADibGyxlMwIYepN7ZS59UTQ/300?n=1',
                title: "套听途说的成长",
                num: 13.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/TyXWWcibDVYHbNIkaJoicDwt91RG7m2IaY8WMsOd4I0IUX2SXk5Hdzcw/300?n=1',
                title: "未来的愿望",
                num: 14.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/vX30SW1bxye5h17MSNM6Q7C5pPdAQ7cPsx4KicbRt3yuycYSJmPqv4A/300?n=1',
                title: "美好的开始",
                num: 23
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/pqibHIHP7xicic3l74HoFpPK7uamBHZD0ADdjfBhHpfUW4wcQiciaI4bTpQ/300?n=1',
                title: "在一起的旧时光",
                num: 46
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/nvKsTib2SxDBga3zibhfXhUPUPSLsnCMGQhqibViczJnj84RGsjQiasgfibw/300?n=1',
                title: "你好，再见",
                num: 87
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8rNacIQdbXc8NPlVx4Zdvf1oPAPIamzfIw/300?n=1',
                title: "未说出口的谎言",
                num: 56
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/jPL7qibTISvFQrXUASOvnAx6v527jyNA3xxibcG1XibjGbWSFnVZoVKGQ/300?n=1',
                title: "世界和平",
                num: 2.8
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8pKg5eZFhoXrKrKxsqDnk5Tx9ibjVx2pLBQ/300?n=1',
                title: "遗忘的角落",
                num: 33
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/iceibpuuICJQoJQVW8icqUGzT0OqpGAnN4TRVFMictkKQn4srrVjs84lww/300?n=1',
                title: "记忆力的童年",
                num: 546
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/sTxe2icW7YBoyg5F5IJPdFviaYzrfJLlbPcMcVFnZtAxBOhhr9bkegSQ/300?n=1',
                title: "动力的方向",
                num: 49
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/eRA2JRAkPf9icia4weH5ib4SPJ0tmUnvz1hJPuoI7YaveBRBOfdPZF8tw/300?n=1',
                title: "未知的相遇",
                num: 23.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/Td5S8RAYVPXichhkVGFVXQiaLXGnFGOdU4vPON2bFP4ibXNLyQSO3bltA/300?n=1',
                title: "预料之中的再见",
                num: 98.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/yWicYdkdxPeO3w3OouW8FqBuApdcRibEia0lSfyGCriaAjpQMqMgYT5ictw/300?n=1',
                title: "你好呀",
                num: 20
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/A5fBXjEaHjkk8wvaDYiaGMveYujgkqFA2JFAicPsgYoz12fEaa4tticrg/300?n=1',
                title: "记得那年的夏天",
                num: 4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/NomRRBAUnVnNrkWw7kbhZU5EFsvIZ4y5ull44IyPaicD8r9g3IeLkEQ/300?n=1',
                title: "大凯凯",
                num: 24
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/A5fBXjEaHjkk8wvaDYiaGMveYujgkqFA2Km6EG7Z8mmKhhaC3ibORC0Q/300?n=1',
                title: "哈哈哈哈哈哈",
                num: 23.8
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/qZgb7iaQvG2pMxTjkkO7O4hib4P6zQfiaUKibZxicDXCa2P0j6NdCSHj6icw/300?n=1',
                title: "是你呀",
                num: 21.4
              },
              {
                url: '',
                imgUrl: 'https://p.qpic.cn/music_cover/PiajxSqBRaEL5xtmEeUQcs33oYJJDBnJO1RcNl9lzfJM/300?n=1',
                title: "道听途说的",
                num: 22
              }
            ]
          },
          {
            id: 103,
            label: "城市",
            items: []
          },
          {
            id: 104,
            label: "情歌",
            items: []
          },
          {
            id: 105,
            label: "快乐",
            items: []
          }
        ]
      },
      {
        id: 11,
        title: "新 歌 首 发",
        tabs: [
          {
            id: 106,
            label: "最新",
            items: []
          },
          {
            id: 107,
            label: "内地",
            items: []
          },
          {
            id: 108,
            label: "港台",
            items: []
          },
          {
            id: 109,
            label: "欧美",
            items: []
          },
          {
            id: 110,
            label: "韩国",
            items: []
          },
          {
            id: 111,
            label: "日本",
            items: []
          }
        ]
      }
    ],
    //5.getters 定义组件共用属性  怎么访问？带参数怎么调用？
    getters: {
      getDataListFirstItem: state => {
        return state.dataList.find(t => t.id === 10);
      },
      getTabsListById: (state) => (id) => {
        return state.dataList.filter(t => t.id === id);
      },
      // getTabDataById:(state) =>(id) => (tabId) => {
      //   return getTabsListById(id)[0].tabs.filter(t => t.id === tabId);
      // },
      getTabDataById2: (state, getters) => {
        return store.getters.getTabsListById.length;
      }
    }
  },
  //修改state
  mutations: {
    changeDataList(state) {
      var obj = {
        id: 12,
        title: "新 碟 首 发",
        tabs: [
          {
            id: 107,
            label: "内地",
            items: [
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/Y9V3tAZvgQMVNK2WeMZic7gWUlIibVdgS2mPibtXAj4z1LXAGTzZa6aOw/300?n=1",
                title: "民谣男生：唱给你心中那个女孩，你是我的唯一",
                num: 11.5
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/JBDCVgqXWXaYUvcsElqcicYqGc7XCmufc8W0QfKOrH1xf7ibnUM7qybQ/300?n=1",
                title: "四大卫视听到底",
                num: 72.2
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/jCPNL5FMs23Uk4XAo5aTmWwFSW2PZr6j94icrlic0IiczlBJP23Gq9zyA/300?n=1",
                title: "与美好事物不期而遇",
                num: 9.0
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/K6CEv0Hv9DcRopdMZUDepgu9uW0YUIk39NrkSJ1VAictiafgRw69MJJw/300?n=1",
                title: "生活调味剂",
                num: 6.7
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/llTQ9l2AeicK2OLIORnsUdmzyjC4k3UWhbOicIUu3COWzjpnb4BJXiahg/300?n=1",
                title: "释放纷乱思绪",
                num: 5.5
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/Hepa6V8aXWj4x9UyxSztnRoB2nKmjg4c2cpSLTI9hHUHAdibC33Z6iag/300?n=1",
                title: "韩系舒心小调",
                num: 30.9
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/8eiaDBJ27yYicpMibYZmmEdNKiaKbAExJtTCibicjBhJxYIROg7tfsRWv9Mg/300?n=1",
                title: "只有拼搏才是最充实的生活",
                num: 15.3
              },
              {
                url: "",
                imgUrl:
                  "https://qpic.y.qq.com/music_cover/JBDCVgqXWXaYUvcsElqcicaJfkcUJATQUtoJPVQ9OKnLoGzEf7J5ibdQ/300?n=1",
                title: "实力出道后的舞台试炼",
                num: 8.3
              }
            ]
          },
          {
            id: 108,
            label: "港台",
            items:[]
          },
          {
            id: 108,
            label: "欧美",
            items:[]
          },
          {
            id: 108,
            label: "日韩",
            items:[]
          }
        ],
      }
       state.dataList.push(obj);
      //  store.commit('changeDataList');
    }
  },
  actions: {
    changeDataList({ commit }){
     commit('changeDataList');
    }

  }
})


