
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleCheck from "../../src/components/MdiPuzzleCheck.vue";

test("MdiPuzzleCheck snapshot", () => {
  const wrapper = mount(MdiPuzzleCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
