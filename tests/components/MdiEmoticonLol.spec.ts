
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonLol from "../../src/components/MdiEmoticonLol.vue";

test("MdiEmoticonLol snapshot", () => {
  const wrapper = mount(MdiEmoticonLol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
