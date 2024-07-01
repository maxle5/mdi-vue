
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiAlert from "../../src/components/MdiWifiAlert.vue";

test("MdiWifiAlert snapshot", () => {
  const wrapper = mount(MdiWifiAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
