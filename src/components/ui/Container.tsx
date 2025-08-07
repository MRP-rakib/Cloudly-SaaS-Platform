
import { ReactNode } from "react"

 type ContainerProps ={
    children:ReactNode
 }
function Container({children} : ContainerProps) {
  return (
    <div className="max-w-[1296px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
        {children}
    </div>
  )
}

export default Container