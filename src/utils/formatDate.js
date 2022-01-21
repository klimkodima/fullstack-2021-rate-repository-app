import { format } from 'date-fns'
/*
export const formatDate = (date) => {

  let  options = { day: 'numeric',  month:'numeric', year: 'numeric', timezone: 'UTC' };
  return new Date(date).toLocaleString('ru', options);  
};
*/
export const formatDate = (date) => {
  
  return format(new Date(date),'dd.MM.yyyy' )
};