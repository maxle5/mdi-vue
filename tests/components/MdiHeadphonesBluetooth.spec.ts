
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadphonesBluetooth from "../../src/components/MdiHeadphonesBluetooth.vue";

test("MdiHeadphonesBluetooth snapshot", () => {
  const wrapper = mount(MdiHeadphonesBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
