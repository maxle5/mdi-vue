
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLiquidSpot from "../../src/components/MdiLiquidSpot.vue";

test("MdiLiquidSpot snapshot", () => {
  const wrapper = mount(MdiLiquidSpot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
