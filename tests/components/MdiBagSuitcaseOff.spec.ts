
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagSuitcaseOff from "../../src/components/MdiBagSuitcaseOff.vue";

test("MdiBagSuitcaseOff snapshot", () => {
  const wrapper = mount(MdiBagSuitcaseOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
