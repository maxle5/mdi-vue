
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteText from "../../src/components/MdiNoteText.vue";

test("MdiNoteText snapshot", () => {
  const wrapper = mount(MdiNoteText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
