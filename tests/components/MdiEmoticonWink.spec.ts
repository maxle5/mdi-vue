
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonWink from "../../src/components/MdiEmoticonWink.vue";

test("MdiEmoticonWink snapshot", () => {
  const wrapper = mount(MdiEmoticonWink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
