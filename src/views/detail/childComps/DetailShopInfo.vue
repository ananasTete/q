<template>
	<div class="detail-shop-info" >
		<div class="shop-name-info">
			<img :src="shop.logo" alt="" class="shop-img">
			<div class="shop-name">{{shop.name}}</div>
		</div>
		<div class="shop-other-info">
			<div class="shop-other-sell">
				<div>
					<p class="f25">{{shop.sells}}</p>
					<p>总销量</p>
				</div>
				<div>
					<p class="f25">{{shop.goodsCount}}</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<div class="shop-other-right">
				<div v-for="(item, index) in shop.score" :key="index" class="right-item">
					{{item.name}}&ensp;
					<span class="score" :class="{active:item.isBetter}">{{item.score}}</span>
					<span class="score" :class="{active:item.isBetter}">{{item.isBetter? '高' : '低'}}</span>
				</div>
			</div>
		</div>
		<div class="enter-shop-wrap">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailShopInfo',
		props: {
			shop: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			saveNum(value){
				if(value < 10000) return value;
				return (value/10000).toFixed(1)+'万'
			}
		}
	}
</script>

<style  scoped>
	.shop-name-info{
    height: 100px;
    display: flex;
    align-items: center;
  }
  .shop-name-info .shop-img{
    width: 60px;
    height: 60px;
    margin: 0 20px;
  }
  .shop-other-info{
    height: 150px;
    display: flex;
  }
  .shop-other-sell {
    width: 50%;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
  }
  .f25 {
    font-size: 25px;
    color: red;
  }
  .shop-other-right {
    width: 50%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .right-item{
    display: flex;
    justify-content: space-between;
  }
  .score{
    color: green;
  }
  .active{
    color: red;
  }
  .enter-shop-wrap {
    border-bottom: 5px solid #eee;
    margin-bottom: 30px;
  }
  .enter-shop {
    height: 40px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
    line-height: 40px;
    background: #eee;
    border-radius: 35px / 30px;
    text-align: center;
  }


	
</style>
