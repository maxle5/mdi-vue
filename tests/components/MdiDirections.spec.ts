
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDirections from "../../src/components/MdiDirections.vue";

test("MdiDirections snapshot", () => {
  const wrapper = mount(MdiDirections, {});
  expect(wrapper.html()).toMatchSnapshot();
});
