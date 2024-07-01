
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeedometer from "../../src/components/MdiSpeedometer.vue";

test("MdiSpeedometer snapshot", () => {
  const wrapper = mount(MdiSpeedometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
