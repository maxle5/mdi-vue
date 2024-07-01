
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTag from "../../src/components/MdiTag.vue";

test("MdiTag snapshot", () => {
  const wrapper = mount(MdiTag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
