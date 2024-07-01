
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonMinusOutline from "../../src/components/MdiEmoticonMinusOutline.vue";

test("MdiEmoticonMinusOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
