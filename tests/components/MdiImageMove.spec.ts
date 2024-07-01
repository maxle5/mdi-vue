
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMove from "../../src/components/MdiImageMove.vue";

test("MdiImageMove snapshot", () => {
  const wrapper = mount(MdiImageMove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
