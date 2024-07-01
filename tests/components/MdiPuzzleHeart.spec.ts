
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleHeart from "../../src/components/MdiPuzzleHeart.vue";

test("MdiPuzzleHeart snapshot", () => {
  const wrapper = mount(MdiPuzzleHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
