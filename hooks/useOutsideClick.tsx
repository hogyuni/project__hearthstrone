import { useEffect } from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | undefined>,
  callback: () => void
) => {
  const handleClick = (e: CustomEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick as EventListener);

    return () => {
      document.removeEventListener("click", handleClick as EventListener);
    };
  });
};

export { useOutsideClick }
