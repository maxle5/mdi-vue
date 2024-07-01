
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandPlotsCircleVariant from "../../src/components/MdiLandPlotsCircleVariant.vue";

test("MdiLandPlotsCircleVariant snapshot", () => {
  const wrapper = mount(MdiLandPlotsCircleVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
