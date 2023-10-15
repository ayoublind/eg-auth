interface LogoProps {
    width?: string;
}

function Logo({ width }: LogoProps) {
    return (
        <img 
            alt="easygen logo"
            src={require(`assets/eg_logo_color.png`)}
            width={width} />
    );
}

export default Logo;
