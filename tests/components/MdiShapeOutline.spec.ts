
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapeOutline from "../../src/components/MdiShapeOutline.vue";

test("MdiShapeOutline snapshot", () => {
  const wrapper = mount(MdiShapeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
