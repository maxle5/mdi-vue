
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSoccer from "../../src/components/MdiSoccer.vue";

test("MdiSoccer snapshot", () => {
  const wrapper = mount(MdiSoccer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
