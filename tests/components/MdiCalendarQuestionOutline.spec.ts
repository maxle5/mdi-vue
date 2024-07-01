
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarQuestionOutline from "../../src/components/MdiCalendarQuestionOutline.vue";

test("MdiCalendarQuestionOutline snapshot", () => {
  const wrapper = mount(MdiCalendarQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
