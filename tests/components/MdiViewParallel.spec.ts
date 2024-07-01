
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewParallel from "../../src/components/MdiViewParallel.vue";

test("MdiViewParallel snapshot", () => {
  const wrapper = mount(MdiViewParallel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
