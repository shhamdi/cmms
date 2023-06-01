import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";

export function RecentACT() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="./man (2).png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sameh Hamdi</p>
          <p className="text-sm text-muted-foreground">Sameh.hamdi@email.com</p>
        </div>
        <div className="ml-auto font-medium">See More Information</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 ">
          <AvatarImage src="./1.png" alt="Avatar" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fathi Saidani</p>
          <p className="text-sm text-muted-foreground">
            Fathi.saidani@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">See More Information</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="./woman.png" alt="Avatar" />
          <AvatarFallback>FS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hela Adouni</p>
          <p className="text-sm text-muted-foreground">Hela.adouni@email.com</p>
        </div>
        <div className="ml-auto font-medium">See More Information</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="./man.png" alt="Avatar" />
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Anis Moulahi</p>
          <p className="text-sm text-muted-foreground">
            Anis.moulahi@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">See More Information</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="./woman (1).png" alt="Avatar" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Rania Maktouf</p>
          <p className="text-sm text-muted-foreground">
            Rania.maktouf@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">See More Information</div>
      </div>
    </div>
  );
}
