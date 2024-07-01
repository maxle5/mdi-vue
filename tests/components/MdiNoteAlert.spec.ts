
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteAlert from "../../src/components/MdiNoteAlert.vue";

test("MdiNoteAlert snapshot", () => {
  const wrapper = mount(MdiNoteAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
