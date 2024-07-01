
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteEdit from "../../src/components/MdiNoteEdit.vue";

test("MdiNoteEdit snapshot", () => {
  const wrapper = mount(MdiNoteEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
