
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePercent from "../../src/components/MdiFilePercent.vue";

test("MdiFilePercent snapshot", () => {
  const wrapper = mount(MdiFilePercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
