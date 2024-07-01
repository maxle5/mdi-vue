
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonKissOutline from "../../src/components/MdiEmoticonKissOutline.vue";

test("MdiEmoticonKissOutline snapshot", () => {
  const wrapper = mount(MdiEmoticonKissOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
