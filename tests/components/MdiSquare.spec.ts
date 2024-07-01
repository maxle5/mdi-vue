
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquare from "../../src/components/MdiSquare.vue";

test("MdiSquare snapshot", () => {
  const wrapper = mount(MdiSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
