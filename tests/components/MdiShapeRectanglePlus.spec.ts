
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapeRectanglePlus from "../../src/components/MdiShapeRectanglePlus.vue";

test("MdiShapeRectanglePlus snapshot", () => {
  const wrapper = mount(MdiShapeRectanglePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
