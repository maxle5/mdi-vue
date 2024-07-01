
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagSuitcaseOffOutline from "../../src/components/MdiBagSuitcaseOffOutline.vue";

test("MdiBagSuitcaseOffOutline snapshot", () => {
  const wrapper = mount(MdiBagSuitcaseOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
