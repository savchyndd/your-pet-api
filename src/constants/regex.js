const NAME_REGEX = /^[a-zA-Z]{2,16}$/;

const EMAIL_REGEX =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

const BIRTHDAY_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/;

const PHONE_NUMBER_REGEX = /^[+][0-9]{1,4}[0-9]{4,}$/;

const LOCATION_REGEX = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

module.exports = {
  NAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  BIRTHDAY_REGEX,
  PHONE_NUMBER_REGEX,
  LOCATION_REGEX,
};
