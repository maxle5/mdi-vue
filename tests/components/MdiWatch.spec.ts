
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatch from "../../src/components/MdiWatch.vue";

test("MdiWatch snapshot", () => {
  const wrapper = mount(MdiWatch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
