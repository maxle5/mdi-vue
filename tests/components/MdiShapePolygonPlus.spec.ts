
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapePolygonPlus from "../../src/components/MdiShapePolygonPlus.vue";

test("MdiShapePolygonPlus snapshot", () => {
  const wrapper = mount(MdiShapePolygonPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
