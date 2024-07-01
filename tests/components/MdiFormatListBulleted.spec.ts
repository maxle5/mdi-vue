
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListBulleted from "../../src/components/MdiFormatListBulleted.vue";

test("MdiFormatListBulleted snapshot", () => {
  const wrapper = mount(MdiFormatListBulleted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
