import Hero from "@/components/hero";

export default function AboutPage() {
  // 联系方式：手机号码：13921161092，邮箱：support@chitengruanjian.com
  // 地址：江苏省无锡市梁溪区人民中路224号港务写字楼511室
  return (
    <main>
      <Hero
        title="联系方式"
        description={
          <div>
            <p>手机号码：13921161092</p>
            <p>邮箱：support@chitengruanjian.com</p>
            <p>地址：江苏省无锡市梁溪区人民中路224号港务写字楼511室</p>
          </div>
        }
        image="bg6.png"
      />
    </main>
  );
}
