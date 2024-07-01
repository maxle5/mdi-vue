
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonPoop from "../../src/components/MdiEmoticonPoop.vue";

test("MdiEmoticonPoop snapshot", () => {
  const wrapper = mount(MdiEmoticonPoop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
