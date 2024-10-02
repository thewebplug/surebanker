import Image from "next/image";

export default function TransactionPinFail() {
    return (
        <div className="transaction-pin-fail">
            <Image 
            src="/assets/trans-fail-bg.png"
            objectFit="cover"
            layout="fill"
            style={{zIndex: "-1"}}
            />
        <div className="transaction-pin-fail__title">
        Transaction pin change <span>Failed</span>
</div>
        </div>
    )
}