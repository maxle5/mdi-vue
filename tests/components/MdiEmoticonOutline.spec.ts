
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonOutline from "../../src/components/MdiEmoticonOutline.vue";

test("MdiEmoticonOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
