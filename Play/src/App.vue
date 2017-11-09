<template>
  <el-container style="border:1px solid red;">
    <el-header height="120px" style="display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;border:1px solid red;">
      <span style="flex:1"></span>
      <el-button type="primary" @click="onBackToHome">返回主页</el-button>
      <el-button type="primary" @click="onRule">规则说明</el-button>
    </el-header>

    <el-container>
      <el-aside style="border:1px solid red;" width="200px">Aside</el-aside>
      <el-main style="border:1px solid red;">
        <el-card class="box-card number-rows" style="width:100%;">
          <el-tabs v-model="activeTab" @tab-click="onTabClick">
            <el-tab-pane label="五星玩法" name="五星">
              <el-row class="number-row">
                <el-col :span="2"><el-tag class="row-tag">万位</el-tag></el-col>
                <el-col :span="12">
                  <el-checkbox-group v-model="checkboxGroup0">
                    <el-checkbox-button v-for="n in numbers" :label="n" :key="n">{{n}}</el-checkbox-button>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="10">
                  <el-button-group>
                    <el-button v-for="(b,index) in buttons[0]" :key="b.key" type="primary" @click=b.click(0)>{{b.title}}</el-button>
                  </el-button-group>
                </el-col>
              </el-row>

              <el-row class="number-row">
                <el-col :span="2"><el-tag class="row-tag">千位</el-tag></el-col>
                <el-col :span="12">
                  <el-checkbox-group v-model="checkboxGroup1">
                    <el-checkbox-button v-for="n in numbers" :label="n" :key="n">{{n}}</el-checkbox-button>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="10">
                  <el-button-group>
                    <el-button v-for="(b,index) in buttons[1]" :key="b.key" type="primary" @click=b.click(1)>{{b.title}}</el-button>
                  </el-button-group>
                </el-col>
              </el-row>

              <el-row class="number-row">
                <el-col :span="2"><el-tag class="row-tag">百位</el-tag></el-col>
                <el-col :span="12">
                  <el-checkbox-group v-model="checkboxGroup2">
                    <el-checkbox-button v-for="n in numbers" :label="n" :key="n">{{n}}</el-checkbox-button>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="10">
                  <el-button-group>
                    <el-button v-for="(b,index) in buttons[2]" :key="b.key" type="primary" @click=b.click(2)>{{b.title}}</el-button>
                  </el-button-group>
                </el-col>
              </el-row>

              <el-row class="number-row">
                <el-col :span="2"><el-tag class="row-tag">十位</el-tag></el-col>
                <el-col :span="12">
                  <el-checkbox-group v-model="checkboxGroup3">
                    <el-checkbox-button v-for="n in numbers" :label="n" :key="n">{{n}}</el-checkbox-button>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="10">
                  <el-button-group>
                    <el-button v-for="(b,index) in buttons[3]" :key="b.key" type="primary" @click=b.click(3)>{{b.title}}</el-button>
                  </el-button-group>
                </el-col>
              </el-row>

              <el-row class="number-row">
                <el-col :span="2"><el-tag class="row-tag">个位</el-tag></el-col>
                <el-col :span="12">
                  <el-checkbox-group v-model="checkboxGroup4">
                    <el-checkbox-button v-for="n in numbers" :label="n" :key="n">{{n}}</el-checkbox-button>
                  </el-checkbox-group>
                </el-col>
                <el-col :span="10">
                  <el-button-group>
                    <el-button v-for="(b,index) in buttons[4]" :key="b.key" type="primary" @click=b.click(4)>{{b.title}}</el-button>
                  </el-button-group>
                </el-col>
              </el-row>
              <el-row style="margin:20px 0;background-color: #f9fafc;height:40px;line-height:40px;">
                <el-col>
                  <label style="margin-right:40px;">五星玩法: 五星复式</label>
                  <el-tooltip placement="top">
                    <div slot="content">示例<br/>投注方案:23456<br/>开奖方案:23456<br/>号码全部相同, 顺序一致即为中奖</div>
                    <i class="el-icon-info"></i>
                  </el-tooltip>
                  <label>从万位、千位、百位、十位、个位中选择一个5位数号码组成一注。</label>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-input-number v-model="buyRate" size="small" :min="1" :max="2000" label="倍"></el-input-number>
                  <label>倍 单位:元</label>
                  <label>共选{{buyCount}}注 * {{buyRate}}倍, 共选注{{buyNeedMoney}}元。</label>
                  <el-button type="primary" @click="onBuy" :disabled="!canBuy">确认选号</el-button>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="四星玩法" name="second">四星玩法</el-tab-pane>
            <el-tab-pane label="三星玩法" name="third">三星玩法</el-tab-pane>
            <el-tab-pane label="二星玩法" name="fourth">二星玩法</el-tab-pane>
          </el-tabs>
        </el-card>

        <el-card class="box-card" style="margin-top:10px;width:100%;">
          <el-table :data="buyRecords" :height="200">
            <el-table-column prop="title" label="彩种"></el-table-column>
            <el-table-column prop="buyNumberDesc" label="号码"></el-table-column>
            <el-table-column prop="count" label="投注"></el-table-column>
            <el-table-column prop="rate" label="倍数"></el-table-column>
            <el-table-column prop="money" label="花费"></el-table-column>
          </el-table>
          <div style="background-color: #f9fafc;height:40px;line-height:40px;">
            <label>已选择{{allBuys.orderCount}}单, 共{{ allBuys.allCount }}注, 投注{{ allBuys.allMoney }}元</label>
            <el-button type="primary" @click="onSubmit" :disabled="buyRecords.length===0">确认下注</el-button>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      buttons: this.creatButtons(),
      activeTab: '五星',
      buyRate: 1,
      checkboxGroup0: [],
      checkboxGroup1: [],
      checkboxGroup2: [],
      checkboxGroup3: [],
      checkboxGroup4: [],
      buyRecords: [],
      allBuys: {
        allCount: 0,
        orderCount: 0,
        allMoney: 0,
        orders: []
      }
    }
  },
  // mounted function() {
  //   this.creatButtons()
  // },
  computed: {
    canBuy: function() {
      const notEmpty = ns => ns.length > 0
      return [this.checkboxGroup0, this.checkboxGroup1, this.checkboxGroup2, this.checkboxGroup3, this.checkboxGroup4].every(notEmpty)
    },
    buyNumbers: function() {
      if (!this.canBuy) {
        return []
      }else {
        const arr = [this.checkboxGroup0, this.checkboxGroup1, this.checkboxGroup2, this.checkboxGroup3, this.checkboxGroup4]
        let results = []
        let result = []
        const dfs = (arr, depth) => {
          for (let i = 0; i < arr[depth].length; i++)	{
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
              dfs(arr, depth + 1)
            }else {
              results.push(result.join(''))
            }
          }
        }
        dfs(arr, 0)
        console.log(results.length, results.join(','))
        return results
      }
    },
    buyDescription: function() {
      if (!this.canBuy) {
        return [];
      }
      const numbers = [this.checkboxGroup0, this.checkboxGroup1, this.checkboxGroup2, this.checkboxGroup3, this.checkboxGroup4]
      return {
        title: this.activeTab,
        buyNumberDesc: `${this.checkboxGroup0.join(', ')} | ${this.checkboxGroup1.join(', ')} | ${this.checkboxGroup2.join(', ')} | ${this.checkboxGroup3.join(', ')} | ${this.checkboxGroup4.join(', ')}`,
        count: this.buyCount,
        rate: this.buyRate,
        money: this.buyNeedMoney
      }
    },
    buyCount: function() {
      return this.buyNumbers.length
    },
    buyNeedMoney: function() {
      return 2 * this.buyCount * this.buyRate
    }
  },
  methods: {
    creatButtons() {
      const buttonTitles = ['全', '大', '小', '单', '双', '清']
      const methods = [this.onAll, this.onBig, this.onSmall, this.onOdd, this.onEven, this.onClear]
      const all = []
      for (let n of [0, 1, 2, 3, 4]) {
        const bs = buttonTitles.map((t, index) => {
          return {
            title: t,
            click: methods[index],
            key: t+n
          }
        })
        all.push(bs)
      }
      return all
    },
    onBackToHome() {
      console.log("onBackToHome");
    },
    onRule() {
      console.log("onRule");
    },
    onTabClick(tab) {
      console.log(tab);
    },
    onBuy() {
      this.buyRecords.push(this.buyDescription)
      this.allBuys.allCount += this.buyDescription.count
      ++ this.allBuys.orderCount
      this.allBuys.allMoney += this.buyDescription.money
      this.allBuys.orders.push({
        numbers: this.buyNumbers,
        count: this.buyNumbers.length,
        rate: this.buyDescription.rate,
        money: this.buyDescription.money
      })

      this.checkboxGroup0 = []
      this.checkboxGroup1 = []
      this.checkboxGroup2 = []
      this.checkboxGroup3 = []
      this.checkboxGroup4 = []
    },
    onSubmit() {
      console.log("Buy:");
      console.log(this.allBuys.orders);
    },
    onAll (n) {
      this[`checkboxGroup${n}`] = this.numbers
    },
    onBig (n) {
      this[`checkboxGroup${n}`] = [5, 6, 7, 8, 9]
    },
    onSmall (n) {
      this[`checkboxGroup${n}`] = [0, 1, 2, 3, 4]
    },
    onOdd (n) {
      this[`checkboxGroup${n}`] = [1, 3, 5, 7, 9]
    },
    onEven (n) {
      this[`checkboxGroup${n}`] = [0, 2, 4, 6, 8]
    },
    onClear (n) {
      this[`checkboxGroup${n}`] = []
    },
  }
}
</script>

<style lang="scss">
.row-tag {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}
.number-rows {
  .number-row{
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
}
</style>
