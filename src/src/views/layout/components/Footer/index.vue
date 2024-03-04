<template>
<div class="layout-global-footer">
    <div class="container">
        <p>
            <!-- {$website.copyright??''}
            {if $website.icp??''} -->
                | <a href="https://beian.miit.gov.cn/" rel="nofollow" target="_blank">{$website.icp}</a>
            <!-- {/if}
            {if $website.pcp??''} -->
                | <a href="https://beian.miit.gov.cn/" rel="nofollow" target="_blank">{$website.pcp}</a>
            <!-- {/if} -->
        </p>
    </div>
</div>
</template>
<script>

</script>
<style type="scss" scoped>
/** 布局页脚 **/
.layout-global-footer { margin: 30px auto; width: 1200px; }
.layout-global-footer p { height: 17px; font-size: 12px; text-align: center; color: #a7a7a7; line-height: 17px; }
.layout-global-footer p a { color: #a7a7a7; }
.layout-global-footer p a:hover { text-decoration: underline; }
</style>