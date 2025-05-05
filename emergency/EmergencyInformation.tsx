
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface EmergencyInformationProps {
  isAIDoctor?: boolean;
}

const EmergencyInformation: React.FC<EmergencyInformationProps> = ({ isAIDoctor = false }) => {
  const [language, setLanguage] = useState<'english' | 'tamil' | 'hindi'>('english');

  const toggleLanguage = () => {
    const languages: ('english' | 'tamil' | 'hindi')[] = ['english', 'tamil', 'hindi'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const getContent = () => {
    if (language === 'english') {
      return isAIDoctor ? (
        <>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
            You are currently connected to our AI-powered doctor system. While our AI can provide 
            immediate assistance and information, it is not a substitute for a human medical professional 
            in critical situations.
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            If your condition requires immediate in-person care, 
            please call an ambulance at <span className="font-bold">108</span> or proceed to the nearest emergency room.
            Our team of specialists led by Dr. Suresh Sharma and Dr. Priya Patel are on standby for critical cases.
          </p>
        </>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-300">
          This is an emergency consultation. If your condition requires immediate in-person care, 
          please call an ambulance at <span className="font-bold">108</span> or proceed to the nearest emergency room.
          Dr. Rajiv Mehta from our emergency department will coordinate your care upon arrival.
        </p>
      );
    } else if (language === 'tamil') {
      return isAIDoctor ? (
        <>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
            நீங்கள் தற்போது எங்கள் AI-இயக்கப்படும் மருத்துவ அமைப்புடன் இணைக்கப்பட்டுள்ளீர்கள். 
            எங்கள் AI உடனடி உதவி மற்றும் தகவல்களை வழங்க முடிந்தாலும், 
            நெருக்கடி நிலைமைகளில் இது மனித மருத்துவ நிபுணருக்கு மாற்றாக இருக்காது.
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            உங்கள் நிலைமை உடனடி நேரில் பராமரிப்பு தேவைப்பட்டால், 
            <span className="font-bold">108</span> என்ற எண்ணில் ஆம்புலன்சை அழைக்கவும் அல்லது அருகிலுள்ள அவசர சிகிச்சை அறைக்குச் செல்லவும்.
            டாக்டர் சுரேஷ் சர்மா மற்றும் டாக்டர் பிரியா பட்டேல் தலைமையிலான எங்கள் நிபுணர்கள் குழு முக்கியமான சம்பவங்களுக்காக தயார் நிலையில் உள்ளனர்.
          </p>
        </>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-300">
          இது ஒரு அவசர ஆலோசனை. உங்கள் நிலைமைக்கு உடனடி நேரில் பராமரிப்பு தேவைப்பட்டால், 
          <span className="font-bold">108</span> என்ற எண்ணில் ஆம்புலன்சை அழைக்கவும் அல்லது அருகிலுள்ள அவசர சிகிச்சை அறைக்குச் செல்லவும்.
          எங்கள் அவசர துறையின் டாக்டர் ராஜீவ் மேத்தா உங்கள் வருகையின் போது உங்கள் பராமரிப்பை ஒருங்கிணைப்பார்.
        </p>
      );
    } else {
      return isAIDoctor ? (
        <>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
            आप वर्तमान में हमारे AI-संचालित डॉक्टर सिस्टम से जुड़े हैं। हमारा AI तत्काल सहायता और जानकारी प्रदान कर सकता है,
            लेकिन यह गंभीर स्थितियों में मानव चिकित्सा पेशेवर का विकल्प नहीं है।
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            यदि आपकी स्थिति के लिए तत्काल व्यक्तिगत देखभाल की आवश्यकता है,
            कृपया <span className="font-bold">108</span> पर एंबुलेंस को कॉल करें या निकटतम आपातकालीन कक्ष में जाएं।
            डॉ. सुरेश शर्मा और डॉ. प्रिया पटेल के नेतृत्व में हमारी विशेषज्ञों की टीम महत्वपूर्ण मामलों के लिए तैयार है।
          </p>
        </>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-300">
          यह एक आपातकालीन परामर्श है। यदि आपकी स्थिति के लिए तत्काल व्यक्तिगत देखभाल की आवश्यकता है,
          कृपया <span className="font-bold">108</span> पर एंबुलेंस को कॉल करें या निकटतम आपातकालीन कक्ष में जाएं।
          हमारे आपातकालीन विभाग के डॉ. राजीव मेहता आपके आने पर आपकी देखभाल का समन्वय करेंगे।
        </p>
      );
    }
  };

  return (
    <div className="bg-red-50 dark:bg-red-900/20 mt-4 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-red-800 dark:text-red-400">
          {language === 'english' ? 'Important Information' : 
           language === 'tamil' ? 'முக்கியமான தகவல்' : 
           'महत्वपूर्ण जानकारी'}
        </h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleLanguage} 
          className="flex items-center text-xs h-8"
        >
          <Globe className="h-3 w-3 mr-1" />
          {language === 'english' ? 'தமிழ் / हिंदी' : 
           language === 'tamil' ? 'हिंदी / English' : 
           'English / தமிழ்'}
        </Button>
      </div>
      
      {getContent()}
    </div>
  );
};

export default EmergencyInformation;
