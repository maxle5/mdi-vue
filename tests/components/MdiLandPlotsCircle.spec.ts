
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandPlotsCircle from "../../src/components/MdiLandPlotsCircle.vue";

test("MdiLandPlotsCircle snapshot", () => {
  const wrapper = mount(MdiLandPlotsCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
