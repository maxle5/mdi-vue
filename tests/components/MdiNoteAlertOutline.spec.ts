
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteAlertOutline from "../../src/components/MdiNoteAlertOutline.vue";

test("MdiNoteAlertOutline snapshot", () => {
  const wrapper = mount(MdiNoteAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
