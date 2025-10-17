import Image from 'next/image';

export default function Logo() {
  return (
    <div className="logo-wrapper">
      <Image
        src="/logo whiye.png"
        alt="Logo"
        width={240}
        height={80}
        priority
      />
      <span className="logo-text">Již brzy</span>
    </div>
  );
}

