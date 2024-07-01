
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteOutline from "../../src/components/MdiNoteOutline.vue";

test("MdiNoteOutline snapshot", () => {
  const wrapper = mount(MdiNoteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
