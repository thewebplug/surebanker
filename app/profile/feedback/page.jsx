"use client"
import Navigation from "@/app/components/navigation";
import ProfileHeader from "@/app/components/profile-header";

export default function Fund() {
    return (
        <div className="feedback">
        <ProfileHeader />
        <div className="feedback__nav">
          <svg
            className="pointer"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (window.location.href = "/profile")}
          >
            <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
            <path
              d="M16.7722 9.2278C17.0759 9.53155 17.0759 10.024 16.7722 10.3278L11.8777 15.2222L16.7722 20.1167C17.0759 20.4205 17.0759 20.9129 16.7722 21.2167C16.4685 21.5204 15.976 21.5204 15.6723 21.2167L10.2278 15.7722C9.92407 15.4685 9.92407 14.976 10.2278 14.6723L15.6723 9.2278C15.976 8.92407 16.4685 8.92407 16.7722 9.2278Z"
              fill="#212121"
            />
          </svg>
  
          <div>Feedback</div>
        </div>

        <div className="feedback__title">How has your experience been so far on JobsPro?</div>
       <div className="feedback__emojis">
        <div>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6629_3981)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52366 0.39455C14.6574 -1.24884 20.9614 2.3917 22.6048 8.52354C24.2482 14.6572 20.6076 20.9613 14.4758 22.6047C8.3421 24.2481 2.03807 20.6075 0.394674 14.4757C-1.24872 8.34198 2.38995 2.03794 8.52366 0.39455Z" fill="#FBD433"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.73592 7.08057C8.34611 7.33138 8.79345 8.14559 8.79345 9.10954C8.79345 10.2756 8.14209 11.219 7.33724 11.219C6.53239 11.219 5.88102 10.2738 5.88102 9.10954C5.88102 8.6285 5.99332 8.1849 6.1805 7.82926C5.78556 8.06885 5.39249 8.33838 4.99381 8.6285C4.69246 8.84749 4.26945 8.78011 4.05045 8.47689C3.83146 8.17554 3.89884 7.75252 4.20206 7.53353C4.81225 7.08992 5.42244 6.68188 6.08691 6.33374C6.76074 5.97998 7.47013 5.70109 8.25439 5.53076C8.61938 5.45215 8.97876 5.68424 9.05737 6.04923C9.13598 6.41422 8.90389 6.7736 8.5389 6.85221C8.25814 6.91398 7.99235 6.99072 7.73592 7.08057ZM18.8017 6.94393C19.103 7.16292 19.1723 7.58594 18.9533 7.88729C18.7343 8.18864 18.3113 8.25789 18.0099 8.0389C17.4334 7.61963 16.87 7.24154 16.2954 6.94019C15.7301 6.64445 15.1331 6.40861 14.4667 6.26449C14.1017 6.18587 13.8696 5.8265 13.9482 5.46151C14.0269 5.09652 14.3862 4.86442 14.7512 4.94303C15.5355 5.11336 16.243 5.39225 16.9187 5.74601C17.5813 6.09228 18.1915 6.50032 18.8017 6.94393ZM9.01058 17.7402C8.55013 17.7402 8.17765 17.3677 8.17765 16.9072C8.17765 16.4468 8.55013 16.0743 9.01058 16.0743H14.7943C15.2547 16.0743 15.6272 16.4468 15.6272 16.9072C15.6272 17.3677 15.2547 17.7402 14.7943 17.7402H9.01058ZM15.425 7.00008C16.2299 7.00008 16.8813 7.94531 16.8813 9.10954C16.8813 10.2756 16.2299 11.219 15.425 11.219C14.6202 11.219 13.9688 10.2738 13.9688 9.10954C13.967 7.94344 14.6202 7.00008 15.425 7.00008Z" fill="#141518"/>
