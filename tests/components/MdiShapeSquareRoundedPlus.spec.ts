
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapeSquareRoundedPlus from "../../src/components/MdiShapeSquareRoundedPlus.vue";

test("MdiShapeSquareRoundedPlus snapshot", () => {
  const wrapper = mount(MdiShapeSquareRoundedPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
