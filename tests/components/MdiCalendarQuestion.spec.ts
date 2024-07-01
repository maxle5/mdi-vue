
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarQuestion from "../../src/components/MdiCalendarQuestion.vue";

test("MdiCalendarQuestion snapshot", () => {
  const wrapper = mount(MdiCalendarQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
