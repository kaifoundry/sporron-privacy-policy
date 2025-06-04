import { useRef, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';


export function TermsAndConditions() {
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    const contentRef = useRef(null);

    const termsData = {
        title: 'Terms And Conditions',
        lastUpdated: '5/12/2025',
        clauses: [
            {
                title: 'Clause 1',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse senean leo pharetra in sit semper et. Amet quam placerat sem.`
            },
            {
                title: 'Clause 2',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse senean leo pharetra in sit semper et. Amet quam placerat sem.`
            },
            {
                title: 'Clause 3',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse senean leo pharetra in sit semper et. Amet quam placerat sem.`
            }
        ]
    };

    const handleScrollToBottom = () => {
        //  scroll to bottom
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
        setHasScrolledToBottom(true);
    };

    const handleScrollToTop = () => {
        //  scroll to top
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
        setHasScrolledToBottom(false);
    };

    const handleAccept = () => {
        console.alert('Terms and Conditions accepted');
    };

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollHeight - scrollTop - clientHeight < 20) {
            setHasScrolledToBottom(true);
        } else if (scrollTop < 20) {
            setHasScrolledToBottom(false);
        }
    };

    return (
        <div className="w-full h-screen  bg-white shadow-md rounded-md overflow-hidden relative">
            <div className="h-full flex flex-col">
                <div className="p-4 pt-10 flex-1 overflow-hidden">
                <div className="mediumfont uppercase tracking-wide">AGREEMENT</div>
                <h1 className="darkfont mb-1">{termsData.title}</h1>
                <p className="lightfont mb-4">Last updated on {termsData.lastUpdated}</p>

                <div
                        className="h-[70%] pb-10 overflow-y-auto pr-2"
                    onScroll={handleScroll}
                    ref={contentRef}
                >
                    {/* All content is always available for scrolling */}
                    <div className="mb-4">
                        <h2 className="title mb-2">{termsData.clauses[0].title}</h2>
                        <p className="contentfont mb-4">{termsData.clauses[0].content}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="title mb-2">{termsData.clauses[1].title}</h2>
                        <p className="contentfont mb-4">{termsData.clauses[1].content}</p>
                    </div>

                    <div className="text-sm text-gray-500 mb-2">senean leo pharetra in sit semper et. Amet quam placerat sem.</div>
                    <div className="mb-4">
                        <h2 className="title mb-2">3. {termsData.clauses[2].title}</h2>
                        <p className="contentfont mb-4">{termsData.clauses[2].content}</p>
                    </div>
                </div>
            </div>

                <div className=" border-gray-200 p-4 fixed bottom-0 left-0 right-0 z-10">
                {!hasScrolledToBottom ? (
                    <button
                        onClick={handleScrollToBottom}
                        className="w-full py-2 borderbutton text-[16px] font-medium rounded-[8px] flex items-center justify-center"
                    >
                        Scroll to Bottom
                        <ArrowDown className="ml-2" size={16} />
                    </button>
                ) : (
                        <div className="flex flex-col gap-2">
                       
                        <button
                            onClick={handleAccept}
                                className="flex-1 py-2 buttonbgcolor text-[16px] font-medium rounded-[8px] flex items-center justify-center"
                        >
                            Accept & Continue
                        </button>
                            <button
                                onClick={handleScrollToTop}
                                className="flex-1 py-2 borderbutton text-[16px] font-medium rounded-[8px] flex items-center justify-center"
                            >
                                Scroll to Top
                                <ArrowUp className="ml-2" size={16} />
                            </button>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}

