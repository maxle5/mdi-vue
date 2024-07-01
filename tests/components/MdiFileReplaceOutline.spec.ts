
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileReplaceOutline from "../../src/components/MdiFileReplaceOutline.vue";

test("MdiFileReplaceOutline snapshot", () => {
  const wrapper = mount(MdiFileReplaceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
