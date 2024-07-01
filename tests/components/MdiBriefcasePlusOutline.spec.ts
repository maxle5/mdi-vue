
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcasePlusOutline from "../../src/components/MdiBriefcasePlusOutline.vue";

test("MdiBriefcasePlusOutline snapshot", () => {
  const wrapper = mount(MdiBriefcasePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
