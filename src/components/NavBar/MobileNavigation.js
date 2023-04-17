import { useState } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="md:hidden flex items-center justify-between relative">
      <IconContext.Provider value={{ size: "2rem" }}>
        <div className="cursor-pointer" onClick={handleClick}>
          {open ? <AiOutlineClose className="texl-3xl" /> : <AiOutlineMenu className="texl-3xl" />}
        </div>
      </IconContext.Provider>
      {open && <NavLinks isMoble={true} />}
    </nav>
  );
}

export default MobileNavigation;
