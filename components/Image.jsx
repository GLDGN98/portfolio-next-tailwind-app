import Image from "next/image"

const ResponsiveImage = ({ src, width, height, alt, className }) => {
  return (
    <div>
      <Image
        src={`.${src}`}
        alt={alt}
        className={className}
        loading="lazy"
        width={width}
        height={height}
      />
    </div>
  )
}

export default ResponsiveImage
