
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneOff from "../../src/components/MdiPhoneOff.vue";

test("MdiPhoneOff snapshot", () => {
  const wrapper = mount(MdiPhoneOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
