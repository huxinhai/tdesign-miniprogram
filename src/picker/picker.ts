import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-picker`;

TComponent({
  relations: {
    './picker-column': {
      type: 'child',
    },
  },
  // options: {
  //   virtualHost: true,
  // },
  properties: {
    title: {
      type: String,
      value: '',
    },
    confirmButtonText: {
      type: String,
      value: '确认',
    },
    cancelButtonText: {
      type: String,
      value: '取消',
    },
    theme: {
      type: String,
      value: 'default',
    },
  },
  data: {
    classPrefix: name,
  },
  methods: {
    getPickerColumns() {
      const pickerColumns = this.getRelationNodes('./picker-column');
      if (Array.isArray(pickerColumns)) {
        return pickerColumns;
      }
      return [];
    },
    getSelectedValues() {
      const pickerColumns = this.getPickerColumns();
      if (pickerColumns.length === 0) {
        return { index: undefined, value: undefined };
      }

      const selectedValues = {
        index: pickerColumns.map((pickerColumn) => pickerColumn._selectedIndex),
        value: pickerColumns.map((pickerColumn) => pickerColumn._selectedValue),
      };
      const isMulti = pickerColumns.length > 1;
      if (isMulti) {
        return selectedValues;
      }
      return {
        index: selectedValues.index[0],
        value: selectedValues.value[0],
      };
    },
    onConfirm() {
      this.triggerEvent('confirm', this.getSelectedValues());
    },
    onCancel() {
      this.triggerEvent('cancel');
    },
    triggerChange({ column, index, value }) {
      const isMulti = this.getPickerColumns().length > 1;
      this.triggerEvent('change', isMulti ? { column, index, value } : { index, value });
    },
  },
});
