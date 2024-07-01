
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeClockOutline from "../../src/components/MdiHomeClockOutline.vue";

test("MdiHomeClockOutline snapshot", () => {
  const wrapper = mount(MdiHomeClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
