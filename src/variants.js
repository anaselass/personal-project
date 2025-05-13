export const fadeIn = (direction, delay) => {
  // تحقق من حجم الشاشة - يعمل فقط إذا كانت أكبر من 768px (تابلت أو كمبيوتر)
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return {
      hidden: {},
      show: {},
    };
  }

  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
