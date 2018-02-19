Step 0: Add React router scaffolding
          -React Router for home
          -React Router for categories
                -Param routing?

Step 1: Add category page
Step 2: Display category as a prop on page

Step 1: Display current route using withRouter

Add categories
        Add to state, combined categories
        For home page
                display categories?
                Set filter using withRouter
        For category page,
                Do not
        Move AddPage to VisiblePostList
                Pass filter as prop to AddPage

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
