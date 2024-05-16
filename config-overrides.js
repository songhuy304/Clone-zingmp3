const { override, useBabelRc, removeModuleScopePlugin } = require("customize-cra");
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = override(
    // Sử dụng cấu hình Babel từ file .babelrc
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    // Loại bỏ ModuleScopePlugin để cho phép import từ bất kỳ thư mục nào trong dự án
    removeModuleScopePlugin()
);
