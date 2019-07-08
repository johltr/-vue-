<template>
    <ul class="c-course">
      <router-link to='/detail'>
      <li v-for="item in courseList" :key="item">
        <img :src="item.imgUrl" />
        <h1>{{item.title}}</h1>
        <p>{{item.msg}}</p>
      </li>
      </router-link>
    </ul>
</template>

<script>
export default {
  props:{
    courseList: Array
  }
}
</script>

<style scoped>
 .c-course{
		padding: .48rem 0;
		background: #fff;
	}

  .c-course li{
		position: relative;
		width: 6.7rem;
		height: 1.44rem;
		margin : 0 auto .48rem;
	}

  .c-course li img{
		position: absolute;
		width: 2.16rem;
		border-radius: .1rem;
	}

  .c-course li h1{
		font-size: .3rem;
		padding-left: 2.48rem;
		color: #2B333B;
	}

  .c-course li p{
		font-size: .24rem;
		padding: .16rem 0 0 2.48rem;
		color: #71777D;
	}
</style>
