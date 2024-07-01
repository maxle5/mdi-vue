
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonDead from "../../src/components/MdiEmoticonDead.vue";

test("MdiEmoticonDead snapshot", () => {
  const wrapper = mount(MdiEmoticonDead, {});
  expect(wrapper.html()).toMatchSnapshot();
});
