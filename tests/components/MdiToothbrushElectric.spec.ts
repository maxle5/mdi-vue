
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToothbrushElectric from "../../src/components/MdiToothbrushElectric.vue";

test("MdiToothbrushElectric snapshot", () => {
  const wrapper = mount(MdiToothbrushElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
