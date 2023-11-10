import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <main>
      <Hero
        title="企业管理软件开发"
        description="定制化企业管理软件解决方案，助您创新业务运营。简化流程，提升生产力，确保无缝集成。"
        image="bg1.png"
      />
      <Hero
        title="企业APP开发"
        description="提升企业移动性能到新高度。为您量身打造的APP，提升效率，增强用户参与度，为您的员工和客户提供强大工具。"
        image="bg2.png"
      />
      <Hero
        title="微信小程序/公众号开发"
        description="在中国最大的平台上与您的观众建立连接。我们提供专业的微信小程序和公众号开发服务，扩大您的数字足迹。"
        image="bg3.png"
      />
      <Hero
        title="区块链/DAPP开发"
        description="利用区块链技术的力量。我们为去中心化应用（DAPP）提供的专家级开发服务，确保透明度、安全性和创新。"
        image="bg4.png"
      />
      <Hero
        title="人工智能开发"
        description="用AI转变您的业务。利用我们的人工智能开发专长，实施能够思考、学习和做决策的智能系统，推动公司前进。"
        image="bg5.png"
      />
    </main>
  );
}
