import React from 'react';
import StickyWrapper from "@/components/sticky-wrapper";
import FeedWrapper from "@/components/feed-wrapper";
import Header from "@/app/(main)/learn/header";
import UserProgress from "@/components/user-progress";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={{title: "Spanish", imagesSrc: "/es.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish"/>
                <div className="space-y-4">
                </div>
            </FeedWrapper>
        </div>
    )
};

export default LearnPage;
