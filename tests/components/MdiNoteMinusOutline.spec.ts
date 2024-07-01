
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteMinusOutline from "../../src/components/MdiNoteMinusOutline.vue";

test("MdiNoteMinusOutline snapshot", () => {
  const wrapper = mount(MdiNoteMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
