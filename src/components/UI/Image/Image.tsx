import React, {
  FC,
  ImgHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./Image.module.scss";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const placeholder =
  "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";

const Image: FC<IImageProps> = ({
  src = placeholder,
  alt,
  width,
  height = "auto",
  className,
  style,
  ...attrs
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageOnLoad = () => {
    console.log("handleImageOnLoad");
    setLoading(false);
  };

  const imageRef = useRef<HTMLImageElement>(null);
  const entryView = useIntersectionObserver(imageRef, {});
  const isVisible = !!entryView?.isIntersecting;

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);

  return (
    <div
      className={[classes.Container, className ?? ""].join(" ")}
      style={{ width: width, height: height, ...style }}
    >
      <img
        loading={"lazy"}
        ref={imageRef}
        style={{ opacity: loading ? 0 : 100 }}
        onLoad={handleImageOnLoad}
        src={src}
        alt={alt}
        {...attrs}
      />
    </div>
  );
};

export default Image;
