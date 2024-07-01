
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeedometerMedium from "../../src/components/MdiSpeedometerMedium.vue";

test("MdiSpeedometerMedium snapshot", () => {
  const wrapper = mount(MdiSpeedometerMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
