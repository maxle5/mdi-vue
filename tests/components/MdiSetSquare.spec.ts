
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetSquare from "../../src/components/MdiSetSquare.vue";

test("MdiSetSquare snapshot", () => {
  const wrapper = mount(MdiSetSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
