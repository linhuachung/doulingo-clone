import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Infinity} from "lucide-react";

type Props = {
    activeCourse: { imagesSrc: string, title: string }
    hearts: number
    points: number
    hasActiveSubscription: boolean
}
const UserProgress = ({activeCourse, hasActiveSubscription, points, hearts}: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCourse.imagesSrc} alt={activeCourse.title} className="rounded-md border"
                           width={32} height={32}/>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/points.svg" alt="Points" className="mr-2"
                           width={28} height={28}/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/heart.svg" alt="Hearts" className="mr-2"
                           width={28} height={28}/>
                    {hasActiveSubscription ? <Infinity className="h-4 w-4 stroke-[3]"/> : hearts}
                </Button>
            </Link>
        </div>
    )
};

export default UserProgress;