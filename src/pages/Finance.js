import { Breadcrumb } from "../components/Breadcumb";

function Finance() {
  return (
    <>
      <Breadcrumb
        className="md:container mx-6 md:mx-auto mt-5 mb-10"
        items={[
          { name: "home", url: "/" },
          { name: "财务通道", url: "/finance" },
        ]}
      />
      <div className="md:container mx-6 md:mx-auto flex flex-col space-y-6">
        {/* 付款注意事项 */}
        <h2 className="text-2xl">付款注意事项</h2>
        <div className="grid grid-cols-4 rounded-sm">
          <div className="col-span-1 row-span-full p-5 bg-gray-50 flex justify-center items-center">
            付款事宜
          </div>
          <div className="col-span-3 flex flex-col space-y-5 p-5">
            <div>
              1.如果您是通过银行转帐或邮局请将付款底单传真到027-65681481或将底单扫描后发至1203530303@qq.com，银行电汇底单须有银行加盖的转讫章，邮局回执上应有邮局日戳。
            </div>
            <div>
              2.传真或扫描件请务必按照“索取发票的具体流程”中第一点那样注明。
            </div>
            <div>
              3.传真或发送扫描件请务必及时，如此会加快您的业务开展的步伐，避免耽误时间。
            </div>
            <div>
              4.注意事项：任何一种付款方式，我们仅以款项到帐为标准，只有在款已到帐的情况下，我们才能为其账户存入预付款、注册产品，如因为未能按时到账而影响了您的产品不能被购买或过期不能使用，我们将不负任何责任。
            </div>
            <div>
              5.我们将在收到您的汇款后开出发票。有关发票事宜，请联系027-65681210/65681255
            </div>
          </div>
        </div>
        {/* 付款方式  */}
        <h2 className="text-2xl">付款方式</h2>
        <div className="grid grid-cols-4 rounded-sm gap-y-5">
          <div className="col-span-4 bg-gray-50 p-5">★国内电汇 </div>
          <div className="col-span-1 px-5">户 名:</div>{" "}
          <div className="col-span-3 px-5">武汉市劲捷电子信息有限公司</div>
          <div className="col-span-1 px-5">帐 号: </div>{" "}
          <div className="col-span-3 px-5">70080154740004938 </div>
          <div className="col-span-1 px-5">开户行:</div>
          <div className="col-span-3 px-5">
            上海浦东发展银行武汉分行(行号:218966)
          </div>
          <div className="col-span-4 p-5 bg-gray-50">★邮局汇款</div>
          <div className="col-span-1 px-5">汇款地址：</div>
          <div className="col-span-3 px-5">
            武汉市江汉区江兴路79号新鸿鹄大楼2号504
          </div>
          <div className="col-span-1 px-5">收款人：</div>
          <div className="col-span-3 px-5">武汉市劲捷电子信息有限公司</div>
          <div className="col-span-1 px-5">邮政编码：</div>
          <div className="col-span-3 px-5">430022</div>
          <div className="col-span-1 px-5">汇款人简短附言：</div>
          <div className="col-span-3 px-5">请注明单位名称 个人客户注明姓</div>
        </div>
        {/* 发票索取方式 */}
        <h2 className="text-2xl">发票索取方式</h2>
        <div className="grid grid-cols-4 rounded-sm gap-y-3">
          <div className="col-span-4 bg-gray-50 p-5">★索取发票的具体流程</div>
          <div className="col-span-1 flex items-center justify-center bg-gray-50">
            索取发票的具体流程
          </div>
          <ul className="col-span-3 flex flex-col space-y-5 p-5">
            <li className="flex flex-col space-y-5">
              <p>
                1、您以电汇或邮政方式汇款至我司的，请将汇款底单传真给我们，传真号027-65681481。
              </p>
              <p>在汇款底单下方注明： </p>
              <p>公司名称：与我司签定合同的单位</p>
              <p>发票抬头：贵公司单位全称(须与汇款来单位名称一致)</p>
              <p>开票金额：( 不得超过已汇款未开发票的累计金额 )</p>
              <p>寄往地址：收票地址</p>
              <p>注( 如您账号下的地址有变更，请及时修改您的账号信息 )</p>
              在修改账号信息中如有相关疑问，请咨询我们的客服人员(
              Tel：027-65681210-801或65681255 )谢谢！
              <p>收件人：张三收</p>
              <p>邮政编码：430000</p>
            </li>
            <li>
              2、您是以网上支付方式汇款的,(因网上支付的款项都是由系统自动完成)，故您如需发票，请务必发在管理平台中发送服务支持申请单通知我们。我们在收到邮件后会及时提供发票。
            </li>
            <li>
              3、您的地址如有变更，请及时修改您的相关会员信息，以便我们能按您的正确地址邮寄发票。（如不及时修改地址，我们会按旧地址寄出发票，这样发票就会被退回，导致您无法及时收到发票）
            </li>
            <li>
              4、如您对发票有任何特殊的要求，请在汇款后及时发邮件至
              1203530303@qq.com 通知我们，以便您能及时地收到正确的发票。
            </li>
            <li>
              5、一般情况下，我们会在到帐后，收到您的请求10个工作日内寄出发票。
            </li>
          </ul>
          <div className="col-span-4 p-5">
            有关发票的任何问题，欢迎发邮件至 1203530303@qq.com
            我们将会热诚及时地为您解决问题。
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
