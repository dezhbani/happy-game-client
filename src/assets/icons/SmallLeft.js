const SmallLeft = ({ className, fillColor = 'white', strokeColor = 'white' }) => {
  return (
    // --- SVG به صورت درون‌ریزی شده ---
    <svg 
      width="6" 
      height="10" 
      viewBox="0 0 6 10" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      // کلاس‌های Tailwind را اینجا اعمال کنید
      className={`${className} transition-all duration-300 ease-in-out`} // مثال: اضافه کردن انیمیشن
      >
      <path 
        d="M5 9L1 5L5 1" 
        // stroke را با استفاده از کلاس‌های Tailwind یا استایل inline کنترل کنید
        // اگر می‌خواهید color SVG را تغییر دهید (که معمولاً fill و stroke را تحت تاثیر قرار می‌دهد):
        // className="stroke-current text-white" // یا رنگ مورد نظر شما
        // یا اگر می‌خواهید stroke را مستقیماً کنترل کنید:
        stroke={strokeColor} // استفاده از prop برای تغییر رنگ
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SmallLeft