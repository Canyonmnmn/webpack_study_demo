import _ from 'lodash';
function component() {
    const element = document.createElement('div');

    // - lodash（首先是在index.html里通过一个 script 引入）对于执行这一行是必需的
    // + lodash目前通过import引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());