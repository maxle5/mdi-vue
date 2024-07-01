
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkateboard from "../../src/components/MdiSkateboard.vue";

test("MdiSkateboard snapshot", () => {
  const wrapper = mount(MdiSkateboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
