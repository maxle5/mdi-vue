
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseCheckOutline from "../../src/components/MdiBriefcaseCheckOutline.vue";

test("MdiBriefcaseCheckOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
