
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapeOvalPlus from "../../src/components/MdiShapeOvalPlus.vue";

test("MdiShapeOvalPlus snapshot", () => {
  const wrapper = mount(MdiShapeOvalPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
