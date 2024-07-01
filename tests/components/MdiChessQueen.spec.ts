
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChessQueen from "../../src/components/MdiChessQueen.vue";

test("MdiChessQueen snapshot", () => {
  const wrapper = mount(MdiChessQueen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
