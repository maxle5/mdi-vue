
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChessKnight from "../../src/components/MdiChessKnight.vue";

test("MdiChessKnight snapshot", () => {
  const wrapper = mount(MdiChessKnight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
