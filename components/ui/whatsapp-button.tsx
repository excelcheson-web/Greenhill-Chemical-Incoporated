"use client";

const WHATSAPP_NUMBER = "639625021374";
const WHATSAPP_MESSAGE = "Hello! I'd like to inquire about your chemical products.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:h-16 sm:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path
          d="M16.004 2.002C8.27 2.002 2.004 8.268 2.004 15.998c0 2.468.644 4.882 1.87 7.01L2 30l7.192-1.884A13.94 13.94 0 0 0 16.004 30c7.73 0 13.996-6.266 13.996-13.998C30 8.268 23.734 2.002 16.004 2.002Zm0 25.596a11.55 11.55 0 0 1-5.89-1.61l-.422-.25-4.374 1.148 1.168-4.264-.276-.438A11.52 11.52 0 0 1 4.44 16c0-6.384 5.194-11.576 11.576-11.576 6.382 0 11.572 5.192 11.572 11.578 0 6.382-5.2 11.596-11.584 11.596Zm6.348-8.672c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.554-.174-.786.174-.232.348-.902 1.132-1.106 1.366-.204.232-.408.262-.756.088-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.734-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.408.522-.612.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.892-1.074-2.59-.284-.682-.57-.59-.786-.6-.204-.01-.436-.012-.668-.012-.232 0-.61.088-.93.436-.318.348-1.218 1.19-1.218 2.904 0 1.714 1.248 3.37 1.422 3.604.174.232 2.454 3.748 5.948 5.254.832.358 1.482.572 1.988.734.836.264 1.596.226 2.198.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.088-.146-.32-.232-.668-.408Z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  );
}
