
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneClassicOff from "../../src/components/MdiPhoneClassicOff.vue";

test("MdiPhoneClassicOff snapshot", () => {
  const wrapper = mount(MdiPhoneClassicOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
