
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendClockOutline from "../../src/components/MdiSendClockOutline.vue";

test("MdiSendClockOutline snapshot", () => {
  const wrapper = mount(MdiSendClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
