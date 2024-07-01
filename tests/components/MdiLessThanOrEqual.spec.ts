
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLessThanOrEqual from "../../src/components/MdiLessThanOrEqual.vue";

test("MdiLessThanOrEqual snapshot", () => {
  const wrapper = mount(MdiLessThanOrEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
