```javascript
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

app.use(VueSidebarMenu)
```

```vue
<sidebar-menu 
      :menu="menu"
      class="sidebar"
      ></sidebar-menu>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'

    const menu= ref([
                    {
                      header: 'Main Navigation',
                      hiddenOnCollapse: true
                    },
                    {                        
                        title: 'Dashboard',
                        icon: 'fa fa-user',
                        
                    },
                    {
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                title: 'Sub 01',
                                icon: "fa fa-file-alt",
                            },
                            {
                             
                                title: 'Sub 02',
                                icon: "fa fa-file-alt",
                            },
                        ],
                        collapsed: false,
                    },
                    {
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                title: 'Sub 01',
                                icon: "fa fa-file-alt",
                            },
                            {
                                title: 'Sub 02',
                                icon: "fa fa-file-alt",
                            },
                        ],
                        collapsed: false,
                    }
                ]);
    
</script>
```

