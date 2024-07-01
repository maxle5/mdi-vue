
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoWireless from "../../src/components/MdiVideoWireless.vue";

test("MdiVideoWireless snapshot", () => {
  const wrapper = mount(MdiVideoWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
