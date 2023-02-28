import dataSectionList from "./form.stockItem.data";
import BuildTable from "./table.stockitems.ui";

const titles = ["General into", "Stock and storages"];
const notEditable = ['sku', 'description', "stock_area"];

export default function dataGetTableColumnsForInventoryList(index) {
    const _data = [];

    dataSectionList.forEach((sectionItem) => {
        const { title = '', fields = [] } = sectionItem;

        if (titles.includes(title)) {
            _data.push({
                ...sectionItem,
                fields: fields.filter((field) => {
                    return (notEditable.includes(field.props.label))
                })
            })
        }
    });

    console.log('data', JSON.stringify(_data, null, 2))

    return _data;
}


export default function TableInventory() {

    const data = [...Array(100)].map((item, index) => {
        return dataGetTableColumnsForInventoryList(index)
    });

    return 


}