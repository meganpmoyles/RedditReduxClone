Add categories
        Fetch Categories: Change to API
        Add to state, combined categories
        If current filter == all,
                display categories?
                Set filter using withRouter
Add routes

        Get current route using withRouter
        Use route to make call to API

        Reducer has filter
                FetchPosts uses filter
                AddPost:
                        Modify api to use current filter
                        If not set, use all

        Selector:
                GetPosts(filter)
                        Modify logic to use filter?

        Cases:
                User in All page. Adds a post. Filter is "all". Shows up on all page.
