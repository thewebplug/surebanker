import Image from "next/image";

export default function TransactionPinSuccess({open}) {
    return (
        open && 
        <div className="transaction-pin-success">
            <Image 
            src="/assets/trans-succ-bg.png"
            objectFit="cover"
            layout="fill"
            style={{zIndex: "-1"}}
            />
        <div className="transaction-pin-success__title">
        Transaction pin was changed <span>Successfully</span>
</div>
        </div>
    )
}