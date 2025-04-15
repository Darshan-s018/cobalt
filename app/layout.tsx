import { url } from "inspector";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Cobalt — Everything About The Essential Metal",
  description:
    "Discover the power, history, and future of cobalt. Learn why cobalt is critical for batteries, renewable energy, and modern technology.",
  openGraph: {
    title: "Cobalt — The Essential Metal Powering The Future",
    description:
      "Explore the fascinating world of cobalt. From its role in clean energy to cutting-edge technology, Cobalt is your guide to this powerful metal.",
    images: {
      url: "https://cobalt-livid.vercel.app/",
      width: 1200,
      height: 628,
    },
  },
};


const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;