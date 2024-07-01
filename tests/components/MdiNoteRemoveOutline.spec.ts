
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteRemoveOutline from "../../src/components/MdiNoteRemoveOutline.vue";

test("MdiNoteRemoveOutline snapshot", () => {
  const wrapper = mount(MdiNoteRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
