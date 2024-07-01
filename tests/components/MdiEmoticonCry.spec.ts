
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonCry from "../../src/components/MdiEmoticonCry.vue";

test("MdiEmoticonCry snapshot", () => {
  const wrapper = mount(MdiEmoticonCry, {});
  expect(wrapper.html()).toMatchSnapshot();
});
