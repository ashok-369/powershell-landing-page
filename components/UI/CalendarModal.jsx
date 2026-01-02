
import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from './Button';

export const CalendarModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deep/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-[2.5rem] shadow-premium overflow-hidden border border-white/10">
        {isSuccess ? (
          <div className="p-16 text-center space-y-6">
            <div className="w-24 h-24 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Check size={48} />
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-deep dark:text-white">Booking Confirmed!</h2>
            <p className="text-deep/60 dark:text-white/40">We've sent the meeting invite and materials to your email.</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            <div className="bg-primary p-10 text-white md:w-2/5 flex flex-col justify-between">
              <div>
                <CalendarIcon size={48} className="mb-6 opacity-40" />
                <h2 className="text-2xl font-heading font-extrabold mb-4">Book Your Free Demo</h2>
                <p className="text-white/70 text-sm">Experience our interactive teaching methodology firsthand.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={16} className="text-accent" />
                  <span>45 Minutes Session</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-accent" />
                  <span>Live Q&A Included</span>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-3/5 relative">
              <button onClick={onClose} className="absolute top-6 right-6 text-deep/20 hover:text-deep dark:hover:text-white transition-colors">
                <X size={24} />
              </button>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-deep dark:text-white">Select Date</h3>
                    <div className="flex gap-2">
                      <ChevronLeft size={18} className="text-deep/20 cursor-not-allowed" />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">October 2024</span>
                      <ChevronRight size={18} className="text-deep/20 cursor-not-allowed" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {days.map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-all ${selectedDate === day ? 'bg-primary text-white shadow-button' : 'hover:bg-cream dark:hover:bg-white/5 text-deep dark:text-white/60'}`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-deep dark:text-white mb-4">Select Time Slot (IST)</h3>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${selectedTime === time ? 'bg-primary border-primary text-white shadow-button' : 'border-deep/10 dark:border-white/10 hover:border-primary text-deep dark:text-white/60'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  className="w-full" 
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleBooking}
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
