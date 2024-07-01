
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterWell from "../../src/components/MdiWaterWell.vue";

test("MdiWaterWell snapshot", () => {
  const wrapper = mount(MdiWaterWell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
