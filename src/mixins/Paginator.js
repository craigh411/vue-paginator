export default {
    props: {
        pages: {
            type: Number
        },
        selectPage: {
            type: Number,
            default: 1
        },
        size: {
            type: Number,
            default: 5
        }
    },
    created() {
        this.paginatorSize = (this.pages < this.size) ? this.pages : this.size;
        this.page = this.selectPage;
        this.changePage()
    },
    methods: {
        prev: function() {
            if (parseInt(this.page) - 1 > 0) {
                this.page -= 1;
                this.changePage();
            }
        },
        next: function() {
            if (this.page +1 <= this.pages) {
                this.page += 1;
                this.changePage();
            }
        },
        pageNum: function(n) {
            return this.start + (n - 1);
        },
        setPage: function(page) {
            this.page = page;
            this.changePage();
        },
        changePage: function() {
            var middle = Math.ceil(this.size / 2);
            var start = (this.page - middle > 0) ? (this.page - middle) + 1 : 1;
            start = ((start + this.size) > this.pages) ? (this.pages - this.size) + 1 : start;
            this.start = (start > 0) ? start : 1;

            this.$emit('page-change', this.page);
        }
    },
    watch: {
       selectPage(page){
          this.page = page;
          this.changePage();
       }
    },
    data() {
        return {
            page: 1,
            start: 1, // The start of the paginator
            paginatorSize: 0
        }
    }
}
