"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                       Happy Birthday Chakkare 🥹💖

                    Vaave 🥹 
           Happy Birthday 🫂🥹💗 pinnee nan orr karyam paranthara yyii inii past il illaa karyagal orth karayerth ath chindhikanda 🥺 ttoo pinne inn muthal Shana Nasrin cheriyeyum valiyeyum karyagalk karayyilla 🥹 inii Muthal nalla strong ayirikanam 🫀🥺🫂 pinne nan anne ittech povo agane onnum chindhikanda tto vaave agane onnum indavula 💯🥹💗 pinnee nan hurt akii poyindeel ' I'm really Sorry ' 🥺 onnum arnond ayikula ariyathe ahn pinne yyii nneyum ittech poverth Sathyam parayalo inkii ath there sahikulaa 🥺 pala alkareem nan koreeh cheat akkiind koreeh chettatharagal kattiind athinokke inkii ippam nalla regret um ind but athoke oro situation kondan nan ayit indayike situation ahn 🥺 inii nan agane oru problem indakula promise 💯🫂🥹 pinnee yyii nne korch aloyich onnum tension avanda nan insha allah allom ready akkum yyii paranapole insha allah 23 avumbaleek stable avan nokate insha allah nte maximum nan try akkum 💯🥹 pinnee nte chakkara inii orr karyavum aloyich tension avarth tto inth preshnam indelum yyii nnod dhyryathil paranolandii intha preshnam anelum nan koode nikum💯🥺 inii ethra bad situation anelum nan koode nikkum 🫂🥹💯 pinnee yyii parayal indelllo yyi athre nalla aalallan ante value ank mansilavayitan shaane 💯 yyii onn aloyich nok inkii inthora problems indayinu inthora kadtha theermanam nan edkan nokinu inthoke bad habits indayinu niskaram varee valaree koravayinu alloom yyi vannapol ready ayii varnd Masha allah 🥹💖 ank ante value mansilavayittan yyii valare good ahn 😻💯 pinne nan cheat akumnnlle pedi veende veenda 🥹 Karanam nan ath cheyyula inkii anne thanne marry akiya mathiyayinu insha allah Kittum enn hope inki ind 🥹 pinne yyumh inkii veendi ennum dua akkanam ttoo alla problemsum matti onn sucess avan veendii ankum inkiyum onnikan veendiyum 🥹 Inkii annee athrem ishtaado ank ath mansilavula ethra paranalum inkii Sathyam parayo nte circle inkii agane illath nte parents family pinne yyyiii fayiz abi evarokke ullu vere arum illa athan sheriikkii illa Sathyam 💯🙂 pinnee frnds illathond illa veshmam parayallatto inkii ithokee mathii koodthal veenda 🥹 Karanam inkii veendathoke kitttnd antethn inkii Love, Care allom kittnd 🥹💖🫂 I Love Youu😻🥹💝🫀💋
Pinne anne nte lifil 10 minutes polum nan nallonam kandittileel polum ann just onn kandapooo thanne nte manass athrem santhosham vannknn 🥹💯 Inkiii annee nallaa ishtaaan tto vaave 🥹 ank paranalum mansilavula Allah kk ariyam inkii inthora anne ishtan nn illath pinnee nte lifil yyii mathii ennan nan padchonod parayel insha allah anne inkii tharate ameen 🥹💖🫂 I Miss You So Much Dear 😭🫂💝 And I Love You So Much 🥹💖💋
                    </p>
                </motion.div>
            </div>
        </div>
    )
}