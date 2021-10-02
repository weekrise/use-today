import isSameDay from 'date-fns/isSameDay';
import startOfDay from 'date-fns/startOfDay';
import React, { useEffect, useState } from 'react';

let todayListeners: React.Dispatch<React.SetStateAction<Date>>[] = [];
let globalToday = startOfDay(new Date());

setInterval(() => {
  let currentDay = new Date();

  if (!isSameDay(globalToday, currentDay)) {
    globalToday = startOfDay(currentDay);

    for (let listener of todayListeners) {
      listener(globalToday);
    }
  }
}, 10000);

export let useToday = () => {
  let [today, setToday] = useState<Date>(() => globalToday);

  useEffect(() => {
    todayListeners.push(setToday);

    return () => {
      todayListeners = todayListeners.filter(l => l != setToday);
    };
  }, []);

  return today;
};

export default useToday;
