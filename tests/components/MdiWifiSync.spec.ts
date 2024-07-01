
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiSync from "../../src/components/MdiWifiSync.vue";

test("MdiWifiSync snapshot", () => {
  const wrapper = mount(MdiWifiSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
