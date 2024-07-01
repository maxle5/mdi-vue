
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSatelliteVariant from "../../src/components/MdiSatelliteVariant.vue";

test("MdiSatelliteVariant snapshot", () => {
  const wrapper = mount(MdiSatelliteVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
