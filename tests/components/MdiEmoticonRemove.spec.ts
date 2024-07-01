
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonRemove from "../../src/components/MdiEmoticonRemove.vue";

test("MdiEmoticonRemove snapshot", () => {
  const wrapper = mount(MdiEmoticonRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
