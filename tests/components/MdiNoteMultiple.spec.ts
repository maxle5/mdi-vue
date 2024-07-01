
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteMultiple from "../../src/components/MdiNoteMultiple.vue";

test("MdiNoteMultiple snapshot", () => {
  const wrapper = mount(MdiNoteMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
