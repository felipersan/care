interface IProps {
  color?: string
  size?: string | number
}

export const MedalIcon = ({ color = "#F26C4F", size = "19" }: IProps) => (
  <svg
    width="53"
    height="45"
    viewBox="0 0 53 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.0681 0.178711H9.01367V4.643L22.1059 14.3751C18.1326 15.673 14.842 18.4804 12.9575 22.1805C11.0729 25.8806 10.7486 30.1704 12.0558 34.1073C12.7025 36.0575 13.731 37.8623 15.0825 39.4184C16.434 40.9745 18.0819 42.2514 19.9321 43.176C21.7822 44.1007 23.7983 44.6549 25.8649 44.807C27.9314 44.9592 30.008 44.7062 31.9758 44.0626C35.1317 43.0352 37.8795 41.047 39.8275 38.3815C41.7755 35.7161 42.8243 32.5095 42.8243 29.2189C42.8243 25.9283 41.7755 22.7217 39.8275 20.0563C37.8795 17.3908 35.1317 15.4026 31.9758 14.3751L45.0681 4.643V0.178711ZM33.6659 39.2412L27.0409 35.4019L20.4159 39.2412L22.1735 31.8082L16.3372 26.8082L24.0213 26.1609L27.0409 19.1519L30.0604 26.1609L37.7445 26.8082L31.9082 31.8082L33.6659 39.2412Z"
      fill={color ? color : "#F26C4F"}
    />
  </svg>
);

export const TrophyIcon = ({ color = "#F26C4F", size = "19" }: IProps) => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.25 5.625H37.5V3.75C37.499 2.75574 37.1036 1.80249 36.4006 1.09945C35.6975 0.3964 34.7443 0.000992769 33.75 0H11.25C10.2557 0.000992769 9.30249 0.3964 8.59945 1.09945C7.8964 1.80249 7.50099 2.75574 7.5 3.75V5.625H3.75C2.75574 5.62599 1.80249 6.0214 1.09945 6.72445C0.3964 7.42749 0.000992769 8.38074 0 9.375V15C0.0024808 16.9884 0.793454 18.8946 2.19944 20.3006C3.60542 21.7065 5.51164 22.4975 7.5 22.5H8.10375C8.88507 25.3701 10.4852 27.9506 12.7087 29.9264C14.9322 31.9022 17.683 33.1878 20.625 33.6263V41.25H11.25V45H33.75V41.25H24.375V33.6206C27.3552 33.2522 30.1552 31.994 32.4096 30.0102C34.664 28.0264 36.2681 25.4092 37.0125 22.5H37.5C39.4884 22.4975 41.3946 21.7065 42.8006 20.3006C44.2065 18.8946 44.9975 16.9884 45 15V9.375C44.999 8.38074 44.6036 7.42749 43.9006 6.72445C43.1975 6.0214 42.2443 5.62599 41.25 5.625ZM7.5 18.75C6.50574 18.749 5.55249 18.3536 4.84945 17.6506C4.1464 16.9475 3.75099 15.9943 3.75 15V9.375H7.5V18.75ZM41.25 15C41.249 15.9943 40.8536 16.9475 40.1506 17.6506C39.4475 18.3536 38.4943 18.749 37.5 18.75V9.375H41.25V15Z"
      fill={color ? color : "#F26C4F"}
    />
  </svg>
);

export const TaxIcon = ({ color = "#F26C4F", size = "19" }: IProps) => (
  <svg
    width="40"
    height="45"
    viewBox="0 0 40 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.71429 0C4.19876 0 2.74531 0.592632 1.67368 1.64752C0.602039 2.70242 0 4.13316 0 5.625V45L10 39.375L20 45L30 39.375L40 45V5.625C40 4.13316 39.398 2.70242 38.3263 1.64752C37.2547 0.592632 35.8012 0 34.2857 0H5.71429ZM12.8571 8.4375C11.7205 8.4375 10.6304 8.88197 9.82668 9.67314C9.02296 10.4643 8.57143 11.5374 8.57143 12.6562C8.57143 13.7751 9.02296 14.8482 9.82668 15.6394C10.6304 16.4305 11.7205 16.875 12.8571 16.875C13.9938 16.875 15.0839 16.4305 15.8876 15.6394C16.6913 14.8482 17.1429 13.7751 17.1429 12.6562C17.1429 11.5374 16.6913 10.4643 15.8876 9.67314C15.0839 8.88197 13.9938 8.4375 12.8571 8.4375ZM30.5914 9.26156C30.0556 8.7343 29.329 8.4381 28.5714 8.4381C27.8138 8.4381 27.0872 8.7343 26.5514 9.26156L9.40857 26.1366C9.13569 26.396 8.91802 26.7064 8.76828 27.0495C8.61854 27.3926 8.53972 27.7617 8.53643 28.1351C8.53313 28.5086 8.60542 28.8789 8.74908 29.2246C8.89274 29.5702 9.10489 29.8842 9.37316 30.1483C9.64142 30.4124 9.96043 30.6212 10.3116 30.7626C10.6627 30.904 11.0389 30.9752 11.4183 30.972C11.7977 30.9687 12.1726 30.8911 12.5212 30.7437C12.8697 30.5963 13.185 30.3821 13.4486 30.1134L30.5914 13.2384C31.1271 12.711 31.428 11.9958 31.428 11.25C31.428 10.5042 31.1271 9.78898 30.5914 9.26156ZM27.1429 22.5C26.0062 22.5 24.9161 22.9445 24.1124 23.7356C23.3087 24.5268 22.8571 25.5999 22.8571 26.7188C22.8571 27.8376 23.3087 28.9107 24.1124 29.7019C24.9161 30.493 26.0062 30.9375 27.1429 30.9375C28.2795 30.9375 29.3696 30.493 30.1733 29.7019C30.977 28.9107 31.4286 27.8376 31.4286 26.7188C31.4286 25.5999 30.977 24.5268 30.1733 23.7356C29.3696 22.9445 28.2795 22.5 27.1429 22.5Z"
      fill={color ? color : "#F26C4F"}
    />
  </svg>
);

