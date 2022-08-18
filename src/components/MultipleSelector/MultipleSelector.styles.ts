const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const formControlSX = {
  width: '50%',
  backgroundColor: '#333',
  minWidth: '120px',
  borderRadius: '10px',
};

export const inputLabelSX = {
  color: 'white',
  fontSize: '20px',
};

export const selectSX = {
  borderRadius: '10px',
  color: 'white',
  fontSize: '20px',
};
