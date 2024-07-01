
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseArrowLeftRight from "../../src/components/MdiBriefcaseArrowLeftRight.vue";

test("MdiBriefcaseArrowLeftRight snapshot", () => {
  const wrapper = mount(MdiBriefcaseArrowLeftRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
