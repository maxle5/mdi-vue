
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonConfusedOutline from "../../src/components/MdiEmoticonConfusedOutline.vue";

test("MdiEmoticonConfusedOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonConfusedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
