
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound71 from "../../src/components/MdiSurroundSound71.vue";

test("MdiSurroundSound71 snapshot", () => {
  const wrapper = mount(MdiSurroundSound71, {});
  expect(wrapper.html()).toMatchSnapshot();
});
