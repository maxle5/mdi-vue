
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteOff from "../../src/components/MdiNoteOff.vue";

test("MdiNoteOff snapshot", () => {
  const wrapper = mount(MdiNoteOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
