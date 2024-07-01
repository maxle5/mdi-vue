
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseBluetooth from "../../src/components/MdiMouseBluetooth.vue";

test("MdiMouseBluetooth snapshot", () => {
  const wrapper = mount(MdiMouseBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
