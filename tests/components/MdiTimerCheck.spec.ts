
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerCheck from "../../src/components/MdiTimerCheck.vue";

test("MdiTimerCheck snapshot", () => {
  const wrapper = mount(MdiTimerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
