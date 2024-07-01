
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWiperWashAlert from "../../src/components/MdiWiperWashAlert.vue";

test("MdiWiperWashAlert snapshot", () => {
  const wrapper = mount(MdiWiperWashAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
