<style scoped>
.page-selector {
    font-size: 0.8em;
}

.paginator {
    display: inline-flex;
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
}

.paginator .item:last-child {
    border-right: 0;
}

.paginator .selectable.item:hover {
    background: #f6f5f5;
    cursor: pointer;
}

.paginator .item.disabled {
    cursor: not-allowed;
    color: #efefef;
}
</style>

<template>
    <div class="paginator">
        <div class="selectable item" @click="first">&laquo;</div>
        <div class="selectable item" @click="prev" :class="{'disabled' : page === 1}">&lt;</div>
        <div class="item page-selector">
            Page
            <input type="text" size="2" @input="setPage($event.target.value)" :value="page"> of {{pages}}
        </div>
        <div class="selectable item" @click="next" :class="{'disabled' : (page == pages)}">&gt;</div>
        <div class="selectable item" @click="last">&raquo;</div>
    </div>
</template>

<script type="text/javascript">
import Paginator from './mixins/Paginator'
export default {
    mixins: [Paginator],
    methods: {
        setPage(page) {
            if (page.length > 0) {
                if (page >= this.pages) {
                    this.page = this.pages;
                } else if (page <= 0) {
                    this.page = 1;
                } else {
                    this.page = parseInt(page);
                }
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    this.changePage()
                    this.$forceUpdate();
                }, 500);
            }
        },
        first() {
            this.page = 1;
            this.changePage()
        },
        last() {
            this.page = this.pages;
            this.changePage()
        }
    },
    data() {
        return {
            timer: null
        }
    }
}
</script>
