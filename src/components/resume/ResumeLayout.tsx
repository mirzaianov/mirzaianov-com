import Left from './Left';
import Right from './Right';

export default function ResumeLayout() {
  return (
    <main className="flex justify-center">
      <div className="relative flex min-w-[325px] max-w-[325px] flex-col rounded-lg shadow-[5px_5px_0px_0px] outline outline-1 outline-primary lg:max-h-[1122px] lg:min-h-[1122px] lg:min-w-[794px] lg:max-w-[794px] lg:flex-row">
        <Left />
        <Right />
      </div>
    </main>
  );
}
