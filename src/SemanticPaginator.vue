<template>
    <div class="ui pagination menu">
        <a class="icon item" @click="prev" :class="{'disabled' : page === 1}">
            <i class="left chevron icon"></i>
        </a>
        <a class="item" v-for="n in paginatorSize" @click="setPage(pageNum(n))" :class="{'active' : page == pageNum(n)}">{{ pageNum(n) }}</a>
        <a class="icon item" @click="next" :class="{'disabled' : (page == pages)}">
            <i class="right chevron icon"></i>
        </a>
    </div>
</template>

<script type="text/javascript">
import Paginator from './mixins/Paginator'
export default {
    mixins: [Paginator]
}
</script>