
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiRefresh from "../../src/components/MdiWifiRefresh.vue";

test("MdiWifiRefresh snapshot", () => {
  const wrapper = mount(MdiWifiRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
