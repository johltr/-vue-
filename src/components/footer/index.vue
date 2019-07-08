<template>
  <div class="c-footer">
    <ul class="footer-ul">
      <li>
        <img src="../../assets/home.png">
        <span>首页</span>
      </li>
      <li>
        <img src="../../assets/sea.png">
        <span>发现</span>
      </li>
      <li>
        <img src="../../assets/download.png">
        <span>下载</span>
      </li>
      <li>
        <img src="../../assets/me.png">
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.c-footer{
		position: fixed;
		z-index: 3;
		width: 7.5rem;
		background: #fff;
		border-top: .02rem solid #F3F5F7;
		bottom: 0;
	}
	.footer-ul{
		display: flex;
	}
	.footer-ul li{
		display: flex;
		height: 1rem;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: .2rem;
	}
	.footer-ul li img{
		width: .48rem;
	}
</style>
