
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertCircleCheck from "../../src/components/MdiAlertCircleCheck.vue";

test("MdiAlertCircleCheck snapshot", () => {
  const wrapper = mount(MdiAlertCircleCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
