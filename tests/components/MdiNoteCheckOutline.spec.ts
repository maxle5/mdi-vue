
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteCheckOutline from "../../src/components/MdiNoteCheckOutline.vue";

test("MdiNoteCheckOutline snapshot", () => {
  const wrapper = mount(MdiNoteCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
