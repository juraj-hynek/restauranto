import dataSectionList from "./form.stockItem.data";

const titles = ["Quantities and Units", 'Dates', 'Stocks and storages', 'General into'];
const notEditable = ['sku', 'description', 'Select unit', "Item volume"];


// reduce data model ot form 
// to get inventory item model 
// for tables and inventory form
export default function dataReduceFormModelToStockItem() {
    const _data = [];

    dataSectionList.forEach((sectionItem) => {
        const { title = '', fields = [] } = sectionItem;
    
        if (titles.includes(title)) {
            _data.push({
                ...sectionItem,
                fields: fields.map((field) => {
                    if (notEditable.includes(field.props.label)) {
                        return {
                            ...field,
                            props: {
                                ...field.props,
                                isReadOnly: true,
                                isDisabled: true
                            }
                        }
                    } else {
                        return {
                            ...field,
                            isDisabled: false

                        }
                    }
                })
            })
        }
    });

    console.log('data', JSON.stringify(_data, null, 2))

    return _data;
} 