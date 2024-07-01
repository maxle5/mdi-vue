
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteCheck from "../../src/components/MdiNoteCheck.vue";

test("MdiNoteCheck snapshot", () => {
  const wrapper = mount(MdiNoteCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
