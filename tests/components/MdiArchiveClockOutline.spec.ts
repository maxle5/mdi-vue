
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveClockOutline from "../../src/components/MdiArchiveClockOutline.vue";

test("MdiArchiveClockOutline snapshot", () => {
  const wrapper = mount(MdiArchiveClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
