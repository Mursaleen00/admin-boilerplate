import BackButton from '@/components/button/back-button';
import Button from '@/components/button/button';
import Input from '@/components/inputs/input';
import { MultiSelect } from '@/components/inputs/multi-select';
import OtpInput from '@/components/inputs/otp-input';
import SearchInput from '@/components/inputs/search-input';
import { SingleSelect } from '@/components/inputs/select';
import { useState } from 'react';

const ComponentsView = () => {
  const [multi, setMulti] = useState<string[]>([]);
  const [single, setSingle] = useState('');
  const [otp, setOTP] = useState('123');

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col flex-wrap gap-2'>
        <h1 className='text-xl font-semibold'>Inputs</h1>
        <div className='flex flex-wrap gap-4'>
          <MultiSelect
            label='Multi select'
            options={[
              { label: 'Lorem', value: 'lorem' },
              { label: 'ipsum', value: 'ipsum' },
            ]}
            onChange={setMulti}
            values={multi}
            isBadges
          />

          <SingleSelect
            label='Single select'
            options={[
              { label: 'Lorem', value: 'lorem' },
              { label: 'ipsum', value: 'ipsum' },
            ]}
            onChange={setSingle}
            value={single}
          />

          <SearchInput />

          <Input
            // label='Input'
            className='!sm:w-fit'
            placeholder='Input'
          />

          <OtpInput
            otp={otp}
            setFieldValue={setOTP}
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>Buttons</h1>
        <div className='flex flex-wrap gap-4'>
          <BackButton />

          <Button
            text='Button'
            className='!w-fit'
          />
          <Button
            isOutline
            text='Button'
            className='!w-fit'
          />
          <Button
            isPending
            className='!w-fit'
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentsView;
