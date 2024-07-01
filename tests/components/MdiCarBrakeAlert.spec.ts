
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeAlert from "../../src/components/MdiCarBrakeAlert.vue";

test("MdiCarBrakeAlert snapshot", () => {
  const wrapper = mount(MdiCarBrakeAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
