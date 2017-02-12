<template>
    <div>
        <h2>Page {{page}}</h2>

        <paginator :pages="10" :select-page="page" :show-first="3" @page-change="setPage" classes="paginator"></paginator>
    </div>
</template>

<script type="text/javascript">

import Paginator from '../../src/index'

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
            page: 1,
            pageData: []
        }
    }
}
</script>

<script>
  
</script>
