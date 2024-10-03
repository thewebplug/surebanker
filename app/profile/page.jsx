"use client";

import Image from "next/image";
import Navigation from "../components/navigation";
import ProfileHeader from "../components/profile-header";
import { getProfile } from "../apis/profile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const auth = useSelector((state) => state.auth);
  const [toggleOpen, setToggleOpen] = useState(false);
  const handleGetProfile = async () => {
    const response = await getProfile(auth?.token);
    console.log("getProfile", response);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  // const handleLogout = () => {
  //   document.cookie =
  //     "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  //   dispatch({
  //     type: "LOGOUT_SUCCESS",
  //   });
  //   localStorage.removeItem("token");
  //   window.location.href = "/alt/login";
  //   window.scrollTo(0, 0);
  // };

  const handleToggleClose = (e) => {
    if (e.target.classList.contains("profile__modal")) {
      setToggleOpen(false);
    }
  };

  return (
    <div className="profile">
      <ProfileHeader />
      <div className="profile__inner">
        <div className="profile__inner__title">Personal</div>

        <div className="profile__inner__group"
        onClick={() => window.location.href ="/profile/personal"}
        >
          <div>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0_6678_3950)"/>
<defs>
<pattern id="pattern0_6678_3950" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_6678_3950" transform="scale(0.00271739)"/>
</pattern>
<image id="image0_6678_3950" width="368" height="368" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAAFwCAYAAAChGSA/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dB7hV1bHHozFGE/O+l2Lay8tLTNQoNiyRiAV7Q0EUFEFAEUQB6R2RonREqtIUEJQmUqRIB1FAESwIKCBFqnQBsSXrrf/e9yZXvPeembXL7H3O/L5vvhd5sM46++w1e+1ZM//5wQ8UJWEYY0619jdrpa3dbu1+a02tdbM2zNoka4usLc+ztdY2WPvE2r48O2z+w+ECf/5J3t9dW+DfL8obc6i1rnmfdX/eZ5fOm8uvpK+LoiiKONYZ/tzaRdZus1Y7z2mOy3Omn5vk8qXxnf9sa4OstbBWzdp11k6zdpz0tVUURQkF69B+nefcGlt73vgO+pCA440LfDd8x+esNbJ2rbVTpX8HRVGUIrFO6nhrJaxVt9bT2ixrO2V8aCLZYfxr0sP4O3ZcK92tK4oSP9b5/MTa5dYaGD/0sUfKM6YYhIoQimlv/LeUn0j/roqiZCHWufzK2p3WeltbZu1rMbeXveCaLrX2lLUK1n4p/bsripJCjB8SwSEjDumwS/xGzK3lLv80fjwdB7zYoZ8gfV8oipJQjL/Lrmj87Irtcn5LKQKEqRCuQtbO76XvF0VRhDF+6ltLa28bf8enpAP8Vm8Z/w3pz9L3kaIoMWEX/P8a//BxsbV/CTohJTw+NP5h6F+l7y9FUULGLuw/GHXauUK+Mz9N+r5TFMURu4BPslbV2gKj4ZFcBL/5PGv3WjtJ+n5UFIWA8XU7kLmwW9J7KInigPEPp8+Xvj8VRTkG4++2kUEyW9RNKGkAqYnIZDlF+r5VlJzGLsIzrQ20dlDUJShpBLvyAdbOkL6PFSWnMH4ZO3KCvxV1AUo2gFg53txuk76vFSVrMX51JORXl4gudyWbWWF8sS2t+lSUMLCL6RTjpwBuEl3aSi6x0fhFQv8tff8rSiqxi+e/rLWztl9yJSs5DToYtbX2M+n1oCipwC6Wnxp/x6162kpSgA4LioP+S3p9KEoisYvjROOnd6mQlJJUUFuA0MrJ0utFURKBXQw/Mr7j3iq6NBWFzi7jO3Kt8FRyE3vzH2ftHqOHk0p62WitkvRaUpRYsTf9hdYWya49RQkNdGkqJb2uFCVS7E3+O+NrUmgBjpJtQOVypLXfSq8zRQkV4x9QIrNES96VbOew8TNWND6upB97I5e39onsmlKU2FlvtDxfSSv25v2t8V8pFSWXmWrtf6TXo6KQMH52CfQk9siuG0VJDKgmRqrscdLrU1GKxPhNglWTW1EKZ6G1M6XXqaJ8B3tTnmD8Q8rDsutDURLPF8Y/5PyR9LpVFDjvc4wvw6koCh10Bjpbev0qOYrxY92I6x2RXQeKklqOGv/NVWPjSnzYG+7Xxj9dVxQlOK9Z+530ulZyAHuj3WhUMVBRwuYzo3njSlQYv/N7H+OXDCuKEj5YW5Ca+Kn0eleyCHtDnWdtjey9rSg5wyprJaTXvZIF2BupstH0QEWJm0PW7pZe/0pKMX5ud1fhm1hRch2EVDRnXKFjb5hTrc0VvnEVRfGBdr7K1CqZsTdKaWvbhG9YRVG+C1oO/kPaPygJxviFOV8J36iKohTON9ZaSPsJJWHYm+KH1gYI35yKotAYYu0Eab+hJAB7I5xitKpSUdIGqjf/S9p/KILYG+D31t4RvhEVRXHjfWv/K+1HFAHsD3+utc3CN6CiKMFAwkFJaX+ixIj9wa832mBYUbIFFP3cKu1XlBgwfqbJN8I3nKIo4fK1tZrS/kWJEPsDN5e+yxRFiQyIYTWV9jNKBNgftoX03aUoSix0lfY3SkgYv3NOL+k7SlGUWOlvtNNPujG+8+4rfCMpiiIDhLCOl/ZDigPGr658Xvb+URRFmNFGqzbThf3BTrT2svCNoyhKMphg7URpv6QQMP7Oe4zwDaMoSrKYaHQnnmyMH/MeKnyjKIqSTEYajYknE+M772eEbxBFUZLNMKPZKcnD/ijdpe8MRVFSwdPS/kopgP1BOknfEYqipIr20n5L+YHnvBtJ3wmKoqQS7e4jifGFqZQc5+uvvzEHDh4yO3ftNZu37DCr1240769aZ5avWO3933z7aN1m7/8P27Zjtzl85Kj01BVZoJ2iAlgS2At/k1FVwazlm2++MZ9s2mbmL1xuxkyYZfoOHGMef3KQqde4u6l0X0tz7a0Pmwv+ca/549/KBrK/nFveXFi6qrnGjlfh3mbm/jodTKMWT5nuvUea0WNnmAWvv2PWb/jUfPmltkrNUqBieIO0P8sp7AU/x9oB4R9eCYE9ew+YhYtXmOdfmGLaPTHIVKv1uLnyhlrmtBLlAjvnsO2iy+8z5So1MQ2a9zIDBo83s+ct83bz//znv6QvoxKMz62dL+3XcgLjt0HbIvyDKw7s+myvmbvgLfP0gJfMg3U7mVJlaog75TDszAvuNLdXamwe6/SsmTBprlm3fos69fSx1dofpP1bVmMv8M+srRT+oRUiGz7Z6oUh6jfpbi65spq4o43Tzr64kqlco433sFr69gfmq6++lv45lMyssHaKtJ/LSoxfIj9F+AdWigEx6xfHzTT1m/bIOYedyc64oIK5u3prz6GvfO8j3aEnl+lGS+7Dx17UZ6V/WeW7wAkhu+OpfqO9Q0VpJ5kmwwHsww27eiEXZNAoiWKAtL/LKuwFrSf9iyo+R744ambOftM0adXblLysirgjzAY77ZzynjPftHm79M+r/Ic60n4vK7AXspQ1zeESBCl9c+a/5TmZ08+vIO7wstXOuvAus3jJu9I/t+KDQ4vLpf1fqrEX8DfGPx1WBEB4pH3nwaZkad1px+bEL6poPt26S/qnV3zwSvQ7aT+YSuyFO8HaQuEfMOfYvWe/GThkvLmu7CPizixX7dFmPaVvA+U/LLb2I2l/mDrsResj/cvlEu++/7Fp2LyX+et5d4g7sFw3hKk07TBR9JL2h6nCXrDK0r9YLgANkUmvLjTl7m4i7rTUvmtrPtoofXso3+Vuab+YCuyFOs/aEelfK5vZt/9zLx/54ivSm6uNNDykLkIXpeYjnbwD1qZt+piW7fqbzj2e97RMEApCimOXnsP/bW07DPT+Dt42ajzUwZS/p6m5+pY6Xpw/SeX7H67ZIH2bKN8FuZ4lpP1jorEX6CRrHwj/UFnL3n0HTbenRngHZdIOqjhDGAfiUnDMnboONS+8NN0TtYJTg+IgsmKi4vPPD5u1H2/ysm6Gj5pqnug+zHs4oFT+vEsrx/L9/3T2bebw4S8i+46KMx9aO1naTyYWoy3RIgGCUdiVIk1N2jkfa6Wvq2keerSz6ffsWDN/0XIvAyPJVYqf7d7npfo9N3KKafV4f8+xQ9EwzGty34PtpL+mUjR9pf1kIrEX5mbj6/MqIYGMEuwg/1YyGY67xCV3e3KtzwydYF5/c2XWVCDiLAGHwCNenGYat+xtLr/+Qedr9OcSt5sV762V/kpK0cBHlZX2l4nCXpBfW9sp/MNkDV8c/dL0GfiSuOPGjr9a7cc9hw0H9+23/5S+NLGxfcduM3HyPNO8bV9zxQ21SNfr/866zXsIKInnM2u/lfabicD43eRfFf5BsoJ//etf5mXrNC4VlGktc9ND5skez5lly1eZb779VvqSJIYNG7eaIcMnmXvvb1toqiY00BHnV1LDDKPd7T0H/qj0L5ENwGGWvath7A4bB27oZINdNjrXKJlBK7dFb6z0pHbRbeidlWsSHfdXiqSutP8UxV6As63pcXsAtm7bZeo06BK748bhHbI09uzRxkhKzoKmqudK+1ERjF8qv0L4B0gt2LFhBxdnSiBCM+hLuXrNJ9JfX1GSAuJeuacfbr90S+krn1bgQG+r2CgWp414LYpelix7X1/zFaVwmkr701ixX/h0o6ETNuiMjsrCsPOOCzM08EXl4o6de6S/tgfixigvR+wY2R04EMRhKdL2qtdu7x0O3npnQ3Nj+fpeGt/fr6puzv37PZ6hOxD+LN8g1HVnleZeoRD+fccuQ7yu98gAQaNifM6hQ1oMrJDBzfIXab8aC8bPOpkjfMFTx5K3PjBX3Vg7csd9R+VmZvK0hZFWOxYFsmjQ1GD6a294Xd+bteljKlZtKVbyj8rLm+941NSq96RXwfrKlPlm1eoN3oNUUY5hnsmFrBT7JWtJX+k0AUfatddwL9sjKkeF/GPsRpGrHSdoejxp6gLTqdswr1/kOZfcLeKouYZiG5T6N2rxlHeQi8IbVQ9ULDWk/Wuk2C/4W2v7pK9yWkBZOXbEUTpuVEa+90E8jhtphtA1qduom7mwdFVxRxymIayFsEzPPqO8UnsUUyk5x15rv5H2s5Fhv9zL0lc4LaDZbVTaJfmOGx13ogSl8thho0t9mpUPXR063ioGDZto1q3fEul1VhLFGGk/Gwn2i5WXvrJp4ODnh80jjbpG5liq1nzMrF67MbL5b9y83Qx+/hXPeSVJnlXacHiKFEwUXGk2T9Zzq7S/DRX7hX5sLdrtXhaA9ECo80XhQKCdHVWpNnQ/sNO8qfyj4o4yDYasGDjzt99Z7R3cKlnHems/lva7oWG/TGvpK5p0pkxfFIn41PmlKpthIyaHrksC3WyUgVeq1irSA9ZsNwhdIYVxm30IKllFduSGG7+z/EHpq5lUoNAHrW7EpcN0DAhfIE8ajjZMEDeHwp600mG2GR6C0AGfMeuNnFJtzGI+N9nQ0d5+ieHSVzKp7D/wuReTDtsZIJQRZmYJMirG2t12XNWfuW6lrr7faweH1ndKqhki7X8DYb/AhdZ0O1EIaNtF1YmmGnbFqFAMaweX3zsT/SelnVou2hkXVDAtHuvnHQwrqQQL8WJpP+yE8SsuFwlfwETy0brNXmw6zMVerdbjXt54GKBtGEr2S6SksCbbDeEVpH3GXWilhMJik8YKTTvpytJXLolgd4zy7LAWN9QIx00MR5kA0rTo7H7aOdFrrYRtEN2C7gkUE5GyhzAStFHyDdc8XwsFOemnn19BfM5cy8/f1471qeMuaX/Mwk74RGubpK9aEpm38O3QFnS5Sk087ZCgYMfd7olBhXaKSYLBMSP+joKgXn1HeTK6s+Yu9RohbPl0p3PVI/4dUiAhXvXm0vfM+FfmmN79XzRNWvX28tjh7FE2L/39C3PkqBXQBhqpAfrLJ0r7ZTJ2snWlr1hSad95cCgLGHnEaKYbBBQNQWclKRkl2PnfUqGBl+Uy8sVpnoOWPsiDxgl2vKgohaAVenyGHf5yNTxcIPi167O9otdIIfGQtF8mYSd6kjXdGhTBww2DVVkiQ2Hp2x8EmgMqAV8cN9OUvKyKqAOCI4TS33Mjp3jpiUEfSHGCN59Jry40bTs+48nThp0GyjGE0aDeqIJaiWabtZOl/XNG7CQbS1+pJNO09dPOCxW619AXCQKq/7DLlXA0yKpADBeFRag6zaaScrSWe3XG696OWEr3BSGfmXOWSF8KpWjqS/vnYrET/Km1ndJXKcmMGjODvTCxu+vx9MhADg8O5tFmPWPfKaIxBEIiiFnnikIfyuPxRoF4+g2314vdkT9Yt5NWdiaTHdZ+Iu2ni8Rom7SMoDKSk54HRUI0OAjCy5PnxRq3RSOEVo/390I92bTLdgWHjcinhx5NXL8B7puhI8KrCVBCI5kl9nZip1j7TPrqpAFkO1AW4ZU31PJyxl1BWiDyw+NwGJBPRXwfO+00xbLjBrncrdsPiK15xe2VGmu2SrLAq9HPpP3197CTelz4wqQKHNwVl29dq+4TzvFuvMKjcUJUeuIF7bJrHzD9B40zu/fsD/kKZTdHj37lvRnBwUb9G+HsAecO+jaUGFpL++vvYCf0M2u6gplgd434MDJLkBKG0APS1IIcRO3dd9Brjxa1U4DwEnLa1SkEZ+V7H3nnE1E3q0Zu+7bt+pKcAJD3+VNpv/1vjGaeJAK08kI39qgcQJJKug8f/sLrqfnW8g/NzNlveh3lIQAFCYAuPYd76X0t2/X/t+G/8ecwvDHgMBlZI7hmyIiRzjcHeIvB/M++uFJkvyHOX6ZOf136qypJyUixE/mh8SuNFCHQ+PiJ7sMiyzDBzrBNh4Fm85YdsX4vxNKRzYEzA2ThoJcmUiCjcnAIOSGnGw8pVKYiVx674yNfHI31e+MtqkefFyL7nvmFYJo3Lgp85gnS/ls1T4RBGfxdVVpEstAR1kFZeVgiWcWBUAx2wiNGv+rpsUDLJCmaLHjzuOrG2qZOgy7e7h259HhoRg3eCvBgRgw7iu8FjZg4flulSCpK+2848GXSVyFXgSNBe64odmjIKIk6ewFnAM+/MMXUrt85MeXpVIP8QJUH2pq+z4yN3KHv3LXXCwNFocsCqeA3lrwX2dyVYnlL2nmXkb4CuQocXxQ7VOzKlq9YHcmckZOMmDXi0GVuekjcCYft0BF6mTBprhefjwI0o76nRuvQ547uTdCRV0S4XNKBT5X+9rkGeltC5D/sRVyydBXz0vjXQs8qwXznL1puGjbvFenhXJIMIQ+kgUblzHFoi/TNsOfduGVvzeGPn1eknPeZRrvtxMqhQ0e89L0wFy3iu207DPSUCcPkgw/XewdlF5auKu5QJQ0Ho4jph/1Wg4NVxMexew5zvkg1DPteUIoFO6azJBz4QOlvnktA2+LGcvVCXaxlbn7ILFu+KrQ55vfOjKM4JY2GUnqEKpBlEhaQui17V8PQ56mHm7HSP27nDdEq7TQfE4h9hnlYiV0btK2//PKrUOaHpgidug6NrTw87YYQS9sQ0zIRpuo7cEyoZyIQIVu1Wjv/xMQBE6fIlf2wB6S/ca6A7vJhNhVG7BRZE2GAZrsIk6SxPVkSLL8wasV7a0P5PdBZCOmXYc0PD+Sw7hUlI9XjdOAqOhwDS5a974n1h7UgG7V4KpRDNaT/IfUPDkjaCWaLISUxDEeO4pzHOj0b2ryQXbPg9XcCz0vJyOtxOe9zpL9pLgCdkbAKOJD9ge4xQYG6YVT5yGq+3Xt/W7P24+DtZJGpgl6iYcwJlbivzVkaeE5KRs6Ow4H3kf6W2Q4kWcMSNkJp+IaNWwPNZ/+Bz72YbVIqI7PdcJ1xvYMqPOKBi2bQYcwJmwlUyiqR0itq541+l9pBNUIWLl4RWnd4aIccPuKu44HCG4hEJalKElWiUG+sXKON176sZ59RXlHTlOmLvM7y0E5BLBgHhJAZgBPE/843ZG2g8nDazMWe1gkO//BWgfRMZOUkKZ6PFMRnh77sHVK6goNq5HeHMR9ccyVS9lj7cZQOvKr0N8xm0MHmzAvuDLzQEOIY/PwrgeaCvOWw0xa5hhAAnMaTPZ4zk6ct9EILYWXOFAUKmT7ZtM1z8Hg4oD1ZFEUzHLuxfP3A8XFPfz5gzjgenjt27gnpSitFcHeUDnyB9LfLVrBAwziwxK5t7oK3nOeBHTuU+CQOKFH0g7cGNKNIWhcZOK5Xpsz39NshbBX3tfEKrjo+47Xkc+X1N1ey2vkVZvMXLg/xqiqFMCcq5/0H41cNKSHz8fotoRw4IVc8SO4usg3+cU18u004pXJ3N/EU/hD2SBPIfceDBtkjcZ4N4DcO8oDGW0yQ31i73kcOqtt/H4UD16YNEbDrs72hOE10P3ftRI72XtjdxdGxHp9R4d5mZuSL08yePQdCvpoyoPUd2qNB/yTqrjr51xCpgq7hJNxzEC1z+ey0PWhTSvjNHuygmkcUMsjJvvmO4IUXd1Ru5qxfgSpPZKpE7XQQR8aB4ZZPd4Z8FZMFHkqDn5torr6lTuTX9Prb6jo7VNx7laq1Yn1e6etqev1WlcgJNyfcDvhHo+GTUEFmQRgd43HI59oxBs0Tosy6wGEqKg3xyp+LvTMhndugea9IQyz4/XBA6eJY8eaF34f6WVBXVGIBP+Yfw3TgzaW/UbbRuv2AwIv3gYc7Or1G499AIS8qp4IwAuRj0bNS8bsmoddl0APE4uyRRl09MTEuaESBh0ym8XG/KrHSKEwHrkfPIQLd7aALFqXsLl1goF8SVXogMmC69hoeuAAlW0FBFMJIYWrbFDSE41y6zmP3PmzEZHPepd/P98efDR+lsv8CLAnLeZ9mNHwSGkgXDFqoU712eyfhfRSwRKEYiNf4Dp2HiB5KIhwA54VCHoQukDI3Y9YbXud5VLbiv2Hvvv+x9xCDM5UCuu7de48MJef/WENjDtQTuIBQHK4VioeeGTrB+98uu3olFOBz/xSGA28l/U2yBexMLy1TI9ACRUstOCsu4ybOCT1DAtkQqPLb7pj9wgU62oveWOlVXiILA2cIqJ7Ezt9l/ohN43AVh3n4Hv2eHWtmz1vmlaDHAXLLkVcetrYMvtfosTNi+Q5KpDQNw4G/Lf0tsgEcWlas2jLQwkT6HffAEq/HqCgMO0UQTRvCkkEtDJTxr3zvI28niPQ8lM+HvVstzvCmgt8LO2U8NKLciULdMei9UZj17v9iZHNWYiFYGMUOcKrRtmmhACcaZDFec+vD7Nd+OMFmIR9WwrFF0TsTII8d+eE1HuqQuP6Z2NXiAdpn4EuhqAUeCx60YybMCk1BMN/wppKLGUBZAkRwfhnEgVeT/gbZANqWBXlNLnlZFS9uywE7fuh/h+kMkHIWdrgErbv6PjM2lHz4OA3l9F16Dvdi6mGChzTEtcKca616T3o64UoqqRzEges7WEBQYBOk0hIHXdxQBdIEOfm9mQyZCFOnvx7aNUEYCEqA2NHGUf0ZtaGgBrnYYR6MomQ9TBVIqC3qgWQqGeHqvI+3xs9JUr4D0v1cFx20Qri6F9hphdm5Hl3Kw9p1Q/MFJftR5kNLGrJxHm3W08uECQMccqJQK6z5Va35mO7E0wd88PEuDryU9MzTDjI/giw4ZEVwQF445E/DWOyQHoXIVBjx0w8+XO8V9uRSJx+8XSCjJWjpOa4/DnLDyiCq+Ugnp/oBRZSLXBx4e+lZpxkIBgU5kELmBWfx48ASUqxhLHLkEqM5QlCQj13pvvCzK9JkEI1Ce7ygvLNyjdcpPow5Pdywq3e/KKmhrYsDXyY96zSDgyPXBYbcZhR7cEA+cRiLu1ylJoFDJpC0rVY7uM5LNhlCUe99EOzAE79LWC3S8Eak2SmpYTHXef/KaPqgM2jv5bqwUJTC1RB5esBLoSzqOg26OBUJ5bNn7wHT4rF+2q2+CMOBbf0m3QM9IBHDbtIqnBZpnboOdZ6HEitIJ/wFx4FXlJ5xWtm3/3MvBOG6qBA35zD+lTmhZHKgYMU1XoudHPQyoijTz0ZD5yVkrQQJY+B8JIzfHU0plFRQnuPAe0vPNq1AzMl1MWF3xmHxkncDS5XiYBEpfa4gP52rK63mG3Lfg+SR43cLejCMw2p0YlISTw+OA3fv2ZTjlHLUOrn8+gdZ/Q6h1xFU1Q7O3zW/G7vugUPGBxbmCmr4fFSpIkUOsqgduwzxFP8wN+iB5BuaLGDX+kT3YV51KqR40cUojD6kQR0oCplcd+OvzVkaWNMd1wCNPZRE8ybVeZ9sLdrW31kKCjlcFhB2UcgyoIKCjJvKB6tcPOOCCs69FZGfjEO5uJ0d+kHicBgOGpkd6O4TRjYFVBShVAgnD1GrOLrpHGvI1nGNjeNNLOiDCMVm2dLiLkuBTz6Z4sDLSM80rWABuCwe7Bo51G/aI9BixY4NAk0uwHGGWSGY6SEDh404bdzNIdCEYfK0habV4/3N36+qHsv3RcWra9NgSMgGladFg2bNTEk0l1MceBvpWaYVHAJyD/KuuKEWq8QZbdCCLFKETVBgwgULG+p2UWeYIAsH3WWg4+3aKi5s8LuueHet6dzjea8vZJTfHweTED5zOVBeuHhF4JAWMpqUxNKS4sD1WDoAnBQvLFZOwQwa2AaJdyJU4xLzPnzkaKjaKoVdh3vvb+s1YAiSxhgHeJAh3IKHTJQd6FHIhcbDXPBwDnKwjXsEjT+URDI1k/M+ztpe6VmmmU2bt5OdbPvOg8njYpd+7a0PB3IKI16cxv4+O3ftjUwpECESFCBFIc8aB8h7x1tJVCEliGRBrZELHtJB3pRQ8YlKYiVx7DPF6aLY/2cJ6RlmA9NmLs64C0JbNEi+UkEsNogzgPQpFzhW16ya4gyxXmReoMNONoBQD3pKBu22VJgh/o6GD1wGDZsY6HPR+Unj4YnkrOIceA3p2WULy1esNmXvavi9hYFsAYgTcZw3YptBijbqNe7OjqlCUS/s5rt4qEHrGjvXbAR9SuHIwy5ogqYO7icuqIoN8rnazDiR3FecA+8lPbtsA7vYsRNmebnIyPzgynlid4cccddFiHRDrg40MhrC7IiDhw8eIkj7ywXwZtHuiUGhqi/+reRd7MwhqA4is8T1M5HVwm0kokRO9+Ic+Gzp2SnfBS2xXBcgOvlwG/RCQRDOIizHgzhulL0zkwzEq4Lm6xc0nBlwDxjRUCRIXjvy/YNK4iqhMqM4B54bW6SU8PY7q50Po1Dhx13scDhh7byx+3yyx3ORNhBAQRHyphG26NB5iHno0c5es2UcwiHsUNCQXodCIMi7IqMG1Zi9+o4yEyfP86oQo9LIRqjs2aEvB66WzDekWXLDKYihB8kRdzn8ViJjW1HO+1TpmSn/ARWGQbI/uPm86JYTVjYFctvx8AkT7ALRGOL5F6Z4mjFhd6lHSmC5u5t4WjbQBgm7/RgeEkGziPINHY24XX+CNBfBQ4P7JqdEyqmFOfDrpWel/Ad0Z3ddcHdVacEqMUeqYJC+nQWtaeunQyvAwe4VOddtOwyMrRoy37BjRTu8V6bMZ2uzFwUeCkGzifINB8ybmPHpIDK0kBpWEsPVhTnwJtKzUnygqeK6G0a4YBtDUwPFImHkeSNkAgGpMMDBGcIviOHH6bSLMpwJIOQSVix/0qsLvXh20Hmh8ceBg4fIn4sH63VlH3H+vCXL3g/l+yuBaVCYA+cnCiuRgB2n6yLDjpEKwhKIGwd1JEiNnDM/uIDl/IXLvayJJHeqR0ccVIwGzZFGaSlwmscAACAASURBVH4YLdIqVm3ppS9SWb3mE+dKTTh/TvqrEhlDC3PgKgqcAD7ZtM07gHRZYDUe6sD6rD4Dg3fyKXPTQ2bDRnehKTxEoIqIw0dp58wxZHag81KQDA2oDyJLJ+hckFvPAVorrp81Ug80k8BbhTlw+ruYEhnIl3ZZWMge4ciRQlUwqDAVQi/oQOTKyvc+Sp3jPtbQQ3TZ8lXO1wDhMowRdB6cTk7YsUML3eVzUEUb5DdXQuGAZqAkEIhVuTpVzs5o95795sLSVQM5DOQ3uy5kOK3Hnwy30EXa0OndtcIUsen7HmwX6PORpojwCBVksbi+6SFTRxHn5wUd+CXSs1GMp0DnsqCwE6ZmnSB2C+W/IM4iyM4bYQfs4qQdbhSGQ1ccULqAXXG12o8H+nyEszgKhpDHdfkcpBVmi45NirmwoAOvJD2bXAc7IpfDO/wbVE9SQVFJECeBQhhO5kM+SMVDrFbaycZh2I0fZLTHywc78TurNA/02UjjpAJnf/EV1Zw+B85fEaVCQQfeXHo2uQ70pV0W0qPNepI/A11tglQEQpPFZeeFh1NYeeZpsStvqGVWrd7Avlboi4qHZJDP5rTKcy3wQWqltmATpUlBBz5Qeja5DESeXOLBcMbUg0uETlDg4+oUkCrootsNbeqgrb7Savh9OGmd+aCdW5BKU0gGUN+ScF+4HiQjV18Ro19BBz5Deja5DA70XBYQpyHEiACVnXi4zF+0nPWdkF7X4+mRsed0oyQepfzIj0asP9/w3yh8Qfw2zvng+z/VbzQ73RCl90EaFTdt04f8WchJd/mdvF14lkoDp4CpBR04vSW6EirYKbk4FSweZJNQQNgjyMEhxKI4YFcXVIuaYiivR4n3kOGTvHMAdJGhOEqUtCNj4+XJ8zwRLGTURN3rs3X7AeziH4RCXOcFhwwZAiquBV1ozKGIsCrfeaONWjhiDwob10NFTipXEP2NRi2eYn0fVOrVb9ojEicIpwTBKTTEQMFTmCCrBvFgKBVG1esSOf5c1cMgRTcQz6J+nmsKKx6iUSk5KsWCU/Lj4MB/JT2TXAW7RaR+cRcNYsrUND4cpLnmW+PgkSPkhFRG7IjDdnwQbkK8Na7mAjicg65LFB3ocVjNERrD361UrZXz5z03cgr5s5A94/IZSA1VRPgFHPjfpGeRqyx56wOnBYMmD1Sq1nzM6TOwG+OKFyFMEKazQ4/JEaNfNV9+KdOpHm8T0Au/JiQZ2HxDqh8nJo7QUMnSbsJeEDejZg5BN9xlF35H5Waul1gJxulw4JdLzyJXadi8F3uxYDdNlRFFiberk+nYZQjru0B/PCwHh56SiLtH2QyCA3bBo8bMCFy9WtA6dRvGmgMaV7h+FsTRqLims6IZiBI7/4ADLyc9i1wEhR4ukqI4bKLi+uqNHefRo/Rd76SpC0JxaohxI+ZOPZyNG+Ro43A2rMyaF8fNZH0+Glm4fA7UB6n9SOGIXT4DWuNK7JSFA68pPYtcBIvXZaFQqy4XL3nX2YlyWnbh8CuMHpoIEYQhSRsHaFUXRoMJOFZO2zuEQlxDKXjwUEFIhDs+MqnCauShkKmhVZhCuOiRII+ZGjutVstNV4OTdYK3CFQcBnVkuBZJ3XUXBZxp9drtgz+4LqvidUSi4vq2w9mFT5620OkzcF6gxEoTOPBu0rPINbD4XZTgBj83kTQ+KiZdXvNROIIDMyqu0rcFDQeyaW0SgNh4247PBL4Gle5rSc5MwQPctaK2GbG4B78HDpC54+PAXImVznDgvNMUJTAvvDSdvTiQm0zVnmjc0q33IacoY/prbwRyWnjAoEFxWCAXGfFblK6j8rFNh4HeAwapcTDEaNGFHoeRaLgc5uv+gMHjA8fFMWcqSA11yRbBLnzHzj2kz+g7cAx7fMyJo0mvBGYwHPgk6VnkGpVrtGEvDurhJXb3fz3vDvb4eJWnSpHiM4JkZCCTZuyEWUEuoQdy4fEwxPXk6q1gDhCNQqFMGBkUCB8EKQDCGxmn0zxSEaN8UCCk5fKWiCIrJTZehgN3EzBWnEDpvMvCmDZzMWl8lJW7LGxqeAY0cEh/zDfsVCdMmut6+bwQAlLqaj7SKdSKSXSoQdHL4SPuO/NZc5c6N0mAoaSfWtW4bftnTt8fh6DU9Ey06HO5jkpszIcDT8fRf5YAR8xdFNhdUl/5byxXjz0+dFKo47sKH+VbkM71CxevCCy1mtHB2TcRhESgl+ICQjhBdFX6DxpH/ixXiQTqYSMqLF3GD9IjVWGxBA78XelZ5BLN2/ZlL4i6jWjnzCveW+u04BBGoIDdL7RIXJ1TG0ZBSUEgPBWknNzFLrv2AZaudkHwAHD9XKTjUbNSsAt3CZdBPpYCKmBRVMUdn/M2pwRiBRw4PelXCYyLzjM1fNLuCb4sLTSrqSl8aBfm6pjK39PUaxvGAZkZqPDE4VuczrugIVzkElYJEmZChS4VV9VHarMJlw0HpHuVWFgFB85vG6I4sW79FvZiQJyT4kAgVQohf+741LxvjH+toyYIwhLc7AToTLsc9kZhV99Sx9MJ4YAQjItQGQwhqg8+XE/6HMzLJaRFlUpY+jZfrwcHxNq5PhbWwYF/Kj2LXAHCTNzFgNABBVfdEyxQCkHSBqlvEPlAKjYKJcAghlACrjEHr/O749vDAw93JH+Oy4MOWUSU/Hs8uF0yjoIcVCtkNsOB75KeRa7gomVBPfRz6epz1Y21yZWdZe9yOzx8sG4n1jVCvBs7dmmHXZhBu4Zb7o+0PdfPe/d9Wnrja3OWOo2/4PV3SOOjAIg7NkezR3FmJxy49kSKCZfGvh+uoUW4rnAoaacW7ri8RsNQ2Yn+jlSw877o8vvEHXVxhpAWp9MN0gJvq9jI6bOoDz+cFeDQlTt+A2Ks3eUBUcK+sXB0zxUn9sGB06o3lECgRJ27CNDIgLJDhrysi4Ogpnuh873L+P2epVd24iA1LZ3r4ZzQs5IKBL9cmmogHZEqHYwqU+74yHihqE4inu+inEl9g1CcOQIHnk4hipThkv+NYhUKLg2LUTRCAYdRyFThjo9sG6okLbJTXBTwJA1vPBDzouLa7IJ62IhuRS6HmdSQEGLy3LHRLlCJlG/VgcdE5x7PsxcA8okp1Kr7BHvsPgNfIo09dIRbZScObKmgXZq0Q3YxODXqGQKyaly6zGO3T01jRKomd3wUA1FwkT+GWqMSKd9qCCUmqtXmy7tSMkTgQBBq4Y5N1f9wcQrIWqDuvtFWLqyO8HCQyKGGs8H323/gc0+6AA4QKZwowUczaJd4cVEGcSwq3Z4a4fQZaLZMYaTDmxhSTykPoY0OYTr8HmlVmkwJR/QQMya4BTxIP6OUcyOOzV1Y55eq7KWHZQJxexfnCiU7CgidhNFvErFzODlq+TscFhQJ76nROvBnI72QKsGLcJTLLpyaSorxXWLt1KKeUg4Ss6gOViJjn6YRxgBacXHjk9eVfYQ0NvJtuYuKWprvEluHmBO1FHzQsImBnCcecjgoDdI7E/ntLtWxBQ19JKlAToA7Pu4dajOGCvfyzxJQ7UrBpYerqhNGyk4t5IkB7Pa4Nz60rCm4HI7BMVNwCfsgHk8B0rUuoZ98g9N9Z+Ua0mdlAqGWKg/wOyQVNIh8UUD2isv41IweHBxyx6aWvo+ZMIs9tuaDR8pmLaWPAZcDIGoYwkVcipJbjtily+v+jFlvkOaNAiVXZ3n59Q+G3jgA4Zw6Dbo4zwlt4ai4ZNygkIqCS6waglgQrsrE5i072GOjolaJjHUqZhUDODjj3vgzZ7+ZcVzEcksw1eLQgJhysOSibEiVvXVt2QVDHHbrtmiifii6celVmm9Llr1P+hyXsBfCKFAfpIAKW+74VEkFbhwc88YbjhIJq1RONgYQc+YuqPUbMke2ttldKHfcO6vQeli77JBr1XuSNDYeTi4OEvH1sMImRYHzCuzwXeZHzdvHbhcHydzxqS3oXHTCqWml+I25Yy96g165qrBYoQ0dYgD6y9ybnpJRMX/Rcva41Lxfl9xyakqdixOAcSo7g4C3D5dsDvybbcTQjouTve/BdqSxXRoxUENALr0yqfUMCpsl2lItBrhqbuf+/R7SuC5ZImgbRsFFW4Xy1oAHE7d/JexKOx9qu7EwcBEHg1GbY8xfuJw9Nq4bJeMGsgTcrCeU1VO0S1zmjabSSiR4LdVekZ5FNoNFwc2lpvYVdImtL16SOWKGODZ3zui1SCkIQTGNi2OcNHUB6ZqExaFDR5yyZC6+ohrpjAGO2OWQmBpnRxoqd2wUO2UCDwfuuHj4KpEwAQ58qPQsshmo8XFveKTvUajftAd7bEo+8cr3PmKPiwa4FNp3HuzkACiFR2GDHGaXhw3lIQmQYscdu8fTI0lju3TqoT4k/35Vdda4CC0FydVXimQQHLi+30QIlOi4CwltrCjgQJIzLl6rKQvp5cnz2HPG2wAFiGhxx4amtgR4E3HpCdm24zOk8V2uc6X7aDnbLqmrT3QfRhrbRdjqY8LuXmHzJBx4M+lZZDNvLn0vMofFlV+F1jYFHBZy54xu7JlADNulQ82GT+S6nHfoPIQ9X+xQKeEkl9J3ahooyuO584a0AAWntNg5S0hjKywaw4E/ID2LbAYxS+7NPnbCLNLYXI1mNBag4FLdSdF+XvvxJva4ZW5+iDTnooAjhaAVVVzrWKA14yLTijAUhRvL12ePTSrEsg9LrgzweZdWJs157Muz2XPWkvpIqA4Hfrv0LLIZ6IJEsfixC+OOS+2zeH+dDuyxKfonLproiPO7gIrEJq16/zsDCE4YTZnhSChVhwUpV4lf7UrVF3FJJ3zhpemRzZvSQclFGqJpmz6kOSssboUDLy09i2yHI8mKsAjlwA67yqicIXfhIyxCmbOLtviQ4ZNIcy4IKh2L233CkVOrGl3nDW0VCuNfmcMeG29IFJo69LKkVGRC25w7LrWATGFRCg78TOlZZDuIg1Nfw6mZAHBA3EVELeK5/ra6rHGpsXWXphbUxrv5oLiJEleGjC2l7B+4XGuqFjbi+9yxoThIwUXtcQwxfIdahSjuEYXFX+HAfyU9i1xg8POvZHTinbrRsgDAR+s2sxcnNcuAezhKzfNt2Y4fLvjgw/Xka4Kce46+OLV8HFzroFv+/qp1Gcd1aciBhwPlkHTewrfZc+7Sk5ZNxBVRw70PwTAlVH4BB36ctSPSM8kF5i54y1x9S53v3dzoEMMtVHHJ1aZmt3AdCrW/poueNFUHG3APjHHdqeDhyp07teoVrce4Y1MEvT7duos9LlUO2KUGISoRshzl8A/ysf8RrUKQ8m8QK0aKFzrITJw8z3PElBLmY0HWB3cBUQ/WuK/H0Hqh4CLqhVg/lb7P8NMfqd10XpuzlD029eAOb0bcsRGWywTuNUjFcsalVgG79DGNWogsx1hV0IHTjrWVxIDQAncBRbUDv/VOmlb1o816sudMyYrIp1ffUezxqY0Y9uzhH9whzEDBpegGh58UuNKyVB0el4NdZCEpoTG1oAMfKD0bhcfqNZ+wFxC1DBsHTpxxqSGUpq2fZs8ZedhUBj/HP7R7dcbr5PHRnIAzNjVWjcbO3HlT36Zc9M0ph7u4btxxqSElhUTfgg5cc3xShktRDLXcndtsAXF9Ci5VjZxDzKnT+U4Fh8tUXPLjKemKLno51PAMZBm4Y3+yaVvGcZev4OeCUw9IFRKNCzrwitKzUXhAupW7gDp2GUIam5txUfKyKqRxXUr0qcJQAOEQ7vh4qFCJMg3y7IsrscaNUr+bonjockCKQ2wlNCoUdOCXSM9G4bHdoRtPoxZPkcZGk1vOuMi7phTyvDT+NfacOdk5O3buYY+PPphUXIpuEN+mgJ6XnHER26bgcs0pujYQReNKDCDbRgmNkgUduOaCpwyUg3MXJnUB1a7PlzmFMFMmZs9bxh6XE+LAQwRt1zjjU9X9QJSpm9xrjuwSSnx91lx+9sywEZNJc+bqmVMLkBQS//2Dgtg/0M6jKYPb2Yaa7udScEORC3VxgAhbcEA4hzM+qk6poMkDd/7NiLHqNh0GssempEC6NKemPnS4DY7RZEIJhQM/OBb7h8ulZ6XwKHX1/awFhGa9FJCtwl30lLxkl5L0xi17s65JYYVSxRk66HBA6zHO+NQ+lsgq4V6b1Ws3ZhwXhVDccds9MYg0Z+SMc8aFzK4SCksLc+DPSc9K4XHzHbzmCDgoowABKe6in/Rq5taqLnHTarUeZ12TOyo3Y43/l3PLs8a/ktkrlLrrRENo7jWnCE+5vDUgX58Ct6EIHn5KKAwuzIHTxKKVxOCS4xtVRx4UdlDgdrjBQ4pDzUc6sed++AhN1ApwnRZ6hVJwqfREfDsTOBdgPzSJLf1c0iopAl9KRuoX5sCvlZ6VwqN+k+7sBUTR7XbpPE7NMUeDBs64HL0S0MBBb4VT7YkO65yxIWtL4a3lH7LnDdlcCtywD95iKLhU1lIOu5WMlCnMgWsmSsp4/MlB7AWECs5MuOisUPt4crXGqaXd+bgUriCnmQriw9zxKSp86LLDHZeaLcKtrL2lQgPSuI91epY9Z6r2jFIsv/yeA89z4jukZ6bQcSnSoBTGuBx8YWdKoWrNx1jjIsecki6Xj4uDXcdouNvtqRHs8ffuO5hx3E2bt7PHxe9PgauHAkleCuhuxBkXjT+0O31gthbqvPMc+GvSs1PooLUWd9FPmb4o47iICXPHpXageaQRLwQBozZeAC7VkpxyfWiIc8ffvCXzvsilnL5nn1GkOXMPu6lhK25aKArElMBML86BuzUgVESY/tob7EU/YvSrpLG5DXGpOeYtHuvHnjMqLKn07v8ie3z0eKSCwiLu+JQmxHhIccclN19ghq043XM4WT+L3lhJHlcpkq7FOXBeUqwiCtLIuIseDo4CV9CK2j3eRfuaE+JwCStRctjzGfniNPb4lCbVCBNxx6XquKACkjNuiUvuJl8P/DboZp9pTGofTyUjVYpz4CWkZ6fQweLhLnocPFG4sVw91riXXEl79rvskDkhjqgdOBpxcMdHNSQFbrpf2w40FWiutg1K5DmgoKio7CLEvdH8gaKVo5A4qzgHjvZqekycEnCiz3UmVEEr7mv3+aUqk8btP2gc3wESmy6AqB04xLWimv+fzuY5cGrmzz01WkfqwME333zjdZiq17i7KX9PU1OpWiuvDR1FmlYhs9vacUU68DwnPk16lgoNZDdwnQkOESlwd23UKk+XTunIkaYStQN3KXKKyoHjPIECN/NHKyYTy+RinXeeA28tPUuFBvpFcp3Jg3U7kcbmLnpqwQq6skTpYF36YkYdQkHzAwpcJUVqXJlbsfu3kurAE0pzigO/SnqWCg2XdD+quNIDD3dkjYv4LQUXzQ9qUwTgEmOnNDDIZ8yEWezxqVkuiBdzxm3b8RnSuAhncMaFyqWSSEpTHPjJ1r6SnqmSGRdN8Mo12pDGxk6dOzbloMrFAc6Z/xb5miC1jjs+J8Y+eiz/AYTK1ky4aJa07zyYNGduFgo1HKbEypfWTsrowPOc+DLp2SqZgTAQ15lQC264O3DEbym4OMB5C98mX5Oo5AXyGeGQRvjRus0Zx/3i6JfscXFISOG2io1Y41Jb5CmxspjkvPMcOC1VQREnKnlWrtIcVZbVJY964eIV5OvhUigUded7SiWmy3kGtZDnpvK8SkzUACiJoxvHgWsQLAW4vHZT26rh73HGPeOCZBxiuqgRbtuxmzx+jz4vsMffvWd/xnGhEskdF2X9FLhNqq+4oRb5eiixcTvHgf/Cmgr3JpzDh79gL/pa9Z4kjR1V7rBLswhOGiG+H3f8PXsPkMd3EctCU4VMYJfOHRfXkgK3c9O1RDErJTbgi39BduB5TjyzWrwiikshD7VFGbRNOONS9TOeHfoye86cQ8a7q/MePDCOWBauH3d8ShMDVDNyx6V2vIckL2fcsnc1JF8PJRZeZznvPAdOe9dWxNjwyVb2oqf2O7yG+dpd5iaaFgoU9Lhzfn/VOvI14UoAoLs7h1p1n2CNT82pRpiIe10mT8vcxg5w0xPxEFQSRRsXB36p9KyV4lnyFl/MCg2LKXA7jlN3bS5ZItDKpsKdN7epcaX7eBWqVGnWGbP4ypKz52VOFoP+NndcarGXEhsXujjw463RW5UosQNtb+7ixCEiBRxKcsal5pe7hCAoDRHy4bYPozYdzgd/nzM+UvgouOTHL1u+KuO4e/YcYI/bsHkv1jVRIgUpTMXrnxTjxEdLz14pGhdt6mkzF2cc16WTeZ0GXUhzdjlkhFASBfw9blYOilw4cOPJ1AbBLmcDFJndNR/xY+vUCk8lFoY7Oe88B05XdldiB1oY3MVJ0eXY6NDeixpb5x4ycsq6kQ7InTe62FNB5Sv3AUHdzbpUkFLeTF5/cyV7XGqYTYmFe4I48FOt/VP6GyiF45JxsZ2Q84xXc+64kImlcPUtdVjjUnXGAbfFF6xp66fJ47v0Cu3UdShpbMj8csZFr1CKdIGL/O3wUVPJ10SJFKQvFd7AmOHE6UIUSqxcWLoqa2EiPkxpEDz+Fb7iHv4NBehscMZFFSGVmbPf5O82+7xAHh+iVNzx0fiXAlcxEL89BZe8e0qYTYmFNwM57zwH3kL6WyjfZ+u2XeyFeeudtEyRXn35qX6Ufocu6oko6aeCfp/c8VHaT+XVGa+zx5/0Ki3Vj1stST18dWnyzCmcUiKlcRgO/M/WtB9SwnBpaNyAGI99tFlP9tgUvQ+X2HrLdv3J1wSxW+74s+bS69VcDo2pUrLnXHI3a1yqKFmTVvysH+2ikwjgc/8vsAPPc+IaRkkYLrrXQ0fQSq+54kcQsvr228xHJS4Hak8PoOl9ABdnRZF6zadNh4Hs8SlnDi5KhE3b9CHNGeJl3LHxpqSI80YozjvPgTeV/jbKd3EpiKG8GiMVD9WJnHFxMEnBRYkQ+dFU7qrSgj0+5AioYNfLGRsVkJQHm0tFLSpaKdxSoQFrXO3GkxgahOnA/9doGCVRcJsDo10XdnqZWPvxJrYzoabidewyhD02du1U/n5V9UgcbD6XX/8ga3xqFeb8hcvZ14Wqg8K9JqpEmAhwU/5PaA48z4m/Kf2tlP/ATZmjxkwnTJob2W6QqzEO27b9M9LYyNHmNgW+6sbapLEB3ky4PSvxRkABaXvc6wKnH8WcuYVNSiQsDNV55zlwlShLGJzO8dSmCDg05DoT6HhQgMPkjIsiHkquM0BVInfe1OYWAAd73PGbEePULm8meFPKhMuh8UOPdiZfEyUy6kbhwH9ntKgnUUDk6fxSlTMuSk5pNFeFEIYCl0xAu5y7Q4ayIBX0zeTOm3Nd5i7gj4/yeAoIQXHGRTUoRQIXD23unDt0HkK+JkokwMf+PnQHnufE50l/O+W7rN/waZFZI4jxIqebuotFYwNuqfh5l1YmFQfhAJXrTB5u2JV8HVxanVEbIoCBQ8azx6eoBYLrb6vLGhdxbQouh8ZahSnOrEicd54Dv1f62ynfBwdxr81Zapq37Wvue7CdJxjV79mxXrEPh4mT57EXPPUA8/kX+K3UqC3DAErio3KwwCU3npJPjWYP3KyfStVakeaMpsfcOc9flDm2rkRKpSgd+I+t0RsIKqmiftMe7AU/aNhE0tguDhZhESrczuuwjwlqfvncWL4+a2zkxlM68bikEKJxMwXoenPH3sjQXldCZ4+1H0fmwPOcOF39R0kN2MVf8I972Qse2TAUrryhFntsNPqlgBAR8pc5Y2PXS5apddglX0PsKzlzzhL2daHqq3BDMxDI+vpr2jVRIqFnpM47z4GfJf0tlfBZ8Po7bEeC8m/KLtOldydVrAlscsi2wI6ayscOGS5UfXSEurhjQ7QrEziX4D7UNAdcnLMjd+B5TlxzwrMMlxjvI41oh4wunYOq16a3ZEX8nzs+VRcGoPckd/y+A8eQxo4qtu7y0Kxa8zHyNVFCZ1EszjvPgd8v/W2V8ID2BXe3Bhs3kSYh29ZBQwQ7UyoujZKpYQjgkqdNjd9zY+unn1+BVD3q0iQZv5MiRrU4HfjJ1vZLf2MlHFyqL5HT/dnufaTxr3CIf1M6B+XjIthEqWTM547Kzdjj79i5J+O4qB7ldoy/+Q6aPvqwEZPZc4baoiLCAWs/ic2B5znxAdLfWgkHbjMBGKpAKSBPnTs2KjA5h2klL6vC/gyKSiDAQSe3wTOKqyi4dBCihn5QBRrlQ00JlX6xOu88B36G0crM1IOdIrIPuIudWvDhoqFN7XAPXNqcXXQ5vdXrBx+uZ49P1Z0ZNWYGe+wBg8eTxr69UuPIHmpKqMCHnh67A89z4vRSNiWRdO3Fb6YLh08Nn8AZc8fnxL+nTud3yUF+NBUXJ/tkj+dIY7vozlB2yS5plef+/R7yNVFC5WUR553nwK+Q/vaKO9An4XaCgSHkQmHPngNsNTzYh2s2kL/DE9351YbUDBHgUoBEFfcqe1dD9ti4pplwEd6ihsSU0LlMzIHnOfEl0ldAccMlvAGj9nkc4aDFgS70FG2VfFxCBZT+nfm4HMBS3k6OHv3Kq9bkjFvqalryl0u7vcc6PUu+JkpoLBN13nkOvJL0VVD44HAODoG70LFjh/OhwJG7zTdOD0ykP3J3+BDrOnDwEGl8xIS58y99XU3S2C7iXtC4ofBUv9HssREqUmKngrT/hgP/obX10ldC4fHKlPnsRc7ZqcH5ceVjYZwmwxBe4o5f5qaHyONPmrqAPT70ZChAapY7NjX0U602P63ynZVryNdFCQXECX8o7b897EQaSF8NhQ5CFNwCEhgcMrVjOZwNd/yzL67k5UZTcTmAhWIjFYhGcccfMfpV0ti163dmj005wMRvy9W0wVvJoUNHyNdFCYVHpP32v7GTOcUaLS1BEceltB1G7dYCJ8LtHwlr1OIp1vcof09T9mfgzYNKmZsfYo//PnquzwAAD5FJREFU/qp1pLGRysh1svsPfJ5xXJcuPPieSqygyivewp1M2AnRUhMUURD75rY2yzdqdeQbS/hl3LB5C98mfw/sGLlVjDBqrrOLlkiJS+4mlbm7iG9R1Q1dQmMNGbowSii0kPbX38P4u3BeBwEldl54abqTc+U0u8VOnTs+qhep8q4AqXrcz+A0MXaRF3jg4Y6ksV1yy6mhn8efHMQeG802lNjADuJn0v66UOzEmktfHaVokD1yaZkaTg6cImEKNm/Z4VTZ2e6JQazvAofG/QxOhku9xt3Z4w8dQatrQ6s47thjJ8wijV2uUhP22FRNdyUUGkn76SIxvsgV7ZRLiZ3+g8Y5OW/EsymhAdDGQXkQxineQYwdfSG5n0HNX8d3pTSLPtZWr92YcWxUSbo0zoCmTCagH8NtPIFc9K+++pp0XZTAoN1RsmLfx2In2FD6Kinf5/PPD3vl0i7O9aXxr5E+A4dsLrK0t97Ju2VWr/mE/RnIoKFUMYIV765ljw+HT2ke7aKtAodPKW5a89FG9thoRafERl1p/5wRO8mTrGXeLiix4iIvCkOGAqXrDnh6wEtOn4GKTQ4QdOJ+BkILVFwKYagdeFzyv6mNM1Bhyh27bcdnyNdFCcRmE3W/y7CwE6UdmSuxcX+dDk7OFWJRFBBfL1maL+t61kUV2TnILuXznA73LnHk0WNplYzoesMd+8VxM0lju+zucVirxEItab9Mxk72RGsbhS+YUgCEKbiLG/+Gqkvimt3SvvNg1vfYtv0zLyea+zlwbhSgY8KtIMV8KOmJiFG7hJggmUsBb0occTJ8T6RLKpGDm+9H0n6ZhVGNlERxT43WbMeBRscU4Dhcus7DgaDwhANaoXE/5+Ir6AJZIx0EuG4qT+uS49LmjNtouNtTI8hjIxtGiQV5zRMX7MRpx/5K5PR4eiTLcdxdvTV5bJe8ZhjCOlxcJFjRnYaKS3ei7r1Hksbm/gawVo/TUx/BF0e/NDfcXi/juMjiobR9UwIzT9oPO2MnX9Jo155EgOo/qnwpQgLIxKAQJLd86dsfsL4DQgku4ROqQBayaFz0y6kVqi6x9WkzF7OuEdiz90CxSpDXlX2ErGmjBAKn/+dL++FA2C8wVPoqKj7UPHBqRxngkhECK3c3PSskn4FD+J+F8nZqnvO4iXPY4593aWVSjjycKrfACX+fon9SGAgZofgK2TFX31LHyybCG8/4V+awKl6VQDwj7X8DY7/Er43fdVlJAEiRK8qRYHfbscsQUj4zgK62a2753AVvsecOPRDu5zRp1Zs8fs1HOrHHp+qIIJeeOzbCRUpqOWjtN9L+NxSMltgnilWrN3iO7bJrH/Ac8D+uecDTsaaGTfJxkXOF3ViuHqvrDnj7ndVOnwXNcArY6XI75MBem0MLz7hodONAUkktyS2Z52L8tMKPpa+oEh5IPzvzgjudnCrV6RWkaZs+7M9BeAOpexRc0iCRw07RL0cVrMvDAaqOSiqBpnA6inao2C90m/RVVcKjraPmCWLf3N33kS+Oes6S+1kc8ao7qzRnjw/BKwouEq/IF+c0t1ASxU3S/jYS7BcbJ31lleActDtK1903cqG5QInP5bOWLHufNL5rdguaB1NAL0vu2JqjnVpGS/vZyLBf7rdGO/ekHjRecHGo9z3YzunzXErnUVhE3em7tH/DDhk515nA33Gpvpw8TUsoUggS638t7WcjxX7BB6SvshIMlx0xdrjUcvaCuHRvhyFlkgKcPBodc8ev26gbaXzs0rljQxJWe1SmkmrS/jVy7Jc8zhpNnV5JJMgv5jolqqLesbg0/0Uxzs5dNI0Pl/J2GLX9G7J7uGNTO/soiQKqYMdJ+9dYsF/0T9YOC19wxRE4R05RChzqho1b2Z/z6dZdTt19HqzbifwZ2Elzx0dDYorELgpmOOJS+YaCIiVV4HXpL9J+NVaM5oanGs7OmKvnkQ+UCl12x7PnLSONjwYPLul9nbrSiotRrOTy9rBvv1v1pSJGY2l/Gjv2S59gjVZloSQOyLpS9L+hpoc8aC7IdDn74kpsB1iqTA1yAwoXZUMYOgJRcOl9WeWBtuxrpYiCWNoPpf2pCPaLn23tC+EfQHEEPSCLk5G9sXx9z9G70KvvKCfnOmjYRNL4kAu4wkECF9+JAio7uf0pYSgoUlLDUWvnSvtRUewFqCf9KyjuoMgG7druqtLC6914Yemq3i4SmSrUnfCxYPftEjtGsc9B4m4fYRaXBwS+K4Xho6ayx9YGC6njYWn/KY7xs1KmSP8SSnJw0c2GQYiLSnFyq0XZGRdU8AS8KNxSoQF7fFSDKqkBr0q5kXWSCXshTrW2Q/gHURIADvBcYt/IVtm8hXYLvffBx04PCGpjCMTIXcbHrl1JBbtMtigNhoW9IDda44lkKFkHpyVYQaN2hQfISXf5DDh+Ci7ZM8iG2bvvoOtlU+IDPupWaX+ZSOyF6Sf96yhyIJ7uoi+OKk+qc0VuuUvXnZvvoPW9hPphycsyZ+cca66FTkrs9Jb2k4nFXpyTrKmGZo7iqrHCKdxp3X6A02fgUJbCjFn80nkYVbdcEWWVtZOl/WSisReohDXaSZGSVYwY/arT7hsNKiggpdGlcAf57lRpV7Qt446PBsOUtmyKKKiuOkvaP6YCe6HuMBoPzznGOIhkoSKUSvO2fZ12x/2eHUsaHzFsl/AMtau9IgZ8UUVpv5gq7AWjNRtUsgaoFXIcH/Km13y0kTT21m27nHbfkIKllra7NG7AG4R2iE88XaX9Yeowfqn9fOEfTomZG26vR3Z+nIO/pq2fdtp9P/7kIPJnYKfOHV9zvxMPVAZPkPaHqcT4He0/Ff4BlRhZ+vYHJAVC9LvcvmM3aczPdu9z2n0jHIJuPVRQpcn9jLEvz3a9VEr0bLF2qrQfTDX2Al5qLXPrEyVrQCji9PMrFOn0IFi14r215PFeGv+a0+67ccverHlzm0+cdeFd5vCRo9zLo8QDfM4l0v4vK7AXso70r6nEy0frNnshkoLtyEpdfb9XLk/VO8mnc4/n+bvvc8qbTZu3sz4HmSRlbqZ392nb8RnW+EqsPCjt97IKe0EHSP+iSvxAEAv6I1QNksJw0VZBxooLi95YSQoBIXVwz94Dzt9JiZS+0v4u67AX9YfWJkn/skr6eHXG6yznjXg5KjZdmTBpbrFSsggBrf14U4jfUAmRaSZX9b2jxl7Yn1ijtVtRlDzQGZ5Too9qzaCsW7/FPNqs53c+F467a6/h7BCQEhvvWDtF2s9lNfYC/87aZuEfWkkZo8fOIDlv6JmHKSqFuDg0vrVNWuJB09Y/SPu3nMD45fb7hX9wJWVg91uc877U7pDfX7VOeppK/OCJfZ60X8sp7AW/2hpNoEJR8oBoVLlKTb7juNFJqG2HgYEOSpXU8rW166X9WU5iL3xNo5opigPoSI80QRTqqJBUzgLfUV3aj+U09gdoIH0XKIqSSppJ+y/lB54Tby99JyiKkiraSvstpQD2B+kmfUcoipIKtKtO0jB+d/uB0neGoiiJZoC0r1KKwPhOfKj0HaIoSiJB54zjpf2UUgzGL7kfI3yjKIqSLCYa1fVOB/aHOtHaBOEbRlGUZDDe2onSfklhYPyd+HPCN46iKLKMMrrzTifGj4n3Eb6BFEWRAYLrGvNOM8Z34j2EbyRFUeKlm7TvUULE/qAtpO8oRVFiQbvIZyP2h61nVDtFUbIVrO3G0n5GiRDjC2B9LXyjKYoSLljTNaT9ixID9oe+1po2JFSU7ADdMm6S9itKjBi/KYQ2JlSUdINOOhdI+xNFAOO3Z1sufAMqiuLGu0bboOU29gb4qbUpwjeioig8Zlj7mbT/UBKA8as2+wnfkIqi0BhktLpSORZ7U1Sz9oXwzakoSuF8aa2BtJ9QEoy9QS4yeripKEnjU2ulpP2DkgLsjfIra7OFb1hFUXwWWvuNtF9QUoTx4+JdjVZuKooUWHsQo/uRtD9QUoq9ecoZLfpRlLg5ZK2i9PpXsgDjF/2sEr6hFSVXeN/aWdLrXski7A11kvFDKv+UvbcVJWtByAQpgj+RXu9KlmJvruutbZe9zxUl69hl7Vbp9a3kAPZGO9Vo9aaihMVMa7+VXtdKjmH8wp/Dwje/oqSVo9YaWDtOei0rOYq9+c42KoilKFzeNnpQqSQBeyOeYPydxCHZNaEoiQdSFWhv+EPpdaso38HelH+2Nkt2fShKYllg7QzpdaooxWJv0orWdgsvFkVJCvus1TYa61bSgr1Zf2NtpOy6URRxxln7tfR6VBQn7M17q7WPhReRosTNR9Zull5/ihIYeyP/yPiHnKqpomQ7+41/SPlj6XWnKKFib+pfGl9d7VvRJaYo4QOJCYQMVfZVyW7sTV7S+CfyipINzLd2vvS6UpRYMX62yieya09RnFlv7U7pdaQoYhg/Po6S/A2ya1FRyGwx/pmOxrkVBdjFcKLxc2W3iS5NRSkaKAbigPIk6fWiKInELo4fG9+R7xBdqoryH1CUBsd9svT6UJRUYBfLKdZaW9srunSVXGaPtZbWfiq9HhQllRi/ExBi5GtFl7KSS+A8BjFuddyKEgZ2MR1v7TZrb4gubSWbgSwyNgsnSN/vipK12AV2kfGLJrQgSAkKCnCmWrtO+r5WlJzCLrrTrfU3WqKv8EHJez9rp0vfx4qS0xg/To6ioNnG7+ytKEWBMAmynDS+rShJwy7MM611tfaZqJtQkgR224OsnSd9fyqKQsD4+eT3WJtj/DinklvgfATdoSoZrZhUlPRiF/CvjJ9dgBCLOvPsBb/tYuOnAP5O+r5TFCVk7ML+n7wFjoWu8fLs4ENr7a2dJn1/KYoSE3bB/5+1ptaWGE1JTBP4rd601sTaH6XvI0VRhDF+swlksuCwa6ugc1IKB3ok6C+JDJLfSt8viqIkGOskShhfwAhx868FHVeugl02Uv6QUXS5teOl7wlFUVKIdR4/t1bOWg/jl/J/JebWspcvjX9tuxv/Wv9c+ndXFCULsc7lBOOX8+MwFK/1u8XcXno5aPy3Gxw+XmdUqlVRFAms8znO2tnWqlrrZm2m0cYUBcGZAq4Jrg2u0VnWjpP+3RRFUYrE+Aej1xh/pz7E2lsmu3Vb8N3wHfFdH7V2tbVfSP8OiqIooWGd2snWTjN+6ABZFTioQygGh3YHRVwvDcSpoZWN0AeydXDIi8wdhJN+L31dFUVRxLHO8BfWzrD2D2tlrVU3fs5zZ+Pvbidam2t8hw/7MM+xwtBFZp+1QwUc76G8P9tT4O99WODfz80bc7C1J601zvvMsnlzwFz0UFFJHP8Pxego6Mm7utIAAAAASUVORK5CYII="/>
</defs>
</svg>


            <div>
              <div className="profile__inner__group__title">
              Update Profile
              </div>
              <div className="profile__inner__group__subtitle">
              Update your personal information
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">General</div>

        <div className="profile__inner__group">
          <div>
            <Image src="/assets/statement.png" width={25} height={23.71} />

            <div>
              <div className="profile__inner__group__title">
                Statements and Reports
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
        </div>
        <div
          className="profile__inner__group"
          onClick={() => (window.location.href = "/profile/kyc")}
        >
          <div>
            <Image src="/assets/kyc.png" width={30} height={27.72} />

            <div>
              <div className="profile__inner__group__title">KYC</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">Security</div>
        <div
          className="profile__inner__group"
          onClick={() => (window.location.href = "/profile/mfa")}
        >
          <div>
            <Image src="/assets/2fa.png" width={20} height={26.58} />

            <div>
              <div className="profile__inner__group__title">
                Two Factor Authentication
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/password.png" width={25} height={34.04} />

            <div>
              <div className="profile__inner__group__title">
                Password and Pin
              </div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/transaction.png" width={25} height={18.14} />

            <div>
              <div className="profile__inner__group__title">Transaction</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__title">Help</div>

        <div className="profile__inner__group">
          <div>
            <Image src="/assets/feedback.png" width={15} height={23.68} />

            <div>
              <div className="profile__inner__group__title">FAQ</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/email.png" width={15} height={23.68} />

            <div>
              <div className="profile__inner__group__title">Email</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>

        <div className="profile__inner__title">Feedback</div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/feedback.png" width={25} height={28.6} />

            <div>
              <div className="profile__inner__group__title">Feedback</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/rateus.png" width={23} height={28.19} />

            <div>
              <div className="profile__inner__group__title">Rate Us</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div className="profile__inner__group">
          <div>
            <Image src="/assets/delete.png" width={25} height={26.77} />

            <div>
              <div className="profile__inner__group__title">Delete Account</div>
              <div className="profile__inner__group__subtitle">
                Download statements monthly, annually
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
        <div
          className="profile__inner__group"
          onClick={() => setToggleOpen(true)}
        >
          <div>
            <svg
              width="30"
              height="11"
              viewBox="0 0 30 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="30"
                height="11.0054"
                fill="url(#pattern0_6630_1471)"
              />
              <defs>
                <pattern
                  id="pattern0_6630_1471"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_6630_1471"
                    transform="scale(0.00271739 0.00740741)"
                  />
                </pattern>
                <image
                  id="image0_6630_1471"
                  width="368"
                  height="135"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACHCAYAAAAP+QIqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAU0ElEQVR4nO2dd3wUZf7H4+/+ufvdeV09IbMrOchsggpY7vDUn96dSJnZRBFEQLGhh3diodhAERCQIpCACR3pxYBgA0MNoKCUBDykKBZEaggBEiCkfH/Pd2JQJIHd2dn9zmY/77w+BMvs7jwz855nn3lKXFxU0PZnWv0Wf/YmGa00n9nN4zPHenzGAo9uLlF/36D5jG0e3dit/rkAQRDk/DF2W85Q7vBYDlEu8Rlj2C2WY5Rr2DnS1otaLru62S/jE1u1UIU8RBXsek03SlRhE4IgSCSiZH5KuecTTTcHx+tGc3aStBddjaan1FF3w55K2mtUoZ2WPoAIgiBVqXSSsVo5qge7StqXrsDrveXn6utMW1XDfkcVTKn0QUIQBLlwjHKuaKrfj16S3PZX0h6NOPWu9F/GX03U15Sj8gcDQRDEXiyH6caghIQ7L5X2athJSDY96s6Vpna4WLrgEQRBnEplm7k5tk7DVE3as47jbZT6W7WD6XgYiSBIbc73jhuZkHDbb6S96wiabvrVDn0rXbAIgiCRivLePs1ndFIKvEjawbbwJpo+VeteIV2QCIIgUlESX1bH1zJR2sdBwXcej24WSRcegiCIfIwT3GNF2ssXJD6+7S803RgvX2AIgiDuinLjVNcOCNKS/A2/H54qXlAIgiBujJL4Vm+DVknSvj4Lr8/f1KMb+dKFgyAI4vYoiR/Rkoybpb1toSX6UzWfeTKSBdD07w9Shwd7U89eadR/8ER6LX06ZU7IohlzFiEIgpw37Ap2BruDHcIuaXrrAxEWuXGCe+iJytuT5H9YfZCycO5o0rVt6f5HX6Zxk+ZT3padVHziJAEAgNOwW3I376CxE+dTp0f7UNI1bcIrcd0s9erGQzLy9hmPqA9REY4d8zVpQ08+8xqt+jCXSsvKpI8rACAGYfesXL2Rnug5jPTGd4VL5BVcEY6ovL0+485w1Lz/YTxGc7KyqagYtWwAgHsoKjpBs5Wb/t6qSziaU8q4KToi8o73mbc43ebdPPVxylqwjMrKyqWPEwAA1Eh5eQUtWf4xmW2eclTi7NSwP9ism+i/Wr1RoVMfusmNHS1xV1RUSB8XAAAIGHbWnHlLqMnfOjoncat3ir9hWORdv36LX3t0c6cTH/SKZD/16ptBhUePSx8HAACwzZHCY/R8n9HkTfI7VBM3todljnFV857uxAdsfEMHWpGzQbrcAQDAMdaszaNrb7rPmdq4bsx2Vt662cWJD9b23udo/4HD0mUNAACOs29/PrXp+KxTTSqdHZF3vN7yKiceWj7TOx0PKQEAtRruetjjhZEOCNw44UR7+EWabnwU6ofpM2AsHlQCAGICdt3wUTOckPjquFDmE68caRnah+ARlAAAEGvwkP1Q/anp/gdsyTs++fbfqxc4GMqbD0ubLl2GAAAgxuDhU0KTuG7k1/Hd8YegBR7qvN7PvjgKzSYAgJiGHdijV1qoTSmZQcm7bpLRIJSh8u0f6IUHlgAAQJUPNu/u9HwItXCz1NPASAi89u0zJ9p9s2tuvJcOHERXQQAAqOJQ/pFQ+4mPDUjedRqmappulNh5Ex5hyTMIAgAAOJuP1m2meg1TbAlc083TCcmm58K1b90cZfcu0XfgeOkyAgC4gKN0hL6grbSBVtESmk9ZNIGmURpNpqE0jgbS6/Sy+j2AJtEQ69+/SeMpW/1f6ymHPqf/UiHVzm/xL70y1nYtXPMZaeeVt+cq43eVKygH/+LX/18nOn68WLp8AAACnKYS2klbaDktpKk00hJ0qJlCw2kpvUXbKY9OUe2YYvrYsSL7TSm6UextlPrb89W+bQ+Zf+f91dJlAwCIIBXqZ7eqZ3MNm2vTTki7poyhV+gDVU//inZQOUV3B4m33l4RQlu48UjNAveZH9p50dYdekqXCQAgQrBAuVY8k0aHVdo1ZSqNoM20jkrVTzTCXQtT7+5uV+Crq5V3fLK/vsfmEmmYXRCA2g/XuLfSRkugEuL+aSbTMNpCH0dljZwXhbBZC6/Q6rf4c3XNJ/3svGCLO57AgB0AajmHaB/Nowni0q4usylTfbrd0kUUFOzMVq2ftCvxPuc+wPSZW+y82Nvvr5IuCwBAmCinMlpDH1AG9RUX9YWykt6hUjotXWQBs+DdHFsCV5Xt3LPknZBw56V2mk+u/mt7KimJngIDAATOcSp0ba27pnC7fD4dkC66gDh1qoSuvL6drWaUyxPNP/7QfJJktrNzJ+jdN0O6DAAAYYB7e4ynQeJCthPuEbOTPpUuwoB47qXR9ppRdKPNj5pPjDF2XmRT3nbp/QcAOAz3MMmkfuIiDjWbaI10UV6QTzZstSvw138QuI3FirkzOh5eAlC74O550uJ1MqtpEXH/GbfCDrWzsj0vfmzJW9dTLrbT/t21+xDpfQcAOMhGpTtp4YYjH9ES6aI9L4899aqtdnBr9fr4RPN6O1X4mXMXS+83AMAhtqu6t7Row5lcpXG3Mm3W+/aaUXzmNXEe3ehoZ+Mvv/5Oer8BAA7ADyxrQ5v3heLWB5u7vtxjS+DxPn/7OM1n9A92w8TGram83L3tSgCAwOCughNosLhcIxHunVJAB6WL/BzYpQ0atQ6+HVw3XuYBPHOD3bB56uPS+3wGXvmHBxP95+nB1qjQm5p1RpCQw6PkuvYYSouXrq21D+t5CHq09fMONbPUn24c7HOb+e/ga+G6OYtr4GuC3ZAb3d3AV9/speZ3dLXbfoQgASW1XXfau++Q9OnuOB9RtrhQJbKC3pYu+nN4tOvA4M9N3czhGQjzgt1w0LA3pPeX9nx3wFq+TfriRmIjN/zjIcrPL5Q+7R3jMB2IiXbvmrKHvpI+BGcxYOikoM9Ja0i9+suuYDccNWaO9P5aCydLX9RIbKXLk4OkT3uHqKB5NFFcopLhphQ3zWKYnjE7+HNSNz5ngR8MdsPJ02S/guRu3iF+MSOxF2+Sn3Z9tUf03HeCbZQrLlA3JI/WSh+KM0ycsjDo81HTjf3chHIy2A3nzl8qurMjRs8Uv5iR2AxfaNEMz+k9ndLF5emG8PqcblkUYk5WdvDno24Ux9k5iRe+lyO6sz17pYlfyEhspv+rE0TP/VDZUcsH7AQbXhDCDbBT7ZyPUSnwF/uPEb+QkdjM0LRpoud+aFRYbb/S0nRTeOFknvNcmpgS+PTZi8QvZCQ2E80LmHDPC2lhujG7aJv0oYktgR/KP2KNBpW+mJHYCk++f/x4sei5HwrLaaG4LN2YRTRb+tDElsCZ4aNmiF/QSGxl0lT3DQAJFH5YF60LNIQ7mdSfTpLsjTnmBM7zB/DweemLGomNPNM7PaqH1H9Bn4mL0s3ZShtFj0/MCZzhC2rClAXW2pzSFzhSO8OjfWvD1Mk59K64JN2cbMoSPT4xKfAqeHHQFas2WF9xM8a/iSAhhwerrVmbR6Wl7ugnHCozaJS4JN2cSTSUJFfuiWmBAwBqpoiOiQsyGnJYcKpZCBwAUC28YIO0HKMhvCqRFBA4AKBaeDkxaTlGQ9bRMrFjBIEDAKqF57+WlmM0ZDHNFTtGEDgAoFoW0BvicoyGzKZMsWMEgQMAqmU2ZYjLMRryBr0mdowgcABAtUylkeJyjIbwSFUpIHAAQLVMpCHicoyGZFBfkuoLDoEDAKplHA0Ql2O0RGqBBwgcAFAtqIEHFtTAAQCuA23ggQVt4AAA14FeKIEFvVAAAK4D/cADC/qBAwBcB0ZiBhaMxAQAuA7MhRJYMBcKAMB1YDbCwILZCAEArqOYjovLMRpSgPnAZeAVeZbnrKeJUxaKr+SCRC5jJ86nBe+spPz8QulT0PXMpNHignRzJmNFnsjDCxuPmzSfrvrLPbZ2Hqkdqdcwhbo/P4IKjhyTPiVdSw69Jy5JNyeb5oken5gTeFlZOT321Kvi8kDck5tvf4S+23dI+tR0Jbtom7gk3ZzPaJPo8Yk5gb+WPl1cGIj7knJ3N+ubGTibMiqlCfSquCjdmEzqTyfphOjxiSmBHzxUQImNW4vLAnFnuF0cnMtyWiguSzdmEc2RPjSxJfBps94XlwTi3jzYpa/o+elWvqOvxWXpxnxJ26QPTWwJvHe/THFJIO7N3/75kOj56V4qaBbmRTkrU2gElasfaWJK4D17pYlLAnFvrrnxXtHz083spC3i0nRTPqVPpA+JhW2Baz7zZLAbzZ2/VHRnR74+S1wSiHvDDzJB9VSon+mULi5ON2QyDRNbwOGnzMnKDv5c141iroEfDHbDydPeFt3ZvC07xSWBuDfDR80QPT/dDg8Zl5anG7KFPpY+FGfgQYjBnueabuxnge8KdsNRY+Sf2nZ4sLe4KBD3Jfm6uyn/MEZmnp+KmJ9iludId0PbdxXpGbODP99143NuQskLdsOBQydL7y99t/eg1dYpLQzEPfEm+en9Dz6UPjWjgsN0kDKpn7hIpcI9ctzEK0MmBn2+a7qZqwRurAl2Qx4B6Qa+/mYvtbzzCXFxIPJp1LQ9LV66VvqUjCrW0lJxkUpkJb0jXfTn8GjXgcGf97qZw00oc4PdsHnq49L7ewYedffuotX0eLchlsxvatYZiZH803iMOj3Sh8a/sYCOHiuSPhWjDm5CmE8TxYUayXA3ylI6LV3053Cb+W87Ap/FNfD+wW7YoFFray4SAEB0c5yOKoUPFhdrJDKOBlABuW+uHHYpOzVYD2u68XKcRzc62vnKuuurPdL7DQBwgG/o81rfHp5BfdVe/le6qKvli13f2mo2jPf528dpesvr7Gw8c+5i6f0GADjEjlo+wCeP3Pt8ZOrM92wJ3JuU0iRO11MuVv9QEezGXbsPkd5vAICDbKI14qINR/hhrZvp8uQgOwKvuCS57a/iGI9u7gj2BbgLX0UFpu0EoDaxmdZZzQ3S0nUqq2kRSa60cyG4E0bjGzoE3/7tM7bFVeHxGWPsVOE35srP4gUAcBYeqVkb2sRzyf1jAtat/9RW84mmG6PPCFxLMtvZeZFefTOk9x8AEAb4wWa0LgAxjgbSF7RVuggD4pne6bYE7tHNu84IPCHhzkvttIPzWpQlJe7rUwkACB3uYjgvyvqJz1R/HhZcXT4YeDH2K69vZ0PgRvnlieYf436M+g9b7NwJpKeWBQCEDx7s8xFlu75JhdvteeFmt8wuGAi8cpS95hMzN+6naLrR186LNb+jKx5mAlDLyaf9rh21OYfG0D76VrqIgoKdySPabTWf+MyXzhF4fLK/vp1mFM6yle6YFB0AEE4qaBvl0jQaKS5tzhQaTp/SemuO82jjg6Xr7Mq7wtPASDhH4FYt3MbEVpw77ukhXR4AgAjBwuSHhDNptIi4p6obCHd3LIui5pIfw7Vvf9un7T68XFWtvCubUcwuNu8KtOBdtIUDEEuwyL+lXbSU3rJ6foRT2mPpFcqmLPqadkZljfvHZC1YZrf2zelco8A9Vxm/8/iME3Ze+LqbO9Hx48XSZQMAEOC0+uG5RlbQ2zSd0hyqaY+gZbTAGuZfQqekd9EReNZM2+sY6EZxQsJtv6lR4JXNKGa63btDnwFjpcsHAOACjlEhfUGf0UZabdXQuTsir8XJ61BW1dZ5dsDJNNQS/jyaQEtoPm2gVVbzTCEVSO9CWOjdLzOU2vfI88qbqVu/RbymGyV23uCKZD/lrNkkXUYAAOA6Ply7meo1TLElb1WxPhXfwKh7QYFXtoUbE+zeJZrc2JH2HzgsXVYAAOAaDh4qoGtvui+E2reRGZC8mcouhUaZ3Tdrd/8LVFpWJl1mAAAgDruw7b3P2Ze3bpZ6Ev31AhY4Y3eCq6r06JWGAT4AgJiGHdjtuRGhtHufPXFV4LXw23+vNj4YyhsPHj5FuvwAAECMAUMnhSrv/dw7MGiBWxLXzQdDeXNO5oQs6TIEAICI8/q4N0NypyVwn9HJlry/5yKPbqwM9UNw90I0pwAAYgF23fBRM0KWt8dnrGYHhyLwOC3J39Du4J4fp/vzI/BgEwBQqyktLaWnnx0eurx1o9jboFVSSPKuQgn8kdDvJial3N2Nvt1zQLqMAQDAcfbuO0StO/R0oOZtEjdfOyLvKjTdmOrEB+P135bnrJcuawAAcIylKz6hRk3bOyJvVfue6ai8GV4BWfMZ2534gN4kPz374ig6UnhMutwBAMA2hwuOUs9eaZbTnHCj5jM/u+zqZr90XOBMvM+4UtXEjzhyl/m+Nj4nKxsPOAEAUQWvJj9z7mLnat1Wzds87Fi7d014ff6m6o2KHPvQKs38/7GmWMRDTgCAm2FxL1n+MbVq/aRz4rZinNASzZvCKu8qtER/aihD7WvKrS3/RbPe/ADT0gIAXAU7iWvct7b4l8PitmrepZpu+iMi7yo8Sf6HPTaXYLtQEhu3pq49htKKnA10+nR0rroBAIhu2D3c4eLxbkMsJ4XDdexQr248FFF5V2GN1OSJVsKzY1Z8TdrQfZ1fskZ0btq8nYqKTkgfVwBALYTdsilvO2WMf5PuffhF0hvfFTav/VDz9j8gIu8quOrvxECfYPKXW+6nex54wZowq9+g8TQsbbol+BlzFiEIgpw37Ap2BruDHcIuYadE0mE8UMfj85ui8q6iblKrvyqJH4poASAIgkRjdLMgYg8sA4W7v2i6sVW8cBAEQdybLVfoKbq0r6vF673l55rPSHNBISEIgrgqPJo9bIN0nISnQHS6rziCIEh0xnpG2Fnay0FRx9cyUd1xlsoXHoIgiFB0I5uXqJT2sW2sXiq6sVu8IBEEQSIU5b29oS7G4Brq12/xayXx4ZrPPCVdsAiCIOEKO05lmK6nXCztXcepd6X/Mo9uvlrZB1K+sBEEQRyJbhZxB474BkZdac+GnT/Vb3GJ2uGB6k5VKF7wCIIgNvO9wwaw06S9GnGsbofWSE5zrvp9WvpgIAiCXDhGuaqALuE27qjoFhgJvMmt/qTuZt1UweRoulEif5AQBEEqYz2/042V6vfT7CppX7qay681/1cV1O2qwAYpoa/Dw08EQSIZ62GkbqytbOr1N2MnSXsxiunzP54GRkJ8YqsW6mvLU+orTKamm/P5a4z6+ye8DJHVVVE3CxAEQc4fY7flDOUODzeFsEvYKcot7BhPor8eO0faeoHw/1a4S/XLTOnQAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>

            <div>
              <div className="profile__inner__group__title">Toggle Mode</div>
              <div className="profile__inner__group__subtitle">
                Change between a dark and white theme
              </div>
            </div>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.91204 3.57708C6.58661 3.90252 6.58661 4.43016 6.91204 4.7556L12.1561 9.99967L6.91204 15.2438C6.58661 15.5692 6.58661 16.0968 6.91204 16.4223C7.23749 16.7477 7.76512 16.7477 8.09056 16.4223L13.9239 10.5889C14.2493 10.2635 14.2493 9.73584 13.9239 9.41042L8.09056 3.57708C7.76512 3.25165 7.23749 3.25165 6.91204 3.57708Z"
              fill="#C1C2C3"
            />
          </svg>
        </div>
      </div>

      {toggleOpen && (
        <div className="profile__modal" onClick={handleToggleClose}>
          <div className="profile__modal__inner">
            <div className="profile__modal__inner__title">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#E8F8FF" />
                <rect
                  x="8"
                  y="18"
                  width="30"
                  height="11.0054"
                  fill="url(#pattern0_2512_3348)"
                />
                <defs>
                  <pattern
                    id="pattern0_2512_3348"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_2512_3348"
                      transform="scale(0.00271739 0.00740741)"
                    />
                  </pattern>
                  <image
                    id="image0_2512_3348"
                    width="368"
                    height="135"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <div>
                <div>Toggle Mode</div>
                <div>Choose the desirable theme below</div>
              </div>
            </div>

            <div className="profile__modal__inner__modes">
              <div>
                <div className="profile__modal__inner__modes__box-light profile__modal__inner__modes__box-active"></div>

                <div className="profile__modal__inner__modes__title profile__modal__inner__modes__box-active__title">
                  Light Mode
                </div>
              </div>
              <div>
                <div className="profile__modal__inner__modes__box-dark profile__modal__inner__modes__box-active"></div>

                <div className="profile__modal__inner__modes__title profile__modal__inner__modes__box-active__title">
                  Dark Mode
                </div>
              </div>
            </div>

            <button className="profile__modal__inner__button">
              Save Theme
            </button>
          </div>
        </div>
      )}
      

      <Navigation />
    </div>
  );
}
