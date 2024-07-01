
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevationRise from "../../src/components/MdiElevationRise.vue";

test("MdiElevationRise snapshot", () => {
  const wrapper = mount(MdiElevationRise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