export const HandleIcon = ({
  color = '#F26C4F',
  size = '19'
}: IProps) => (
  <svg
    width="56"
    height="45"
    viewBox="0 0 56 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7177 21.466H26.1148C29.0831 21.466 31.9298 22.6405 34.0287 24.7311C36.1276 26.8217 37.3068 29.6572 37.3068 32.6137H19.8945L19.897 35.091H39.7939V32.6137C39.7861 29.9778 39.0215 27.3991 37.5903 25.1819H44.7682C47.1191 25.1813 49.4221 25.8444 51.4101 27.0945C53.3981 28.3445 54.9896 30.1303 56 32.2446C50.118 39.9761 40.5948 45 29.8454 45C22.9785 45 17.1611 43.5384 12.4356 40.9745V17.926C15.4615 18.3578 18.3188 19.5791 20.7177 21.466ZM7.46136 15.2729C8.07054 15.273 8.6585 15.4957 9.11373 15.8989C9.56896 16.3021 9.8598 16.8577 9.93107 17.4603L9.94848 17.7502V40.0455C9.94848 40.7025 9.68645 41.3326 9.22002 41.7972C8.75359 42.2617 8.12099 42.5227 7.46136 42.5227H2.48712C1.82749 42.5227 1.19489 42.2617 0.72846 41.7972C0.262035 41.3326 0 40.7025 0 40.0455V17.7502C0 17.0931 0.262035 16.463 0.72846 15.9985C1.19489 15.5339 1.82749 15.2729 2.48712 15.2729H7.46136ZM31.4521 1.83376L32.3326 2.71319L33.213 1.83624C33.7895 1.2571 34.4752 0.797094 35.2308 0.48262C35.9863 0.168147 36.7967 0.00540384 37.6155 0.0037342C38.4343 0.00206456 39.2454 0.161501 40.0022 0.472891C40.759 0.78428 41.4466 1.24149 42.0255 1.81827C42.6044 2.39505 43.0633 3.08005 43.3757 3.83393C43.6881 4.58781 43.8479 5.39572 43.846 6.2113C43.8441 7.02687 43.6805 7.83404 43.3646 8.58646C43.0486 9.33888 42.5866 10.0217 42.005 10.5958L32.3326 20.2274L22.6577 10.5909C22.0762 10.0166 21.6144 9.33364 21.2987 8.58113C20.9829 7.82861 20.8195 7.0214 20.8179 6.20583C20.8162 5.39025 20.9763 4.58238 21.2889 3.82859C21.6015 3.07479 22.0605 2.38993 22.6396 1.81331C23.2187 1.23669 23.9064 0.779677 24.6633 0.468501C25.4202 0.157324 26.2313 -0.00188351 27.0501 1.6813e-05C27.869 0.00191713 28.6793 0.164888 29.4348 0.479574C30.1902 0.794261 30.8757 1.25446 31.4521 1.83376Z"
      fill={color ? color : "#F26C4F"}
    />
  </svg>
)

export const MoneyIcon = ({ color = "#F26C4F", size = "19" }: IProps) => (
  <svg
    width="40"
    height="25"
    viewBox="0 0 40 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0.6875H40V24.6875H0V0.6875ZM20 6.6875C21.7681 6.6875 23.4638 7.31964 24.714 8.44486C25.9643 9.57008 26.6667 11.0962 26.6667 12.6875C26.6667 14.2788 25.9643 15.8049 24.714 16.9301C23.4638 18.0554 21.7681 18.6875 20 18.6875C18.2319 18.6875 16.5362 18.0554 15.286 16.9301C14.0357 15.8049 13.3333 14.2788 13.3333 12.6875C13.3333 11.0962 14.0357 9.57008 15.286 8.44486C16.5362 7.31964 18.2319 6.6875 20 6.6875ZM8.88889 4.6875C8.88889 5.74837 8.42064 6.76578 7.58714 7.51593C6.75365 8.26607 5.62318 8.6875 4.44444 8.6875V16.6875C5.62318 16.6875 6.75365 17.1089 7.58714 17.8591C8.42064 18.6092 8.88889 19.6266 8.88889 20.6875H31.1111C31.1111 19.6266 31.5794 18.6092 32.4129 17.8591C33.2464 17.1089 34.3768 16.6875 35.5556 16.6875V8.6875C34.3768 8.6875 33.2464 8.26607 32.4129 7.51593C31.5794 6.76578 31.1111 5.74837 31.1111 4.6875H8.88889Z"
      fill="white"
    />
  </svg>
);