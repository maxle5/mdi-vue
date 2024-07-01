
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoWirelessOutline from "../../src/components/MdiVideoWirelessOutline.vue";

test("MdiVideoWirelessOutline snapshot", () => {
  const wrapper = mount(MdiVideoWirelessOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
