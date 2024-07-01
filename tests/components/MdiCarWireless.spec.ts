
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarWireless from "../../src/components/MdiCarWireless.vue";

test("MdiCarWireless snapshot", () => {
  const wrapper = mount(MdiCarWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
