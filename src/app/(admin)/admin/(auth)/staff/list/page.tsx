import StaffList from "@/ _components/Admin/Staff/organisms/StaffList";

/**
 * componentsディレクトリのすみわけ（できるだけ以下を守りながらコンポーネント設計していきたい）
 * ・atoms... これ以上分割できない汎用コンポーネント interface,実装規約的な責務ももつ
 * ・molecules... atomsを組み合わせた再利用可能なコンポーネント ドメイン知識は持たない
 * ・organisms... moleculesを組み合わせたコンポーネント ドメイン知識を持つ 　汎用性はない
 */
const Page: React.FC = async () => {
    return (
        <section className="w-full flex justify-center">
            <StaffList />
        </section>
    )
}
export default Page;