</g>
<defs>
<clipPath id="clip0_6629_3981">
<rect width="23" height="23" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Poor</div>
        </div>

        <div>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6629_3963)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52366 0.39455C14.6574 -1.24884 20.9614 2.3917 22.6048 8.52354C24.2482 14.6572 20.6076 20.9613 14.4758 22.6047C8.3421 24.2481 2.03807 20.6075 0.394674 14.4757C-1.24872 8.34198 2.38995 2.03794 8.52366 0.39455Z" fill="#FBD433"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.56828 6.03906C9.37313 6.03906 10.0245 6.98429 10.0245 8.14852C10.0245 9.31274 9.37313 10.258 8.56828 10.258C7.76343 10.258 7.11206 9.31274 7.11206 8.14852C7.11206 6.98429 7.76343 6.03906 8.56828 6.03906ZM5.26278 17.7244C8.38672 13.6758 14.8105 13.7638 17.5751 17.7319L18.0262 17.2845C14.9303 12.0305 8.37549 11.8433 4.79297 17.2564L5.26278 17.7244ZM14.4306 6.03906C15.2354 6.03906 15.8868 6.98429 15.8868 8.14852C15.8868 9.31274 15.2354 10.258 14.4306 10.258C13.6257 10.258 12.9744 9.31274 12.9744 8.14852C12.9725 6.98429 13.6257 6.03906 14.4306 6.03906Z" fill="#141518"/>
</g>
<defs>
<clipPath id="clip0_6629_3963">
<rect width="23" height="23" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Sad</div>
        </div>

        <div>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6629_3976)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52394 0.395578C10.7202 -0.192855 13.0416 -0.116836 15.1946 0.614025C17.3476 1.34489 19.2355 2.69776 20.6197 4.50158C22.0039 6.30541 22.822 8.47916 22.9708 10.748C23.1196 13.0168 22.5922 15.2788 21.4555 17.2479C20.3187 19.217 18.6236 20.8048 16.5844 21.8106C14.5453 22.8163 12.2537 23.1948 9.99942 22.8982C7.74516 22.6016 5.62948 21.6431 3.91991 20.1441C2.21033 18.6451 0.983642 16.6729 0.394951 14.4767C0.00403498 13.0184 -0.0957895 11.4973 0.101177 10.0004C0.298144 8.50348 0.788045 7.06001 1.5429 5.75244C2.29776 4.44486 3.30279 3.29878 4.50061 2.37965C5.69842 1.46051 7.06555 0.786323 8.52394 0.395578Z" fill="#FBD433"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.56852 6.04102C9.37337 6.04102 10.0266 6.97689 10.0266 8.15047C10.0266 9.32406 9.37337 10.2599 8.56852 10.2599C7.76367 10.2599 7.1123 9.31657 7.1123 8.15047C7.1123 6.98438 7.76367 6.04102 8.56852 6.04102Z" fill="#141518"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4307 6.04102C15.2356 6.04102 15.887 6.97689 15.887 8.15047C15.887 9.32406 15.2356 10.2599 14.4307 10.2599C13.6259 10.2599 12.9727 9.32406 12.9727 8.15047C12.9727 6.97689 13.6259 6.04102 14.4307 6.04102Z" fill="#141518"/>
<path d="M5.39057 13.2557C5.85702 13.8625 6.41453 14.3935 7.04332 14.8298C8.4178 15.7765 10.054 16.2693 11.7227 16.2393C13.3519 16.2317 14.9352 15.6987 16.2373 14.7194C16.777 14.3027 17.2497 13.8059 17.6393 13.2463C17.647 13.2387 17.6574 13.2344 17.6683 13.2344C17.6791 13.2344 17.6896 13.2387 17.6973 13.2463L18.1559 13.6899C18.1628 13.6972 18.1667 13.707 18.1667 13.7171C18.1667 13.7272 18.1628 13.7369 18.1559 13.7442C17.5031 14.8784 16.5998 15.8483 15.5148 16.5799C14.403 17.3293 13.1005 17.7462 11.7601 17.7816C10.3982 17.8032 9.05742 17.4434 7.88935 16.7427C6.66295 15.9958 5.62279 14.9793 4.84776 13.7704C4.84199 13.7629 4.83887 13.7537 4.83887 13.7442C4.83887 13.7347 4.84199 13.7255 4.84776 13.718L5.31944 13.2501C5.32329 13.246 5.32793 13.2427 5.33308 13.2405C5.33823 13.2383 5.34378 13.2372 5.34939 13.2372C5.355 13.2372 5.36055 13.2383 5.3657 13.2405C5.37085 13.2427 5.37549 13.246 5.37934 13.2501L5.39057 13.2557Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_6629_3976">
<rect width="23" height="23" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Average</div>
        </div>

        <div>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6629_3971)">
