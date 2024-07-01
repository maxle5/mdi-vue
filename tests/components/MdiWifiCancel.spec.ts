
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiCancel from "../../src/components/MdiWifiCancel.vue";

test("MdiWifiCancel snapshot", () => {
  const wrapper = mount(MdiWifiCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
