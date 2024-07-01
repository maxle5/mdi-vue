
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunWireless from "../../src/components/MdiSunWireless.vue";

test("MdiSunWireless snapshot", () => {
  const wrapper = mount(MdiSunWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
