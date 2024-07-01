
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiControllerClassic from "../../src/components/MdiControllerClassic.vue";

test("MdiControllerClassic snapshot", () => {
  const wrapper = mount(MdiControllerClassic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
