
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteMultipleOutline from "../../src/components/MdiNoteMultipleOutline.vue";

test("MdiNoteMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNoteMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
