import {
  isAddressValid,
  isAddressReachedLimit,
  isNameValid,
  alreadyExists,
  isNameReachedLimit,
} from './input-validation';

describe('Test isAddressValid method', () => {
  it('should return true for valid address', () => {
    //given
    const validAddresses = [
      'Oranienburgerstraße 70',
      'Piłsudskiego',
      'Oranienburgerstraße 70, Berlin',
    ];

    // when then
    validAddresses.forEach((a) => {
      const result = isAddressValid(a);
      expect(result).toBe(true);
    });
  });

  it('should return false for invalid address', () => {
    //given
    const invalidAddresses = [
      'Oranienburgerstraße 70, Berlin**',
      '**'
    ];

    // when then
    invalidAddresses.forEach((a) => {
      const result = isAddressValid(a);
      expect(result).toBe(false);
    });
  });
});

describe('Test isAddressReachedLimit method', () => {
  it('should return false for proper length of the address', () => {
    // given
    const address = 'Oranienburgerstraße 70, Berlin';

    // when
    const actualValue = isAddressReachedLimit(address);

    // then
    expect(actualValue).toBe(false);
  });

  it('should return true for the long address', () => {
    // given
    const address = 'It is a very long address, more than 40 characters';

    // when
    const actualValue = isAddressReachedLimit(address);

    // then
    expect(actualValue).toBe(true);
  });
});

describe('Test isNameValid method', () => {
  it('should return false for wrong restaurant name', () => {
    // given
    const name = 'Weird Name ()!';

    // when
    const actualValue = isNameValid(name);

    // then
    expect(actualValue).toBe(false);
  });

  it('should return true for proper restaurant name', () => {
    // given
    const name = 'Cool name 1-1';

    // when
    const actualValue = isNameValid(name);

    // then
    expect(actualValue).toBe(true);
  });
});

describe('Test isNameValid method', () => {
  it('should return false for proper length of the restaurant name', () => {
    // given
    const name = 'Cool name 1-1';

    // when
    const actualValue = isNameReachedLimit(name);

    // then
    expect(actualValue).toBe(false);
  });

  it('should return true for long restaurant name', () => {
    // given
    const name = 'It is a very long name, more than 20 characters';

    // when
    const actualValue = isNameReachedLimit(name);

    // then
    expect(actualValue).toBe(true);
  });
});

describe('Test alreadyExists method', () => {
  it('should return false when restaurant name is unique', () => {
    // given
    const restaurantNames = ['cool name', 'second cool name'];
    const name = 'new name';

    // when
    const actualValue = alreadyExists(name, restaurantNames);

    // then
    expect(actualValue).toBe(false);
  });

  it('should return true when restaurant name already exists', () => {
    // given
    const restaurantNames = ['cool name', 'second cool name', 'something'];
    const name = 'second cool name';

    // when
    const actualValue = alreadyExists(name, restaurantNames);

    // then
    expect(actualValue).toBe(true);
  });
});
