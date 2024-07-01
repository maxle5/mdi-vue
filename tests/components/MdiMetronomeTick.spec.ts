
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMetronomeTick from "../../src/components/MdiMetronomeTick.vue";

test("MdiMetronomeTick snapshot", () => {
  const wrapper = mount(MdiMetronomeTick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
