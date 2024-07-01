
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmNote from "../../src/components/MdiAlarmNote.vue";

test("MdiAlarmNote snapshot", () => {
  const wrapper = mount(MdiAlarmNote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
