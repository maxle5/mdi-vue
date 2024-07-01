
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapePlus from "../../src/components/MdiShapePlus.vue";

test("MdiShapePlus snapshot", () => {
  const wrapper = mount(MdiShapePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
