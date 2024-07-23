import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    return (
        <>
            <h2 className="h2 text-primary text-center lg:text-left">Contact me</h2>
            {/* <p className="text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, autem.
            </p> */}
            <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <Input type="text" placeholder="Firstname" />
                    <Input type="text" placeholder="Lastname" />
                    <Input type="email" placeholder="Email address" />
                    <Input type="text" placeholder="Phone number" />
                </div>
                <div>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-muted">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <div>
                    <Textarea placeholder="Type your message here." rows={6} />
                </div>
                <div>
                    <Button>
                        Send
                    </Button>
                </div>
            </div>
        </>
    )
}