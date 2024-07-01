
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodVariantOff from "../../src/components/MdiFoodVariantOff.vue";

test("MdiFoodVariantOff snapshot", () => {
  const wrapper = mount(MdiFoodVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
