import BaseButton from '@/components/BaseButton.jsx'
// eslint-disable-next-line import/no-unresolved
import IconAccountBox from '~icons/mdi/play-circle-filled'

export default function ButtonList() {
  return (
    <ul>
      <li>
        <BaseButton type="button" btnStyle="primary">
          <IconAccountBox className="mr-2 w-6 h-6" />
          Why React
        </BaseButton>
      </li>
    </ul>
  )
}
