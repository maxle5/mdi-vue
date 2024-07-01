
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonRemoveOutline from "../../src/components/MdiEmoticonRemoveOutline.vue";

test("MdiEmoticonRemoveOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
