
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYinYang from "../../src/components/MdiYinYang.vue";

test("MdiYinYang snapshot", () => {
  const wrapper = mount(MdiYinYang, {});
  expect(wrapper.html()).toMatchSnapshot();
});
