
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleStar from "../../src/components/MdiPuzzleStar.vue";

test("MdiPuzzleStar snapshot", () => {
  const wrapper = mount(MdiPuzzleStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
