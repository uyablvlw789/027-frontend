import React from "react";
import ContactCard from "../components/ContactCard";
import { BsTencentQq } from "react-icons/bs";
import { BsWechat } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="grid grid-col-2 gap-10">
        <div className="col-span-2">
          <ContactCard
            icon={<BsTencentQq className="text-3xl text-blue-600" />}
            title="QQ"
            description="通过qq联系我们 1203530303"
            buttonContent="加入qq群"
          />
        </div>
        <ContactCard
          icon={<BsWechat className="text-3xl text-blue-600" />}
          title="微信"
          description="通过微信联系我们"
          buttonContent="加微信号"
        />
        <ContactCard
          icon={<BsFillTelephoneFill className="text-3xl text-blue-600" />}
          title="电话"
          description="通过电话联系我们"
          buttonContent="拨打电话"
        />
      </div>
    </div>
  );
}

export default Contact;
