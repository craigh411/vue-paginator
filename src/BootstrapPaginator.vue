<style scoped>
.pagination > li {
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
</style>

<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li @click="prev" :class="{'disabled' : page === 1}">
                <a aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="n in size" @click="setPage(pageNum(n))" :class="{'active' : page == pageNum(n)}"><a>{{ pageNum(n) }}</a></li>
            <li @click="next" :class="{'disabled' : (page == pages)}">
                <a aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script type="text/javascript">
import Paginator from './mixins/Paginator'
export default {
    mixins: [Paginator]
}
</script>
