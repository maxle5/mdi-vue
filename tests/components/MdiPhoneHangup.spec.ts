
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneHangup from "../../src/components/MdiPhoneHangup.vue";

test("MdiPhoneHangup snapshot", () => {
  const wrapper = mount(MdiPhoneHangup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
