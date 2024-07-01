
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTurbine from "../../src/components/MdiTurbine.vue";

test("MdiTurbine snapshot", () => {
  const wrapper = mount(MdiTurbine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
