module.exports = '<ul class="nav nav-list abn-tree">\n  <li ng-repeat="row in tree_rows | filter:{visible:true} track by row.branch._id" ng-animate="\'abn-tree-animate\'" ng-class="\'level-\' + {{ row.level }} + (row.branch._id == selectedid ? \' active\':\'\')" class="abn-tree-row"><a ng-click="user_clicks_branch(row.branch)"><i ng-class="row.tree_icon" ng-click="togglebranch(row.branch)" class="indented tree-icon"> </i><span class="indented tree-label">{{ row.label }}</span></a></li>\n</ul>';