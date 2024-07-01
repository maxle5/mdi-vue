
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteSearchOutline from "../../src/components/MdiNoteSearchOutline.vue";

test("MdiNoteSearchOutline snapshot", () => {
  const wrapper = mount(MdiNoteSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
