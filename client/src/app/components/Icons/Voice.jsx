const VoiceIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12 22v-3.161'
      stroke='#130F26'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      clipRule='evenodd'
      d='M12 14.848v0c-2.243 0-4.062-1.826-4.062-4.08V6.081C7.938 3.827 9.757 2 12 2c2.244 0 4.062 1.827 4.062 4.08v4.688A4.07 4.07 0 0 1 12 14.848Z'
      stroke='#128C7E'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 10.8c0 4.44-3.581 8.038-8 8.038-4.419 0-8-3.598-8-8.037'
      stroke='#130F26'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default VoiceIcon
