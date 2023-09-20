import Image from "next/image"
import facebookIcon from './house-svgrepo-com.svg'

export const FacebookImage = () => {
  return <Image
  priority
  src={facebookIcon}
  alt="Follow us on Twitter"
  height={10}
  width={10}
  color="#3578e5"
/>
}