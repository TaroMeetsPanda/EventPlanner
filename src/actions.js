// import _ from 'lodash';

export function onChange(name, value) {
  return {
    type: 'ON_CHANGE',
    payload: { name, value }
  }
}
