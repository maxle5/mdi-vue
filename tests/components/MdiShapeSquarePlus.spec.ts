
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapeSquarePlus from "../../src/components/MdiShapeSquarePlus.vue";

test("MdiShapeSquarePlus snapshot", () => {
  const wrapper = mount(MdiShapeSquarePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
