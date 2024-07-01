
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindTurbineCheck from "../../src/components/MdiWindTurbineCheck.vue";

test("MdiWindTurbineCheck snapshot", () => {
  const wrapper = mount(MdiWindTurbineCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
