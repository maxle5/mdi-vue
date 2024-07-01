
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewSplitHorizontal from "../../src/components/MdiViewSplitHorizontal.vue";

test("MdiViewSplitHorizontal snapshot", () => {
  const wrapper = mount(MdiViewSplitHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
