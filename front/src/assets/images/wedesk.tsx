import React from 'react'

export function SVGLogoWithText({ className, type = 'dark' }: { className?: string, type?: 'dark' | 'light' | 'normal' }) {
  return (
    <div className={className}>
      <svg width='100%' height='100%' viewBox='0 0 192 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M15.1539 12.1673L13.4104 5.6167L27.7253 1.75519C29.451 1.28967 31.2897 1.53337 32.8369 2.43268C34.3841 3.33199 35.5131 4.81324 35.9755 6.55057L36.3242 7.86069L16.8039 13.1264C16.4588 13.2195 16.0911 13.1708 15.7816 12.9909C15.4722 12.811 15.2464 12.5148 15.1539 12.1673Z' fill={type === 'light' ? 'white' : '#3B82F6'} />
        <path d='M26.9605 13.7704L33.4673 12.0151L37.3029 26.4265C37.7653 28.1638 37.5233 30.0149 36.63 31.5726C35.7367 33.1302 34.2654 34.2668 32.5397 34.7323L31.2383 35.0834L26.0079 15.4315C25.9154 15.0841 25.9638 14.7139 26.1425 14.4023C26.3211 14.0908 26.6154 13.8635 26.9605 13.7704Z' fill={type === 'light' ? 'white' : '#3B82F6'} />
        <path d='M24.926 25.8324L26.6694 32.3831L12.3545 36.2446C10.6288 36.7101 8.79014 36.4664 7.24291 35.5671C5.69569 34.6678 4.5667 33.1865 4.1043 31.4492L3.7556 30.1391L23.2759 24.8734C23.621 24.7803 23.9888 24.829 24.2982 25.0089C24.6077 25.1887 24.8335 25.485 24.926 25.8324Z' fill={type === 'light' ? 'white' : '#3B82F6'} />
        <path d='M12.0859 23.8856L5.5791 25.6409L1.74344 11.2295C1.28104 9.49217 1.52311 7.64106 2.4164 6.08341C3.30969 4.52576 4.78102 3.38916 6.50672 2.92364L7.80808 2.57259L13.0385 22.2245C13.131 22.5719 13.0826 22.9421 12.9039 23.2537C12.7253 23.5652 12.431 23.7925 12.0859 23.8856Z' fill={type === 'light' ? 'white' : '#3B82F6'} />
        <path d='M83.5415 8.39077L76.2006 33.3243H71.6037L66.4009 14.4537L60.8774 33.3243L56.3161 33.3602L52.806 20.8755L49.2959 8.39077H53.6078L58.7393 28.6964L64.2984 8.39077H68.8597L74.0269 28.5887L79.194 8.39077H83.5415Z' fill={type === 'normal' ? 'black' : 'white'} />
        <path d='M104.888 22.9563C104.888 23.6977 104.84 24.3674 104.745 24.9653H89.7429C89.8617 26.5438 90.4438 27.8114 91.4891 28.7681C92.5344 29.7248 93.8173 30.2031 95.3377 30.2031C97.5233 30.2031 99.0675 29.2823 99.9703 27.4407H104.353C103.76 29.2584 102.679 30.7532 101.111 31.9252C99.5664 33.0732 97.6421 33.6472 95.3377 33.6472C93.4609 33.6472 91.7742 33.2286 90.2775 32.3916C88.8045 31.5305 87.6405 30.3347 86.7852 28.804C85.9537 27.2494 85.538 25.4556 85.538 23.4226C85.538 21.3897 85.9418 19.6079 86.7496 18.0772C87.5811 16.5226 88.7333 15.3267 90.2062 14.4896C91.7029 13.6525 93.4134 13.234 95.3377 13.234C97.1908 13.234 98.8419 13.6406 100.291 14.4537C101.74 15.2669 102.869 16.4149 103.676 17.8978C104.484 19.3567 104.888 21.0429 104.888 22.9563ZM100.647 21.6647C100.624 20.158 100.089 18.9502 99.0438 18.0413C97.9985 17.1325 96.7037 16.678 95.1595 16.678C93.7579 16.678 92.5581 17.1325 91.5603 18.0413C90.5626 18.9262 89.9686 20.1341 89.7786 21.6647H100.647Z' fill={type === 'normal' ? 'black' : 'white'} />
        <path d='M116.975 8.39077C119.612 8.39077 121.917 8.90499 123.888 9.93342C125.884 10.9379 127.416 12.3969 128.485 14.3102C129.578 16.1997 130.125 18.412 130.125 20.9472C130.125 23.4824 129.578 25.6828 128.485 27.5483C127.416 29.4139 125.884 30.8489 123.888 31.8534C121.917 32.834 119.612 33.3243 116.975 33.3243H108.886V8.39077H116.975ZM116.975 29.9879C119.873 29.9879 122.095 29.1986 123.639 27.6201C125.183 26.0416 125.955 23.8173 125.955 20.9472C125.955 18.0533 125.183 15.7931 123.639 14.1667C122.095 12.5404 119.873 11.7272 116.975 11.7272H112.948V29.9879H116.975Z' fill={type === 'normal' ? 'black' : 'white'} />
        <path d='M152.147 22.9563C152.147 23.6977 152.099 24.3674 152.004 24.9653H137.002C137.12 26.5438 137.702 27.8114 138.748 28.7681C139.793 29.7248 141.076 30.2031 142.596 30.2031C144.782 30.2031 146.326 29.2823 147.229 27.4407H151.612C151.018 29.2584 149.937 30.7532 148.369 31.9252C146.825 33.0732 144.901 33.6472 142.596 33.6472C140.72 33.6472 139.033 33.2286 137.536 32.3916C136.063 31.5305 134.899 30.3347 134.044 28.804C133.212 27.2494 132.797 25.4556 132.797 23.4226C132.797 21.3897 133.201 19.6079 134.008 18.0772C134.84 16.5226 135.992 15.3267 137.465 14.4896C138.962 13.6525 140.672 13.234 142.596 13.234C144.449 13.234 146.101 13.6406 147.55 14.4537C148.999 15.2669 150.127 16.4149 150.935 17.8978C151.743 19.3567 152.147 21.0429 152.147 22.9563ZM147.906 21.6647C147.882 20.158 147.348 18.9502 146.302 18.0413C145.257 17.1325 143.962 16.678 142.418 16.678C141.017 16.678 139.817 17.1325 138.819 18.0413C137.821 18.9262 137.227 20.1341 137.037 21.6647H147.906Z' fill={type === 'normal' ? 'black' : 'white'} />
        <path d='M163.272 33.6472C161.727 33.6472 160.338 33.3721 159.102 32.8221C157.891 32.248 156.929 31.4827 156.216 30.526C155.503 29.5454 155.123 28.4572 155.075 27.2613H159.28C159.352 28.0984 159.744 28.804 160.456 29.378C161.193 29.9281 162.108 30.2031 163.2 30.2031C164.341 30.2031 165.22 29.9879 165.837 29.5574C166.479 29.103 166.8 28.5289 166.8 27.8353C166.8 27.0939 166.443 26.5438 165.73 26.1851C165.042 25.8263 163.937 25.4317 162.416 25.0012C160.943 24.5946 159.744 24.2 158.817 23.8173C157.891 23.4346 157.083 22.8486 156.394 22.0594C155.729 21.2701 155.396 20.2297 155.396 18.9382C155.396 17.8858 155.705 16.9292 156.323 16.0681C156.94 15.1832 157.819 14.4896 158.96 13.9874C160.124 13.4851 161.454 13.234 162.951 13.234C165.184 13.234 166.978 13.808 168.332 14.956C169.71 16.0801 170.446 17.6228 170.541 19.584H166.479C166.408 18.699 166.051 17.9935 165.41 17.4673C164.768 16.9411 163.901 16.678 162.808 16.678C161.739 16.678 160.92 16.8813 160.35 17.2879C159.779 17.6945 159.494 18.2326 159.494 18.9023C159.494 19.4285 159.684 19.871 160.064 20.2297C160.445 20.5885 160.908 20.8755 161.454 21.0907C162.001 21.2821 162.808 21.5332 163.877 21.8441C165.303 22.2268 166.467 22.6214 167.37 23.028C168.296 23.4107 169.092 23.9847 169.757 24.75C170.422 25.5154 170.767 26.5319 170.791 27.7995C170.791 28.9236 170.482 29.9281 169.864 30.813C169.247 31.698 168.368 32.3916 167.227 32.8938C166.111 33.3961 164.792 33.6472 163.272 33.6472Z' fill={type === 'normal' ? 'black' : 'white'} />
        <path d='M182.949 23.4585L192 33.3243H186.512L179.243 24.8218V33.3243H175.18V6.77637H179.243V22.2029L186.37 13.5569H192L182.949 23.4585Z' fill={type === 'normal' ? 'black' : 'white'} />
      </svg>
    </div>
  )
}