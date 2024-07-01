
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteTextOutline from "../../src/components/MdiNoteTextOutline.vue";

test("MdiNoteTextOutline snapshot", () => {
  const wrapper = mount(MdiNoteTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
