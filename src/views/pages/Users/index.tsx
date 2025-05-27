import CustomTable from '@/components/table/custom-table';

const UsersView = () => {
  return (
    <div>
      <CustomTable
        tHeads={['Invoice', 'Status', 'Method', 'Amount']}
        isFooter
        tabs={['All', 'Paid', 'Pending', 'Unpaid']}
      />
    </div>
  );
};

export default UsersView;