<path d="M14.4758 22.6063C20.6092 20.9628 24.249 14.6585 22.6055 8.52513C20.9621 2.39177 14.6578 -1.24805 8.52439 0.395391C2.39102 2.03883 -1.24879 8.34317 0.394649 14.4765C2.03808 20.6099 8.34243 24.2497 14.4758 22.6063Z" fill="#FBD433"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.1869 4.64453C8.99163 4.64453 9.64394 5.88051 9.64394 7.40503C9.64394 8.92963 8.99163 10.1657 8.1869 10.1657C7.38222 10.1657 6.72999 8.92963 6.72999 7.40503C6.72999 5.88051 7.38222 4.64453 8.1869 4.64453ZM14.8125 4.64453C15.6172 4.64453 16.2696 5.88051 16.2696 7.40503C16.2696 8.92963 15.6172 10.1657 14.8125 10.1657C14.0078 10.1657 13.3555 8.92963 13.3555 7.40503C13.3555 5.88051 14.0078 4.64453 14.8125 4.64453ZM5.34375 12.501C8.46605 12.4041 14.8909 12.5633 17.6559 12.501C17.6559 19.9447 5.34375 20.6487 5.34375 12.501Z" fill="#40270E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.34375 12.4688H17.6559C17.6912 15.1164 5.38068 15.0838 5.34375 12.4688Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.22461 16.9704C9.30422 18.7693 13.1844 18.8398 15.5158 16.9704C14.2463 15.5266 12.8619 15.4829 11.3253 16.6179C9.74122 15.3513 8.68057 15.3154 7.22461 16.9704Z" fill="#FF0000"/>
</g>
<defs>
<clipPath id="clip0_6629_3971">
<rect width="23" height="23" fill="white"/>
</clipPath>
</defs>
</svg>

<div>Great</div>
        </div>

        <div>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6629_3967)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52366 0.39455C14.6574 -1.24884 20.9614 2.3917 22.6048 8.52354C24.2482 14.6572 20.6076 20.9613 14.4758 22.6047C8.3421 24.2481 2.03807 20.6075 0.394674 14.4757C-1.24872 8.34198 2.38995 2.03794 8.52366 0.39455Z" fill="#FBD433"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.6766 6.20648C9.82821 6.24204 9.95361 6.32065 10.0566 6.42547C10.6087 6.11663 11.1459 5.97625 11.67 5.98748C12.1286 5.99871 12.5647 6.12038 12.9802 6.34498C13.5792 5.37916 17.3601 5.50083 18.1631 6.20273C18.281 6.23081 18.3821 6.28134 18.4682 6.35247L20.3081 6.79795L18.9792 7.85548C18.9904 8.02768 18.9923 8.19427 18.9923 8.35149C18.9923 10.1203 17.5585 11.4286 15.7935 11.4286C14.0265 11.4286 12.5946 10.1203 12.5946 8.35149C12.5946 7.97902 12.6003 7.66269 12.6246 7.39316C12.3064 7.18727 11.9807 7.07309 11.6475 7.06748C11.2788 7.05812 10.882 7.17978 10.4552 7.44557C10.4983 7.75066 10.5076 8.0726 10.5076 8.35337C10.5076 10.1222 9.07389 11.4305 7.30884 11.4305C5.54004 11.4305 4.11003 10.1222 4.11003 8.35337C4.11003 8.15122 4.1119 7.96779 4.11564 7.79559L2.6875 6.67254L4.60042 6.24953C5.24243 5.38852 8.91667 5.55136 9.6766 6.20648ZM5.35474 14.3018C8.47868 17.8693 14.9044 17.9011 17.6671 14.2943L18.1182 14.7416C15.0223 19.9956 8.46745 20.1809 4.88493 14.7697L5.35474 14.3018Z" fill="#141518"/>
</g>
<defs>
<clipPath id="clip0_6629_3967">
<rect width="23" height="23" fill="white"/>
</clipPath>
</defs>
</svg>


<div>Excellent</div>
        </div>
        </div> 

        <textarea name="" id="" className="feedback__input"
        placeholder="Can you share a bit of your experience, we sincerely appreciate your feedback"
        ></textarea>

        <button className="feedback__button">Submit Feedback</button>

        <Navigation />
        </div>
    )
}