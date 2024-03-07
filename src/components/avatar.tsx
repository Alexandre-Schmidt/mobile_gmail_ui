import { Image, ImageProps } from "react-native"
import clsx from "clsx" //serve para aplicar classe de forma condicional

type AvatarProps = ImageProps & {
  size?: "small" | "medium"
}

export function Avatar({ size = "medium", ...rest }: AvatarProps) {
  return (
    <Image
      className={clsx("rounded-full", {//primeiro é o que fica padrão para todos
        "w-8 h-8": size === "small", //aplica somente se for igual a small 
        "w-10 h-10": size === "medium",
      })}
      {...rest}
    />
  )
}
