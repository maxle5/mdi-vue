
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSearchOutline from "../../src/components/MdiFileSearchOutline.vue";

test("MdiFileSearchOutline snapshot", () => {
  const wrapper = mount(MdiFileSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
