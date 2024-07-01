
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChurch from "../../src/components/MdiChurch.vue";

test("MdiChurch snapshot", () => {
  const wrapper = mount(MdiChurch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
