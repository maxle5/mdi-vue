
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonExcitedOutline from "../../src/components/MdiEmoticonExcitedOutline.vue";

test("MdiEmoticonExcitedOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonExcitedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
