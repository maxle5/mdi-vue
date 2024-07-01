
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChessKing from "../../src/components/MdiChessKing.vue";

test("MdiChessKing snapshot", () => {
  const wrapper = mount(MdiChessKing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
