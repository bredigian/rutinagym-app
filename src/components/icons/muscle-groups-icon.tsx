import { G, Path, Svg } from "react-native-svg"

type Props = {
  size: number
  color: `#${string}`
}

export default function MuscleGroupsIcon({ size, color }: Props) {
  return (
    <Svg
      height={size}
      width={size}
      stroke={color}
      fill={color}
      viewBox="0 0 512 512"
    >
      <G>
        <G>
          <Path
            d="M477.604,261.355c-6.862-48.022-36.213-192.083-65.118-206.54c-2.605-1.302-6.609-3.484-11.663-6.23
			C340.186,15.624,280.307-12.401,253.229,5.676c-20.993,14-39.012,46.582-41.908,75.794c-1.681,16.974,1.963,30.474,10.535,39.046
			c18.787,18.797,81.533,11.002,114.607,5.292c-2.216,10.461-6.988,28.218-17.29,53.959c-16.532,41.33-7.62,106.03-2.838,133.399
			h-21.479c-16.698-34.833-39.722-52.755-68.5-58.48c-56.798-11.342-116.59,36.087-130.614,48.527H59.704
			c-5.501,0-9.952,4.456-9.952,9.952c0,5.496,4.451,9.952,9.952,9.952h39.809c2.498,0,4.908-1.263,6.745-2.955
			c0.612-0.569,62.63-57.128,116.259-46.427c23.802,4.751,42.997,22.851,57.051,53.31c1.633,3.528,5.161,6.023,9.039,6.023h39.809
			c3.023,0,5.87-1.691,7.766-4.048c1.885-2.352,2.604-5.597,1.953-8.543c-0.194-0.865-19.03-87.187-0.476-133.557
			c20.031-50.097,20.614-71.168,20.614-73.403c0-2.979-1.341-5.828-3.645-7.718c-2.294-1.885-5.326-2.653-8.261-2.07
			c-45.349,9.053-100.475,12.664-110.438,2.716c-4.092-4.092-5.841-12.482-4.801-23.017c2.323-23.471,16.882-50.355,33.142-61.192
			c13.85-9.233,56.604,5.539,127.047,43.836c5.316,2.887,9.525,5.175,12.168,6.492c13.617,8.606,43.104,112.464,54.407,191.606
			c8.426,58.96,2.206,148.546,0.399,171.39c-34.094,16.911-245.465,113.82-413.176,7.878c-4.655-2.921-10.788-1.541-13.733,3.1
			c-2.935,4.65-1.545,10.798,3.1,13.733c61.055,38.555,127.349,51.73,189.473,51.725c133.044-0.005,246.874-60.443,248.536-61.342
			c2.925-1.589,4.869-4.534,5.17-7.853C478.07,438.291,487.604,331.371,477.604,261.355z"
            strokeWidth="14"
          />
        </G>
      </G>
    </Svg>
  )
}
