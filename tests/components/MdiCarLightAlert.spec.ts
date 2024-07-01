
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarLightAlert from "../../src/components/MdiCarLightAlert.vue";

test("MdiCarLightAlert snapshot", () => {
  const wrapper = mount(MdiCarLightAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
