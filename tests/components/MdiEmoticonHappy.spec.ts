
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonHappy from "../../src/components/MdiEmoticonHappy.vue";

test("MdiEmoticonHappy snapshot", () => {
  const wrapper = mount(MdiEmoticonHappy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
