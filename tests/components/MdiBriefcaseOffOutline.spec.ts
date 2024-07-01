
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseOffOutline from "../../src/components/MdiBriefcaseOffOutline.vue";

test("MdiBriefcaseOffOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
