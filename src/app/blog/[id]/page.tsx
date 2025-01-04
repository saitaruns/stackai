import Ripple from "@/components/ui/ripple";
import Image from "next/image";
import { Suspense } from "react";

interface Blog {
    id: number;
    title: string;
    body: string;
}

const Blog = async ({
    id
}: {
    id: string
}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog: Blog = await response.json();

    return (
        <div className="min-h-screen py-2 space-y-6 px-2 w-full md:w-8/12 mx-auto mt-12">
            <Image
                src={`https://picsum.photos/seed/${blog.id}/1920/1080`}
                alt="blog"
                width={1920}
                height={1080}
                className="object-cover w-full h-96 rounded-md"
            />
            <h1 className="text-5xl capitalize font-semibold text-start">{blog.title}</h1>
            <p className="text-lg text-start">
                {blog.body}
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aspernatur libero ea asperiores cumque aliquam fugit, pariatur debitis neque deleniti hic consectetur corporis. Totam exercitationem amet necessitatibus pariatur fugiat nulla libero quae voluptas itaque minus est quidem blanditiis animi eaque ab eum odit, maxime temporibus aliquam magni vitae facilis? Quidem illum non optio eos, similique consectetur animi consequuntur velit assumenda perferendis, earum minus aliquam fugit voluptas! Ipsa corporis laudantium perspiciatis quibusdam laboriosam. Exercitationem repellat quae quod atque consequatur eveniet sequi quia nam eos vero harum illum distinctio reiciendis aliquid cumque, qui error in dignissimos praesentium. Quam quasi alias consectetur voluptatum sint nostrum quas nihil voluptatem beatae saepe! Officia blanditiis sit, molestiae totam quae suscipit natus laudantium architecto consequatur tempore maiores amet numquam nemo? Ipsam fuga, enim perferendis, minus animi tenetur dolorem, fugit cupiditate nulla dignissimos eos excepturi. Assumenda vero sunt soluta excepturi nobis quasi dolorum, nam ratione error aliquid repellat nihil delectus obcaecati, officiis dignissimos, deleniti ducimus iusto voluptatum odit. Rerum non ullam aperiam hic voluptatem iure facilis suscipit architecto tempore magni pariatur vero natus cum sed, maiores eius? Pariatur esse commodi iure officiis nemo suscipit quasi fuga nostrum soluta omnis itaque, ducimus modi, placeat id aut possimus quam quod ullam nulla quia nobis ratione? Sapiente, beatae? Illum nostrum laborum vero minima doloremque natus suscipit voluptatem aliquid corrupti inventore explicabo nam nisi accusamus reprehenderit, officiis quia distinctio, est reiciendis architecto. Rem, ullam? Eaque, quo necessitatibus itaque obcaecati tempora impedit molestiae repellendus iusto. Expedita, et. Impedit sunt sit possimus harum obcaecati debitis. Asperiores ducimus libero aspernatur quasi porro dicta, voluptatibus nobis hic assumenda, sit fugiat nostrum pariatur debitis eum officia iure, nihil fugit illo corporis deleniti id velit! Optio nostrum, totam sint, corrupti excepturi tenetur fuga in, enim maiores maxime dolor cupiditate deleniti sit modi? Possimus modi, omnis sint fugit at et accusamus nam exercitationem cupiditate error sequi laboriosam quaerat nulla veritatis quis numquam eaque ex dolor odio amet officia, sit dignissimos accusantium excepturi? Sequi, eum facere molestias aliquam quam dolor rerum harum provident delectus est libero iste architecto odit sunt optio fugiat possimus adipisci beatae commodi, et aperiam, fugit placeat perspiciatis eius. Quidem quia debitis, magni harum qui, dignissimos eaque placeat architecto saepe aspernatur a culpa sit facere, expedita ullam ratione. Dolores, nihil a? Quas iste quaerat, saepe amet fuga quo eum, laborum animi corrupti qui perspiciatis quod quasi. Qui dolore natus amet possimus, deleniti nam. Necessitatibus optio illum totam sapiente modi? Enim rem, odit dolor dolores nesciunt doloribus explicabo beatae ad dolorum obcaecati quo eius, a esse amet alias natus consequuntur. Molestias odio dolor esse eius vitae modi magnam nulla quis delectus ullam, ut ea tempore id tempora necessitatibus voluptas quos. Veritatis minima minus, hic blanditiis temporibus non facere recusandae earum veniam neque nihil laborum sequi vitae nisi amet? Unde tempora sed illum optio assumenda numquam aut, sunt odit a, doloribus est id amet cupiditate? Provident doloremque odit corrupti corporis totam nesciunt non nulla error, quos fugit eligendi perspiciatis incidunt quas reprehenderit, tempore deleniti eaque facere nobis, quibusdam est.
            </p>
        </div>
    )
}

const LoadingScreen = () => {
    return <div className="relative w-full flex h-screen items-center justify-center overflow-hidden">
        <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black">
            Loading...
        </p>
        <Ripple />
    </div>
}

export default function BlogPage({ params }: { params: { id: string } }) {
    const { id } = params;
    return <Suspense fallback={<LoadingScreen />}><Blog
        id={id}
    /></Suspense>
}
