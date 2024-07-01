
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteEditOutline from "../../src/components/MdiNoteEditOutline.vue";

test("MdiNoteEditOutline snapshot", () => {
  const wrapper = mount(MdiNoteEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
