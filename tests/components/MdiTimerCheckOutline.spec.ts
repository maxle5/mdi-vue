
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerCheckOutline from "../../src/components/MdiTimerCheckOutline.vue";

test("MdiTimerCheckOutline snapshot", () => {
  const wrapper = mount(MdiTimerCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
