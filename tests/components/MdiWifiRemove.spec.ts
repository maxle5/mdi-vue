
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiRemove from "../../src/components/MdiWifiRemove.vue";

test("MdiWifiRemove snapshot", () => {
  const wrapper = mount(MdiWifiRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
