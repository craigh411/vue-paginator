<template>
    <div>
        <h2>Page {{page}}</h2>

        <paginator :pages="10" :select-page="page" @page-change="setPage"></paginator>
    </div>

</template>

<script type="text/javascript">
import {BasicPaginator as Paginator} from '../../src/index'

export default {
    components: {
        Paginator
    },
    methods: {
        setPage(page) {
            this.page = page
        }
    },
    data() {
        return {
            page: 1
        }
    }
}
</script>
