import dayjs, { ConfigType, Dayjs, QUnitType } from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import QuarterOfYear from 'dayjs/plugin/quarterOfYear';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import { useMemo } from 'react';

dayjs.locale(`en`);
dayjs.extend(CustomParseFormat);
dayjs.extend(QuarterOfYear);
dayjs.extend(AdvancedFormat);

export const isValid = (str: string) => {
  return dayjs(str).isValid();
};

export const today = () => {
  return dayjs();
};

export const convert = (dateParam: ConfigType, fromFormat?: string) => {
  let dateString = dateParam;
  // fix ios safari bug
  if (typeof dateString === `string`) {
    dateString = dateString.replace(/-/g, `/`);
  }

  const date = dayjs(dateString, fromFormat);

  return date;
};

export const format = (
  dateParam: ConfigType,
  toFormat = `YYYY MMM DD hh:mm:ss`,
  fromFormat?: string,
) => {
  const date = convert(dateParam, fromFormat);
  return date.format(toFormat);
};

export const substract = (
  dateParam: string,
  number = 0,
  range: QUnitType = `day`,
) => {
  const date = dateParam;
  const newDate: Dayjs = dayjs(date).subtract(number, range);

  return newDate;
};

export const add = (
  dateParam: string,
  number = 0,
  range: QUnitType = `day`,
) => {
  const date = dateParam;
  const newDate: Dayjs = dayjs(date).add(number, range);

  return newDate;
};

export const difference = (
  toDate: string,
  fromDate: string,
  range: QUnitType = `day`,
) => {
  return dayjs(toDate).diff(fromDate, range);
};

const useDate = () => {
  const obj = useMemo(() => {
    return {
      isValid,
      today,
      convert,
      format,
      substract,
      add,
      difference,
    };
  }, []);

  return obj;
};

export default useDate;
