import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from '@/components/ui/toast';
import { Mail, User } from 'lucide-react';

const MyProfile = () => {
  const [profileImage, _] = useState<any>('');
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const defaultImage = 'https://example.com/my-default-image.png';

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSwitchChange = () => {
    setIsSwitchOn(prev => !prev);
    setShowToast(true);
  };

  return (
    <ToastProvider>
      <div className="overflow-hidden h-full mx-auto">
        <div className="relative p-8 space-y-2">
          <div>
            <Switch id="functional" checked={isSwitchOn} onCheckedChange={handleSwitchChange} />
          </div>
          <h1 className="text-3xl font-bold">홍길동님의 정보</h1>
          <div className="grid gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative mt-4">
                <Avatar size="lg">
                  <AvatarImage src="" alt="Profile Picture" />
                  <AvatarFallback>사용자</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mt-2">
                  <User className=" h-6 w-6" />
                  <h2 className="text-2xl font-semibold">길동무가없는홍길동</h2>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="h-5 w-5" />
                  <p className="text-lg">userEmail@example.com</p>
                </div>
              </div>
            </div>
            <div className="w-[20rem] m-auto space-y-4">
              <p className="text-xl font-medium text-center">관심 카테고리</p>
              <div className="grid grid-cols-3 gap-2">
                <Badge variant="soccer">축구</Badge>
                <Badge variant="tennis">테니스</Badge>
                <Badge variant="baseball">야구</Badge>
                <Badge variant="basketball">농구</Badge>
                <Badge variant="scubadiving">스쿠버 다이빙</Badge>
                <Badge variant="waterski">수상스키</Badge>
                <Badge variant="running">런닝</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/edit-profile">
            <Button className="w-[20rem]" variant="profile">
              정보 수정
            </Button>
          </Link>
        </div>

        {/* Toast Viewport */}
        <ToastViewport />

        {/* Toast Notification */}
        {showToast && (
          <Toast>
            <ToastTitle>알림</ToastTitle>
            <ToastDescription>
              {isSwitchOn ? '기능이 활성화되었습니다.' : '기능이 비활성화되었습니다.'}
            </ToastDescription>
            <ToastClose />
          </Toast>
        )}
      </div>
    </ToastProvider>
  );
};

export default MyProfile;
