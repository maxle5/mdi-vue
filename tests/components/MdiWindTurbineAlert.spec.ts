
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindTurbineAlert from "../../src/components/MdiWindTurbineAlert.vue";

test("MdiWindTurbineAlert snapshot", () => {
  const wrapper = mount(MdiWindTurbineAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
