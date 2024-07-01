
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantOff from "../../src/components/MdiFlagVariantOff.vue";

test("MdiFlagVariantOff snapshot", () => {
  const wrapper = mount(MdiFlagVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
