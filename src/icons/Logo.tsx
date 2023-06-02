interface Props {
  width?: number;
  onClick?: () => void;
}

export function Logo({ width, onClick }: Props) {
  return (
    <svg
      width="300"
      height="82"
      viewBox="0 0 122 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.264 21.16L10.072 15.76C9.97601 15.584 9.92801 15.36 9.92801 15.088C9.92801 14.688 10.024 14.328 10.216 14.008C10.312 13.848 10.36 13.696 10.36 13.552C10.36 13.184 10.12 13 9.64001 13H1.57601C1.14401 13 0.928009 12.808 0.928009 12.424C0.928009 12.248 0.984009 12.056 1.09601 11.848L7.09601 1.48C7.27201 1.16 7.53601 0.888 7.88801 0.664C8.24001 0.44 8.57601 0.328 8.89601 0.328H25.024C25.472 0.328 25.696 0.52 25.696 0.904C25.696 1.08 25.64 1.272 25.528 1.48L24.184 3.784C24.008 4.104 23.736 4.376 23.368 4.6C23.016 4.824 22.68 4.936 22.36 4.936H16.6C16.168 4.936 15.952 4.744 15.952 4.36C15.952 4.184 16.008 3.992 16.12 3.784L16.792 2.632C16.904 2.424 16.96 2.232 16.96 2.056C16.96 1.672 16.744 1.48 16.312 1.48C15.992 1.48 15.648 1.592 15.28 1.816C14.928 2.04 14.664 2.312 14.488 2.632L9.83201 10.696C9.70401 10.904 9.64001 11.096 9.64001 11.272C9.64001 11.656 9.86401 11.848 10.312 11.848C10.632 11.848 10.968 11.736 11.32 11.512C11.672 11.288 11.944 11.016 12.136 10.696L14.128 7.24C14.304 6.92 14.568 6.648 14.92 6.424C15.288 6.2 15.632 6.088 15.952 6.088H21.712C22.144 6.088 22.36 6.28 22.36 6.664C22.36 6.84 22.304 7.032 22.192 7.24L14.392 20.776C14.152 21.192 13.896 21.4 13.624 21.4C13.48 21.4 13.36 21.32 13.264 21.16Z"
        fill="white"
      />
      <path
        d="M27.9501 0.328H44.0781C44.5101 0.328 44.7261 0.52 44.7261 0.904C44.7261 1.08 44.6701 1.272 44.5581 1.48L38.5581 11.848C38.3821 12.168 38.1101 12.44 37.7421 12.664C37.3901 12.888 37.0621 13 36.7581 13H20.6301C20.1821 13 19.9581 12.808 19.9581 12.424C19.9581 12.248 20.0141 12.056 20.1261 11.848L22.7901 7.24C22.9821 6.92 23.2541 6.648 23.6061 6.424C23.9581 6.2 24.2941 6.088 24.6141 6.088H32.6781C32.9981 6.088 33.3341 5.976 33.6861 5.752C34.0381 5.528 34.3101 5.256 34.5021 4.936L35.8221 2.632C35.9341 2.424 35.9901 2.232 35.9901 2.056C35.9901 1.672 35.7741 1.48 35.3421 1.48C35.0221 1.48 34.6861 1.592 34.3341 1.816C33.9821 2.04 33.7101 2.312 33.5181 2.632L32.8461 3.784C32.6701 4.104 32.3981 4.376 32.0301 4.6C31.6781 4.824 31.3501 4.936 31.0461 4.936H25.2861C24.8381 4.936 24.6141 4.744 24.6141 4.36C24.6141 4.184 24.6701 3.992 24.7821 3.784L26.1261 1.48C26.3021 1.16 26.5661 0.888 26.9181 0.664C27.2861 0.44 27.6301 0.328 27.9501 0.328ZM31.1661 10.696L32.5101 8.392C32.6221 8.184 32.6781 7.992 32.6781 7.816C32.6781 7.432 32.4541 7.24 32.0061 7.24C31.6861 7.24 31.3501 7.352 30.9981 7.576C30.6461 7.8 30.3821 8.072 30.2061 8.392L28.8621 10.696C28.7501 10.904 28.6941 11.096 28.6941 11.272C28.6941 11.656 28.9101 11.848 29.3421 11.848C29.6621 11.848 29.9981 11.736 30.3501 11.512C30.7181 11.288 30.9901 11.016 31.1661 10.696Z"
        fill="white"
      />
      <path
        d="M59.1604 14.008L65.7365 2.632C65.8485 2.424 65.9044 2.232 65.9044 2.056C65.9044 1.672 65.6805 1.48 65.2325 1.48C64.9125 1.48 64.5764 1.592 64.2244 1.816C63.8724 2.04 63.6084 2.312 63.4324 2.632L58.1044 11.848C57.9124 12.168 57.6404 12.44 57.2884 12.664C56.9364 12.888 56.6004 13 56.2804 13H50.5204C50.0724 13 49.8484 12.808 49.8484 12.424C49.8484 12.248 49.9124 12.056 50.0404 11.848L55.3444 2.632C55.4724 2.424 55.5364 2.232 55.5364 2.056C55.5364 1.672 55.3124 1.48 54.8644 1.48C54.5444 1.48 54.2084 1.592 53.8564 1.816C53.5044 2.04 53.2324 2.312 53.0404 2.632L47.7364 11.848C47.5444 12.168 47.2724 12.44 46.9204 12.664C46.5684 12.888 46.2324 13 45.9124 13H40.1524C39.7044 13 39.4804 12.808 39.4804 12.424C39.4804 12.248 39.5444 12.056 39.6724 11.848L45.6484 1.48C45.8404 1.16 46.1124 0.888 46.4644 0.664C46.8164 0.44 47.1524 0.328 47.4724 0.328H73.9684C74.4164 0.328 74.6404 0.52 74.6404 0.904C74.6404 1.08 74.5764 1.272 74.4484 1.48L63.3124 20.776C63.0724 21.192 62.8244 21.4 62.5684 21.4C62.4244 21.4 62.3044 21.32 62.2084 21.16L59.0164 15.76C58.9204 15.584 58.8724 15.36 58.8724 15.088C58.8724 14.688 58.9684 14.328 59.1604 14.008Z"
        fill="white"
      />
      <path
        d="M81.2494 7.24C80.9294 7.24 80.5934 7.352 80.2414 7.576C79.8894 7.8 79.6174 8.072 79.4254 8.392L78.1054 10.696C77.9774 10.904 77.9134 11.096 77.9134 11.272C77.9134 11.656 78.1374 11.848 78.5854 11.848C78.9054 11.848 79.2414 11.736 79.5934 11.512C79.9454 11.288 80.2174 11.016 80.4094 10.696L81.0814 9.544C81.2574 9.224 81.5214 8.952 81.8734 8.728C82.2254 8.504 82.5614 8.392 82.8814 8.392H88.6414C89.0894 8.392 89.3134 8.584 89.3134 8.968C89.3134 9.144 89.2574 9.336 89.1454 9.544L87.8014 11.848C87.6254 12.168 87.3535 12.44 86.9855 12.664C86.6335 12.888 86.2974 13 85.9774 13H69.8494C69.4174 13 69.2014 12.808 69.2014 12.424C69.2014 12.248 69.2574 12.056 69.3694 11.848L75.3694 1.48C75.5454 1.16 75.8094 0.888 76.1614 0.664C76.5134 0.44 76.8494 0.328 77.1694 0.328H93.2974C93.7454 0.328 93.9694 0.52 93.9694 0.904C93.9694 1.08 93.9134 1.272 93.8014 1.48L91.1375 6.088C90.9455 6.408 90.6734 6.68 90.3214 6.904C89.9694 7.128 89.6334 7.24 89.3134 7.24H81.2494ZM82.7614 2.632L81.4174 4.936C81.3054 5.144 81.2494 5.336 81.2494 5.512C81.2494 5.896 81.4734 6.088 81.9214 6.088C82.2254 6.088 82.5534 5.976 82.9054 5.752C83.2734 5.528 83.5455 5.256 83.7215 4.936L85.0654 2.632C85.1774 2.424 85.2334 2.232 85.2334 2.056C85.2334 1.672 85.0174 1.48 84.5854 1.48C84.2654 1.48 83.9214 1.592 83.5534 1.816C83.2014 2.04 82.9374 2.312 82.7614 2.632Z"
        fill="white"
      />
      <path
        d="M50.6 24.936H44.84C44.408 24.936 44.192 24.744 44.192 24.36C44.192 24.184 44.248 23.992 44.36 23.784L45.032 22.632C45.144 22.424 45.2 22.232 45.2 22.056C45.2 21.672 44.976 21.48 44.528 21.48C44.224 21.48 43.888 21.592 43.52 21.816C43.168 22.04 42.904 22.312 42.728 22.632L41.384 24.936C41.272 25.144 41.216 25.336 41.216 25.512C41.216 25.896 41.44 26.088 41.888 26.088H49.952C50.384 26.088 50.6 26.28 50.6 26.664C50.6 26.84 50.544 27.032 50.432 27.24L47.768 31.848C47.592 32.168 47.32 32.44 46.952 32.664C46.6 32.888 46.264 33 45.944 33H29.816C29.384 33 29.168 32.808 29.168 32.424C29.168 32.248 29.224 32.056 29.336 31.848L30.656 29.544C30.848 29.224 31.12 28.952 31.472 28.728C31.824 28.504 32.16 28.392 32.48 28.392H38.24C38.688 28.392 38.912 28.584 38.912 28.968C38.912 29.144 38.848 29.336 38.72 29.544L38.072 30.696C37.944 30.904 37.88 31.096 37.88 31.272C37.88 31.656 38.104 31.848 38.552 31.848C38.872 31.848 39.208 31.736 39.56 31.512C39.912 31.288 40.184 31.016 40.376 30.696L41.696 28.392C41.824 28.184 41.888 27.992 41.888 27.816C41.888 27.432 41.664 27.24 41.216 27.24H33.152C32.704 27.24 32.48 27.048 32.48 26.664C32.48 26.488 32.544 26.296 32.672 26.088L35.312 21.48C35.504 21.16 35.776 20.888 36.128 20.664C36.48 20.44 36.816 20.328 37.136 20.328H53.264C53.712 20.328 53.936 20.52 53.936 20.904C53.936 21.08 53.872 21.272 53.744 21.48L52.424 23.784C52.248 24.104 51.976 24.376 51.608 24.6C51.256 24.824 50.92 24.936 50.6 24.936Z"
        fill="white"
      />
      <path
        d="M66.0401 20.328H82.1681C82.6161 20.328 82.8401 20.52 82.8401 20.904C82.8401 21.08 82.7841 21.272 82.6721 21.48L76.6721 31.848C76.4961 32.168 76.2241 32.44 75.8561 32.664C75.5041 32.888 75.1761 33 74.8721 33H58.7441C58.2961 33 58.0721 32.808 58.0721 32.424C58.0721 32.248 58.1281 32.056 58.2401 31.848L64.2401 21.48C64.4161 21.16 64.6801 20.888 65.0321 20.664C65.4001 20.44 65.7361 20.328 66.0401 20.328ZM69.2801 30.696L73.9361 22.632C74.0481 22.424 74.1041 22.232 74.1041 22.056C74.1041 21.672 73.8881 21.48 73.4561 21.48C73.1361 21.48 72.7921 21.592 72.4241 21.816C72.0721 22.04 71.8081 22.312 71.6321 22.632L66.9761 30.696C66.8641 30.904 66.8081 31.096 66.8081 31.272C66.8081 31.656 67.0241 31.848 67.4561 31.848C67.7761 31.848 68.1121 31.736 68.4641 31.512C68.8321 31.288 69.1041 31.016 69.2801 30.696Z"
        fill="white"
      />
      <path
        d="M85.2688 20.328H101.397C101.845 20.328 102.069 20.52 102.069 20.904C102.069 21.08 102.005 21.272 101.877 21.48L100.557 23.784C100.381 24.104 100.109 24.376 99.7408 24.6C99.3888 24.824 99.0528 24.936 98.7328 24.936H92.9728C92.5408 24.936 92.3248 24.744 92.3248 24.36C92.3248 24.184 92.3808 23.992 92.4928 23.784L93.1648 22.632C93.2768 22.424 93.3328 22.232 93.3328 22.056C93.3328 21.672 93.1088 21.48 92.6608 21.48C92.3568 21.48 92.0208 21.592 91.6528 21.816C91.3008 22.04 91.0368 22.312 90.8608 22.632L85.5328 31.848C85.3568 32.168 85.0848 32.44 84.7168 32.664C84.3648 32.888 84.0288 33 83.7088 33H77.9488C77.5168 33 77.3008 32.808 77.3008 32.424C77.3008 32.248 77.3568 32.056 77.4688 31.848L83.4448 21.48C83.6368 21.16 83.9088 20.888 84.2608 20.664C84.6128 20.44 84.9488 20.328 85.2688 20.328Z"
        fill="white"
      />
      <path
        d="M109.249 27.24C108.929 27.24 108.593 27.352 108.241 27.576C107.889 27.8 107.617 28.072 107.425 28.392L106.105 30.696C105.977 30.904 105.913 31.096 105.913 31.272C105.913 31.656 106.137 31.848 106.585 31.848C106.905 31.848 107.241 31.736 107.593 31.512C107.945 31.288 108.217 31.016 108.409 30.696L109.081 29.544C109.257 29.224 109.521 28.952 109.873 28.728C110.225 28.504 110.561 28.392 110.881 28.392H116.641C117.089 28.392 117.313 28.584 117.313 28.968C117.313 29.144 117.257 29.336 117.145 29.544L115.801 31.848C115.625 32.168 115.353 32.44 114.985 32.664C114.633 32.888 114.297 33 113.977 33H97.8494C97.4174 33 97.2014 32.808 97.2014 32.424C97.2014 32.248 97.2574 32.056 97.3694 31.848L103.369 21.48C103.545 21.16 103.809 20.888 104.161 20.664C104.513 20.44 104.849 20.328 105.169 20.328H121.297C121.745 20.328 121.969 20.52 121.969 20.904C121.969 21.08 121.913 21.272 121.801 21.48L119.137 26.088C118.945 26.408 118.673 26.68 118.321 26.904C117.969 27.128 117.633 27.24 117.313 27.24H109.249ZM110.761 22.632L109.417 24.936C109.305 25.144 109.249 25.336 109.249 25.512C109.249 25.896 109.473 26.088 109.921 26.088C110.225 26.088 110.553 25.976 110.905 25.752C111.273 25.528 111.545 25.256 111.721 24.936L113.065 22.632C113.177 22.424 113.233 22.232 113.233 22.056C113.233 21.672 113.017 21.48 112.585 21.48C112.265 21.48 111.921 21.592 111.553 21.816C111.201 22.04 110.937 22.312 110.761 22.632Z"
        fill="white"
      />
      <path
        d="M65.7007 16.872L51.9247 40.776C51.6847 41.192 51.4287 41.4 51.1567 41.4C51.0127 41.4 50.8927 41.32 50.7967 41.16L47.6287 35.76C47.5327 35.6 47.4847 35.4 47.4847 35.16C47.4847 34.696 47.6047 34.264 47.8447 33.864L58.9807 14.568C59.1567 14.248 59.4207 13.976 59.7727 13.752C60.1407 13.528 60.4847 13.416 60.8047 13.416H66.5647C66.9967 13.416 67.2127 13.608 67.2127 13.992C67.2127 14.168 67.1567 14.36 67.0447 14.568L65.7007 16.872Z"
        fill="white"
      />
      <path
        d="M64 16C64 15.4477 64.4477 15 65 15H83.865C84.7128 15 85.176 15.9889 84.6332 16.6402L83.7999 17.6402C83.6099 17.8682 83.3284 18 83.0316 18H65C64.4477 18 64 17.5523 64 17V16Z"
        fill="white"
      />
    </svg>
  );
}
