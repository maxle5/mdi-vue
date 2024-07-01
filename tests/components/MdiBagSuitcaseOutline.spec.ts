
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagSuitcaseOutline from "../../src/components/MdiBagSuitcaseOutline.vue";

test("MdiBagSuitcaseOutline snapshot", () => {
  const wrapper = mount(MdiBagSuitcaseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
