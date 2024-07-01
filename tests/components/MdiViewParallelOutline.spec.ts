
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewParallelOutline from "../../src/components/MdiViewParallelOutline.vue";

test("MdiViewParallelOutline snapshot", () => {
  const wrapper = mount(MdiViewParallelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
