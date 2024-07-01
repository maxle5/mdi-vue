
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseAccountOutline from "../../src/components/MdiBriefcaseAccountOutline.vue";

test("MdiBriefcaseAccountOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
