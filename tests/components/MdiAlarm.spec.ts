
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarm from "../../src/components/MdiAlarm.vue";

test("MdiAlarm snapshot", () => {
  const wrapper = mount(MdiAlarm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
