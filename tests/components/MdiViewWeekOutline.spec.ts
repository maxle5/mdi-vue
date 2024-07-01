
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewWeekOutline from "../../src/components/MdiViewWeekOutline.vue";

test("MdiViewWeekOutline snapshot", () => {
  const wrapper = mount(MdiViewWeekOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
