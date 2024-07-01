
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseMinusOutline from "../../src/components/MdiBriefcaseMinusOutline.vue";

test("MdiBriefcaseMinusOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
