
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindTurbine from "../../src/components/MdiWindTurbine.vue";

test("MdiWindTurbine snapshot", () => {
  const wrapper = mount(MdiWindTurbine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
