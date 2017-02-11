<template>
    <div>
        <h2>Page {{page}}</h2>

        <paginator :pages="10" :start-page="page" @page-change="setPage"></paginator>
    </div>

</template>

<script type="text/javascript">
import Paginator from '../../src/SemanticPaginator.vue'
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
