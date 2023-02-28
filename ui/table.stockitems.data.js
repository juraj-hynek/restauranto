import formDataModel from "./form.stockItem.data"


const tableData = Array.isArray(formDataModel) ? formDataModel.map((item) => {
    return {
        columnGroup: item.title,
        fields: item.fields.map(item => {
            return {
                label: item.props.label,
                type: item.type,
                data: [...Array(100)].map((_, index) => index)
            }
        })
    }
}) : (() => {
    console.log('table.stockitems.data formDataModel not array')
    return []

})();

export default tableData