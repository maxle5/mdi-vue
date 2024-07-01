
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiSettings from "../../src/components/MdiWifiSettings.vue";

test("MdiWifiSettings snapshot", () => {
  const wrapper = mount(MdiWifiSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
