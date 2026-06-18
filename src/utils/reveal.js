export const reveal = (inView, delay = 0, distance = 40) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'none' : `translateY(${distance}px)`,
  transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
})
