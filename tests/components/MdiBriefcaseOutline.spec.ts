
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseOutline from "../../src/components/MdiBriefcaseOutline.vue";

test("MdiBriefcaseOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
