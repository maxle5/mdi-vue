
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnfoldMoreHorizontal from "../../src/components/MdiUnfoldMoreHorizontal.vue";

test("MdiUnfoldMoreHorizontal snapshot", () => {
  const wrapper = mount(MdiUnfoldMoreHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
