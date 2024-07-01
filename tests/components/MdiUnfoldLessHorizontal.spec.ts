
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnfoldLessHorizontal from "../../src/components/MdiUnfoldLessHorizontal.vue";

test("MdiUnfoldLessHorizontal snapshot", () => {
  const wrapper = mount(MdiUnfoldLessHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
