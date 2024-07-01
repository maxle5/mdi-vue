
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapeCirclePlus from "../../src/components/MdiShapeCirclePlus.vue";

test("MdiShapeCirclePlus snapshot", () => {
  const wrapper = mount(MdiShapeCirclePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
