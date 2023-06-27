import StuItem from '../../atoms/StuItem'
import * as S from './style'

const StuList = () => {
  return (
    <S.Layer>
      <StuItem stuNum="학번" name="이름" where="상태" filter />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
      <StuItem stuNum="3101" name="강경민" where="외출" />
    </S.Layer>
  )
}

export default StuList
