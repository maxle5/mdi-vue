
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookClockOutline from "../../src/components/MdiBookClockOutline.vue";

test("MdiBookClockOutline snapshot", () => {
  const wrapper = mount(MdiBookClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
