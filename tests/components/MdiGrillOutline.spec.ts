
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGrillOutline from "../../src/components/MdiGrillOutline.vue";

test("MdiGrillOutline snapshot", () => {
  const wrapper = mount(MdiGrillOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
