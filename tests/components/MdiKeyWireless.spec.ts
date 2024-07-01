
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyWireless from "../../src/components/MdiKeyWireless.vue";

test("MdiKeyWireless snapshot", () => {
  const wrapper = mount(MdiKeyWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
