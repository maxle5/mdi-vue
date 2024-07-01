
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonPoopOutline from "../../src/components/MdiEmoticonPoopOutline.vue";

test("MdiEmoticonPoopOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonPoopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
