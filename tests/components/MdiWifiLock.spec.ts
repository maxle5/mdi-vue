
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiLock from "../../src/components/MdiWifiLock.vue";

test("MdiWifiLock snapshot", () => {
  const wrapper = mount(MdiWifiLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
