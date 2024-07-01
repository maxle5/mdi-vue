
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectInverse from "../../src/components/MdiSelectInverse.vue";

test("MdiSelectInverse snapshot", () => {
  const wrapper = mount(MdiSelectInverse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
