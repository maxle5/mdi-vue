
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPercent from "../../src/components/MdiPercent.vue";

test("MdiPercent snapshot", () => {
  const wrapper = mount(MdiPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
