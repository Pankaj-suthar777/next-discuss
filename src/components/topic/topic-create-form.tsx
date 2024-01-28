"use client";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">Create a Topic</h3>
              <Input
                name="name"
                label="Name"
                labelPlacement="outside"
                placeholder="Name"
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(", ")}
              ></Input>
              <Textarea
                name="description"
                label="Description"
                labelPlacement="outside"
                placeholder="Describe your topic"
                isInvalid={!!formState.errors.description}
                errorMessage={formState.errors.description?.join(", ")}
              ></Textarea>
              {formState.errors._form ? (
                <div className="p-2 bg-red-200 border border-red-400 rounded-lg">
                  {formState.errors._form?.join(", ")}
                </div>
              ) : null}
              <FormButton>Save</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopicCreateForm;
