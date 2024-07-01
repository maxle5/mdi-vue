
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseCheck from "../../src/components/MdiBriefcaseCheck.vue";

test("MdiBriefcaseCheck snapshot", () => {
  const wrapper = mount(MdiBriefcaseCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
