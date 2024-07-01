
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileUndoOutline from "../../src/components/MdiFileUndoOutline.vue";

test("MdiFileUndoOutline snapshot", () => {
  const wrapper = mount(MdiFileUndoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
