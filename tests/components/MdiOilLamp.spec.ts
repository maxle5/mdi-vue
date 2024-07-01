
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOilLamp from "../../src/components/MdiOilLamp.vue";

test("MdiOilLamp snapshot", () => {
  const wrapper = mount(MdiOilLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
