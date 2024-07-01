
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonMinus from "../../src/components/MdiEmoticonMinus.vue";

test("MdiEmoticonMinus snapshot", () => {
  const wrapper = mount(MdiEmoticonMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
