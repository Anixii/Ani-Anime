const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function CardSkeleton({className}: {className?:string}) {
    return (
      <div
        className={`${shimmer} ${className} animate-pulse relative h-[190px] w-[100%] sm:h-[308px] sm:w-[208px] overflow-hidden rounded-xl bg-slate-500 p-2 shadow-sm`}
      > 
      </div>
    );
  } 

export function CardListSkeleton () { 
    return (  
        <div className=""> 
        <div className="flex overflow-x-auto gap-x-3 justify-between w-[full]"> 
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton className="hidden min-[680px]:block"/>
            <CardSkeleton className="hidden min-[980px]:block"/>
            <CardSkeleton className="hidden min-[1180px]:block"/>
            <CardSkeleton  className= " hidden min-[1680px]:block"/>
        </div>
        </div>
    )
}