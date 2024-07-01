
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmNoteOff from "../../src/components/MdiAlarmNoteOff.vue";

test("MdiAlarmNoteOff snapshot", () => {
  const wrapper = mount(MdiAlarmNoteOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
