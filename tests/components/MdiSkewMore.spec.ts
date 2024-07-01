
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkewMore from "../../src/components/MdiSkewMore.vue";

test("MdiSkewMore snapshot", () => {
  const wrapper = mount(MdiSkewMore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
