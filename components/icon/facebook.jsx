import Image from "next/image"
import facebookIcon from './facebook-icon'

export const FacebookImage = () => {
  return <Image
  priority
  src={facebookIcon}
  alt="Follow us on Twitter"
/>
}