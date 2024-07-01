
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteOffOutline from "../../src/components/MdiNoteOffOutline.vue";

test("MdiNoteOffOutline snapshot", () => {
  const wrapper = mount(MdiNoteOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
