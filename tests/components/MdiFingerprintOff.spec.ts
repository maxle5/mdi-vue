
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFingerprintOff from "../../src/components/MdiFingerprintOff.vue";

test("MdiFingerprintOff snapshot", () => {
  const wrapper = mount(MdiFingerprintOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
