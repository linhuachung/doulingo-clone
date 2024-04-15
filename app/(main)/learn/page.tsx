import React from 'react';
import StickyWrapper from "@/components/sticky-wrapper";
import FeedWrapper from "@/components/feed-wrapper";
import Header from "@/app/(main)/learn/header";
import UserProgress from "@/components/user-progress";
import {getCourses, getUserProgress} from "@/db/queries";
import {redirect} from "next/navigation";

const LearnPage = async () => {
    const userProgressData = await getUserProgress()

    const [userProgress] = await Promise.all([userProgressData])

    if (!userProgress || !userProgress.activeCourse) redirect("/courses")

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title}/>
                <div className="space-y-4">
                </div>
            </FeedWrapper>
        </div>
    )
};

export default LearnPage;
