
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimetable from "../../src/components/MdiTimetable.vue";

test("MdiTimetable snapshot", () => {
  const wrapper = mount(MdiTimetable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
