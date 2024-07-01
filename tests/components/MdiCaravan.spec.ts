
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCaravan from "../../src/components/MdiCaravan.vue";

test("MdiCaravan snapshot", () => {
  const wrapper = mount(MdiCaravan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
