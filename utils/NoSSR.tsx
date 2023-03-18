import dynamic from "next/dynamic";

const NoSsr = (props: { children: any }) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
