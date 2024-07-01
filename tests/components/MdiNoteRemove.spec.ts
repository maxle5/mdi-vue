
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteRemove from "../../src/components/MdiNoteRemove.vue";

test("MdiNoteRemove snapshot", () => {
  const wrapper = mount(MdiNoteRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
