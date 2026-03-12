export interface BusinessHours {
  day: number; // 0-6 (Domingo-Sábado)
  openTime: number; // Hora en formato decimal (6.5 = 6:30)
  closeTime: number;
  closed: boolean;
}

// Horarios del taller: L-V 6:00-17:00, Sáb 6:00-12:00, Dom cerrado
export const businessHours: BusinessHours[] = [
  { day: 0, openTime: 0, closeTime: 0, closed: true }, // Domingo
  { day: 1, openTime: 7, closeTime: 17, closed: false }, // Lunes
  { day: 2, openTime: 7, closeTime: 17, closed: false }, // Martes  
  { day: 3, openTime: 7, closeTime: 17, closed: false }, // Miércoles
  { day: 4, openTime: 7, closeTime: 17, closed: false }, // Jueves
  { day: 5, openTime: 7, closeTime: 17, closed: false }, // Viernes
  { day: 6, openTime: 7, closeTime: 11, closed: false }, // Sábado
];

export function getCurrentBusinessStatus(): {
  isOpen: boolean;
  message: string;
  nextOpenTime?: string;
} {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour + (currentMinute / 60);
  
  const todayHours = businessHours.find(h => h.day === currentDay);
  
  if (!todayHours || todayHours.closed) {
    return {
      isOpen: false,
      message: '🔴 Cerrado - Abre el lunes a las 7:00 AM',
      nextOpenTime: 'lunes 7:00 AM'
    };
  }
  
  const isCurrentlyOpen = currentTime >= todayHours.openTime && currentTime < todayHours.closeTime;
  
  if (isCurrentlyOpen) {
    return {
      isOpen: true,
      message: '🟢 Abierto ahora',
    };
  }
  
  if (currentTime < todayHours.openTime) {
    return {
      isOpen: false,
      message: `🔴 Cerrado - Abre a las ${formatTime(todayHours.openTime)}`,
      nextOpenTime: `hoy ${formatTime(todayHours.openTime)}`
    };
  }
  
  // Buscar próximo día hábil
  const nextBusinessDay = getNextBusinessDay(currentDay);
  return {
    isOpen: false,
    message: `🔴 Cerrado - Abre ${nextBusinessDay.dayName} a las ${formatTime(nextBusinessDay.openTime)}`,
    nextOpenTime: `${nextBusinessDay.dayName} ${formatTime(nextBusinessDay.openTime)}`
  };
}

function formatTime(hour: number): string {
  const hours = Math.floor(hour);
  const minutes = Math.round((hour - hours) * 60);
  return `${hours}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
}

function getNextBusinessDay(currentDay: number): { dayName: string; openTime: number } {
  const dayNames = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  
  for (let i = 1; i <= 7; i++) {
    const nextDay = (currentDay + i) % 7;
    const nextDayHours = businessHours.find(h => h.day === nextDay);
    
    if (nextDayHours && !nextDayHours.closed) {
      return {
        dayName: dayNames[nextDay],
        openTime: nextDayHours.openTime
      };
    }
  }
  
  return { dayName: 'lunes', openTime: 7 };
}

export function getFormattedSchedule(): Array<{
  day: string;
  hours: string;
  isToday: boolean;
}> {
  const today = new Date().getDay();
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
  return businessHours.map(schedule => ({
    day: dayNames[schedule.day],
    hours: schedule.closed 
      ? 'Cerrado' 
      : `${formatTime(schedule.openTime)} - ${formatTime(schedule.closeTime)}`,
    isToday: schedule.day === today
  }));
}