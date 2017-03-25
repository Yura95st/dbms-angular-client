exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'view-table-content.js',
        'perform-selection-operation.js'
    ]
}