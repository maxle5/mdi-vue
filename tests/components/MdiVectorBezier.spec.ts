
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorBezier from "../../src/components/MdiVectorBezier.vue";

test("MdiVectorBezier snapshot", () => {
  const wrapper = mount(MdiVectorBezier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
