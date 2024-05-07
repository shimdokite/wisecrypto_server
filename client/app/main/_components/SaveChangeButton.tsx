interface SaveChangeButtonProps {
  children: string;
}

export default function SaveChangeButton({ children }: SaveChangeButtonProps) {
  return (
    <div className="w-full fixed bottom-0 bg-White-1 p-4 shadow-topShadow">
      <button
        type="submit"
        className="w-full bg-Primary-1 text-White-1 text-sm text-center py-[11px] rounded-[4px]">
        {children}
      </button>
    </div>
  );
}
