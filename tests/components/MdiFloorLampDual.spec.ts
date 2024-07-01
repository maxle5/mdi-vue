
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampDual from "../../src/components/MdiFloorLampDual.vue";

test("MdiFloorLampDual snapshot", () => {
  const wrapper = mount(MdiFloorLampDual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
