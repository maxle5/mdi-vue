
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneBluetooth from "../../src/components/MdiPhoneBluetooth.vue";

test("MdiPhoneBluetooth snapshot", () => {
  const wrapper = mount(MdiPhoneBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
