
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiCheck from "../../src/components/MdiWifiCheck.vue";

test("MdiWifiCheck snapshot", () => {
  const wrapper = mount(MdiWifiCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
