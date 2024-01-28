import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import MyForm from "./myform"

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
