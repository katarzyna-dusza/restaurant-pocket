const address_set = (address) => ({
    type: 'ADDRESS_SET',
    address
});

export const setAddress = (address) => address_set(address);

const actions = {
    ...setAddress
};

export default actions;
