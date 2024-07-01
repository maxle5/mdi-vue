
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleHeartOutline from "../../src/components/MdiPuzzleHeartOutline.vue";

test("MdiPuzzleHeartOutline snapshot", () => {
  const wrapper = mount(MdiPuzzleHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
