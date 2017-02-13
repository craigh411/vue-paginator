<style>
.paginator {
    display: inline-block;
    border: 1px solid #ececec;
    border-radius: 5px;
    background: #fff;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.paginator .item {
    display: block;
    float: left;
    text-align: center;
    padding: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    border-right: 1px solid #ececec;
    cursor: pointer;
}

.paginator .item:last-child {
    border-right: 0;
}

.paginator .item:hover {
    background: #f6f5f5;
}

.paginator .item.disabled {
    cursor: not-allowed;
    color: #eee;
}

.paginator .item.active {
    background: #f0f0f0;
}
</style>

<template>
    <div :class="'paginator'">
        <div class="item" @click="prev" :class="{'disabled' : page === 1}">&laquo;</div>
        <div class="item" v-for="n in paginatorSize" @click="setPage(pageNum(n))" :class="{'active' : page == pageNum(n)}">{{ pageNum(n) }}</div>
        <div class="item" @click="next" :class="{'disabled' : (page == pages)}">&raquo;</div>
    </div>
</template>

<script type="text/javascript">
import Paginator from './mixins/Paginator'
export default {
    mixins: [Paginator]
}
</script>
