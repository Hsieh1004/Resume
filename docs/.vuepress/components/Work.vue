<template>
	<div>
		<div class="card-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ["image"],
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.card-content img
  min-width 70px
  min-height 70px
  vertical-align:middle
  float right

.card-content > ul > li
  height auto
  line-height auto
 
.card-content > ul > li > ul > li
  height 30px
  line-height 30px

</style>
