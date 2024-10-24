import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
    className?: string;
    width?: number;
    height?: number;
}

const BrandLogo = ({className= 'logo', width= 150, height = 50}: BrandLogoProps) => {
    return (
        <Link href="/" className={`inline-block ${className}`}>
          <Image
            src="/images/oceanicLogo.svg"
            alt="Brand Logo"
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </Link>
      );
}

export default BrandLogo