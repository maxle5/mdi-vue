
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseEyeOutline from "../../src/components/MdiBriefcaseEyeOutline.vue";

test("MdiBriefcaseEyeOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
