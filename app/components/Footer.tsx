import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-300">
      {/* Logos */}
      <Image
        src="/img/footer-logos.png"
        alt="Footer Logos"
        style={{
          width: "80%",
        }}
        width={3000}
        height={3000}
      />

      {/* Footer Text */}
      <p className="font-sans text-sm max-w-[70vw] text-center m-[5vh]">
        © CUPHEAD is a trademark of StudioMDHR Entertainment Inc., all rights
        reserved. Xbox One and the Xbox logos are trademarks of the Microsoft
        group of companies and are used under license from Microsoft. Nintendo
        Switch is a trademark of Nintendo. “PlayStation Family Mark” and “PS4
        logo” are registered trademarks or trademarks of Sony Interactive
        Entertainment Inc. Steam and the Steam logo are trademarks and/or
        registered trademarks of Valve Corporation in the U.S. and/or other
        countries. The Apple logo is a trademark of Apple Inc., registered in
        the U.S. and other countries.
      </p>
    </footer>
  );
}
