
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChessRook from "../../src/components/MdiChessRook.vue";

test("MdiChessRook snapshot", () => {
  const wrapper = mount(MdiChessRook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
