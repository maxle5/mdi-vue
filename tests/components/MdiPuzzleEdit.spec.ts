
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPuzzleEdit from "../../src/components/MdiPuzzleEdit.vue";

test("MdiPuzzleEdit snapshot", () => {
  const wrapper = mount(MdiPuzzleEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
