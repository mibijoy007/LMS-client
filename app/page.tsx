import Image from "next/image";
'use client'
import { FC, useState } from "react";

interface Props{

}
import React from 'react'
import Heading from "./utils/Heading";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";


const Page : FC<Props> = () => {
  // open and setOpen is for users info card
  const [open,setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(0)

  return (
    <div>
      <Heading 
       title = "Learn Online"
       description="This is a learning platform where you can learn anything"
       keywords="Online learning, LMS, Courses, MERN, Technology"
      />
      

      <Nav
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />

      <HeroSection />

      {/* <div>
        <p className="text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio ab tenetur corporis eaque quam accusamus veniam, saepe, eveniet minima facilis laborum nobis iure quod. Impedit in laborum officiis eaque doloribus, asperiores minima eum. Aliquam unde deserunt repudiandae consectetur laborum, illo facilis odio qui ad dolorem totam doloribus voluptatem, accusamus obcaecati, minus fuga corporis. A explicabo eius sit reiciendis ab recusandae veniam saepe harum in! Quod nobis magnam, eligendi esse perspiciatis sunt sequi ullam explicabo neque omnis culpa, porro tempore quo reprehenderit minima similique officia assumenda ad autem pariatur illum optio? Consectetur, minus voluptates. Similique commodi, soluta quam sed omnis iure. Consequatur provident delectus facilis distinctio iste expedita maiores ut tempora aliquid vero, suscipit quo accusantium laudantium nesciunt eveniet praesentium quia. Vel animi aliquid aperiam reprehenderit qui officiis temporibus quo corrupti quisquam amet rerum praesentium dolore ad tempore soluta voluptatibus pariatur, possimus veritatis, voluptatem repellendus inventore architecto beatae. Iste atque neque alias enim debitis pariatur temporibus. Voluptates rerum quis numquam nemo dolorem quisquam ducimus laboriosam corporis atque dolorum suscipit, distinctio rem perferendis odit in asperiores iste quia provident eum dolore fugiat ullam animi laborum. Consectetur minus dolores vel quae quibusdam laboriosam libero maxime, qui inventore sit nam quaerat, quidem error ea similique ipsam officiis vero. Est labore animi earum, accusantium beatae pariatur nobis, voluptates non fuga iusto ipsum id obcaecati eveniet atque odit necessitatibus ab veniam fugiat explicabo doloribus ex. Iure sunt fugit eveniet sit minima sint repudiandae assumenda repellendus, sed ducimus itaque commodi consequuntur omnis voluptatum, quibusdam optio error? Nulla consequuntur nisi earum aliquid eaque minima consectetur dolores sint maxime nostrum? Dicta fugiat, unde, sequi asperiores ullam vero nostrum facere atque, magnam sit ab repellat alias expedita earum? Eaque ex commodi velit quia id! Repellendus hic maiores fuga harum veniam molestiae illum error in unde. Fugiat voluptate consectetur expedita deserunt vel iste at, id assumenda inventore molestias provident animi. Optio ad ipsa at. Aliquam accusantium reprehenderit dolor, magni sed ad doloremque maxime, at veritatis excepturi, quasi similique adipisci ut? Doloremque minus, voluptatibus consequuntur placeat voluptatum exercitationem eos et temporibus inventore tenetur possimus, dolorem eligendi consequatur vitae dolore! Voluptatem placeat eum, sit aperiam, voluptatum distinctio libero reprehenderit, fuga necessitatibus itaque odit assumenda harum? Eum, cum optio. Impedit non reiciendis, cum, expedita laborum, culpa debitis et repudiandae aperiam alias placeat commodi veritatis excepturi recusandae voluptatum suscipit fugiat quae aliquam. Iure, recusandae, tempora quam itaque at nulla magni cupiditate labore fuga accusamus vero nesciunt iste doloribus facilis ducimus excepturi atque doloremque libero. Expedita laudantium impedit at nostrum maxime nobis debitis quae pariatur voluptates, ipsum aut inventore rem, natus temporibus quasi quia sint itaque aliquam necessitatibus eum. Sint nisi et repellat, corporis rerum ad repudiandae fugiat exercitationem. Temporibus, delectus ipsa fugit explicabo facere recusandae dolor ab similique minima aliquam adipisci nemo perspiciatis quaerat odio autem tempore beatae, vitae maiores. Ea accusamus voluptatibus id quia, consectetur eos ex, quam quod libero unde, harum quo beatae nihil deserunt totam atque aliquam! Ipsam possimus quasi repellendus ut perferendis fugiat minus eveniet assumenda fugit. Voluptatem consequuntur, quisquam tenetur voluptas non laboriosam aut iure rerum corporis iste eveniet quidem modi numquam quae corrupti totam ratione explicabo, repellendus deleniti odit quibusdam. Fugit dicta tempora, magnam voluptatum eos voluptate suscipit, voluptates delectus quam minus consequatur necessitatibus corporis sunt eius hic facilis perspiciatis exercitationem eaque omnis perferendis. Earum delectus, rem voluptas atque obcaecati iste, fuga commodi voluptatum provident eum eveniet sint amet repellat, magnam esse repellendus cumque quidem? Veniam nemo in commodi repudiandae aliquam? Blanditiis excepturi similique saepe autem dignissimos laboriosam quae delectus nobis distinctio repellat iusto quaerat cumque alias consequatur, quasi unde? Illo quaerat temporibus beatae suscipit praesentium similique, aut aperiam neque vitae nisi dolores nulla velit sit impedit ut exercitationem officiis ratione porro eius dolore rem dolorem dolorum labore libero. Eaque perspiciatis dignissimos voluptatem error, debitis quasi qui quia autem aperiam deleniti esse nobis quam culpa! Esse nemo sed atque ducimus iste voluptates consectetur quidem beatae explicabo possimus! Eligendi est eum ad voluptatum optio consequuntur ipsa ducimus magnam voluptates, suscipit sit sint fuga explicabo, qui facilis animi aliquam dicta beatae tempora aut ab. Doloremque, sunt? Beatae sint, repellendus ab adipisci, deserunt fuga nam magni quisquam officia tempore vitae voluptas! Saepe temporibus placeat consequuntur quae. Perspiciatis unde iusto totam pariatur consequatur quibusdam fuga laboriosam nulla ipsa? Excepturi enim aliquid esse, a cumque eligendi. Distinctio fuga ea odit, excepturi, soluta sapiente hic nostrum qui consectetur rem incidunt? Ea obcaecati excepturi nihil nemo maiores voluptatum deserunt asperiores assumenda iste aliquid sed, veniam ducimus voluptatibus corrupti distinctio perferendis sapiente inventore sunt! Rem magnam doloribus asperiores sed non architecto earum repudiandae quidem alias placeat ullam maxime, voluptate, fuga labore molestias debitis fugit, facere aliquam ducimus maiores voluptatem sapiente. Architecto iusto, ab expedita illum soluta esse quidem, consectetur excepturi ad ipsum eaque ratione nulla voluptates corporis voluptate quasi mollitia, cum adipisci error fugiat qui sequi temporibus quae! Dicta quas culpa laudantium suscipit, ad voluptas exercitationem dolorem sed corporis nesciunt minima natus ratione magni nemo dignissimos repellendus ipsa hic omnis animi adipisci. Earum explicabo quas aliquid harum. Ad, esse accusantium eveniet quis saepe voluptatum aliquid, tempora sed dolor porro sapiente odio. Vel, doloremque. Ipsa sequi magnam laborum est quos unde vero sit fugit maiores beatae ab repellat modi iusto, nemo, accusantium explicabo similique pariatur rerum, eius molestias deserunt quis. Eaque dicta minus laborum atque, cum earum doloremque alias dignissimos in repellat reprehenderit sunt omnis aperiam eveniet nulla cumque quam! Porro quidem nostrum aspernatur iure reprehenderit adipisci, asperiores illo quasi, minima rerum impedit ea nemo quia numquam vel. Dolore quos itaque impedit nihil autem voluptate vero cum mollitia maxime dignissimos quia dolores ex delectus voluptatum, sint sunt. Amet corporis perspiciatis, consectetur neque minus ipsa iusto repudiandae, voluptates aperiam temporibus provident commodi incidunt! Aliquam similique ducimus delectus ab alias maxime aperiam magnam eveniet fugit nemo quidem, soluta, adipisci ex voluptas explicabo? Commodi eius voluptatem exercitationem facilis minima impedit numquam, alias velit illum doloribus quis eos sequi perspiciatis, fugit ex sint accusamus? Error molestias sint provident eos. Atque commodi sint tempora aspernatur corporis delectus repudiandae earum fugiat non distinctio?</p>
      </div> */}
    </div>
  )
}

export default Page;
