
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonPlusOutline from "../../src/components/MdiEmoticonPlusOutline.vue";

test("MdiEmoticonPlusOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
