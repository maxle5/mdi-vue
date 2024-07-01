
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonConfused from "../../src/components/MdiEmoticonConfused.vue";

test("MdiEmoticonConfused snapshot", () => {
  const wrapper = mount(MdiEmoticonConfused, {});
  expect(wrapper.html()).toMatchSnapshot();
});
