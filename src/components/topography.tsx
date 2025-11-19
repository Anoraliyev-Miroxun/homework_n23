
interface Ichildren{
    children:string;
     className?: string; 
}
export function TypographyH1({children,className}:Ichildren) {
  return (
    <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}>
      {children}
    </h1>
  )
}
