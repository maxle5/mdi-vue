
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmLight from "../../src/components/MdiAlarmLight.vue";

test("MdiAlarmLight snapshot", () => {
  const wrapper = mount(MdiAlarmLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
